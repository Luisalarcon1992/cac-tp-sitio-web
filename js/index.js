const url = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://randomuser.me/api/?results=8'

const apiKey = { headers: { 'ApiKey': '2XXV-712C-FKPU-H0QF'}};

fetch(url2,apiKey)
    .then(response => response.json())
    .then(data => mostrarDatos(data))
    .catch(error => console.log(error))


const mostrarDatos = (datos) =>{
    console.log(typeof(datos))
    console.log(datos)

    const datos1 = datos.results

    let body = '';

    for(let i = 0; i < datos1.length; i++ ){
        body += `<div class='perfiles'>        
        <img src='${datos1[i].picture.large}'>
        <p>Nombre: ${datos1[i].name.last}, ${datos1[i].name.first} </p>
        <p>Edad: ${datos1[i].dob.age}</p>
        <p>Mail: ${datos1[i].email}</p>  
        <p>País: ${datos1[i].location.country}</p>   
        </div>`;
        
        document.getElementById('principal').innerHTML = body;
    }
}