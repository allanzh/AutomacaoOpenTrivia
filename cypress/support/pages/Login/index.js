const elements = require('./elements').ELEMENTS;

class Login{
    preencherUsuarioSenha(usuario, senha){
        cy.get(elements.inputUsuario).type(usuario);
        cy.get(elements.inputSenha).type(senha);
    }
    clicarLogin(){
        cy.get(elements.buttonLogin).click();
    }
    verificarFalhaLogin(msgFalha){
        cy.contains(msgFalha);
    }
}

export default new Login();