/// <reference types="cypress" />

Given(/^que navego para a página de busca do banco de questões$/, () => {
	cy.visit('/');
    cy.get('a[href$="browse.php"]').first().click();
});

And(/^digito "([^"]*)" no campo de busca$/, (termoBusca) => {
	cy.get('#query').type(termoBusca);
});

When(/^clico no botão de buscar$/, () => {
    cy.get('.form-inline button').click();
});

Then(/^visualizo uma mensagem de erro com o texto "([^"]*)"$/, (msgErro) => {
	cy.get('.alert').should('have.text', msgErro);
});
