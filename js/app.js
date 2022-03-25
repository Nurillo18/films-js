var elSelect = document.querySelector(".form_select");
var elList = document.querySelector(".list");
let elForm = document.querySelector(".form");
let elBtn = document.querySelector(".btn");



function time(format) {
    var time = new Date(format);
    var day = time.getDay();
    var month = String(time.getMonth()).padStart(2,0);
    var year = time.getFullYear();
    return `${day}.${month}.${year}`
}

    for(var film of films) {
        var elItem = document.createElement("li");
        var elImg = document.createElement("img");
        var elH1 = document.createElement("h1");
        var elP = document.createElement("p");
        var elTime = document.createElement("time");
        var elP2 = document.createElement("p");
        var elDiv = document.createElement("div");



        elItem.classList.add("list__item");
        elImg.setAttribute("src", film.poster);
        elImg.setAttribute("alt", "film img");
        elImg.classList.add("list__img");


        elH1.textContent = film.title.split(" ").slice(0,4).join(" ");
        elH1.classList.add("list__title");

        elP.textContent = film.overview.split(" ").slice(0,15).join(" ");
        elP.classList.add("list__text");

        elTime.textContent = time(film.release_date);
        elTime.classList.add("list__time");

        elP2.textContent =  film.genres;
        elP2.classList.add("list__text2");

        elDiv.classList.add("list__box");

        elList.appendChild(elItem);
        elItem.appendChild(elImg);
        elDiv.appendChild(elH1);
        elDiv.appendChild(elP);
        elDiv.appendChild(elTime);
        elDiv.appendChild(elP2);
        elItem.appendChild(elDiv);

    }

    function genreArrey(arr){
        var result = [];
        arr.forEach(film => {
            film.genres.forEach(genre => {
                if(!result.includes(genre)){
                    result.push(genre);
                }
            })
        });
        for (var resluts of result){
            var elOption = document.createElement("option");
            elSelect.appendChild(elOption);
            elOption.textContent = resluts;
            elOption.setAttribute("value", elOption.textContent)
            elOption.classList.add("form__option");
        }

    }
    genreArrey(films);

    // elForm.addEventListener("submit" , evt => {
    //     evt.preventDefault();
    //     const elSelectVal = elSelect.value;
    //     console.log(elSelectVal);

    //     const filterFilm = films.filter( item => {
    //         return item.genres.includes(elSelectVal);
    //     });

    // })