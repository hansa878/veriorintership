const API_KEY = "thewdb";



function searchMovie() {
  const query = document.getElementById("movieInput").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (query === "") {
    resultDiv.innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // 👈 Console me output dekhne ke liye

      if (data.Response === "True") {
        data.Search.forEach(movie => {
          const movieCard = document.createElement("div");
          movieCard.classList.add("movie-card");

          movieCard.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <p><em>${movie.Type}</em></p>
          `;

          resultDiv.appendChild(movieCard);
        });
      } else {
        resultDiv.innerHTML = `<p>No results found for "<strong>${query}</strong>".</p>`;
      }
    })
    .catch(error => {
      resultDiv.innerHTML = "<p>Something went wrong. Check your connection or API key.</p>";
      console.error("Error:", error);
    });
}
