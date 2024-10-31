
# A SOEN341 Project - Peer Evaluation Website<br/>

## Description<br/>

The **Peer Evaluation Website** is a comprehensive system designed to facilitate peer assessments within university team projects. This platform enables students to provide constructive feedback on their teammates' performance and contributions, fostering accountability and encouraging personal growth. This system focuses on four critical dimensions of teamwork:<br/>

1. **Cooperation**<br/>
2. **Conceptual Contribution**<br/>
3. **Practical Contribution**<br/>
4. **Work Ethic**<br/>

Through this system, both **students** and **instructors** gain insights into team dynamics, enabling a well-rounded view of individual efforts and contributions.<br/>

## Primary Users<br/>
The platform serves two main user types:<br/>
- **Students**: Engage in the peer evaluation process to provide honest feedback about teammates.<br/>
- **Instructors**: Gain a detailed overview of each student's performance through aggregated assessment data, facilitating more informed evaluations.<br/>

---

## System Features<br/>

### 1. Student Assessment<br/>
- **Peer Evaluation**:<br/>
   Students log in to evaluate their teammates at the end of a project or at predefined milestones, using an anonymous system that encourages candid feedback.<br/>
- **7-Point Rating Scale**:<br/>
   Each student rates their peers on a scale of 1 to 7 across the four evaluation dimensions, with optional comment sections for more detailed insights.<br/>

### 2. Automated Score Sharing and Anonymous Peer Feedback<br/>
- **Aggregated Feedback**:<br/>
   After submission, scores are automatically aggregated, providing instructors with an overall performance view for each student.<br/>
- **Anonymous Feedback for Improvement**:<br/>
   Students receive anonymous feedback from their peers, fostering an environment for personal development and accountability.<br/>

### 3. Instructor Dashboard<br/>
- **Team Management**:<br/>
   Instructors have a dedicated dashboard for creating teams, tracking progress, and managing evaluations.<br/>
- **Detailed Performance Reports**:<br/>
   Instructors can access detailed assessment reports by team and by individual students. The system also provides a summary of results.<br/>
- **Export Functionality**:<br/>
   Evaluation results can be exported as **CSV** files, allowing instructors to further analyze data outside of the platform.<br/>

---

## Installation<br/>

### Prerequisites<br/>

Before you begin, ensure that you have installed:<br/>
- **Node.js** (version 14 or higher recommended)<br/>
- **npm** (Node Package Manager)<br/>

### Installation Guide<br/>

To set up the Peer Evaluation Website on your local machine, follow these steps:<br/>

1. **Clone the repository**<br/>
   Open your terminal or IDE and enter the following command to clone the project repository:<br/>
   ```bash
   git clone https://github.com/SimonKallassi/15-SOEN341_Project_F24.git
Navigate to the project directory<br/> Change your working directory to the project’s folder:<br/>


cd 15-SOEN341_Project_F24
Install project dependencies<br/> Install all necessary packages using npm:<br/>


npm install
Configure the environment (optional)<br/> If there are any environment variables (e.g., database connections, API keys), create a .env file in the project root and populate it with the required details. Make sure to check the documentation or contact the team for specific configurations.<br/>

Start the development server<br/> Launch the server by running:<br/>


npm run dev
This command will start the development environment, and you can view the application by opening http://localhost:3000 in your browser.<br/>

Usage<br/>
Log In / Sign Up<br/> New users can sign up, while existing users can log in using their credentials.<br/>

Joining Teams<br/> Students are added to their respective teams by instructors, who assign them based on project requirements.<br/>

Submitting Peer Evaluations<br/> After each project or milestone, students fill out evaluations for their teammates, rating them on the specified criteria.<br/>

Viewing Feedback<br/> After evaluations are submitted and processed, students can review anonymous feedback, and instructors receive comprehensive performance summaries.<br/>

Troubleshooting<br/>
Dependencies Not Installing:<br/> If npm install fails, ensure your Node.js and npm versions are up-to-date. Run:<br/>


node -v
npm -v
Then retry the installation process.<br/>

Server Not Starting:<br/> If the server does not start, ensure there are no port conflicts or missing environment variables. Double-check your .env file, if applicable.<br/>

Team Members<br/>
Najmuddin Nazary - 40211776<br/>
Simon Kallassi - 40121987<br/>
Youssef Marzouk - 40263812<br/>
Paoleno Nikyema - 40127111<br/>
Edward Villamaria - 40172621<br/>
Bushr Eiddo - 40099316<br/>

This README provides a comprehensive overview, including a detailed description, installation steps, and usage instructions. For any issues or contributions, please reach out to the project team.
