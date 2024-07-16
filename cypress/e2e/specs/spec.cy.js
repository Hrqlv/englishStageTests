/// <reference types="cypress" />

import CadastroPage from '../pages/spec.page'

describe('Tests Cadastro English Stage - QA Challenge', () => {

  beforeEach(() => {
    cy.visit('https://qastage.buildbox.one/18/cadastro/')
  })

  it('Cadastro com dados válidos', () => {
   //Todos os campos preenchidos corretamente.
    CadastroPage.realizarCadastroDadosValidos()
  })

  it('Campos Obrigatórios em Branco', () => {

  })

  it('Formato de Email Inválido', () => {

  })

  it('Senhas Não Coincidem', () => {

  })

  it('CPF Inválido', () => {

  })

  it('Data de Nascimento Inválida', () => {

  })
})