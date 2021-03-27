#language: pt
Funcionalidade: Busca no Banco de Questões
    Como usuário, desejo utilizar a função de busca do sistema
    Para que possa encontrar resultados das pesquisas feitas

Cenario: Busca por questão inexistente
    Given que navego para a página de busca do banco de questões
    And digito "Science: Computers" no campo de busca
    When clico no botão de buscar
    Then visualizo uma mensagem de erro com o texto "No questions found."