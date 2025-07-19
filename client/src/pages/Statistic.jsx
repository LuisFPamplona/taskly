import { useEffect } from "react";
import Header from "./../components/Header/Header";
import Navbar from "./../components/Navbar/Navbar";
import Sidebar from "./../components/Sidebar/Sidebar";
import {
  ArrowLeft,
  Boxes,
  ChevronRight,
  HeartCrack,
  Key,
  Package,
  PackageOpen,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Statistic({ setNavDisplay, navDisplay }) {
  const tasksAmount = localStorage.getItem("taskAmount");

  const navigate = useNavigate();
  useEffect(() => {
    setNavDisplay("hidden");
  }, []);
  return (
    <>
      <Header setNavDisplay={setNavDisplay} />
      <div className="md:flex md:justify-between">
        <Sidebar navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
        <section>
          <div className="flex flex-col">
            <h1 className="text-2xl flex items-center gap-6 w-screen ml-4 mt-4">
              <button
                onClick={() => navigate("/home")}
                className="p-2 hover:scale-115 active:scale-95 transition-all"
              >
                <ArrowLeft />
              </button>
              <p>Estatísticas</p>
            </h1>
            <p className="text-sm w-screen p-6 text-left">
              Acompanhe o seu número tarefas total, tarefas pendentes e tarefas
              concluídas.
            </p>
            <ul>
              <li className="flex w-86 h-fit items-center justify-between hover:bg-gray-200 transition-all pt-1 pb-1">
                <div className="flex items-center gap-12 pl-2">
                  <div className="flex justify-center items-center w-12 h-12">
                    <Boxes />
                  </div>
                  <div className="flex">
                    <p className="font-bold w-32">Total de tarefas</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-center border bg-white w-12">
                      {tasksAmount}
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
                      n/a
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
                      n/a
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="md:hidden">
        <Navbar />
      </div>
    </>
  );
}
