const url = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://randomuser.me/api/?results=20'

const apiKey = { headers: { 'ApiKey': '2XXV-712C-FKPU-H0QF'}};

fetch(url2,apiKey)
    .then(response => response.json())
    .then(data => mostrarDatos(data))
    .catch(error => console.log(error))


const mostrarDatos = (datos) =>{
    console.log(typeof(datos))
    console.log(datos)

    const info = datos.results

    let body = '';

    for(let i = 0; i < info.length; i++ ){
        body += `<div class=''>        
        <img src='${info[i].picture.large}'>
        <p>Nombre: ${info[i].name.last}, ${info[i].name.first} </p>
        <p>Edad: ${info[i].dob.age}</p>
        <p>Mail: ${info[i].email}</p>  
        <p>País: ${info[i].location.country}</p>   
        </div>`;
        
        document.getElementById('principal').innerHTML = body;
    }
}