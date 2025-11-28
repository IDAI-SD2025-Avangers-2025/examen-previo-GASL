function Calcular() {
    var formulario = document.forms[0];

    var componentes = formulario.componentes.value;
    var procesador = formulario.procesador.value;
    var disco = formulario.disco.value;
    var ram = formulario.ram.value;
    var monitor = formulario.monitor.value;

    var total = 0;

        if (componentes == "Minitorre") {
        total = 700;
    } else if (componentes == "Torre") {
        total = 1200;
    } else if (componentes == "Desktop") {
        total = 550;
    } else if (componentes == "Gamer") {
        total = 2500;
    } else {
        alert("Selecciona un tipo de equipo");
        return;
    }


        if (procesador == "celeron") {
        total += 900;
    } else if (procesador == "intel3") {
        total += 1500;
    } else if (procesador == "intel5") {
        total += 3500;
    } else if (procesador == "intel7") {
        total += 5000;
    } else {
        alert("Selecciona procesador");
        return;
    }

        if (disco == "500gb") {
        total += 500;
    } else if (disco == "750gb") {
        total += 800;
    } else if (disco == "1tb") {
        total += 1000;
    } else if (disco == "250gb") {
        total += 900;
    } else if (disco == "500gb") {  
        total += 1380;
    } else {
        alert("Selecciona disco");
        return;
    }

        if (ram == "4gb") {
        total += 600;
    } else if (ram == "8gb") {
        total += 1050;
    } else if (ram == "16gb") {
        total += 1950;
    } else {
        alert("Selecciona RAM");
        return;
    }

        if (monitor == "17pul") {
        total += 1200;
    } 
    else if (monitor == "19pul") {
        total += 1500;
    }
    else if (monitor == "21.5pum") {
        total += 2000;
    }
    else if (monitor == "24pul") {
        total += 2600;
    }
    else if (monitor == "27pul") {
        total += 3000;
    }
    else if (monitor == "32pul") {
        total += 3800;
    } 
    else {
        alert("Selecciona monitor");
        return;
    }


    if (formulario.mouse.checked) {
    total += 150;
    }

    if (formulario.teclado.checked) {
    total += 150;
    }

    if (formulario.bocinas.checked) {
    total += 150;
    }

    if (formulario.webcam.checked) {
    total += 150;
    }

    if (formulario.ups.checked) {
    total += 150;
    }

    if (formulario.alfombrilla.checked) {
    total += 150;
    }

    if (formulario.controlgamer.checked) {
    total += 150;
    }

    if (formulario.luzrgb.checked) {
    total += 150;
    }

    if (formulario.sillagamer.checked) {
    total += 150;
    }

    if (formulario.adaptadorwifi.checked) {
    total += 150;
    }









hubusb
audifonos
monitor-adicional
soporte
ventilador
microfono
lectorsd
hdmi
baserefri
herramientas

}