export const renderUser = (data) => {
  const { name, age, avatar, description } = data;
  console.log(avatar);
  document.getElementById("user_img").src = avatar;
  document.getElementById(
    "user_cv"
  ).innerHTML = `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`;
  document.getElementById("user_description").innerHTML = `${description}`;
};
