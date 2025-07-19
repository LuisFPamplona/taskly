import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ArrowLeft, ChevronRight, HeartCrack, Key, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Langs({ setNavDisplay, navDisplay }) {
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
                onClick={() => navigate("/configs")}
                className="p-2 hover:scale-115 active:scale-95 transition-all"
              >
                <ArrowLeft />
              </button>
              <p>Idiomas</p>
            </h1>
            <p className="text-sm w-screen p-6 text-left">
              Gerencie quais idiomas são usados para personalizar sua
              experiência no TASKLY.
            </p>
            <ul className="flex flex-col items-center">
              <li className="flex w-86 h-fit items-center justify-between pt-1 pb-1 border-b">
                <div className="flex items-center gap-2 p-2 w-82 justify-between">
                  <p className="font-bold">português - português</p>
                  <input
                    className="w-4.5 h-4.5 text-blue-500 accent-gray-700"
                    checked
                    type="checkbox"
                  />
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
