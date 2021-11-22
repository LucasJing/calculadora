const display = document.getElementById("display");
var numeroNovo = true
var operador;
var numeroanterior;

function inserirNumero(numero) {
    atualizardisplay(numero);
}

function atualizardisplay(numero) {
    if (numeroNovo == true) {
        display.value = numero;
        numeroNovo = false;
    } else {
        display.value += numero;
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function selecionaroperacao(operacaoselecionada) {
    if (!numeroNovo) {
        calcular();
        numeroNovo = true;
        operador = operacaoselecionada;
        numeroanterior = Number(display.value);
    }
}

function operacaopendente() {
    return operador !== undefined;
}

function calcular() {
    if (operacaopendente()) {
        var numeraoatual = Number(display.value);
        numeroNovo = true;
        if (operador == "+") {
            atualizardisplay(numeroanterior + numeraoatual);
        } else if (operador == "-") {
            atualizardisplay(numeroanterior - numeraoatual);
        } else if (operador == "*") {
            atualizardisplay(numeroanterior * numeraoatual);
        } else if (operador == "/") {
            atualizardisplay(numeroanterior / numeraoatual);
        }

    }
}

function chamarigual() {
    calcular();
    operador = undefined
}

function limpar() {
    display.value = "0";
    numeroNovo = true;
    numeroanterior = undefined;
    operador = undefined;
}

function inserirdecimal() {
    if (display.value.indexOf(".") == -1) {
        if (display.value.length > 0) {
            atualizardisplay('.');
        } else {
            atualizardisplay('0.')
        }
    }
}

function tecla(event) {

    switch (event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            inserirNumero(event.key)
            break;
        case 'delete':
            backspace();
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            selecionaroperacao(event.key)
            break;
        case 'c':
            limpar();
            break;
        case '=':
            chamarigual();
            break;
        case '.':
        case ',':
            inserirdecimal();
            break;

    }
}