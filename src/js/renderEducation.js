export const renderEducation = (data) => {
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
