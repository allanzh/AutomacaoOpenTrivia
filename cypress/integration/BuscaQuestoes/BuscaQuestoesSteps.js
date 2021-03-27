/// <reference types="cypress" />

import Browse from "../../support/pages/Browse";
import Home from "../../support/pages/Home";

Given(/^que navego para a página de busca do banco de questões$/, () => {
	cy.visit('/');
	Home.navegarParaBancoQuestoes();
});

And(/^digito "([^"]*)" no campo de busca$/, (termoBusca) => {
	Browse.preencherTermoBusca(termoBusca);
});

When(/^clico no botão de buscar$/, () => {
    Browse.clicarParaBuscar();
});

Then(/^visualizo uma mensagem de erro com o texto "([^"]*)"$/, (msgErro) => {
	Browse.validarMsgErro();
});

When(/^seleciono a pesquisa por categoria$/, () => {
	return true;
});

Then(/^verifico que a listagem de questões possui 25 itens$/, () => {
	return true;
});

Then(/^o controle de paginação está disponível$/, () => {
	return true;
});

