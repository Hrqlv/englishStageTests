// cypress/support/generateData.js
import { faker } from '@faker-js/faker';
const { cpf } = require('cpf-cnpj-validator');

module.exports = {
  generateUserData: () => {
    const nome = faker.name.firstName();
    const sobrenome = faker.name.lastName();
    const dataDeNasc = faker.date.past(30, new Date(2000, 0, 1)).toLocaleDateString('pt-BR');
    const cpfValido = cpf.generate();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    return {
      nome,
      sobrenome,
      dataDeNasc,
      cpf: cpfValido,
      email,
      confirmarEmail: email,
      senha,
      confirmarSenha: senha
    };
  }
};