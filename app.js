'use strict';

console.log('Here\'s a hidden message');

var today = new Date();
var formatDate = today.toDateString();
var selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;