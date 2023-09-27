import  appSettings  from './database.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getDatabase , ref , push , onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"


let addBtn = document.getElementById("add-button")
let inputField = document.getElementById("input-field")
let movieList = document.getElementById("movie-list")
  // Initialize DataBase
const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesDB = ref(database, "movies")

addBtn.addEventListener("click",function(){
    let inputValue = inputField.value
    push(moviesDB, inputValue)
    clearInputField()
})

onValue(moviesDB, function(snapshot){
  let moviesArray = Object.values(snapshot.val())
  clearUl_Elements()

  for(let i = 0 ; i < moviesArray.length ; i++){

    appendMovieIntoMovieList(moviesArray[i])

  }

})

function appendMovieIntoMovieList(movie){
    movieList.innerHTML += `<li>${movie}</li>`
}

function clearUl_Elements (){
  movieList.innerHTML = ""
}

function clearInputField(){
  inputField.value = ""
}

