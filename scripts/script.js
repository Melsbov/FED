// JavaScript Document
console.log("hi");

var menu = document.querySelector('.menu');
var items = document.querySelector('.items');
var close = document.querySelector('.items li:first-of-type button');
var body = document.querySelector('body');
var div = document.querySelector('body>div');
var computer = document.querySelector('.computer');
var computerul = document.querySelector('.computerul');
var allecategorieën = document.querySelector('.computerul button');

menu.addEventListener('click', openMenu);
close.addEventListener('click', openMenu );
computer.addEventListener('click', openExtraMenu);
allecategorieën.addEventListener('click', openExtraMenu);


function openMenu(){
    items.classList.toggle('visible');
    body.classList.toggle('scroll');
    div.classList.toggle('dark');
    computerul.classList.remove('extraVisible');
}

function openExtraMenu(){
    computerul.classList.toggle('extraVisible');
}