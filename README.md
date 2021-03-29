# Automação - Open Trivia Database
Este é o repositório que versiona o projeto de automação do site https://opentdb.com/ 

## Tecnologias e Padrões Utilizados
Os testes E2E foram escritos com Gerkin, documentados no código utilizando o Cucumber e implementados com javascript utilizando o Cypress. Dentro do projeto, procurei isolar as camadas, responsabilidades e contextos de cada trecho de código, subdividindo em múltiplos arquivos e utilizando o padrão Page Object a fim de possibilitar uma grande facilidade no reuso de código e manutenibilidade do mesmo.

## Cenários Implementados
Foram implementados 7 cenários, subdivididos em 2 Features. O descritivo de cada cenário pode ser encontrado através dos links a seguir:
- [Cenários de Login](https://github.com/allanzh/AutomacaoOpenTrivia/blob/main/cypress/integration/Login.feature)
- [Cenários de BuscaQuestoes](https://github.com/allanzh/AutomacaoOpenTrivia/blob/main/cypress/integration/BuscaQuestoes.feature)

## Relatórios e Evidências de Execução
Para gerar relatório das execuções feitas e obter dados importantes sobre o sistema testado e o projeto de automação, integrei essa automação ao Cypress Dashboard. Nele podemos ver todos os dados da execução e as evidências que foram geradas.<br/>
[Link para o dashboard do projeto](https://dashboard.cypress.io/projects/pqwrs9)

## Execuções Automatizadas
Este projeto também utiliza o Github Actions. Com ele é possível executar as automações desenvolvidas, sempre que o repositório for atualizado, através de um gatilho implementado que considera as atualizações feitas na branch main, como pode ser observado no [código do workflow](https://github.com/allanzh/AutomacaoOpenTrivia/blob/main/.github/workflows/node.js.yml).<br/>
No mesmo workflow, foi implementado um job para capturar os vídeos de evidência gerados por determinada execução e salvá-los nos artifacts da própria execução, para facilitar a visualização e obtenção destes arquivos.

## Execuções Manuais
Para fazer a execução manual do projeto, siga esses passos:
- Baixe e instale o Node através [deste link](https://nodejs.org/en/).
- Clone o projeto
- Abra o prompt de comando na pasta do projeto e execute o comando `npm i` para instalar as dependências necessárias
- Após a conclusão das instalações, execute o comando `npx cypress run`
- No final da execução você verá uma imagem semelhante a essa:
![Execução com sucesso](https://ibb.co/Wk1gLXL)
- Você pode ver os vídeos gerados pela execução através da pasta `cypress/videos`