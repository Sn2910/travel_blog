const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:5000";
const API_ENDPOINT1 = process.env.API_ENDPOINT || "http://localhost:5000";

export const validateUser = async (username, password) => {
  const response = await fetch(API_ENDPOINT + "/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const result = await response.json();
  console.log(result.token);
  return result?.token;
};

export const getVerifiedUsers = async (token) => {
  const response = await fetch(API_ENDPOINT + "/api/signedup-users", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export const signUpUser = async (
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword
) => {
  const response = await fetch(API_ENDPOINT1 + "/api/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    }),
  });
  const result = await response.json();
  console.log(result.token);
  return result?.token;
};
