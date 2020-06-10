'use strict';

console.log('Here\'s a hidden message');

today = new Date();
formatDate = today.toDateString();
selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;