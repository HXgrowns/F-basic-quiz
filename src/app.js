import "./style/index.scss";

const renderUser = (data) => {
  const { name, age, avatar, description } = data;
  document.getElementById("user_img").src = avatar;
  document.getElementById(
    "user_cv"
  ).innerHTML = `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`;
  document.getElementById("user_description").innerHTML = `${description}`;
};

const getUserData = () => {
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
      renderUser(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const renderEducation = (data) => {
  const educationModual = document.getElementById("education_list");
  educationModual.innerHTML = ``;

  data.forEach((education) => {
    const { title, year, description } = education;
    const item = document.createElement("education-info");
    item.className = "education-info";
    item.innerHTML = `
        <span>${year}</span>
          <div class="education-description">
            <h4>${title}</h4>
            <p>${description}</p>
          </div>
        `;
    educationModual.appendChild(item);
  });
};

const getEducationData = () => {
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

const renderHTML = () => {
  getUserData();
  getEducationData();
};

window.onload = renderHTML();
