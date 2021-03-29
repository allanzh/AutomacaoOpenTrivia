#language: pt
Funcionalidade: Login
    Como usuário, desejo utilizar a função de Login do sistema
    Para que possa acessar as funções logadas

Esquema do Cenário: Login com credenciais inválidas
    Dado que navego para a página de login do banco de questões
    E digito "<usuario>" e "<senha>" nos campos respectivos
    Quando clico no botão Sign In
    Então verifico a seguinte mensagem de erro "ERROR! Logging In Failed."

    Exemplos:
    | usuario       | senha         |
    | xpto          | 1122          |
    | cinoyi3240    | senhainvalida |

Esquema do Cenário: Login com credenciais válidas
    Dado que navego para a página de login do banco de questões
    E digito "<usuario>" e "<senha>" nos campos respectivos
    Quando clico no botão Sign In
    Então verifico que o "<usuario>" foi logado com sucesso

    Exemplos:
    
    | usuario       | senha         |
    | cinoyi3240    | 123456        |