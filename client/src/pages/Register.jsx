import { ArrowLeftToLine } from "lucide-react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { registerUser } from "../js/storage/userManagment";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const registerError = () =>
    toast.error("Todos os dados devem ser preenchidos", {
      position: "top-center",
    });

  const emailInUse = () =>
    toast.error("E-mail já cadastrado", {
      position: "top-center",
    });

  const nicknameInUse = () =>
    toast.error("Apelido já utilizado", {
      position: "top-center",
    });

  const passwordError = () =>
    toast.error("As senhas não coincidem", {
      position: "top-center",
    });

  const passwordLengthError = () =>
    toast.warn("Senha deve conter ao menos 8 caracteres", {
      position: "top-center",
    });

  const passwordForbiddenChar = () =>
    toast.warn("Senha não deve conter espaços vazios", {
      position: "top-center",
    });

  const registerSucceed = () =>
    toast.success("Conta criada, redirecionando para o login...", {
      position: "top-center",
      autoClose: 3000,
    });

  //-------------------------------------
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
        return registerError();
      }

      if (password !== confirmPassword) {
        return passwordError();
      }
      if (password.length < 8) {
        return passwordLengthError();
      }
      if (password.includes(" ")) {
        return passwordForbiddenChar();
      }

      const res = await registerUser(email, name, password, nickname);

      if (res.sucess) {
        registerSucceed();

        setTimeout(() => {
          navigate("/");
        }, 3200);
      } else {
        const errorMessage = res.message;
        if (errorMessage.includes("email")) {
          emailInUse();
        }
        if (errorMessage.includes("nickname")) {
          nicknameInUse();
        }
      }
    } catch (error) {
      console.error(error);
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
            <button onClick={() => navigate("/")}>
              <p className="text-sm hover:cursor-pointer">Já tem uma conta?</p>
            </button>
          </div>
        </div>
      </div>
      <footer className="w-screen mt-12 md:fixed md:bottom-0 h-fit md:h-24 border-t border-gray-300 flex md:flex-col items-center justify-center">
        <div className="flex items-center justify-center p-1 gap-4">
          <a
            target="_blank"
            href="https://linkedin.com/in/luis-pamplona-552030310"
          >
            <img src="src\assets\linkedin.png" alt="Linkedin" />
          </a>
          <a target="_blank" href="https://github.com/LuisFPamplona">
            <img src="src\assets\github.png" alt="Github" />
          </a>
        </div>
        <p className="text-sm">LuisFPamplona®</p>
      </footer>
      <ToastContainer />
    </>
  );
}
