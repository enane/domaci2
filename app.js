let movies = [{
    watched: false,
    name: 'film1',
    year: '1999',
    country: 'zemlja1',
    note: 'hffdgvbd dfgdfg dfdvdfv',
    actors: ['glumac1', 'glumac2']
}, {
    watched: false, name: 'film2', year: '1996', country: 'zemlja2', note: 'fsdf', actors: ['glumac1']
}, {
    watched: false, name: 'film3', year: '2011', country: 'zemlja3', note: ' dfdfdf fgdg sdfd', actors: ['glumac1']
}]

displayMovies();

let addMovieButton = document.getElementById('addMovie_button');
addMovieButton.addEventListener('click', (elem) => {
    addMovieInput();
});

// function changeBackground() {
//     var watchedMovieCheckbox = document.getElementById('watched_movie');
//     var movieRow = watchedMovieCheckbox.parentElement.closest('tr')
//     console.log(movieRow)
//     if (watchedMovieCheckbox.checked) {
//         movieRow.classList.remove("table-danger");
//         movieRow.classList.add('table-success')
//
//     } else {
//         movieRow.classList.remove("table-success");
//         movieRow.classList.add('table-danger')
//     }
// }

// function getSelected() {
//     //Reference the Table.
//     var grid = document.getElementById("movieTable");
//
//     //Reference the CheckBoxes in Table.
//     var checkBoxes = grid.getElementsByTagName("INPUT");
//
//     //Loop through the CheckBoxes.
//     for (var i = 0; i < checkBoxes.length; i++) {
//         if (checkBoxes[i].checked) {
//             var row = checkBoxes[i].parentNode.parentNode;
//             row.classList.remove('table-danger')
//             row.classList.add('table-success')
//         }
//         else{
//             var row = checkBoxes[i].parentNode.parentNode;
//             row.classList.remove('table-success')
//             row.classList.add('table-danger')
//         }
//     }
// }

function getSelected(val){
    let row = val.parentNode.parentNode;
    if(val.checked){
        localStorage.setItem(val.value, val.checked);
        row.classList.remove('table-danger')
        row.classList.add('table-success')
    }
    else{
        localStorage.setItem(val.value, !val.checked);
        row.classList.remove('table-success')
        row.classList.add('table-danger')
    }
}


function addMovieInput() {
    let name = document.getElementById('movie_name').value;
    let year = document.getElementById('movie_year').value;
    let country = document.getElementById('movie_country').value;
    let note = document.getElementById('movie_note').value;
    let actorsList = document.getElementById('movie_actors').value;
    let actors = actorsList.split(',')

    let film = {
        watched: false, name: name, year: year, country: country, note: note, actors: actors
    }
    addMovie(film);
}

function displayMovies() {
    let tableContent = '';
    movies.forEach((movie) => {
        let actorsContent = ''
        movie.actors.forEach((actor) => {
            actorsContent += `<li>${actor}</li>`
        })
        tableContent += `<tr class="table-danger text-center">
                            <td>
                                <input class='form-check-input' type="checkbox" onclick="getSelected(this)">
                            </td>
                            <td>${movie.name}</td>
                            <td>${movie.year}</td>
                            <td>${movie.country}</td>
                            <td>${movie.note}</td>
                            <td><ul>${actorsContent}</ul></td>
                         </tr>`;
    });
    document.getElementById('movies_table_body').innerHTML = tableContent;
}

function addMovie(movie) {
    movies.push(movie);
    let tableContent = ''
    let actorsContent = ''
    movie.actors.forEach((actor) => {
        actorsContent += `<li>${actor}</li>`
    })
    tableContent = `<tr class="table-danger text-center">
                        <td>
                            <input class='form-check-input' type="checkbox" onclick="getSelected(this)">  
                        </td>
                        <td>${movie.name}</td>
                        <td>${movie.year}</td>
                        <td>${movie.country}</td>
                        <td>${movie.note}</td>
                        <td><ul>${actorsContent}</ul></td>
                    </tr>`;
    document.getElementById('movies_table_body').innerHTML += tableContent;
    console.log(document.getElementById('movies_table_body').innerHTML)
}




