import React, { useEffect, useRef, useState } from "react";
import { getTasks } from "../../js/storage/taskManager";
import { ClipboardCheck, SquarePen, Trash } from "lucide-react";

export default function TaskList({
  userId,
  setWarning,
  setIdToDelete,
  editTask,
}) {
  const [tasks, setTasks] = useState([]);

  const taskContentRef = useRef({});

  async function fetchTasks() {
    const taskList = await getTasks(userId);
    if (taskList.length > 0) {
      setTasks(() => {
        return taskList;
      });
    } else {
      return [];
    }
  }

  const renderTask = tasks.map((task) => {
    if (!taskContentRef.current[task.id]) {
      taskContentRef.current[task.id] = React.createRef();
    }

    return (
      <div key={task.id}>
        <div className="border mt-2 w-82 h-fit m-auto flex relaive">
          <div className="w-[5%] bg-green-600">
            {/* 
                COR DA PRIORIDADE
                VERDE -> BAIXA
                AMARELA -> MEDIA
                VERMELHA -> ALTA
                */}
          </div>
          <div
            ref={taskContentRef.current[task.id]}
            className="text-center m-auto font-bold p-2"
          >
            {task.content}
          </div>
          <div className="flex flex-col p-2 gap-1 justify-between">
            <button
              className=" p-1 hover:scale-105 active:scale-95 transition-all"
              onClick={() => {
                setWarning("static");
                setIdToDelete(task.id);
              }}
            >
              <Trash color="red" />
            </button>
            <button
              className=" p-1 hover:scale-105 active:scale-95 transition-all"
              onClick={() => editTask(task.id)}
            >
              <SquarePen color="orange" />
            </button>
            <button className=" p-1 hover:scale-105 active:scale-95 transition-all">
              <ClipboardCheck color="green" />
            </button>
          </div>
        </div>
      </div>
    );
  });
  useEffect(() => {
    fetchTasks();
  }, []);
  return <>{renderTask}</>;
}
