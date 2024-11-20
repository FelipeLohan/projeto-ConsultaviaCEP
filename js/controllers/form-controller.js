import Address from '../models/address.js'

function State(){
  this.address = new Address()
  this.btnSave = null,
  this.btnClear = null,
  
  this.inputCep = null,
  this.inputLogradouro = null,
  this.inputNumero = null,
  this.inputCidade = null
}

const state = new State()

export function init(){

  state.inputCep = document.forms.novoEndereço.cep
  state.inputLogradouro = document.forms.novoEndereço.logradouro
  state.inputNumero = document.forms.novoEndereço.numero
  state.inputCidade = document.forms.novoEndereço.cidade
  state.btnSave = document.forms.novoEndereço.btnSave
  state.btnClear = document.forms.novoEndereço.btnClear
}