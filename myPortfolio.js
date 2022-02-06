let navLinks = document.getElementsByClassName('nav_links')
let active = document.getElementById('active');
let navs = document.getElementById('myNav');

// Array.from(navLinks).forEach(function(item){
//     item.addEventListener("onclick", function( event ) {
//         // highlight the mouseover target
//         event.id='active';
// })});

// Array.from(navLinks).forEach(function(item){
//     item.addEventListener("mouseover", function( event ) {
//         // highlight the mouseover target
//         event = active.id='';
// })});

// Array.from(navLinks).forEach(function(item){
//     item.addEventListener("mouseout", function( event ) {
//         // highlight the mouseover target
//         event = active.id='active';
// })});


// navs.addEventListener('mouseover', function () {
//     console.log('mouse overed');
//     return active.id = '';
// });

// if ()
// navs.addEventListener('mouseout', function () {
//     console.log('mouse overed');
//     return active.id = 'active';
// });

// let myMouseover = () => active.id = '';
// navs.addEventListener('mouseover', myMouseover);

// let myMouseout = () => active.id = 'active';
// navs.addEventListener('mouseout', myMouseout);

const nodeMap = document.getElementById('logo').attributes;
let text = '';
for (let i = 0; i < nodeMap.length; i++) {
    text += `${nodeMap[i].name} = ${nodeMap[i].value} <br>`;
}
document.getElementById('demo').innerHTML = text;

const nodeList = document.body.childNodes;
// let text = '';
for (let i = 0; i < nodeList.length; i++) {
    text += `${nodeList[i].nodeName} <br>`;
}
document.getElementById('demo').innerHTML = text;

const collection = document.body.children;
// let text = '';
for (let i = 0; i < collection.length; i++) {
    text += `${collection[i].tagName} <br>`;
}
document.getElementById('demo').innerHTML = text;

