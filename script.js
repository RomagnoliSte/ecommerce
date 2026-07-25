const form = document.querySelector("form");

const nome = document.getElementById("nome");
const CPF = document.getElementById("CPF");

const CEP = document.getElementById("CEP");
const logradouro = document.getElementById("rua");
const num_endereco = document.getElementById("numero");
const complemento = document.getElementById("complemento");
const UF = document.getElementById("UF");
const estado = document.getElementById("estado");
const bairro = document.getElementById("bairro");

const BuscarCEP = (CEP) => {

    const API_URL = `https://viacep.com.br/ws/${CEP}/json/`;

    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        logradouro.value = data.logradouro
        bairro.value = data.bairro
        estado.value = data.estado
        UF.value = data.uf
    })
    .catch(err => {
        logradouro.value = 'CEP não encontrado'
        bairro.value = 'CEP não encontrado'
        UF.value = 'CEP não encontrado'           
        estado.value = 'CEP não encontrado'   
    })
}

CEP.addEventListener("blur", function(event){
    BuscarCEP(CEP.value)
    event.preventDefault()
})

form.addEventListener("submit", function(event) {
    
    if (!form.checkValidity()) {
        event.preventDefault();
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    alert("Solicitação de Informações enviada com sucesso!");
});