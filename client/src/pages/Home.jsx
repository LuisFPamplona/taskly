import { useState } from "react";
import TaskList from "../components/TaskList/TaskList";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const [navDisplay, setNavDisplay] = useState("hidden");
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  let decoded;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
  }

  const userId = decoded.id;

  return (
    <>
      <div>
        <Header setNavDisplay={setNavDisplay} />
        <Sidebar
          navDisplay={navDisplay}
          setNavDisplay={setNavDisplay}
          tasksAmount={tasks.length}
        />
        <Filter />
        <TaskList userId={userId} tasks={tasks} setTasks={setTasks} />
        <Navbar />
      </div>
    </>
  );
}
