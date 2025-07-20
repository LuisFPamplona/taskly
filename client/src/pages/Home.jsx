import { useEffect, useState, useTransition } from "react";
import TaskList from "../components/TaskList/TaskList";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../js/storage/taskManager";
import { LoaderCircle, Users } from "lucide-react";

export default function Home({ navDisplay, setNavDisplay, tasks, setTasks }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  let decoded;
  let userId;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
    userId = decoded.id;
  }

  async function fetchTasks() {
    try {
      const taskList = await getTasks(userId, token);
      setTasks(() => {
        const taskAmount = localStorage.setItem("taskAmount", taskList.length);
        return taskList;
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    if (!token) {
      console.log("token error");

      navigate("/");
    }
    setNavDisplay("hidden");
    fetchTasks();
  }, [isLoaded]);

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
              <Filter
                setSearchContent={setSearchContent}
                searchContent={searchContent}
              />
              <Navbar type={"side"} />
            </div>
            {isLoaded && (
              <div>
                <TaskList
                  searchContent={searchContent}
                  userId={userId}
                  tasks={tasks}
                  setTasks={setTasks}
                  fetchTasks={fetchTasks}
                />
              </div>
            )}
            {!isLoaded && (
              <div className="flex flex-col items-center justify-center">
                <div className="w-fit animate-spin mt-24">
                  <LoaderCircle />
                </div>
                <div>
                  <p>Carregando Tarefas...</p>
                </div>
              </div>
            )}
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
