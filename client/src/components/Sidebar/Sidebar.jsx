import { ArrowLeftFromLine, LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ navDisplay, setNavDisplay, tasksAmount }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  let decoded;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
  }

  const nickname = decoded.nickname;

  return (
    <>
      <nav
        className={`${navDisplay} list-none bg-white border-r-2 border-gray-950 text-black w-64  pt-4 h-screen absolute top-0`}
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
              <p>{nickname}</p>
            </div>
            <div className="pt-2 text-sm cursor-pointer mt-2">
              <p>
                <span className="font-bold">{tasksAmount}</span> Tarefas
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
    </>
  );
}
