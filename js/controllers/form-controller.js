import Address from "../models/address.js";
import * as addressService from "../services/address-service.js";



function State() {
  this.address = new Address();
  (this.btnSave = null),
    (this.btnClear = null),
    (this.inputCep = null),
    (this.inputLogradouro = null),
    (this.inputNumero = null),
    (this.inputCidade = null);
}

const state = new State();

export function init() {
  state.inputCep = document.forms.novoEndereço.cep;
  state.inputLogradouro = document.forms.novoEndereço.logradouro;
  state.inputNumero = document.forms.novoEndereço.numero;
  state.inputCidade = document.forms.novoEndereço.cidade;
  state.btnSave = document.forms.novoEndereço.btnSave;
  state.btnClear = document.forms.novoEndereço.btnClear;

  state.inputNumero.addEventListener("change", handleInputNumeroChange);
  state.inputCep.addEventListener("change", handleInputCepChange);
  state.btnClear.addEventListener("click", handleBtnClearClick);
  state.btnSave.addEventListener("click", handleBtnSaveClick);
}

//HANDLES

function handleInputNumeroChange(event) {
  if (event.target.value == "") {
    event.target.classList.add("erro-input");
  } else {
    event.target.classList.remove("erro-input");
  }
}

async function handleInputCepChange(event) {
  try{
    event.target.classList.remove("erro-input");
    
    const address = await addressService.findByCep(event.target.value)

    state.inputCidade.value = address.cidade
    state.inputLogradouro.value = address.logradouro
    state.address = address
    state.inputNumero.focus()
  }
  catch (e){
    event.target.classList.add("erro-input");
    inputClean()
  } 
}

function handleBtnClearClick(event) {
  event.preventDefault();
  state.inputCep.value = "";
  state.inputNumero.value = "";
  state.inputCep.focus()
}

async function handleBtnSaveClick(event) {
  try{
    event.preventDefault();
    const address = await addressService.findByCep(state.inputCep.value)
    address.numero = state.inputNumero.value
    state.address = address
  
    console.log(state.address.cep)
  
    console.log(state.address)
  }
  catch (e){
    alert('CEP Inválido')
  }
}

//FUNCTIONS

function inputClean(){
  state.inputLogradouro.value = ''
  state.inputCidade.value = ''
}

