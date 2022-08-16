const calcula = document.getElementById('calcula');

function somar(){
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const resultado = document.getElementById('resultado');

    if(n1 != '' || n2 != ''){
        let soma = parseFloat(n1) + parseFloat(n2)
        resultado.textContent = soma;
    } else {
        alert('Preencha todos os campos!')
    }
}

calcula.addEventListener('click', somar);

let evento = document.getElementsByClassName('formulario')


for (let i = 0; i < evento.length; i++) {
    evento[i].addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
            e.preventDefault()
            somar();
        }
    })
  }