const calcular = document.getElementById('calcular');

function somar(){
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const resultado = document.getElementById('resultado');

    if(n1 != '' && n2 != '' && n1 != NaN && n2 != NaN){
        let soma = parseFloat(n1) + parseFloat(n2)
        resultado.textContent = soma;
    } else {
        alert('Preencha todos os campos!')
    }
}

calcular.addEventListener('click', somar);

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        const botao = document.querySelector("#calcular");
        botao.click();
    }
})
