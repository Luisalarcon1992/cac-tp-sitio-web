
function validar() {
    var form = document.form;

    if (form.nombre.value == 0) {
        alert("el campo nombre esta vacio");
        form.nombre.value == "";
        form.nombre.focus();
        false;
    }
    if (form.apellido.value == 0) {
        alert("el campo apellido esta vacio");
        form.nombre.value == "";
        form.nombre.focus();
        false;
    }
    if (form.genero.value == 0) {
        alert("elija un genero");
        form.genero.value == "";
        form.genero.focus();
        false;
    }
    if (form.fecha.value == 0) {
        alert("elija una fecha");
        form.fecha.value = "";
        form.fecha.focus();
        false;
    }
    if (form.movil.value == 0) {
        alert("complete el numero de celular");
        form.movil.value = "";
        form.movil.focus();
        false;
    }
    if (form.email.value == 0) {
        alert("complete el e-mail");
        form.email.value = "";
        form.movil.focus();
        false;
    }
    if (document.getElementsById("comentario").value.length == 0) {
        alert("agregue un comentario");
        form.comentario.value = "";
        form.comentario.focus();
        false;
    }

}
