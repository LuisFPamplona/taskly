import { ArrowLeftToLine } from "lucide-react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { registerUser } from "../js/storage/userManagment";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const nicknameRef = useRef();

  const createAccount = async (
    name,
    email,
    nickname,
    password,
    confirmPassword
  ) => {
    try {
      if (!name || !email || !password || !confirmPassword || !nickname) {
        return console.error("Todos os dados devem ser preenchidos", nickname);
      }

      if (password !== confirmPassword) {
        return console.error("Senhas devem ser iguais");
      }

      const res = await registerUser(email, name, password, nickname);

      if (res.sucess) {
        console.log(res);
        navigate("/");
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      createAccount(
        nameRef.current.value,
        emailRef.current.value,
        nicknameRef.current.value,
        passwordRef.current.value,
        confirmRef.current.value
      );
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
            md:hidden w-80 h-fit mt-12
            m-auto text-center
        "
        >
          <h1 className="font-bold text-4xl">•TASKLY</h1>
          <p className="hidden md:static">
            O Taskly te ajuda a manter o seu dia mais organizado e produtivo.
          </p>
        </div>
        <div className="flex flex-col items-center gap-32">
          <div
            onKeyDown={handleKeyDown}
            className="w-78 md:w-96 h-fit pt-2 pb-2 border border-gray-400 rounded m-auto mt-6 flex flex-col items-center gap-2"
          >
            <div className="flex items-start w-70 md:w-80">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer active:scale-95 transition-all duration-100 pb-4"
              >
                <ArrowLeftToLine />
              </button>
            </div>
            <Input inputType={"text"} inputRef={nameRef}>
              Nome completo
            </Input>
            <Input inputType={"text"} inputRef={nicknameRef}>
              Apelido
            </Input>
            <Input inputType={"email"} inputRef={emailRef}>
              Email
            </Input>
            <Input inputType={"password"} inputRef={passwordRef}>
              Senha
            </Input>
            <Input inputType={"password"} inputRef={confirmRef}>
              Confirme sua senha
            </Input>
            <button
              onClick={() =>
                createAccount(
                  nameRef.current.value,
                  emailRef.current.value,
                  nicknameRef.current.value,
                  passwordRef.current.value,
                  confirmRef.current.value
                )
              }
            >
              <Button type={"default"}>Criar minha conta</Button>
            </button>
            <p className="text-sm hover:cursor-pointer">Já tem uma conta?</p>
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
