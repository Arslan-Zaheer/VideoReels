import  appSettings  from './database.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getDatabase , ref , push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"


let addBtn = document.getElementById("add-button")
let inputField = document.getElementById("input-field")

  // Initialize DataBase
const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesDB = ref(database, "movies")

addBtn.addEventListener("click",function(){
    let inputValue = inputField.value
    push(moviesDB, inputValue)
    clearInputField()
})

function clearInputField(){
  inputField.value = ""
}

