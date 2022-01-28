// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
    const directors = arr.map ((movie) => {
    //                           AA 
    //                           ||
    // No se porque narices no me funciona si aqui pongo "movies" 
    // cuando es lo que hay que poner, ademas me pasa en todos!!!!!!!!  

      return movie.director
    })

    return directors
}


// A partir de aqui en adelante me ha dejado de funcionar la pagina de soluciones
// asi que no se si estan bien solucionadas, como va siendo costumbre me dejan tirado
// los programas :( :(





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  const spiMov = arr.filter ((movie) => { 
    return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  })
  console.log(spiMov)
  return spiMov.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const aveScore = arr.reduce ((acum, elem) => {
    if (elem.score !== undefined){
      return acum + elem.score / movie.length
    } else {
      return acum 
    }
  })
  return number(averScore.toFixed(2))
}

// No he podido hacer mas de momento :_(




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
