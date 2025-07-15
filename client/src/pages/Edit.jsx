import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { findTask, updateTask } from "../js/storage/taskManager";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftToLine } from "lucide-react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

export default function Edit({ setNavDisplay, navDisplay }) {
  const id = localStorage.getItem("editId");

  const navigate = useNavigate();

  const [task, setTask] = useState({});

  const highPriorityCheckbox = useRef();
  const mediumPriorityCheckbox = useRef();
  const lowPriorityCheckbox = useRef();

  const newContentInput = useRef();
  const fetchTask = async () => {
    const res = await findTask(id);

    setTask(() => {
      switch (res.priority) {
        case 1:
          lowPriorityCheckbox.current.checked = true;
          break;
        case 2:
          mediumPriorityCheckbox.current.checked = true;
          break;
        case 3:
          highPriorityCheckbox.current.checked = true;
          break;
      }

      return { content: res.content, priority: res.priority };
    });
  };

  const editTaskHandler = async () => {
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
    const res = await updateTask(id, content, priority);
    navigate("/home");
  };

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <>
      <Header setNavDisplay={setNavDisplay} />
      <Sidebar navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
      <section className="flex flex-col items-center gap-4 pt-8 w-82 m-auto">
        <div className="w-68">
          <button
            onClick={() => navigate("/home")}
            className="flex hover:scale-120 active:scale-95 transition-all"
          >
            <ArrowLeftToLine />
          </button>
        </div>
        <div>
          <h1 className="text-3xl border-t pt-4">Edite sua tarefa</h1>
        </div>
        <Input
          inputRef={newContentInput}
          plcHolder={"Digite sua tarefa"}
          inputValue={task.content}
        >
          Tarefa a ser editada:
        </Input>
        <div>
          <h1 className="text-[16pt]">Prioridade da tarefa</h1>
          <div className="flex gap-4 justify-center border-b pb-4">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-teal-700 font-bold">Baixa</p>
              <input
                ref={lowPriorityCheckbox}
                onClick={() => {
                  highPriorityCheckbox.current.checked = false;
                  mediumPriorityCheckbox.current.checked = false;
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
                }}
                type="checkbox"
              />
            </div>
          </div>
        </div>
        <button onClick={editTaskHandler}>
          <Button>Confirmar</Button>
        </button>
      </section>
      <Navbar />
    </>
  );
}
