console.log('Desafio obligatorio');

//Simulador cotizador seguro

/*
    1. Seleccionar tipo de automovil (Chico, mediano, camioneta)
    2. Elegir tipo de cobertura (basica o todo riesgo)
    3. ingresar el valor del auto

*/

const tipoVehiculo = ['Chico', 'Mediano', 'Camioneta']
const tipoSeguro = ['Básica', 'Todo riesgo']

let opcionVehiculo = prompt(`Seleccion el tipo de automóvil a asegurar
                            1. Chico
                            2. Mediano
                            3. Camioneta`)

let opcionCobertura = prompt(`Seleccione el tipo de cobertura a contratar
                            1. Básica
                            2. Todo riesgo`)
let valorAuto = Number(prompt('Ingrese el valor del vehiculo'))


function cotizadorSeguro(opcionVehiculo, valorAuto, opcionCobertura) {

    let cantidad = 0
    switch (opcionVehiculo) {
        case '1':
            cantidad = valorAuto * 0.002
            break;
        case '2':
            cantidad = valorAuto * 0.005
            break;
        case '3':
            cantidad = valorAuto * 0.009
            break;

        default:
            break;
    };

    let cuotaSeguro = 0;
    if (opcionCobertura == '1') {
        cuotaSeguro = cantidad * 1.3

    } else if (opcionCobertura == '2') {
        cuotaSeguro = cantidad * 1.5
    };

    alert('Tu elección de vehiculo: ' + tipoVehiculo[opcionVehiculo - 1] + '\n' + 'Tu elección de cobertura: ' + tipoSeguro[opcionCobertura - 1] + '\n' + 'El valor de su cobertura mensual es de aproximadamente $' + cuotaSeguro.toFixed(2))
}

cotizadorSeguro(opcionVehiculo, valorAuto, opcionCobertura)



