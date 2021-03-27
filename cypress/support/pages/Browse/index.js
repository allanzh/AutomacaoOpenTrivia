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
    selecionarTipoPesquisa(tipoPesquisa){
        switch (tipoPesquisa) {
            case "categoria":
                cy.get(elements.selectTipoPesquisa).select('Category');
                break;
            case "questão":
                cy.get(elements.selectTipoPesquisa).select('Question');
                break;
            case "usuário":
                cy.get(elements.selectTipoPesquisa).select('User');
                break;
                    
            default:
                throw new Error("Tipo de Pesquisa não existe")
                break;
        }
    }
    validarQtdItensResultado(){
        cy.get(elements.tableLinhasResultado).should('have.length', 25);
    }
    validarPaginacao(){
        cy.get(elements.ulPaginacao).should('exist').should('be.visible');
    }
}

 export default new Browse();