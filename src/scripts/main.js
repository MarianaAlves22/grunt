const form = document.getElementById('form-contato');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    somaDosNumeros();
    somaTotal();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`Este contato: ${inputNomeContato.value} já existe`); 
    } else {
        nome.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`; 
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function somaDosNumeros() {
    const fimLista = somaTotal();
    document.getElementById('fim-da-lista').innerHTML = fimLista;
}

function somaTotal() {
    let somaNumero = 0;

    for (let i = 0; i < numero.length; i++) {
        somaNumero += numero[i];
    }

    const tot = numero.length;
    return numero.length;
}