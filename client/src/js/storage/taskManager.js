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
    console.log(error);
  }
};

export const updateTask = async (taskId, newContent) => {
  try {
    const res = await fetch(`${URL}/private/update-task`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        id: taskId,
        content: newContent,
      }),
    });

    if (res.ok) {
      return { message: res.message };
    }
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

export const createTask = async (userId, taskContent) => {
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
