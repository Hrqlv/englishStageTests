const { gerarDadosUsuario } = require('../../support/gerarDadosCadastro');
const userData = gerarDadosUsuario();

class CadatroPage {
  
    constructor() {
        this.inputNome = 'input[id="signup-personal-data-firstName"]',
        this.inputSobrenome = 'input[id="signup-personal-data-lastName"]',
        this.inputDataNasc = 'input[id="signup-personal-data-birthDate"]',
        this.inputCPF = 'input[id="signup-personal-data-cpf"]',
        this.inputEmail = 'input[id="signup-personal-data-email"]',
        this.inputConfirmarEmail = 'input[id="signup-personal-data-email-confirm"]',
        this.inputSenha = 'input[id="signup-personal-data-password"]',
        this.inputConfirmarSenha = 'input[id="signup-personal-data-password-confirm"]',
        this.selectButton = 'button[aria-controls="dropdown-button-1"]',
        this.btnCadastrar = 'button[id="signup_submit_button_1"]',
        this.inputCEP = 'input[id="signup-address-cep"]',
        this.numEndereco = 'input[id="signup-address-number"]',
        this.complemento = 'input[id="signup-address-complement"]'
    }

    clicarEmFazerInscricao() {
        cy.get('[data-cy="button-btn-enroll"]').click()
    }

    realizarCadastroDadosPessoais() {
        cy.get(this.inputNome).type(userData.nome)
        cy.get(this.inputSobrenome).type(userData.sobrenome)
        cy.get(this.inputDataNasc).type(userData.dataDeNasc)
        cy.get(this.inputCPF).type(userData.cpf)
        cy.get(this.inputEmail).type(userData.email)
        cy.get(this.inputConfirmarEmail).type(userData.confirmarEmail)
        cy.get(this.inputSenha).type(userData.senha)
        cy.get(this.inputConfirmarSenha).type(userData.confirmarSenha)
        cy.get(this.selectButton).click();
        cy.contains('span', 'Beginner').click();
        cy.get('input[id="signup-personal-data-lgpd"]').click()
        cy.get(this.btnCadastrar).click()
    }

    realizarDadosDeEndereco() {
        this.realizarCadastroDadosPessoais()
        cy.get(this.inputCEP).type('18401220')
        cy.get(this.numEndereco).type('669')
        cy.get(this.complemento).type('Casa')
        cy.get('button[id="signup_submit_button_3"]').click()
        this.validarMensagemFinal()
    }

    handleAlert() {
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Preencha este campo.');
        });
    }

    validarCamposObrigatorios() {
        this.realizarCadastroDadosPessoais();

        const camposObrigatorios = [
            this.inputNome,
            this.inputSobrenome,
            this.inputDataNasc,
            this.inputCPF,
            this.inputEmail,
            this.inputConfirmarEmail,
            this.inputSenha,
            this.inputConfirmarSenha,
        ];

        camposObrigatorios.forEach(campo => {
            this.handleAlert();

            cy.get(campo).clear();
            cy.get(this.selectButton).click();
            cy.contains('span', 'Beginner').click();
            cy.get('input[id="signup-personal-data-lgpd"]').click()
            cy.get(this.btnCadastrar).click()
        });
    }

    realizarValidacaoDeEmailInvalido() {
        cy.get(this.inputNome).type(userData.nome)
        cy.get(this.inputSobrenome).type(userData.sobrenome)
        cy.get(this.inputDataNasc).type(userData.dataDeNasc)
        cy.get(this.inputCPF).type(userData.cpf)
        cy.get(this.inputEmail).type('email-invalido')
        cy.get(this.inputConfirmarEmail).type('email-invalido')
        cy.get(this.inputSenha).type(userData.senha)
        cy.get(this.inputConfirmarSenha).type(userData.confirmarSenha)
    }

    realizarValidacaoDeSenhasNaoCoincidem() {
        cy.get(this.inputNome).type(userData.nome)
        cy.get(this.inputSobrenome).type(userData.sobrenome)
        cy.get(this.inputDataNasc).type(userData.dataDeNasc)
        cy.get(this.inputCPF).type(userData.cpf)
        cy.get(this.inputEmail).type(userData.email)
        cy.get(this.inputConfirmarEmail).type(userData.confirmarEmail)
        cy.get(this.inputSenha).type(userData.senha)
        cy.get(this.inputConfirmarSenha).type('senha123')
    }

    realizarValidacaoDeCPFInvalido() {
        cy.get(this.inputNome).type(userData.nome)
        cy.get(this.inputSobrenome).type(userData.sobrenome)
        cy.get(this.inputDataNasc).type(userData.dataDeNasc)
        cy.get(this.inputCPF).type('123456')
        cy.get(this.inputEmail).type(userData.email)
        cy.get(this.inputConfirmarEmail).type(userData.confirmarEmail)
        cy.get(this.inputSenha).type(userData.senha)
        cy.get(this.inputConfirmarSenha).type(userData.confirmarSenha)
    }

    realizarValidacaoDeDataNascInvalida() {
        cy.get(this.inputNome).type(userData.nome)
        cy.get(this.inputSobrenome).type(userData.sobrenome)
        cy.get(this.inputDataNasc).type('2607200')
        cy.get(this.inputCPF).type(userData.cpf)
        cy.get(this.inputEmail).type(userData.email)
        cy.get(this.inputConfirmarEmail).type(userData.confirmarEmail)
        cy.get(this.inputSenha).type(userData.senha)
        cy.get(this.inputConfirmarSenha).type(userData.confirmarSenha)
    }

    validarMensagemFinal() {
        cy.contains('Thank you for').should('be.visible');
    }
  }
  
  export default new CadatroPage();
  