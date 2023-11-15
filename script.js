
let buttonGetData = document.getElementById('getData');


function getDataFunction() {
    // console.log(getDataFunction());
    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => {
            console.log("🚀 ~ file: script.js:10 ~ getDataFunction ~ response:", response)
            return response.json();
        })
        // .then(data => console.log(data))
        // .then(data => { console.log(data.title) })
        .then(data => {
            console.log(data);
            // console.log("dir ")
            // console.dir(data)
            // console.log(data.imie)
            // console.log(data.imie)
            // console.log(data.nazwisko)

            let createDiv = document.createElement('div');
            createDiv.id = 'dane-programisty';

            // console.log(createDiv)

            // for (let person for data) {
            let createLi = document.createElement('li');
            createLi.innerText = `${data.imie} ${data.nazwisko}, ${data.zawod}, ${data.firma}`

            createDiv.appendChild(createLi);
            // createLi.innerText = data.nazwisko
            // createDiv.appendChild(createLi)
            // createLi.innerText = data.zawod
            // createDiv.appendChild(createLi)
            // createLi.innerText = data.firma
            // createDiv.appendChild(createLi)

            console.log(createDiv);
            console.log(createLi);

            // }
            document.body.appendChild(createDiv);


            // data.nazwisko sdata.zawod data.frma
            // `
        })

        .catch(error => console.log(error));
    // console.log(data.title)


}

buttonGetData.addEventListener('click', getDataFunction);


/* <!-- Opis

Stwórz stronę zawierającą przycisk pt. "Pobierz dane"

Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:

https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php

Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".

Zadanie domowe zrób za pomocą GitHub Pages.

Podpowiedź przed wysłaniem zadania do sprawdzenia:

pracując z mechanizmem AJAX używaj wbudowanych funkcji jQuery --> */