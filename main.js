const openModaleHTML = document.querySelector('#btnAddClient');
const closeModaleHTML = document.querySelector('.closemodale');

const modaleHTML = document.querySelector('.modale');
// </Modal>

const tbodyHTML = document.querySelector('#customers > tbody');

// Call search() when page fully loads
document.addEventListener("DOMContentLoaded",init);

// API URL TODO
// TODO

const URL_API = 'https://guarded-beyond-74039.herokuapp.com/'
let clients = []

openModaleHTML.addEventListener("click", (e)=>{
    e.preventDefault();
    clean();
    modaleHTML.classList.add('opened');
});


closeModaleHTML.addEventListener("click", (e)=>{
    e.preventDefault();
    modaleHTML.classList.remove('opened');
});

async function openModaleForm(){
    modaleHTML.classList.add('opened');
}


function init(){
    search();
}

async function search(){
    let req = await fetch(URL_API, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });
    clients = await req.json();
    
    for(let client of clients){
        let trHtml = document.createElement("tr");

        let row = `
        <td>${client.firstname}</td>
        <td>${client.lastname}</td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
        <td>${client.address}</td>
        <td>
          <a href="#" onclick="edit(${client.id})" class="table-action-button-edit" >Edit</a>

          <a href="#" onclick="remove(${client.id})" class="table-action-button-delete" >Delete</a>
        </td>`
         trHtml.innerHTML = row
         tbodyHTML.append(trHtml);
    }
}

function edit(clientId){
    let client = clients.find(client => client.id == clientId);
    openModaleForm();
    
    document.querySelector('#txtID').value = client.id;
    document.querySelector('#txtFirstname').value = client.firstname;
    document.querySelector('#txtLastname').value = client.lastname;
    document.querySelector('#txtEmail').value = client.email;
    document.querySelector('#txtPhone').value = client.phone;
    document.querySelector('#txtAddress').value = client.address;


    
   
}



async function remove(id){
    respuesta = confirm("Sure?");
    if (respuesta){
        let url = `${URL_API}/${id}`
        await fetch(url, {
            "method": 'DELETE',
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        window.location.reload();
    }
}

function clean(){
    document.querySelector('#txtID').value = ''
    document.querySelector('#txtFirstname').value = ''
    document.querySelector('#txtLastname').value = ''
    document.querySelector('#txtEmail').value = ''
    document.querySelector('#txtPhone').value = ''
    document.querySelector('#txtAddress').value = ''
}


async function save(){

    // (firstname, lastname, email, phone, address)
    
    const txtFirstname = document.querySelector('#txtFirstname').value;
    const txtLastname = document.querySelector('#txtLastname').value;
    const txtEmail = document.querySelector('#txtEmail').value;
    const txtPhone = document.querySelector('#txtPhone').value;
    const txtAddress = document.querySelector('#txtAddress').value;


    
    let data = {
        "address": txtAddress,
        "email": txtEmail,
        "firstname": txtFirstname,
        "lastname": txtLastname,
        "phone": txtPhone
    }
    
    let id = document.querySelector('#txtID').value;
    if (id != ''){
        data.id = id
    }
   
   await fetch(URL_API, {
       "method": 'POST',
       "body": JSON.stringify(data),
       "headers": {
           "Content-Type": 'application/json'
       }
   });
   window.location.reload();
    
}