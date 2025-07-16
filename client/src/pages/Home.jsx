import { useEffect, useState } from "react";
import TaskList from "../components/TaskList/TaskList";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";

export default function Home({ navDisplay, setNavDisplay }) {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  let decoded;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
  }

  const userId = decoded.id;

  useEffect(() => {
    setNavDisplay("hidden");
  }, []);

  return (
    <>
      <div>
        <Header setNavDisplay={setNavDisplay} />
        <div className="md:flex md:justify-between">
          <div>
            <Sidebar navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center mt-4 md:mt-12 md:mb-12  w-full">
              <Filter />
              <Navbar type={"side"} />
            </div>
            <TaskList userId={userId} tasks={tasks} setTasks={setTasks} />
          </div>
          <div></div>
        </div>
        <div className="md:hidden">
          <Navbar />
        </div>
      </div>
    </>
  );
}
