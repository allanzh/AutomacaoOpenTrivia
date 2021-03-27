#language: pt
Funcionalidade: Busca no Banco de Questões
    Como usuário, desejo utilizar a função de busca do sistema
    Para que possa encontrar resultados das pesquisas feitas

Cenario: Busca por questão inexistente
    Dado que navego para a página de busca do banco de questões
    E digito "Science: Computers" no campo de busca
    Quando clico no botão de buscar
    Então visualizo uma mensagem de erro com o texto "No questions found."