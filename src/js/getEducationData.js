import { renderEducation } from "./renderEducation";

export const getEducationData = () => {
  fetch("http://localhost:8080/users/1/educations", {
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
      renderEducation(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
