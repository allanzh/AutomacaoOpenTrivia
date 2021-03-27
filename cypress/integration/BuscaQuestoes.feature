#language: pt
Funcionalidade: Busca no Banco de Questões
    Como usuário, desejo utilizar a função de busca do sistema
    Para que possa encontrar resultados das pesquisas feitas entre as questões cadastradas

Cenário: Busca por questão inexistente
    Dado que navego para a página de busca do banco de questões
    E digito "Science: Computers" no campo de busca
    Quando clico no botão de buscar
    Então visualizo uma mensagem de erro com o texto "No questions found."

    Cenário: Busca por categoria
    Dado que navego para a página de busca do banco de questões
    E digito "Science: Computers" no campo de busca
    E seleciono a pesquisa por "categoria"
    Quando clico no botão de buscar
    Então verifico que a listagem de questões possui 25 itens
    E o controle de paginação está disponível