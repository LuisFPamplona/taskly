import { Calendar, ChartBarBig, House, ListFilter, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ type }) {
  const navigate = useNavigate();

  return (
    <>
      {!type && (
        <div
          className="
          h-14 w-screen border-t border-gray-600 fixed bg-white bottom-0 flex items-center justify-between pl-16 pr-16
        "
        >
          <div className="hover:scale-105 active:scale-95 transition-all">
            <button onClick={() => navigate("/home")}>
              <House />
            </button>
          </div>
          <div className="scale-150 hover:scale-175 active:scale-145 transition-all">
            <button onClick={() => navigate("/create")}>
              <Plus />
            </button>
          </div>
          <div className="hover:scale-105 active:scale-95 transition-all">
            <ChartBarBig />
          </div>
        </div>
      )}

      {type && (
        <div className="hidden border-gray-600 w-50 md:flex  items-center justify-center cursor-pointer ">
          <div className="hover:scale-105 active:scale-95 transition-all w-fit  text-sm border pl-4 pr-4 pt-2  pb-2 rounded-3xl bg-gray-800 text-white font-bold cursor-pointer">
            <button
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/create")}
            >
              <Plus />
              <p>Criar tarefa</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
