import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

export default function Login() {
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
          <div className="w-90 md:w-112 h-fit p-4 border border-gray-400 rounded m-auto mt-14 flex flex-col items-center gap-2">
            <Input inputType={"email"}>Email</Input>
            <Input inputType={"password"}>Senha</Input>
            <Button type={"default"}>Entrar</Button>
            <p className="text-sm hover:cursor-pointer">Esqueceu sua senha?</p>
            <div className="border-t border-gray-400 pt-4 mt-4">
              <Button type={"light"}>Crie sua conta</Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-screen fixed bottom-0 h-fit md:h-24 border-t border-gray-300 flex md:flex-col items-center justify-center">
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
