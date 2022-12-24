const allMovies = document.querySelector(".allMovies");

function moviesAll(elementItem) {
  const sliced = elementItem.slice(5, 4000);

  sliced.forEach((elementItemTwo) => {
    const elLi = document.createElement("li");
    elLi.classList.add("list-group-item");

    const elImg = document.createElement("img");
    elImg.classList.add("list-group-item-img");
    const elTitle = document.createElement("h4");
    elTitle.classList.add("list-group");
    const elYear = document.createElement("p");
    elYear.classList.add("list-groupTwo");
    const elRating = document.createElement("p");
    elRating.classList.add("list-groupThree");

    const all = document.createElement("div");
    all.classList.add("list-group-item-text-p");
    all.appendChild(elYear);
    all.appendChild(elRating);

    elImg.src = `https://i3.ytimg.com/vi/${elementItemTwo.ytid}/mqdefault.jpg`;
    elTitle.textContent = elementItemTwo.Title;
    elYear.textContent = elementItemTwo.movie_year;
    elRating.textContent = elementItemTwo.imdb_rating;

    elLi.appendChild(elImg);
    elLi.appendChild(elTitle);
    elLi.appendChild(elYear);
    elLi.appendChild(elRating);
    elLi.appendChild(all);
    // elLi.appendChild(all);

    allMovies.appendChild(elLi);
  });
}

moviesAll(movies);
