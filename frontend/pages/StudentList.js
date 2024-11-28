import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import EvaluationForm from "./EvaluationForm";

function StudentList() {
    const [teamMembers, setTeamMembers] = useState([]); // Team members except the logged-in user
    const [selectedMember, setSelectedMember] = useState(null); // Selected team member for evaluation
    const [teamId, setTeamId] = useState(null);
    const router = useRouter();
    const courseId = router.query.courseId; // Get courseId from the URL

    // Assume the logged-in user's student_id is 1 (this can be dynamically set later)
    const userID = Number(localStorage.getItem("user_ID"));
    console.log("userrrrrrrrr:", userID);

    useEffect(() => {
        if (!courseId) return;

        // Fetch all classroom members and team data
        axios
            .get(`http://localhost:8000/get_teams/${courseId}`)
            .then(async (teamResponse) => {
                const teams = teamResponse.data;
                console.log("Fetched teams:", teams);

                // Fetch all classroom members
                const classroomResponse = await axios.get(
                    `http://localhost:8000/classroom_members/${courseId}`
                );
                const classroomMembers = classroomResponse.data.members;
                console.log("Classroom Members:", classroomMembers);
                console.log("useruseruser:", userID);
                // Find the team of the logged-in user
                const userTeam = teams.find((team) =>
                    team.student_ids.includes(userID)
                );
                if (!userTeam) {
                    console.error("User is not part of any team.");
                    return;
                }

                setTeamId(userTeam.team_id);
                console.log("team id:", teamId);

                // Map team member IDs to their names, excluding the logged-in user
                const otherMembers = userTeam.student_ids
                    .filter((id) => id !== userID) // Exclude the current user
                    .map((id) => {
                        const member = classroomMembers.find((member) => member.id === id);
                        return member
                            ? { id: member.id, name: member.name }
                            : { id, name: `Student ID: ${id}` }; // Fallback to ID if name is unavailable
                    });

                setTeamMembers(otherMembers); // Save the team members
            })
            .catch((error) => {
                console.error("Error fetching classroom or team data:", error);
            });
    }, [courseId]);

    useEffect(() => {
        if (teamId) {
            console.log("Updated team id:", teamId);
        }
    }, [teamId]);

    console.log("sel member:", selectedMember);
    console.log("class id:", courseId);
    console.log("Team id:", teamId);
    console.log("Evaluator:", userID);

    return (
        <div className="container-student">
            <h1 className="h1">Your Team Members</h1>
            <div>
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="student-item"
                        style={{
                            background: "rgba(255, 255, 255, 0.8)",
                            padding: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <div>
                            {member.name}
                            <button
                                style={{
                                    marginLeft: "10px",
                                    padding: "5px 10px",
                                    backgroundColor: "#4CAF50",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                                onClick={() => setSelectedMember(member)}
                            >
                                Rate
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedMember && (
                <EvaluationForm
                    peer={selectedMember}
                    classId={courseId} // From useRouter
                    teamId={teamId} // Retrieved from backend
                    evaluatorId={userID} // Fetched from localStorage or API
                    onClose={() => setSelectedMember(null)} // To close the form after evaluation
                />
            )}
        </div>
    );
}

export default StudentList;
