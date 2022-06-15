import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../modules/dashboard/Dashboard";
import Score from "../modules/score/Score";
import Student from "../modules/student/Student";
import Teacher from "../modules/teacher/Teacher";
import Login from "../modules/login/Login";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/score" element={<Score />}></Route>
      <Route path="/students" element={<Student />}></Route>
      <Route path="/teachers" element={<Teacher />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default App;
