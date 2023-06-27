let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

// Mostrar el primer slide al cargar la página
showSlide(0);

// Cambiar de slide automáticamente cada 3 segundos
setInterval(nextSlide, 3000);



/*

const url = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://randomuser.me/api/?results=20'

const apiKey = { headers: { 'ApiKey': '2XXV-712C-FKPU-H0QF'}};

fetch(url2,apiKey)
    .then(response => response.json())
    .then(data => {
        const seed = data.info.seed; // Obtener el seed de la respuesta de la API
        localStorage.setItem('seed', seed); // Almacenar el seed en el localStorage
        mostrarDatos(data);
      })
    .catch(error => console.log(error))


const mostrarDatos = (datos) =>{
    console.log(typeof(datos))
    console.log(datos)

    const info = datos.results
    const seed = datos.info.seed

    let body = '';

    for(let i = 0; i < info.length; i++ ){
        body += `<div class=''>        
        <img src='${info[i].picture.large}'>
        <p>Nombre: ${info[i].name.last}, ${info[i].name.first} </p>
        <p>Edad: ${info[i].dob.age}</p>
        <p>Mail: ${info[i].email}</p>  
        <p>País: ${info[i].location.country}</p>
        <div class="moreInfo">
        <a href="infoPersona.html?id=${info[i].email}">Más Información</a>
        </div>
                   
        </div>`;
        
        document.getElementById('principal').innerHTML = body;
    }

}*/

