/// <reference types="cypress" />

Given(/^que navego para a página de busca do banco de questões$/, () => {
	return true;
});

(/^digito "([^"]*)" no campo de busca$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^clico no botão de buscar$/, () => {
	return true;
});

Then(/^visualizo uma mensagem de erro com o texto "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});
