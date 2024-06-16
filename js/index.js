"use strict"

// Variáveis globais
let entry = 0 // Irá verificar se é a primeira entrada no input
let dot = 0 // Irá verificar se é a primeira entrada de um ponto
let next = 0 // Irá verificar se é a primeira vez que um botão que chama a função Calc() foi chamado
let operator = "P" // Será utilizado para verificação de operador (+ - / *)
let memory = 0 // Será a memória (número mostrado em cima do input txt)

function WriteNumber(btn) {
    const txt = document.getElementById("txtVisor")
    if (entry == 0) {
        if (btn.value != "0") {
            txt.value = btn.value
            entry = 1
        }
    } else {
        txt.value += btn.value
    }

}

    // Aqui limpará apenas o que estiver no visor
function ClearEntry () {
    const txt = document.getElementById("txtVisor")
    txt.value = "0"
    entry = 0
    dot = 0
}

    // Aqui limpará tudo, incluindo o que estiver na memória
function Clear () {
    ClearEntry()
    operator = "P"
    memory = 0
    next = 0
    document.getElementById("memory").innerHTML = memory + " " + operator
}

function VerifyFloat () {
    const txt = document.getElementById("txtVisor")
    if (dot == 0) {
        txt.value += "."
        entry = 1
        dot = 1
    }
}

function ChangeSign () {
    const txt = document.getElementById("txtVisor")
    let number = parseFloat(txt.value)
    if  (parseFloat(txt.value) != 0){
        if (entry == 1) {
            number = -number
            txt.value = number.toString()
        }
    }
}

function Calc(operator, memory) {
    const txt = document.getElementById("txtVisor")
    if (next == 1) {
        if (operator == "+") {
            memory += parseFloat(txt.value)
        }
        else if (operator == "-") {
            memory -= parseFloat(txt.value)
        }
        else if (operator == "X") {
            memory *= parseFloat(txt.value)
        }
        else if (operator == "÷") {
            memory /= parseFloat(txt.value)
        }
    } else {
        memory = parseFloat(txt.value)
    }
    return memory
}

function ShowOp(btn) {
    const txt = document.getElementById("txtVisor")
    memory = Calc(operator, memory)
    operator = btn.value
    next = 1
    document.getElementById("memory").innerHTML = memory + " " + operator
    ClearEntry()


}

function Result() {
    const txt = document.getElementById("txtVisor")
    txt.value = Calc(operator, memory)

    operator = "P"
    memory = 0
    next = 0
    document.getElementById("memory").innerHTML = memory + " " + operator
}
