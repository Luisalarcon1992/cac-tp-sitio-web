const seed = localStorage.getItem('seed'); // buscar seed alamcenado en el localStorage
 
const url2 = ('https://randomuser.me/api/?results=20&seed=' + seed)

const apiKey = { headers: { 'ApiKey': '2XXV-712C-FKPU-H0QF'}};

  fetch(url2,apiKey)
    .then(response => response.json())
    .then(data => mostrarDatos(data))
    .catch(error => console.log(error));

  const mostrarDatos = (datos) => {
    console.log(datos);
    const info = datos.results;

    let body = '';
    
    
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('id');// verificar mail del usuario desde la url y mostrar sus datos
    console.log(email);
    for(let i = 0; i < info.length; i++ ){
        if (info[i].email == email) {
            body += `<div class=''>        
            <img src='${info[i].picture.large }'>
            <p>Nombre: ${info[i].name.last}, ${info[i].name.first} </p>
            <p>Edad: ${info[i].dob.age}</p>
            <p>Mail: ${info[i].email}</p>  
            <p>País: ${info[i].location.country}</p>
            <p>Estado: ${info[i].location.state}</p>
            <p>Ciudad: ${info[i].location.city}</p>
            <p>Telefono: ${info[i].phone}</p>
            <div class="moreInfo">
            <a href="index.html">Volver</a> 
           </div>
        </div>`;


        

            document.getElementById('principal').innerHTML = body;
        }
    }
    }

