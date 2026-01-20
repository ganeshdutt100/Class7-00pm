const usernameInput = document.getElementById("username-input");
const searchBtn = document.getElementById("search-btn");
const resultContainer = document.getElementById("result-container");

searchBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();

  if (username === "") {
    alert("Please Enter your Github Id");
    return;
  }
  resultContainer.innerHTML = "Loading data...";

  const apiUrl = `https://api.github.com/users/${username}`;

  fetch(apiUrl)
    .then((res) => {
      console.log(res.status);
      if (!res.ok) {
        throw new Error("User not found!");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let htmlCode = `
        <img src="${data.avatar_url}" class="profile-img">
        <h2>${data.login || data.name}</h2>
        <p class="bio" >${data.bio || "No bio available"}</p>
        <div class="stats">
        <p class="para" > <strong>followers</strong> : ${data.followers}</p>
        <p class="para" > <strong>Following</strong> : ${data.following}</p>
        <p class="para" > <strong>Public Repositories</strong>: ${data.public_repos}</p>
        </div>
        `;
      resultContainer.innerHTML = htmlCode;
    });
});
