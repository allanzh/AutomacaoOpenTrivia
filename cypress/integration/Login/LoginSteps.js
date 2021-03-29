/// <reference types="cypress" />

import Home from "../../support/pages/Home";
import Login from "../../support/pages/Login";

Given(/^que navego para a página de login do banco de questões$/, () => {
	cy.visit('/');
    Home.navegarParaLogin();
});

And(/^digito "([^"]*)" e "([^"]*)" nos campos respectivos$/, (usuario,senha) => {
	Login.preencherUsuarioSenha(usuario, senha);
});

When(/^clico no botão Sign In$/, () => {
	Login.clicarLogin();
});

Then(/^verifico a seguinte mensagem de erro "([^"]*)"$/, (msgFalha) => {
	Login.verificarFalhaLogin(msgFalha);
});

Then(/^verifico que o "([^"]*)" foi logado com sucesso$/, (usuario) => {
	Home.conferirNomeUsuario(usuario);
});


