import { useRef, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { createTask } from "../../js/storage/taskManager";

export default function CreateTask({ display, setCreateTaskDisplay }) {
  const token = localStorage.getItem("token");
  const newTaskInput = useRef();

  let decoded;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
  }

  const userId = decoded.id;

  const createNewTask = async () => {
    await createTask(userId, newTaskInput.current.value);
    setCreateTaskDisplay("hidden");
    window.location.reload();
  };

  return (
    <>
      <div
        className={`${display} fixed  bottom-16 left-[50%] translate-x-[-50%] w-82 h-64 bg-white border-4 flex flex-col justify-center items-center gap-2`}
      >
        <div>
          <h1 className="text-2xl">Crie uma nova tarefa!</h1>
        </div>
        <div>
          <Input
            inputType={"text"}
            inputRef={newTaskInput}
            plcHolder={"Digite sua nova tarefa"}
          />
        </div>
        <div>
          <p>Prioridade da tarefa</p>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col justify-center items-center">
            <p>Alta</p>
            <input type="checkbox" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Media</p>
            <input type="checkbox" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Baixa</p>
            <input type="checkbox" />
          </div>
        </div>
        <button onClick={createNewTask}>
          <Button>Criar tarefa</Button>
        </button>
      </div>
    </>
  );
}
