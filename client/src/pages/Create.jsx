import { useRef, useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { createTask } from "../js/storage/taskManager";
import { useNavigate, useViewTransitionState } from "react-router-dom";
import {
  ArrowLeftToLine,
  ClipboardCheck,
  SquarePen,
  Trash,
} from "lucide-react";

export default function Create() {
  const [navDisplay, setNavDisplay] = useState("hidden");

  const navigate = useNavigate();

  const highPriorityCheckbox = useRef();
  const mediumPriorityCheckbox = useRef();
  const lowPriorityCheckbox = useRef();

  const newContentInput = useRef();
  const [prevContent, setPrevContent] = useState();
  const [priorityColor, setPriorityColor] = useState("bg-teal-700");

  const token = localStorage.getItem("token");

  let decoded;

  if (token) {
    const payloadBase64 = token.split(".")[1];
    decoded = JSON.parse(atob(payloadBase64));
  }

  if (!token) {
    navigate("/");
  }

  const userId = decoded.id;

  const createNewTask = async () => {
    try {
      const content = newContentInput.current.value;
      let priority;

      if (highPriorityCheckbox.current.checked) {
        priority = 3;
      }
      if (mediumPriorityCheckbox.current.checked) {
        priority = 2;
      }
      if (lowPriorityCheckbox.current.checked) {
        priority = 1;
      }

      if (content.trim() !== "") {
        await createTask(userId, content, priority, token);
        navigate("/home");
      }
    } catch (error) {
      console.log("Erro ao criar tarefa", error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      createNewTask();
    }
  };

  return (
    <>
      <Header setNavDisplay={setNavDisplay} />
      <div className="md:flex md:justify-between">
        <Sidebar navDisplay={navDisplay} setNavDisplay={setNavDisplay} />

        <section
          onKeyDown={handleKeyDown}
          className="flex flex-col items-center gap-4 pt-8 w-82 m-auto md:mt-0"
        >
          <div className="lg:flex gap-24 items-center">
            <div>
              <div>
                <h1 className="text-3xl border-t mt-4 pt-4">
                  Crie uma nova tarefa
                </h1>
              </div>
              <Input
                newContentInput={newContentInput}
                setPrevContent={setPrevContent}
                inputRef={newContentInput}
                plcHolder={"Digite sua tarefa"}
              />
              <div>
                <h1 className="text-[16pt]">Prioridade da tarefa</h1>
                <div className="flex gap-4 justify-center border-b pb-4 mb-4">
                  <div className="flex flex-col items-center justify-center ">
                    <p className="text-teal-700 font-bold">Baixa</p>
                    <input
                      ref={lowPriorityCheckbox}
                      defaultChecked
                      onClick={() => {
                        highPriorityCheckbox.current.checked = false;
                        mediumPriorityCheckbox.current.checked = false;
                        setPriorityColor("bg-teal-700");
                      }}
                      type="checkbox"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-yellow-700 font-bold">Média</p>
                    <input
                      ref={mediumPriorityCheckbox}
                      onClick={() => {
                        highPriorityCheckbox.current.checked = false;
                        lowPriorityCheckbox.current.checked = false;
                        setPriorityColor("bg-yellow-700");
                      }}
                      type="checkbox"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-red-800 font-bold">Alta</p>
                    <input
                      ref={highPriorityCheckbox}
                      onClick={() => {
                        lowPriorityCheckbox.current.checked = false;
                        mediumPriorityCheckbox.current.checked = false;
                        setPriorityColor("bg-red-800");
                      }}
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
              <button onClick={createNewTask}>
                <Button>Adicionar</Button>
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm">Preview</p>
              <div
                className="border mt-2 w-72 h-fit m-auto flex shadow-md hover:shadow-lg transition-shadow duration-200
              "
              >
                <div className={`w-2 ${priorityColor}`}></div>
                <div className="text-center m-auto font-bold p-2">
                  {prevContent}
                </div>
                <div className="flex flex-col p-2 gap-1 justify-between">
                  <button className="p-1 hover:scale-105 active:scale-95 transition-all">
                    <Trash color="#b91c1c" className="w-5" />
                  </button>
                  <button className="p-1 hover:scale-105 active:scale-95 transition-all">
                    <SquarePen color="#b45309" className="w-5" />
                  </button>
                  <button className="p-1 hover:scale-105 active:scale-95 transition-all">
                    <ClipboardCheck color="#3f6212" className="w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="md:hidden">
        <Navbar />
      </div>
    </>
  );
}
