const URL = "http://localhost:3000";

export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${URL}/public/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      return { sucess: true, user: data.user };
    } else {
      return { sucess: false, message: data.message };
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (useremail, username, userpassword) => {
  try {
    const res = await fetch(`${URL}/public/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: useremail,
        name: username,
        password: userpassword,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      return { sucess: true, message: data.message };
    } else {
      return { sucess: false, message: data.message };
    }
  } catch (error) {
    console.log(error);
  }
};
