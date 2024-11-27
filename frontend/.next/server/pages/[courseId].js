/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[courseId]";
exports.ids = ["pages/[courseId]"];
exports.modules = {

/***/ "./pages/[courseId].js":
/*!*****************************!*\
  !*** ./pages/[courseId].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");Object.defineProperty(exports, \"__esModule\", ({value:true}));exports[\"default\"]=CoursePage;var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\"));var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\"));var _router=__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");var _react=__webpack_require__(/*! react */ \"react\");var _axios=_interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));var _jsxRuntime=__webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");var _jsxFileName=\"C:\\\\Users\\\\User\\\\Desktop\\\\new\\\\15-SOEN341_Project_F24\\\\frontend\\\\pages\\\\[courseId].js\";function CoursePage(){var router=(0,_router.useRouter)();var courseId=router.query.courseId;var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2.default)(_useState,2),Component=_useState2[0],setComponent=_useState2[1];var _useState3=(0,_react.useState)(true),_useState4=(0,_slicedToArray2.default)(_useState3,2),loading=_useState4[0],setLoading=_useState4[1];var _useState5=(0,_react.useState)([]),_useState6=(0,_slicedToArray2.default)(_useState5,2),groupMembers=_useState6[0],setGroupMembers=_useState6[1];var _useState7=(0,_react.useState)(null),_useState8=(0,_slicedToArray2.default)(_useState7,2),error=_useState8[0],setError=_useState8[1];(0,_react.useEffect)(function(){var loadComponent=function(){var _ref=(0,_asyncToGenerator2.default)(function*(){try{var role=localStorage.getItem(\"user_role\");console.log(\"Retrieved role from localStorage:\",role);if(!role){router.push('/login');return;}if(role===\"student\"){var StudentList=(yield __webpack_require__.e(/*! import() */ \"pages_StudentList_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./StudentList */ \"./pages/StudentList.js\"))).default;setComponent(function(){return StudentList;});}else if(role===\"teacher\"){var TeacherCourse=(yield __webpack_require__.e(/*! import() */ \"pages_TeacherCourse_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./TeacherCourse */ \"./pages/TeacherCourse.js\"))).default;setComponent(function(){return TeacherCourse;});}else{console.error(\"Invalid role detected\");router.push('/error');}}catch(err){console.error(\"Error loading component:\",err);setError(\"Error loading the component. Please try again.\");}finally{setLoading(false);}});return function loadComponent(){return _ref.apply(this,arguments);};}();loadComponent();},[router]);(0,_react.useEffect)(function(){function fetchGroupMembers(){return _fetchGroupMembers.apply(this,arguments);}function _fetchGroupMembers(){_fetchGroupMembers=(0,_asyncToGenerator2.default)(function*(){try{var userEmail=localStorage.getItem(\"user_email\");if(!userEmail){setError(\"User email not found. Please log in.\");return;}if(!courseId)return;var response=yield _axios.default.get(`http://127.0.0.1:8000/classroom_members/${courseId}`,{params:{user_email:userEmail}});console.log(\"Fetched group members:\",response.data.members);setGroupMembers(response.data.members||[]);setError(null);}catch(err){console.error(\"Error fetching group members:\",err);setError(\"Error fetching group members. Please try again.\");}});return _fetchGroupMembers.apply(this,arguments);}if(courseId){fetchGroupMembers();}},[courseId]);if(loading){return(0,_jsxRuntime.jsx)(\"div\",{children:\"Loading the course page...\"});}if(error){return(0,_jsxRuntime.jsxs)(\"div\",{children:[\"Error: \",error]});}return(0,_jsxRuntime.jsx)(\"div\",{children:Component?(0,_jsxRuntime.jsx)(Component,{students:groupMembers,courseID:courseId}):(0,_jsxRuntime.jsx)(\"div\",{children:\"Error loading component. Please refresh the page or try again later.\"})});}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bY291cnNlSWRdLmpzIiwibWFwcGluZ3MiOiJxbEJBQUEsSUFBQUEsT0FBQSxDQUFBQyxtQkFBQSxxREFDQSxJQUFBQyxNQUFBLENBQUFELG1CQUFBLHVCQUNBLElBQUFFLE1BQUEsQ0FBQUMsc0JBQUEsQ0FBQUgsbUJBQUEsd0JBQTBCLElBQUFJLFdBQUEsQ0FBQUosbUJBQUEsbURBQUFLLFlBQUEseUZBRVgsUUFBUyxDQUFBQyxVQUFVQSxDQUFBLENBQUcsQ0FDakMsR0FBTSxDQUFBQyxNQUFNLENBQUcsR0FBQUMsaUJBQVMsRUFBQyxDQUFDLENBQzFCLEdBQVEsQ0FBQUMsUUFBUSxDQUFLRixNQUFNLENBQUNHLEtBQUssQ0FBekJELFFBQVEsQ0FDaEIsSUFBQUUsU0FBQSxDQUFrQyxHQUFBQyxlQUFRLEVBQUMsSUFBSSxDQUFDLENBQUFDLFVBQUEsSUFBQUMsZUFBQSxDQUFBQyxPQUFBLEVBQUFKLFNBQUEsSUFBekNLLFNBQVMsQ0FBQUgsVUFBQSxJQUFFSSxZQUFZLENBQUFKLFVBQUEsSUFDOUIsSUFBQUssVUFBQSxDQUE4QixHQUFBTixlQUFRLEVBQUMsSUFBSSxDQUFDLENBQUFPLFVBQUEsSUFBQUwsZUFBQSxDQUFBQyxPQUFBLEVBQUFHLFVBQUEsSUFBckNFLE9BQU8sQ0FBQUQsVUFBQSxJQUFFRSxVQUFVLENBQUFGLFVBQUEsSUFDMUIsSUFBQUcsVUFBQSxDQUF3QyxHQUFBVixlQUFRLEVBQUMsRUFBRSxDQUFDLENBQUFXLFVBQUEsSUFBQVQsZUFBQSxDQUFBQyxPQUFBLEVBQUFPLFVBQUEsSUFBN0NFLFlBQVksQ0FBQUQsVUFBQSxJQUFFRSxlQUFlLENBQUFGLFVBQUEsSUFDcEMsSUFBQUcsVUFBQSxDQUEwQixHQUFBZCxlQUFRLEVBQUMsSUFBSSxDQUFDLENBQUFlLFVBQUEsSUFBQWIsZUFBQSxDQUFBQyxPQUFBLEVBQUFXLFVBQUEsSUFBakNFLEtBQUssQ0FBQUQsVUFBQSxJQUFFRSxRQUFRLENBQUFGLFVBQUEsSUFHdEIsR0FBQUcsZ0JBQVMsRUFBQyxVQUFNLENBQ1osR0FBTSxDQUFBQyxhQUFhLGdCQUFBQyxJQUFBLElBQUFDLGtCQUFBLENBQUFsQixPQUFBLEVBQUcsV0FBWSxDQUM5QixHQUFJLENBQ0EsR0FBTSxDQUFBbUIsSUFBSSxDQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1DQUFtQyxDQUFFSixJQUFJLENBQUMsQ0FFdEQsR0FBSSxDQUFDQSxJQUFJLENBQUUsQ0FFUDNCLE1BQU0sQ0FBQ2dDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDckIsT0FDSixDQUVBLEdBQUlMLElBQUksR0FBSyxTQUFTLENBQUUsQ0FDcEIsR0FBTSxDQUFBTSxXQUFXLENBQUcsTUFBTyxpS0FBdUIsRUFBRXpCLE9BQU8sQ0FDM0RFLFlBQVksQ0FBQyxpQkFBTSxDQUFBdUIsV0FBVyxHQUFDLENBQ25DLENBQUMsSUFBTSxJQUFJTixJQUFJLEdBQUssU0FBUyxDQUFFLENBQzNCLEdBQU0sQ0FBQU8sYUFBYSxDQUFHLE1BQU8sdUtBQXlCLEVBQUUxQixPQUFPLENBQy9ERSxZQUFZLENBQUMsaUJBQU0sQ0FBQXdCLGFBQWEsR0FBQyxDQUNyQyxDQUFDLElBQU0sQ0FDSEosT0FBTyxDQUFDVCxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FDdENyQixNQUFNLENBQUNnQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQ0osQ0FBRSxNQUFPRyxHQUFHLENBQUUsQ0FDVkwsT0FBTyxDQUFDVCxLQUFLLENBQUMsMEJBQTBCLENBQUVjLEdBQUcsQ0FBQyxDQUM5Q2IsUUFBUSxDQUFDLGdEQUFnRCxDQUFDLENBQzlELENBQUMsT0FBUyxDQUNOUixVQUFVLENBQUMsS0FBSyxDQUFDLENBQ3JCLENBQ0osQ0FBQyxpQkEzQkssQ0FBQVUsYUFBYUEsQ0FBQSxTQUFBQyxJQUFBLENBQUFXLEtBQUEsTUFBQUMsU0FBQSxPQTJCbEIsQ0FFRGIsYUFBYSxDQUFDLENBQUMsQ0FDbkIsQ0FBQyxDQUFFLENBQUN4QixNQUFNLENBQUMsQ0FBQyxDQUdaLEdBQUF1QixnQkFBUyxFQUFDLFVBQU0sU0FDRyxDQUFBZSxpQkFBaUJBLENBQUEsU0FBQUMsa0JBQUEsQ0FBQUgsS0FBQSxNQUFBQyxTQUFBLFlBQUFFLG1CQUFBLEVBQUFBLGtCQUFBLElBQUFiLGtCQUFBLENBQUFsQixPQUFBLEVBQWhDLFdBQW1DLENBQy9CLEdBQUksQ0FDQSxHQUFNLENBQUFnQyxTQUFTLENBQUdaLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUNwRCxHQUFJLENBQUNXLFNBQVMsQ0FBRSxDQUNabEIsUUFBUSxDQUFDLHNDQUFzQyxDQUFDLENBQ2hELE9BQ0osQ0FFQSxHQUFJLENBQUNwQixRQUFRLENBQUUsT0FFZixHQUFNLENBQUF1QyxRQUFRLE1BQVMsQ0FBQUMsY0FBSyxDQUFDQyxHQUFHLENBQUUsMkNBQTBDekMsUUFBUyxFQUFDLENBQUUsQ0FDcEYwQyxNQUFNLENBQUUsQ0FBRUMsVUFBVSxDQUFFTCxTQUFVLENBQ3BDLENBQUMsQ0FBQyxDQUVGVixPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBRVUsUUFBUSxDQUFDSyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUM1RDdCLGVBQWUsQ0FBQ3VCLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxPQUFPLEVBQUksRUFBRSxDQUFDLENBQzVDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUNsQixDQUFFLE1BQU9hLEdBQUcsQ0FBRSxDQUNWTCxPQUFPLENBQUNULEtBQUssQ0FBQywrQkFBK0IsQ0FBRWMsR0FBRyxDQUFDLENBQ25EYixRQUFRLENBQUMsaURBQWlELENBQUMsQ0FDL0QsQ0FDSixDQUFDLFNBQUFpQixrQkFBQSxDQUFBSCxLQUFBLE1BQUFDLFNBQUEsR0FFRCxHQUFJbkMsUUFBUSxDQUFFLENBQ1ZvQyxpQkFBaUIsQ0FBQyxDQUFDLENBQ3ZCLENBQ0osQ0FBQyxDQUFFLENBQUNwQyxRQUFRLENBQUMsQ0FBQyxDQUdkLEdBQUlXLE9BQU8sQ0FBRSxDQUNULE1BQU8sR0FBQWhCLFdBQUEsQ0FBQW1ELEdBQUEsU0FBQUMsUUFBQSxDQUFLLDRCQUEwQixDQUFLLENBQUMsQ0FDaEQsQ0FHQSxHQUFJNUIsS0FBSyxDQUFFLENBQ1AsTUFBTyxHQUFBeEIsV0FBQSxDQUFBcUQsSUFBQSxTQUFBRCxRQUFBLEVBQUssU0FBTyxDQUFDNUIsS0FBSyxFQUFNLENBQUMsQ0FDcEMsQ0FHQSxNQUNJLEdBQUF4QixXQUFBLENBQUFtRCxHQUFBLFNBQUFDLFFBQUEsQ0FDS3hDLFNBQVMsQ0FDTixHQUFBWixXQUFBLENBQUFtRCxHQUFBLEVBQUN2QyxTQUFTLEVBQUMwQyxRQUFRLENBQUVsQyxZQUFhLENBQUNtQyxRQUFRLENBQUVsRCxRQUFTLENBQUUsQ0FBQyxDQUV6RCxHQUFBTCxXQUFBLENBQUFtRCxHQUFBLFNBQUFDLFFBQUEsQ0FBSyxzRUFBb0UsQ0FBSyxDQUNqRixDQUNBLENBQUMsQ0FFZCIsInNvdXJjZXMiOlsid2VicGFjazovL1BlZXJFdmFsdWF0b3IvLi9wYWdlcy9bY291cnNlSWRdLmpzPzQyY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlUGFnZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBjb3Vyc2VJZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBHZXQgY291cnNlSWQgZnJvbSB0aGUgVVJMXHJcbiAgICBjb25zdCBbQ29tcG9uZW50LCBzZXRDb21wb25lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtncm91cE1lbWJlcnMsIHNldEdyb3VwTWVtYmVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8vIExvYWQgdGhlIGNvcnJlY3QgY29tcG9uZW50IGJhc2VkIG9uIHRoZSB1c2VyJ3Mgcm9sZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBsb2FkQ29tcG9uZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9yb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyaWV2ZWQgcm9sZSBmcm9tIGxvY2FsU3RvcmFnZTpcIiwgcm9sZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFyb2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gbG9naW4gcGFnZSBpZiByb2xlIGlzIG5vdCBmb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJvbGUgPT09IFwic3R1ZGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgU3R1ZGVudExpc3QgPSAoYXdhaXQgaW1wb3J0KCcuL1N0dWRlbnRMaXN0JykpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29tcG9uZW50KCgpID0+IFN0dWRlbnRMaXN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm9sZSA9PT0gXCJ0ZWFjaGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBUZWFjaGVyQ291cnNlID0gKGF3YWl0IGltcG9ydCgnLi9UZWFjaGVyQ291cnNlJykpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29tcG9uZW50KCgpID0+IFRlYWNoZXJDb3Vyc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCByb2xlIGRldGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZXJyb3InKTsgLy8gUmVkaXJlY3QgdG8gYW4gZXJyb3IgcGFnZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGNvbXBvbmVudDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKFwiRXJyb3IgbG9hZGluZyB0aGUgY29tcG9uZW50LiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbG9hZENvbXBvbmVudCgpO1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICAgIC8vIEZldGNoIGdyb3VwIG1lbWJlcnMgd2hlbiB0aGUgY291cnNlIElEIGNoYW5nZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hHcm91cE1lbWJlcnMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZW1haWxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXJFbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKFwiVXNlciBlbWFpbCBub3QgZm91bmQuIFBsZWFzZSBsb2cgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvdXJzZUlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jbGFzc3Jvb21fbWVtYmVycy8ke2NvdXJzZUlkfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgdXNlcl9lbWFpbDogdXNlckVtYWlsIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgZ3JvdXAgbWVtYmVyczpcIiwgcmVzcG9uc2UuZGF0YS5tZW1iZXJzKTtcclxuICAgICAgICAgICAgICAgIHNldEdyb3VwTWVtYmVycyhyZXNwb25zZS5kYXRhLm1lbWJlcnMgfHwgW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IobnVsbCk7IC8vIENsZWFyIHByZXZpb3VzIGVycm9yc1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBncm91cCBtZW1iZXJzOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoXCJFcnJvciBmZXRjaGluZyBncm91cCBtZW1iZXJzLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdXJzZUlkKSB7XHJcbiAgICAgICAgICAgIGZldGNoR3JvdXBNZW1iZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvdXJzZUlkXSk7XHJcblxyXG4gICAgLy8gRGlzcGxheSBsb2FkaW5nIG1lc3NhZ2Ugd2hpbGUgdGhlIGNvbXBvbmVudCBpcyBiZWluZyBsb2FkZWRcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZyB0aGUgY291cnNlIHBhZ2UuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlzcGxheSBlcnJvciBtZXNzYWdlIGlmIGFuIGVycm9yIGhhcyBvY2N1cnJlZFxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVuZGVyIHRoZSBpbXBvcnRlZCBjb21wb25lbnQgd2l0aCB0aGUgcmVxdWlyZWQgcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge0NvbXBvbmVudCA/IChcclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgc3R1ZGVudHM9e2dyb3VwTWVtYmVyc30gY291cnNlSUQ9e2NvdXJzZUlkfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5FcnJvciBsb2FkaW5nIGNvbXBvbmVudC4gUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2Ugb3IgdHJ5IGFnYWluIGxhdGVyLjwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiX3JvdXRlciIsInJlcXVpcmUiLCJfcmVhY3QiLCJfYXhpb3MiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2pzeFJ1bnRpbWUiLCJfanN4RmlsZU5hbWUiLCJDb3Vyc2VQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY291cnNlSWQiLCJxdWVyeSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5MiIsImRlZmF1bHQiLCJDb21wb25lbnQiLCJzZXRDb21wb25lbnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJncm91cE1lbWJlcnMiLCJzZXRHcm91cE1lbWJlcnMiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJsb2FkQ29tcG9uZW50IiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yMiIsInJvbGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJTdHVkZW50TGlzdCIsIlRlYWNoZXJDb3Vyc2UiLCJlcnIiLCJhcHBseSIsImFyZ3VtZW50cyIsImZldGNoR3JvdXBNZW1iZXJzIiwiX2ZldGNoR3JvdXBNZW1iZXJzIiwidXNlckVtYWlsIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsInBhcmFtcyIsInVzZXJfZW1haWwiLCJkYXRhIiwibWVtYmVycyIsImpzeCIsImNoaWxkcmVuIiwianN4cyIsInN0dWRlbnRzIiwiY291cnNlSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[courseId].js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");Object.defineProperty(exports, \"__esModule\", ({value:true}));exports[\"default\"]=void 0;__webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");var _link=_interopRequireDefault(__webpack_require__(/*! next/link */ \"./node_modules/next/link.js\"));__webpack_require__(/*! ../styles/Home.css */ \"./styles/Home.css\");__webpack_require__(/*! ../styles/Login.css */ \"./styles/Login.css\");__webpack_require__(/*! ../styles/Dashboard.css */ \"./styles/Dashboard.css\");__webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");var _jsxRuntime=__webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");var _this=this,_jsxFileName=\"C:\\\\Users\\\\User\\\\Desktop\\\\new\\\\15-SOEN341_Project_F24\\\\frontend\\\\pages\\\\_app.js\";var Header=function Header(){return(0,_jsxRuntime.jsx)(\"header\",{style:{padding:'10px',backgroundColor:'#333',color:'#fff',fontWeight:'bold'},children:(0,_jsxRuntime.jsx)(\"nav\",{children:(0,_jsxRuntime.jsxs)(\"ul\",{style:{listStyle:'none',display:'flex',gap:'20px',alignItems:'center'},children:[(0,_jsxRuntime.jsx)(\"li\",{children:(0,_jsxRuntime.jsx)(_link.default,{href:\"/\",style:{color:'#fff',textDecoration:'none',fontSize:'40px',marginRight:'20px'},children:\"img\"})}),(0,_jsxRuntime.jsx)(\"li\",{children:(0,_jsxRuntime.jsx)(_link.default,{href:\"/\",style:{color:'#fff',textDecoration:'none'},children:\"Home\"})}),(0,_jsxRuntime.jsx)(\"li\",{children:(0,_jsxRuntime.jsx)(_link.default,{href:\"/Login\",style:{color:'#fff',textDecoration:'none'},children:\"Login\"})}),(0,_jsxRuntime.jsx)(\"li\",{children:(0,_jsxRuntime.jsx)(_link.default,{href:\"/SignUp\",style:{color:'#fff',textDecoration:'none'},children:\"Sign Up\"})}),(0,_jsxRuntime.jsx)(\"li\",{children:(0,_jsxRuntime.jsx)(_link.default,{href:\"/Dashboard\",style:{color:'#fff',textDecoration:'none'},children:\"Dashboard\"})})]})})});};function MyApp(_ref){var Component=_ref.Component,pageProps=_ref.pageProps;return(0,_jsxRuntime.jsxs)(\"div\",{children:[(0,_jsxRuntime.jsx)(Header,{}),\" \",(0,_jsxRuntime.jsx)(\"main\",{children:(0,_jsxRuntime.jsx)(Component,Object.assign({},pageProps))})]});}var _default=exports[\"default\"]=MyApp;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI0UEFDQUEsbUJBQUEsc0RBQ0EsSUFBQUMsS0FBQSxDQUFBQyxzQkFBQSxDQUFBRixtQkFBQSxrREFDQUEsbUJBQUEsZ0RBQ0FBLG1CQUFBLGtEQUNBQSxtQkFBQSwwREFDQUEsbUJBQUEsb0RBQThCLElBQUFHLFdBQUEsQ0FBQUgsbUJBQUEsbURBQUFJLEtBQUEsTUFBQUMsWUFBQSxtRkFJOUIsR0FBTSxDQUFBQyxNQUFNLENBQUcsUUFBVCxDQUFBQSxNQUFNQSxDQUFBLENBQVMsQ0FDakIsTUFFSSxHQUFBSCxXQUFBLENBQUFJLEdBQUEsWUFBUUMsS0FBSyxDQUFFLENBQUVDLE9BQU8sQ0FBRSxNQUFNLENBQUVDLGVBQWUsQ0FBRSxNQUFNLENBQUVDLEtBQUssQ0FBRSxNQUFNLENBQUVDLFVBQVUsQ0FBQyxNQUFNLENBQUUsQ0FBQUMsUUFBQSxDQUN6RixHQUFBVixXQUFBLENBQUFJLEdBQUEsU0FBQU0sUUFBQSxDQUVJLEdBQUFWLFdBQUEsQ0FBQVcsSUFBQSxRQUFJTixLQUFLLENBQUUsQ0FBRU8sU0FBUyxDQUFFLE1BQU0sQ0FBRUMsT0FBTyxDQUFFLE1BQU0sQ0FBRUMsR0FBRyxDQUFFLE1BQU0sQ0FBRUMsVUFBVSxDQUFFLFFBQVMsQ0FBRSxDQUFBTCxRQUFBLEVBQ2pGLEdBQUFWLFdBQUEsQ0FBQUksR0FBQSxRQUFBTSxRQUFBLENBQ0ksR0FBQVYsV0FBQSxDQUFBSSxHQUFBLEVBQUNOLEtBQUEsQ0FBQWtCLE9BQUksRUFBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQ1osS0FBSyxDQUFFLENBQUVHLEtBQUssQ0FBRSxNQUFNLENBQUVVLGNBQWMsQ0FBRSxNQUFNLENBQUVDLFFBQVEsQ0FBQyxNQUFNLENBQUNDLFdBQVcsQ0FBQyxNQUFPLENBQUUsQ0FBQVYsUUFBQSxDQUFDLEtBRXJHLENBQU0sQ0FBQyxDQUNQLENBQUMsQ0FDTCxHQUFBVixXQUFBLENBQUFJLEdBQUEsUUFBQU0sUUFBQSxDQUNJLEdBQUFWLFdBQUEsQ0FBQUksR0FBQSxFQUFDTixLQUFBLENBQUFrQixPQUFJLEVBQUNDLElBQUksQ0FBQyxHQUFHLENBQUNaLEtBQUssQ0FBRSxDQUFFRyxLQUFLLENBQUUsTUFBTSxDQUFFVSxjQUFjLENBQUUsTUFBTyxDQUFFLENBQUFSLFFBQUEsQ0FBQyxNQUVqRSxDQUFNLENBQUMsQ0FDUCxDQUFDLENBQ0wsR0FBQVYsV0FBQSxDQUFBSSxHQUFBLFFBQUFNLFFBQUEsQ0FDSSxHQUFBVixXQUFBLENBQUFJLEdBQUEsRUFBQ04sS0FBQSxDQUFBa0IsT0FBSSxFQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDWixLQUFLLENBQUUsQ0FBRUcsS0FBSyxDQUFFLE1BQU0sQ0FBRVUsY0FBYyxDQUFFLE1BQU8sQ0FBRSxDQUFBUixRQUFBLENBQUMsT0FFdEUsQ0FBTSxDQUFDLENBQ1AsQ0FBQyxDQUNMLEdBQUFWLFdBQUEsQ0FBQUksR0FBQSxRQUFBTSxRQUFBLENBQ0ksR0FBQVYsV0FBQSxDQUFBSSxHQUFBLEVBQUNOLEtBQUEsQ0FBQWtCLE9BQUksRUFBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQ1osS0FBSyxDQUFFLENBQUVHLEtBQUssQ0FBRSxNQUFNLENBQUVVLGNBQWMsQ0FBRSxNQUFPLENBQUUsQ0FBQVIsUUFBQSxDQUFDLFNBRXZFLENBQU0sQ0FBQyxDQUNQLENBQUMsQ0FDTCxHQUFBVixXQUFBLENBQUFJLEdBQUEsUUFBQU0sUUFBQSxDQUNJLEdBQUFWLFdBQUEsQ0FBQUksR0FBQSxFQUFDTixLQUFBLENBQUFrQixPQUFJLEVBQUNDLElBQUksQ0FBQyxZQUFZLENBQUNaLEtBQUssQ0FBRSxDQUFFRyxLQUFLLENBQUUsTUFBTSxDQUFFVSxjQUFjLENBQUUsTUFBTyxDQUFFLENBQUFSLFFBQUEsQ0FBQyxXQUUxRSxDQUFNLENBQUMsQ0FDUCxDQUFDLEVBQ0wsQ0FBQyxDQUNKLENBQUMsQ0FDRixDQUFDLENBRWpCLENBQUMsQ0FHRCxRQUFTLENBQUFXLEtBQUtBLENBQUFDLElBQUEsQ0FBMkIsSUFBeEIsQ0FBQUMsU0FBUyxDQUFBRCxJQUFBLENBQVRDLFNBQVMsQ0FBRUMsU0FBUyxDQUFBRixJQUFBLENBQVRFLFNBQVMsQ0FDakMsTUFDSSxHQUFBeEIsV0FBQSxDQUFBVyxJQUFBLFNBQUFELFFBQUEsRUFDSSxHQUFBVixXQUFBLENBQUFJLEdBQUEsRUFBQ0QsTUFBTSxHQUFFLENBQUMsSUFBQyxDQUNYLEdBQUFILFdBQUEsQ0FBQUksR0FBQSxVQUFBTSxRQUFBLENBQ0ksR0FBQVYsV0FBQSxDQUFBSSxHQUFBLEVBQUNtQixTQUFTLENBQUFFLE1BQUEsQ0FBQUMsTUFBQSxJQUFLRixTQUFTLENBQUcsQ0FBQyxDQUMxQixDQUFDLEVBQ04sQ0FBQyxDQUVkLENBQUMsSUFBQUcsUUFBQSxDQUFBQyxrQkFBQSxDQUVjUCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUGVlckV2YWx1YXRvci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7IC8vIEltcG9ydCBnbG9iYWwgQ1NTXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICcuLi9zdHlsZXMvSG9tZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvTG9naW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL0Rhc2hib2FyZC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxoZWFkZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJywgY29sb3I6ICcjZmZmJywgZm9udFdlaWdodDonYm9sZCd9fT5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnLCBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnICxhbGlnbkl0ZW1zOiAnY2VudGVyJyx9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBmb250U2l6ZTonNDBweCcsbWFyZ2luUmlnaHQ6JzIwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0xvZ2luXCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1NpZ25VcFwiIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Rhc2hib2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufTtcblxuLy8gVGhpcyBpcyB0aGUgbWFpbiBsYXlvdXQgd3JhcHBlclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz4gey8qIFRoaXMgaGVhZGVyIHdpbGwgYmUgZGlzcGxheWVkIG9uIGV2ZXJ5IHBhZ2UgKi99XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJfbGluayIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfanN4UnVudGltZSIsIl90aGlzIiwiX2pzeEZpbGVOYW1lIiwiSGVhZGVyIiwianN4Iiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiY2hpbGRyZW4iLCJqc3hzIiwibGlzdFN0eWxlIiwiZGlzcGxheSIsImdhcCIsImFsaWduSXRlbXMiLCJkZWZhdWx0IiwiaHJlZiIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsIk15QXBwIiwiX3JlZiIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5BcourseId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5C%5BcourseId%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5BcourseId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5C%5BcourseId%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\[courseId].js */ \"./pages/[courseId].js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/[courseId]\",\n        pathname: \"/[courseId]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: (private_next_pages_app__WEBPACK_IMPORTED_MODULE_4___default()),\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_courseId_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGJTVCY291cnNlSWQlNUQmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1QyU1QmNvdXJzZUlkJTVELmpzJmFic29sdXRlQXBwUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJmFic29sdXRlRG9jdW1lbnRQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9kb2N1bWVudCZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ2hDO0FBQ0w7QUFDMUQ7QUFDb0Q7QUFDVjtBQUMxQztBQUNtRDtBQUNuRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsK0NBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsK0NBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsK0NBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsK0NBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLCtDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLCtDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsK0NBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsK0NBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsK0NBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsK0NBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsK0NBQVE7QUFDekQ7QUFDTyx3QkFBd0IseUdBQWdCO0FBQy9DO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QZWVyRXZhbHVhdG9yLz9kZTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0IERvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgQXBwIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcW2NvdXJzZUlkXS5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCBcInJlcG9ydFdlYlZpdGFsc1wiKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1Byb3BzXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUGF0aHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL1tjb3Vyc2VJZF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL1tjb3Vyc2VJZF1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBcHAsXG4gICAgICAgIERvY3VtZW50XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5BcourseId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5C%5BcourseId%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./styles/Dashboard.css":
/*!******************************!*\
  !*** ./styles/Dashboard.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Home.css":
/*!*************************!*\
  !*** ./styles/Home.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Login.css":
/*!**************************!*\
  !*** ./styles/Login.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@babel","vendor-chunks/@swc"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5BcourseId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5C%5BcourseId%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();