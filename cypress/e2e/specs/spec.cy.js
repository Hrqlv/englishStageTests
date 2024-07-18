/// <reference types="cypress" />

import CadastroPage from '../pages/spec.page'

describe('Tests Cadastro English Stage - QA Challenge', () => {

  beforeEach(() => {
    cy.visit('https://qastage.buildbox.one/18/cadastro/')
    CadastroPage.clicarEmFazerInscricao()
  })

  it('Cadastro com dados válidos', () => {
   //Todos os campos preenchidos corretamente
    CadastroPage.realizarCadastroDadosValidos()
  })

  it('Campos Obrigatórios em Branco', () => {
    //Deixar cada campo obrigatório em branco um por vez e tentar submeter o formulário
    CadastroPage.validarCamposObrigatorios()
  })

  it('Formato de Email Inválido', () => {
    //Inserir um email com formato inválido
    CadastroPage.realizarValidacaoDeEmailInvalido()
    cy.contains('Email inválido.').should('be.visible');
    cy.contains('Precisa ser email').should('be.visible');
   
  })

  it('Senhas Não Coincidem', () => {
    //Inserir senhas diferentes nos campos de senha e confirmação de senha
    CadastroPage.realizarValidacaoDeSenhasNaoCoincidem()
    cy.contains('As senhas não são iguais.',).should('be.visible');
  })

  it('CPF Inválido', () => {
    //Inserir um CPF com formato inválido
    CadastroPage.realizarValidacaoDeCPFInvalido()
    cy.contains('CPF inválido.',).should('be.visible');
  })

  it('Data de Nascimento Inválida', () => {
    //Inserir uma data de nascimento no futuro ou em um formato inválido
    CadastroPage.realizarValidacaoDeDataNascInvalida()
    cy.contains('Data de nascimento inválida.',).should('be.visible');
  })
})