import { ArrowLeft, ChevronRight } from "lucide-react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Config({ setNavDisplay, navDisplay }) {
  const navigate = useNavigate();

  useEffect(() => {
    setNavDisplay("hidden");
  }, []);
  return (
    <>
      <div>
        <Header setNavDisplay={setNavDisplay} />
        <div className="md:flex md:justify-between">
          <Sidebar navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
          <section>
            <div>
              <div className="h-screen w-72 flex flex-col gap-12">
                <h1 className="text-2xl flex items-center gap-6 w-screen ml-4 mt-4">
                  <button
                    onClick={() => navigate("/home")}
                    className="p-2 hover:scale-115 active:scale-95 transition-all"
                  >
                    <ArrowLeft />
                  </button>
                  <p>Configurações</p>
                </h1>

                <ul className="flex flex-col pl-4">
                  <button onClick={() => navigate("/userAccount")}>
                    <li className="flex justify-between items-center w-82 h-12 pl-2 hover:bg-gray-200 transition-all">
                      Sua conta <ChevronRight />
                    </li>
                  </button>
                  {/* <button>
                    <li className="flex justify-between items-center w-82 h-12 pl-2 hover:bg-gray-200 transition-all">
                      Privacidade e segurança <ChevronRight />
                    </li>
                  </button> */}
                  <button onClick={() => navigate("/language")}>
                    <li className="flex justify-between items-center w-82 h-12 pl-2 hover:bg-gray-200 transition-all">
                      Idiomas <ChevronRight />
                    </li>
                  </button>
                  <button>
                    <a
                      href="https://github.com/LuisFPamplona/taskly/issues/new"
                      target="_blank"
                    >
                      <li className="flex justify-between items-center w-82 h-12 pl-2 hover:bg-gray-200 transition-all">
                        Encontrou um erro ? <ChevronRight />
                      </li>
                    </a>
                  </button>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="md:hidden">
          <Navbar />
        </div>
      </div>
    </>
  );
}
