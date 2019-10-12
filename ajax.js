document.querySelector(".getJokes").addEventListener("click", showJokes);

function showJokes(e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  let noOfJokes = document.querySelector(".noOfJokes").value;

  xhr.open("GET", `http://api.icndb.com/jokes/random/${noOfJokes}`, true);

  xhr.onload = function() {
    if (this.status == 200) {
      let content = "";
      let jokes = JSON.parse(xhr.responseText);
      console.log(jokes);
      let id = 1;
      jokes.value.forEach(jokeData => {
        content += `<li class="list-group-item mb-2">${id}. ${
          jokeData.joke
        }</li>`;
        id++;
      });

      let jokesDisplay = document.querySelector(".jokesSection");
      jokesDisplay.innerHTML = content;
    }
  };
  xhr.send();
}
