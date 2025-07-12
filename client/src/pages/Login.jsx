import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { loginUser } from "../js/storage/userManagment";
import { useRef } from "react";

export default function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const token = localStorage.getItem("token");

  const login = async (email, password) => {
    const res = await loginUser(email, password);
    if (res.sucess) {
      navigate("/home");
    }
  };
  return (
    <>
      <div
        className="
      md:flex md:m-auto md:w-fit md:justify-between md:gap-32 md:mt-32
      "
      >
        <div
          className="
            hidden md:flex
            w-80 flex-col justify-center mb-32
        "
        >
          <h1 className="font-bold text-[42pt]">•TASKLY</h1>
          <p className="text-[16pt]">
            O Taskly te ajuda a manter o seu dia mais organizado e produtivo.
          </p>
        </div>
        <div
          className="
            md:hidden w-80 h-fit mt-16
            m-auto text-center
        "
        >
          <h1 className="font-bold text-4xl">•TASKLY</h1>
          <p className="">
            O Taskly te ajuda a manter o seu dia mais organizado e produtivo.
          </p>
        </div>
        <div className="flex flex-col items-center gap-32">
          <div className="w-78 md:w-96 h-fit p-4 border border-gray-400 rounded m-auto mt-10 flex flex-col items-center gap-2">
            <Input inputType={"email"} inputRef={emailRef}>
              Email
            </Input>
            <Input inputType={"password"} inputRef={passwordRef}>
              Senha
            </Input>
            <button
              onClick={() =>
                login(emailRef.current.value, passwordRef.current.value)
              }
            >
              <Button type={"default"}>Entrar</Button>
            </button>
            <p className="text-sm hover:cursor-pointer">Esqueceu sua senha?</p>
            <div className="border-t border-gray-400 pt-4 mt-4">
              <button onClick={() => navigate("/cadastro")}>
                <Button type={"light"}>Crie sua conta</Button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-screen mt-12 md:fixed md:bottom-0 h-fit md:h-24 border-t border-gray-300 flex md:flex-col items-center justify-center">
        <div className="flex items-center justify-center p-1 gap-4">
          <a href="https://linkedin.com/in/luis-pamplona-552030310">
            <img src="src\assets\linkedin.png" alt="Linkedin" />
          </a>
          <a href="https://github.com/LuisFPamplona">
            <img src="src\assets\github.png" alt="Github" />
          </a>
        </div>
        <p className="text-sm">LuisFPamplona®</p>
      </footer>
    </>
  );
}
