const elements = require('./elements').ELEMENTS;

class Home{
    navegarParaBancoQuestoes(){
        cy.get(elements.buttonBrowse).first().click();
    }
    navegarParaLogin(){
        cy.get(elements.buttonLogin).first().click();
    }
    conferirNomeUsuario(nomeUsuario){
        cy.contains(nomeUsuario);
    }
}

export default new Home();