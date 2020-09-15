import { renderUser } from "./renderUser";

export const getUserData = () => {
  fetch("http://localhost:8080/users/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json;charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(response.status + response.statusText));
    })
    .then((data) => {
      console.log(data);
      renderUser(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
