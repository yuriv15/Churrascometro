// Carne - 400g por pessoa / + de 6 horas - 650
// Cerveja - 1200ml por pessoa / + de 6 horas - 2000ml
// Refrigerante / água - 1000 ml por pessoa / + de 6 horas 1500ml
// Crianças valem por 0.5 

var botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
    let adultos = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;
    let duracao = document.getElementById("duracao").value;
    let carne = 0;
    let cerveja = 0;
    let refri_agua = 0;
    if (duracao <= 6) {
        carne = parseFloat(0.4 * adultos + 0.4 * 0.5 * criancas).toFixed(2);
        cerveja = parseFloat(1.2 * adultos + 1.2 * 0.5 * criancas).toFixed(2);
        refri_agua = parseFloat(adultos + 0.5 * criancas).toFixed(2);
    } else {
        carne = parseFloat(0.65 * adultos + 0.65 * 0.5 * criancas).toFixed(2);
        cerveja = parseFloat(2 * adultos + 2 * 0.5 * criancas).toFixed(2);
        refri_agua = parseFloat(1.5 * adultos + 1.5 * 0.5 * criancas).toFixed(2);
    }

    let qtd_carne = document.getElementById("qtd_carne");
    let qtd_cerveja = document.getElementById("qtd_cerveja");
    let qtd_bebida = document.getElementById("qtd_bebida");

    qtd_carne.innerHTML = "Quantidade de carne: " + carne + " Kg";
    qtd_cerveja.innerHTML = "Quantidade de cerveja: " + cerveja + " L";
    qtd_bebida.innerHTML = "Quantidade de água/refri: " + refri_agua + " L"
}