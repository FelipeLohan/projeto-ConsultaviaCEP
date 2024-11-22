import Address from "../models/address.js";
import * as addressService from "../services/address-service.js";
import * as listController from "./list-controller.js";

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
  state.inputNumero.addEventListener("keyup", handleInputNumeroKeyUp);
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
    state.address.numero = event.target.value;
  }
}

function handleInputNumeroKeyUp(event) {
  state.address.numero = event.target.value;
}

async function handleInputCepChange(event) {
  try {
    event.target.classList.remove("erro-input");

    const address = await addressService.findByCep(event.target.value);

    state.inputCidade.value = address.cidade;
    state.inputLogradouro.value = address.logradouro;
    state.address = address;
    state.inputNumero.focus();
  } catch (e) {
    event.target.classList.add("erro-input");
    addressClean();
    inputClean();
  }
}

function handleBtnClearClick(event) {
  event.preventDefault();
  state.inputCep.value = "";
  state.inputNumero.value = "";
  state.inputCep.focus();
}

async function handleBtnSaveClick(event) {
  event.preventDefault();
  state.address.numero = state.inputNumero.value
  const errors = addressService.getErrors(state.address);
  const keys = Object.keys(errors)
  console.log(keys)
  console.log(errors)
  
  if(keys.length > 0){
    alert('ALGUM CAMPO INVÁLIDO')
  } else {
    listController.addCard(state.address);
    inputClean()
  }
  console.log(state.address);
  
  // inputClean()
}

//FUNCTIONS

function inputClean() {
  state.inputLogradouro.value = "";
  state.inputCidade.value = "";
}

function addressClean() {
  state.address.cep = null;
  state.address.cidade = null;
  state.address.logradouro = null;
  state.address.logradouro = null;
}
