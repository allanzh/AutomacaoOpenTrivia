const elements = require('./elements').ELEMENTS;

class Home{
    navegarParaBancoQuestoes(){
        cy.get(elements.buttonBrowse).first().click();
    }
}

export default new Home();