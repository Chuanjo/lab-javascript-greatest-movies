// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
    const directors = arr.map ((movie) => {
      return movie.director
    })
    return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  const spiMov = arr.filter ((movie) => { 
    return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  })
  return spiMov.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const averScore = arr.reduce ((acum, elem) => {
    if (elem.score !== undefined){
      return acum + elem.score / arr.length
    } else {
      return acum 
    }
  },0)
  return Number(averScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let movDrama = arr.filter ((element) => {
    return element.genre.includes("Drama")
  })
  let totalMovDrama = movDrama.reduce((accum, elem) => {
    if (elem.score === undefined) {
      return accum 
    } else {
      return accum + elem.score / movDrama.length
    }
  },0)
  return Number(totalMovDrama.toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let copyMovies = JSON.parse(JSON.stringify(arr))
  let sortedByYear = copyMovies.sort((first, second) => {
    if (first.year > second.year) {
      return 1 
    } else if ( first.year < second.year){
      return -1
    } else {
      if (first.title > second.title) {
        return 1
      } else {
        return -1
      }
    }
  })
  return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let copyMovies = JSON.parse(JSON.stringify(arr))
  let titles = copyMovies.map((mov) => {
    return mov.title
  })
  let sortedByTitle = titles.sort((first, second) =>{
    if (first > second) {
      return 1
    } else {
      return -1
    }
  })
  if (sortedByTitle.length > 20) {
    sortedByTitle = sortedByTitle.slice(0, 20)
  }
  return sortedByTitle
}

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
