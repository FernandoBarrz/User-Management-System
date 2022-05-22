const openModaleHTML = document.querySelector('.openmodale');
const closeModaleHTML = document.querySelector('.closemodale');

const modaleHTML = document.querySelector('.modale');




openModaleHTML.addEventListener("click", (e)=>{
    e.preventDefault();
    modaleHTML.classList.add('opened');
});


closeModaleHTML.addEventListener("click", (e)=>{
    e.preventDefault();
    modaleHTML.classList.remove('opened');
});

// $('.openmodale').click(function (e) {
//     e.preventDefault();
//     $('.modale').addClass('opened');
// });

// $('.closemodale').click(function (e) {
//     e.preventDefault();
//     $('.modale').removeClass('opened');
// });