import { useEffect, useState } from "react";
import Header from "./../components/Header/Header";
import Navbar from "./../components/Navbar/Navbar";
import Sidebar from "./../components/Sidebar/Sidebar";
import {
  ArrowLeft,
  Boxes,
  ChevronRight,
  HeartCrack,
  Key,
  LoaderCircle,
  Package,
  PackageOpen,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../js/storage/taskManager";

export default function Statistic({ setNavDisplay, navDisplay }) {
  const [tasks, setTasks] = useState([]);

  const token = localStorage.getItem("token");

  let decoded;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
  }

  const userId = decoded.id;

  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const [pendAmount, setPendAmount] = useState(0);
  const [doneAmount, setDoneAmout] = useState(0);
  const [taskAmount, setTaskAmount] = useState(0);

  const checkAmounts = () => {
    const allTasks = tasks;
    const doneTasks = tasks.filter((task) => task.done);

    setPendAmount(allTasks.length - doneTasks.length);
    setTaskAmount(allTasks.length);
    setDoneAmout(doneTasks.length);
    setIsLoaded(true);
  };

  async function fetchTasks() {
    try {
      const taskList = await getTasks(userId, token);
      setTasks(() => taskList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    fetchTasks();
    checkAmounts();
    setNavDisplay("hidden");
  }, [tasks.length]);
  return (
    <>
      <Header setNavDisplay={setNavDisplay} />
      <div className="md:flex justify-start gap-12">
        <Sidebar navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
        <section className="">
          <div className="flex flex-col justify-center md:gap-4 ">
            <h1 className="text-2xl flex items-center gap-6 w-82  ml-4 mt-4">
              <button
                onClick={() => navigate("/home")}
                className="p-2 hover:scale-115 active:scale-95 transition-all"
              >
                <ArrowLeft />
              </button>
              <p>Estatísticas</p>
            </h1>
            <div className="">
              <p className="text-sm max-w-screen p-6 text-left ">
                Acompanhe o seu número tarefas total, tarefas pendentes e
                tarefas concluídas.
              </p>
            </div>
            {isLoaded && (
              <ul className=" lg:grid lg:grid-cols-2 xl:grid-cols-3 ">
                <li className="flex w-86 h-fit items-center justify-between hover:bg-gray-200 transition-all pt-1 pb-1 ">
                  <div className="flex items-center gap-12 pl-2">
                    <div className="flex justify-center items-center w-12 h-12">
                      <Boxes />
                    </div>
                    <div className="flex">
                      <p className="font-bold w-32">Total de tarefas</p>
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-center border bg-white w-12">
                        {taskAmount}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex w-86 h-fit items-center justify-between hover:bg-gray-200 transition-all pt-1 pb-1">
                  <div className="flex items-center gap-12 pl-2">
                    <div className="flex justify-center items-center w-12 h-12">
                      <PackageOpen />
                    </div>
                    <div className="flex">
                      <p className="font-bold w-32">Total pendentes</p>
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-center border bg-orange-400 w-12">
                        {pendAmount}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex w-86 h-fit items-center justify-between hover:bg-gray-200 transition-all pt-1 pb-1">
                  <div className="flex items-center gap-12 pl-2">
                    <div className="flex justify-center items-center w-12 h-12">
                      <Package />
                    </div>
                    <div className="flex">
                      <p className="font-bold w-32">Total concluídas</p>
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-center border bg-green-500 w-12">
                        {doneAmount}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {!isLoaded && (
              <div className="flex flex-col justify-center items-center gap-4 mt-18">
                <LoaderCircle className="w-12 animate-spin" />
                <p className="text-sm font-bold">Carregando dados...</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="md:hidden">
        <Navbar />
      </div>
    </>
  );
}
