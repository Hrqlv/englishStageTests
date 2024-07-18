const { generateUserData } = require('../../support/generateData');
const userData = generateUserData();

class CadatroPage {
  
    constructor() {

    }

    clicarEmFazerInscricao() {
        cy.get('[data-cy="button-btn-enroll"]').click()
    }

    realizarCadastroDadosValidos() {
        cy.get('input[id="signup-personal-data-firstName"]').type(userData.nome)
        cy.get('input[id="signup-personal-data-lastName"]').type(userData.sobrenome)
        cy.get('input[id="signup-personal-data-birthDate"]').type(userData.dataDeNasc)
        cy.get('input[id="signup-personal-data-cpf"]').type(userData.cpf)
        cy.get('input[id="signup-personal-data-email"]').type(userData.email)
        cy.get('input[id="signup-personal-data-email-confirm"]').type(userData.confirmarEmail)
        cy.get('input[id="signup-personal-data-password"]').type(userData.senha)
        cy.get('input[id="signup-personal-data-password-confirm"]').type(userData.confirmarSenha)
        cy.get('button[id="signup_submit_button_1"]').click()
    }

    // Função para lidar com alertas
    handleAlert() {
        cy.on('window:alert', (text) => {
            // Verifica o texto do alerta
            expect(text).to.contains('Preencha este campo.');
        });
    }

    validarCamposObrigatorios() {
        // Preencher o formulário com dados válidos
        this.realizarCadastroDadosValidos();

        // Campos obrigatórios a serem testados
        const camposObrigatorios = [
            'input[id="signup-personal-data-firstName"]',
            'input[id="signup-personal-data-lastName"]',
            'input[id="signup-personal-data-birthDate"]',
            'input[id="signup-personal-data-cpf"]',
            'input[id="signup-personal-data-email"]',
            'input[id="signup-personal-data-email-confirm"]',
            'input[id="signup-personal-data-password"]',
            'input[id="signup-personal-data-password-confirm"]',
        ];

        camposObrigatorios.forEach(campo => {
            // Manuseia o alerta
            this.handleAlert();

            // Limpa o campo obrigatório e tenta submeter o formulário
            cy.get(campo).clear();
            cy.get('button[id="signup_submit_button_1"]').click();
        });
    }

    realizarValidacaoDeEmailInvalido() {
        cy.get('input[id="signup-personal-data-firstName"]').type(userData.nome)
        cy.get('input[id="signup-personal-data-lastName"]').type(userData.sobrenome)
        cy.get('input[id="signup-personal-data-birthDate"]').type(userData.dataDeNasc)
        cy.get('input[id="signup-personal-data-cpf"]').type(userData.cpf)
        cy.get('input[id="signup-personal-data-email"]').type('email-invalido')
        cy.get('input[id="signup-personal-data-email-confirm"]').type('email-invalido')
        cy.get('input[id="signup-personal-data-password"]').type(userData.senha)
        cy.get('input[id="signup-personal-data-password-confirm"]').type(userData.confirmarSenha)
    }

    realizarValidacaoDeSenhasNaoCoincidem() {
        cy.get('input[id="signup-personal-data-firstName"]').type(userData.nome)
        cy.get('input[id="signup-personal-data-lastName"]').type(userData.sobrenome)
        cy.get('input[id="signup-personal-data-birthDate"]').type(userData.dataDeNasc)
        cy.get('input[id="signup-personal-data-cpf"]').type(userData.cpf)
        cy.get('input[id="signup-personal-data-email"]').type(userData.email)
        cy.get('input[id="signup-personal-data-email-confirm"]').type(userData.confirmarEmail)
        cy.get('input[id="signup-personal-data-password"]').type(userData.senha)
        cy.get('input[id="signup-personal-data-password-confirm"]').type('senha123')
    }

    realizarValidacaoDeCPFInvalido() {
        cy.get('input[id="signup-personal-data-firstName"]').type(userData.nome)
        cy.get('input[id="signup-personal-data-lastName"]').type(userData.sobrenome)
        cy.get('input[id="signup-personal-data-birthDate"]').type(userData.dataDeNasc)
        cy.get('input[id="signup-personal-data-cpf"]').type('123456')
        cy.get('input[id="signup-personal-data-email"]').type(userData.email)
        cy.get('input[id="signup-personal-data-email-confirm"]').type(userData.confirmarEmail)
        cy.get('input[id="signup-personal-data-password"]').type(userData.senha)
        cy.get('input[id="signup-personal-data-password-confirm"]').type(userData.confirmarSenha)
    }

    realizarValidacaoDeDataNascInvalida() {
        cy.get('input[id="signup-personal-data-firstName"]').type(userData.nome)
        cy.get('input[id="signup-personal-data-lastName"]').type(userData.sobrenome)
        cy.get('input[id="signup-personal-data-birthDate"]').type('2607200')
        cy.get('input[id="signup-personal-data-cpf"]').type(userData.cpf)
        cy.get('input[id="signup-personal-data-email"]').type(userData.email)
        cy.get('input[id="signup-personal-data-email-confirm"]').type(userData.confirmarEmail)
        cy.get('input[id="signup-personal-data-password"]').type(userData.senha)
        cy.get('input[id="signup-personal-data-password-confirm"]').type(userData.confirmarSenha)
    }
  }
  
  export default new CadatroPage();
  