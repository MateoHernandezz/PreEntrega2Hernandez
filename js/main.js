
let nombre;
let presupuesto;
let eleccion = "";


let planes = [
    { nombre: "Plan Básico", precio: 35000 },
    { nombre: "Plan Medio", precio: 40000 },
    { nombre: "Plan Premium", precio: 60000 }
];


function cotizarPlan(presupuesto, plan) {
    let calculo = presupuesto - plan.precio;
    let reservar = prompt(`El costo por el ${plan.nombre} es de $${plan.precio} pesos argentinos. Te sobra un total de $${calculo} pesos argentinos.\n¿Deseas reservar este plan?\n\nInstrucciones: Presiona aceptar o escribe "si" para reservarlo, o escribe "no" para revisar otras opciones.`).toLowerCase();

    if (reservar == "si" || reservar == "") {
        alert(`Reservaste el ${plan.nombre} con éxito. Pasa a pagar $${plan.precio} pesos argentinos.\nGracias por elegir nuestros servicios.`);
    } else {
        alert("Regresando al menú...");
    }
}


function mostrarOpciones() {
    let opciones = "Elige un plan:\n";
    for (let i = 0; i < planes.length; i++) {
        opciones += `${i + 1}) ${planes[i].nombre}: $${planes[i].precio} pesos argentinos\n`;
    }
    opciones += `${planes.length + 1}) Plan Emprendedor\n${planes.length + 2}) Plan Personalizado\n${planes.length + 3}) Cerrar programa`;

    eleccion = prompt(`${nombre}, tu presupuesto es de: $${presupuesto} pesos argentinos.\n${opciones}`);
}


function eleccionPlan() {
    nombre = prompt("Bienvenido a nuestro servicio de cotización de planes de redes sociales. Por favor, ingresa tu nombre:");
    presupuesto = parseFloat(prompt(`Hola ${nombre}, ingresa tu presupuesto en pesos argentinos:`));

    do {
        mostrarOpciones();

        switch (eleccion) {
            case "1":
            case "2":
            case "3":
                let planIndex = parseInt(eleccion) - 1;
                cotizarPlan(presupuesto, planes[planIndex]);
                break;
            case String(planes.length + 1):
                let presupuestoEmprendedor = parseFloat(prompt("Por favor, ingresa tu presupuesto específico para el Plan Emprendedor (entre $20,000 y $25,000 pesos argentinos):"));
                if (presupuestoEmprendedor >= 20000 && presupuestoEmprendedor <= 25000) {
                    cotizarPlan(presupuesto, { nombre: "Plan Emprendedor", precio: presupuestoEmprendedor });
                } else {
                    alert("Presupuesto fuera del rango del Plan Emprendedor.");
                }
                break;
            case String(planes.length + 2):
                alert("Contamos con planes personalizados. Por favor, contáctanos para más información.");
                break;
            case String(planes.length + 3):
                alert("Gracias por visitarnos. Vuelve pronto.");
                break;
            default:
                alert("Entrada inválida.");
        }
    } while (eleccion !== String(planes.length + 3));
}

eleccionPlan();