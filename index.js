document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío real del formulario

        const nombres = form.elements[0].value;
        const apellidos = form.elements[1].value;
        const telefono = form.elements[2].value;
        const correo = form.elements[3].value;
        const fecha = form.elements[4].value;
        const mensaje = form.elements[5].value;

        alert(
            `Datos del formulario:\n\n` +
            `Nombres: ${nombres}\n` +
            `Apellidos: ${apellidos}\n` +
            `Teléfono: ${telefono}\n` +
            `Correo: ${correo}\n` +
            `Fecha: ${fecha}\n` +
            `Mensaje: ${mensaje}`
        );
    });
});