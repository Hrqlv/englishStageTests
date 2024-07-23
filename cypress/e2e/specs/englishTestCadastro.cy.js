/// <reference types="cypress" />

import CadastroPage from '../pages/englishTestCadastro.page'

describe('Tests Cadastro English Stage - QA Challenge', () => {
  beforeEach(() => {
    cy.visit('/')
    CadastroPage.clicarEmFazerInscricao()
  })

  describe('Dados Pessoais de acesso e de Endereço', () => {
  it('Cadastro com dados pessoais válidos', () => {
    //Todos os campos preenchidos corretamente
    CadastroPage.realizarCadastroDadosPessoais()
  })

  it('Realizados dados de endereço válidos', () => {
    //Todos os campos preenchidos corretamente
    CadastroPage.realizarDadosDeEndereco()
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

  it('Formato de Email ja existente', () => {
    //Inserir um email ja existente
    CadastroPage.realizarValidacaoDeEmailJaExistente()
    cy.contains('Este email já está em uso.').should('be.visible');
  })

  it('Senhas Não Coincidem', () => {
    //Inserir senhas diferentes nos campos de senha e confirmação de senha
    CadastroPage.realizarValidacaoDeSenhasNaoCoincidem()
    cy.contains('As senhas não são iguais.',).should('be.visible');
  })

  it('CPF Inválido', () => {
    //Inserir um cpf com formato inválido
    CadastroPage.realizarValidacaoDeCPFInvalido()
    cy.contains('CPF inválido.',).should('be.visible');
  })

  it('CPF ja existente', () => {
    //Inserir um cpf ja existente
    CadastroPage.realizarValidacaoDeCPFexistente()
    cy.contains('Este CPF já está em uso.',).should('be.visible');
  })

  it('Data de Nascimento Inválida', () => {
    //Inserir uma data de nascimento no futuro ou em um formato inválido
    CadastroPage.realizarValidacaoDeDataNascInvalida()
    cy.contains('Data de nascimento inválida.',).should('be.visible');
  })
})
})