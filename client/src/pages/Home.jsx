import {
  AlignJustify,
  Calendar,
  House,
  Plus,
  Search,
  ChartBarBig,
  ArrowLeftFromLine,
  LogOut,
  User,
  UserCog,
  Settings,
  CalendarRange,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Trash,
  ClipboardCheck,
  SquarePen,
  ListFilter,
} from "lucide-react";
import { useEffect, useState } from "react";
import Input from "../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { deleteTask, getTasks, updateTask } from "../js/storage/taskManager";

//criar opacidade no fundo quando abrir a navBar

export default function Home() {
  const [navDisplay, setNavDisplay] = useState("hidden");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [tasks, setTasks] = useState([]);

  let decoded;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
  }

  const userId = decoded.id;

  async function fetchTasks() {
    const taskList = await getTasks(userId);
    setTasks(() => {
      console.log(taskList);
      return taskList;
    });
  }

  const editTask = async (taskId) => {
    const newContent = prompt().trim(); //TROCAR PROMPT POR ALERTA NA TELA
    if (!newContent.trim()) {
      return console.log("Erro ao atualizar content da tarefa");
    }

    await updateTask(taskId, newContent);

    fetchTasks();
  };

  const removeTask = async (taskId) => {
    const confirmDel = confirm("Quer mesmo deletar?");
    if (confirmDel) {
      await deleteTask(taskId);
    }

    fetchTasks();
  };

  const renderTask = tasks.map((task) => {
    return (
      <div key={task.id}>
        <div className="border mt-2 w-82 h-fit m-auto flex">
          <div className="w-[5%] bg-green-600">
            {/* 
                COR DA PRIORIDADE
                VERDE -> BAIXA
                AMARELA -> MEDIA
                VERMELHA -> ALTA
                */}
          </div>
          <div className="text-center m-auto font-bold p-2">{task.content}</div>
          <div className="flex flex-col p-2 gap-1 justify-between">
            <button
              className=" p-1 hover:scale-105 active:scale-95 transition-all"
              onClick={() => removeTask(task.id)}
            >
              <Trash color="red" />
            </button>
            <button
              className=" p-1 hover:scale-105 active:scale-95 transition-all"
              onClick={() => editTask(task.id)}
            >
              <SquarePen color="orange" />
            </button>
            <button className=" p-1 hover:scale-105 active:scale-95 transition-all">
              <ClipboardCheck color="green" />
            </button>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <div>
        <nav
          className={`${navDisplay} list-none bg-white border-r-2 border-gray-950 text-black w-64  pt-4 h-screen fixed`}
        >
          <div className="absolute right-2 hover:scale-105 active:scale-95 transition-all">
            <ArrowLeftFromLine onClick={() => setNavDisplay("hidden")} />
          </div>
          <div
            className="
          flex flex-col items-start pl-8 text-left gap-5
          "
          >
            <div>
              <div className="border rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
                <User />
              </div>
              <div className="font-bold pt-1 cursor-pointer mt-2">
                <p>Luis Pamplona</p>
              </div>
              <div className="pt-2 text-sm cursor-pointer mt-2">
                <p>
                  <span className="font-bold">34</span> Tarefas
                </p>
              </div>
            </div>
            <div className="font-bold border-t">
              <li className="pt-6 hover:scale-105 active:scale-95 transition-all flex">
                <User />
                <p className="w-46 underline-offset-4 underline pl-4">Perfil</p>
              </li>
              <li className="pt-6 hover:scale-105 active:scale-95 transition-all flex">
                <Settings />
                <p className="w-46 underline-offset-4 underline pl-4">
                  Configuraçoes
                </p>
              </li>
            </div>
            <div
              className="
            border-t p-4 w-52 flex justify-center  mt-42 
            "
            >
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
                className="text-red-500 font-bold flex gap-3 p-2 hover:scale-105 active:scale-95 transition-all"
              >
                <p>Sair</p>
                <LogOut />
              </button>
            </div>
          </div>
        </nav>
        <header
          className="
      bg-black w-screen grid grid-cols-3 items-center h-12 gap-50
        "
        >
          <AlignJustify
            color="white"
            className="ml-2"
            onClick={() => setNavDisplay("")}
          />
          <h1 className="font-bold text-4xl text-white col-span-2">•TASKLY</h1>
        </header>
        <section className="mb-16">
          <div className="flex justify-center mt-4 border-b pb-2">
            <Input plcHolder={"Buscar tarefa"} />
          </div>
          <div className="flex justify-between border-b p-2 gap-4 font-bold items-center">
            <button className="hover:scale-110 active:scale-95 transition-all p-1">
              <ChevronLeft />
            </button>
            <div className="flex gap-1 items-center">
              <CalendarRange />
              <p>27/02/2000</p>
            </div>
            <button className="hover:scale-110 active:scale-95 transition-all p-1">
              <ChevronRight />
            </button>
          </div>
          {renderTask}
        </section>
        <div
          className="
          h-14 w-screen border-t border-gray-600 fixed bg-white bottom-0 grid grid-cols-5 items-center gap-10 pl-8 pr-8
        "
        >
          <div className="hover:scale-105 active:scale-95 transition-all">
            <House />
          </div>
          <div className="hover:scale-105 active:scale-95 transition-all">
            <ListFilter />
          </div>
          <div className="hover:scale-105 active:scale-95 transition-all">
            <Plus />
          </div>
          <div className="hover:scale-105 active:scale-95 transition-all">
            <Calendar />
          </div>
          <div className="hover:scale-105 active:scale-95 transition-all">
            <ChartBarBig />
          </div>
        </div>
      </div>
    </>
  );
}
