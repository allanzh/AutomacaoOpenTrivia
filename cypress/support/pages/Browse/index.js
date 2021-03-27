const elements = require('./elements').ELEMENTS;

class Browse {
    preencherTermoBusca(termoBusca){
        cy.get(elements.labelPesquisa).type(termoBusca);
    }
    clicarParaBuscar(){
        cy.get(elements.buttonBuscar).click();
    }
    validarMsgErro(msgErro){
        cy.get(elements.alertMsgErro).should('have.text', msgErro);
    }
}

 export default new Browse();