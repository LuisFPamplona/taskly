import React, { useEffect, useRef, useState } from "react";
import { defineDone, deleteTask } from "../../js/storage/taskManager";
import { ClipboardCheck, SquarePen, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TaskList({ tasks, fetchTasks, loading }) {
  const taskContentRef = useRef({});
  const taskPriorityRef = useRef({});
  const editButtonRef = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const removeHandler = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const editHandler = (taskId) => {
    localStorage.setItem("editId", taskId);
    navigate("/edit");
  };

  const renderTask = tasks.map((task) => {
    if (!taskContentRef.current[task.id]) {
      taskContentRef.current[task.id] = React.createRef();
    }

    if (!taskPriorityRef.current[task.id]) {
      taskPriorityRef.current[task.id] = React.createRef();
    }

    if (!editButtonRef.current[task.id]) {
      editButtonRef.current[task.id] = React.createRef();
    }

    let priorityColor;

    switch (task.priority) {
      case 1:
        priorityColor = "bg-teal-700";
        break;
      case 2:
        priorityColor = "bg-yellow-700";
        break;
      case 3:
        priorityColor = "bg-red-800";
        break;
    }

    const taskDiv = taskContentRef.current[task.id].current;
    const priorityDiv = taskPriorityRef.current[task.id].current;
    const editButton = editButtonRef.current[task.id].current;

    if (taskDiv) {
      if (task.done) {
        taskDiv.className =
          "border rounded mt-2 w-82 h-fit m-auto flex scale-90 bg-green-900 text-white transition-all";
        priorityDiv.className = `hidden w-[5%] ${priorityColor}`;
        editButton.className =
          "p-1 hover:scale-105 active:scale-95 transition-all";
      }
      if (!task.done) {
        taskDiv.className = "border mt-2 w-82 h-fit m-auto flex transition-all";
        priorityDiv.className = `w-[5%] ${priorityColor}`;
        editButton.className =
          "p-1 hover:scale-105 active:scale-95 transition-all";
      }
    }

    const doneButtonHandler = async (taskId, isDone) => {
      try {
        switch (isDone) {
          case true:
            await defineDone(taskId, !isDone);
            await fetchTasks();
            break;
          case false:
            await defineDone(taskId, !isDone);
            await fetchTasks();
            break;
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div key={task.id}>
        <div
          ref={taskContentRef.current[task.id]}
          className="border mt-2 w-82 h-fit m-auto flex"
        >
          <div
            ref={taskPriorityRef.current[task.id]}
            className={`w-[5%] ${priorityColor}`}
          ></div>
          <div className="text-center m-auto font-bold p-2">{task.content}</div>
          <div className="flex flex-col p-2 gap-1 justify-between">
            <button
              className="p-1 hover:scale-105 active:scale-95 transition-all"
              onClick={() => removeHandler(task.id)}
            >
              <Trash color="#b91c1c" />
            </button>
            <button
              className="p-1 hover:scale-105 active:scale-95 transition-all"
              onClick={() => editHandler(task.id)}
              ref={editButtonRef.current[task.id]}
            >
              <SquarePen color="#b45309" />
            </button>
            <button
              onClick={() => doneButtonHandler(task.id, task.done)}
              className="p-1 hover:scale-105 active:scale-95 transition-all"
            >
              <ClipboardCheck color="#3f6212" />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="pb-16 flex flex-col sm:flex md:grid lg:grid-cols-2 xl:grid-cols-3 gap-x-2">
        {renderTask}
      </div>
    </>
  );
}
