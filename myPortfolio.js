let navLinks = document.getElementsByClassName('nav_links')
let active = document.getElementById('active');

Array.from(navLinks).forEach(function(item){
    item.addEventListener("onclick", function( event ) {
        // highlight the mouseover target
        event.id='active';
})});
// Array.from(navLinks).forEach(function(item){
//     item.addEventListener("mouseout", function( event ) {
//         // highlight the mouseover target
//         event = active.id='active';
// })});