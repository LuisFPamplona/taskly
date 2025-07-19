import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ArrowLeft, ChevronRight, HeartCrack, Key, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Conta({ setNavDisplay, navDisplay }) {
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
              <p>Sua conta</p>
            </h1>
            <p className="text-sm w-screen p-6 text-left">
              Veja informações sobre sua conta, troque sua senha, ou saiba mais
              sobre as opções de desativação de conta
            </p>
            <ul>
              <li className="flex w-86 h-fit items-center justify-between hover:bg-gray-200 transition-all pt-1 pb-1">
                <div className="flex items-center gap-2 pl-2">
                  <div className="flex justify-center items-center w-12 h-12">
                    <User />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">Informações da conta</p>
                    <p className="text-sm w-52">
                      Veja as informações da sua conta, como telefone e endereço
                      de e-mail.
                    </p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </li>
              <li className="flex w-86 h-fit items-center justify-between hover:bg-gray-200 transition-all pt-1 pb-1">
                <div className="flex items-center gap-2 pl-2">
                  <div className="flex justify-center items-center w-12 h-12">
                    <Key />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">Altere sua senha</p>
                    <p className="text-sm w-52">
                      Altere a senha a qualquer momento.
                    </p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </li>
              <li className="flex w-86 h-fit items-center justify-between hover:bg-gray-200 transition-all pt-1 pb-1">
                <div className="flex items-center gap-2 pl-2">
                  <div className="flex justify-center items-center w-12 h-12">
                    <HeartCrack />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">Desative sua conta</p>
                    <p className="text-sm w-52">
                      Descubra como desativar sua conta.
                    </p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
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
