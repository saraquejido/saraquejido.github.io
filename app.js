'use strict';

function funct(){
    let today = new Date();
    let formatDate = today.toDateString();
    let selectElement = document.getElementById('date');
    selectElement.innerHTML = formatDate;
}
