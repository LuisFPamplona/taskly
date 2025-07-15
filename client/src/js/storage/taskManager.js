const URL = "http://localhost:3000";

const token = localStorage.getItem("token");

export const getTasks = async (userId) => {
  try {
    const res = await fetch(`${URL}/private/taskList?userId=${userId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (taskId, newContent, newPriority) => {
  try {
    const res = await fetch(`${URL}/private/update-task`, {
      method: "PATCH",
      headers: {
        authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: taskId,
        content: newContent,
        priority: newPriority,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const res = await fetch(`${URL}/private/remove-task?taskId=${taskId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (userId, taskContent, taskPriority) => {
  try {
    const res = await fetch(`${URL}/private/create-task`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        user: {
          id: userId,
        },
        task: {
          content: taskContent,
          priority: taskPriority,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const findTask = async (taskId) => {
  try {
    const res = await fetch(`${URL}/private/find-task?id=${taskId}`, {
      method: "GET",
      headers: {
        authorization: token,
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const defineDone = async (taskId, done) => {
  try {
    const res = await fetch(`${URL}/private/done-task`, {
      method: "PATCH",
      headers: {
        authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: taskId, done: done }),
    });
  } catch (error) {
    console.log(error);
  }
};
