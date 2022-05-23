const openModaleHTML = document.querySelector('#btnAddClient');
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

function search(){
    var resultado = [
        {
            "address": "Condesa #56",
            "email": "PABLP@gmail.com",
            "firstname": "Pablo",
            "id": 4,
            "lastname": "Perez",
            "phone": "67567"
        }
    ]
    return resultado
}