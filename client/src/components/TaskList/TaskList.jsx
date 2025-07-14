import React, { useEffect, useRef, useState } from "react";
import { deleteTask, getTasks } from "../../js/storage/taskManager";
import { ClipboardCheck, SquarePen, Trash } from "lucide-react";

export default function TaskList({ userId, tasks, setTasks }) {
  const taskContentRef = useRef({});

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const taskList = await getTasks(userId);
    setTasks(() => {
      return taskList;
    });
  }

  const removeHandler = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const editHandler = async (taskId) => {
    console.log(taskId);
  };

  const renderTask = tasks.map((task) => {
    if (!taskContentRef.current[task.id]) {
      taskContentRef.current[task.id] = React.createRef();
    }

    let priorityColor;

    switch (task.priority) {
      case 1:
        priorityColor = "bg-green-600";
        break;
      case 2:
        priorityColor = "bg-yellow-400";
        break;
      case 3:
        priorityColor = "bg-red-600";
        break;
    }

    return (
      <div key={task.id}>
        <div className="border mt-2 w-82 h-fit m-auto flex">
          <div className={`w-[5%] ${priorityColor}`}></div>
          <div
            ref={taskContentRef.current[task.id]}
            className="text-center m-auto font-bold p-2"
          >
            {task.content}
          </div>
          <div className="flex flex-col p-2 gap-1 justify-between">
            <button
              className=" p-1 hover:scale-105 active:scale-95 transition-all"
              onClick={() => removeHandler(task.id)}
            >
              <Trash color="red" />
            </button>
            <button
              className=" p-1 hover:scale-105 active:scale-95 transition-all"
              onClick={() => editHandler(task.id)}
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

  return (
    <>
      <div className="pb-16">{renderTask}</div>
    </>
  );
}
