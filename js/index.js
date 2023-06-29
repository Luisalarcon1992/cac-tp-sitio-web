const url = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://randomuser.me/api/?results=20'



const apiKey = { headers: { 'ApiKey': '2XXV-712C-FKPU-H0QF' } };

fetch(url2, apiKey)
    .then(response => response.json())
    .then(data => mostrarDatos(data))
    .catch(error => console.log(error))



const mostrarDatos = (datos) => {
    const info = datos.results
    console.log(info)

    let body = '';

    for (let i = 0; i < info.length; i++) {
        body += `<div class='info'>                    
        <img src="${info[i].picture.large}">
        <div class='cuadro-texto'>
        <p>Nombre: ${info[i].name.last}, ${info[i].name.first}</p>
        <p>País: ${info[i].location.country}</p>
        </div>
        <a href="#">Conocer Más</a>
        </div>`

        document.getElementById('principal').innerHTML = body;
    }
}