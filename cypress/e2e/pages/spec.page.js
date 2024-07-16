const { generateUserData } = require('../../support/generateData');
const userData = generateUserData();

class CadatroPage {
  
    constructor() {

    }

    realizarCadastroDadosValidos() {
        cy.get('[data-cy="button-btn-enroll"]').click()
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
  }
  
  export default new CadatroPage();
  