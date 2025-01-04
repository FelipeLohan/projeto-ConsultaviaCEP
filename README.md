# ViaCEP

## OBJETIVO:

Aplicação web onde o usuário consegue fazer uma consulta usando um número de CEP, e o aplicativo retorna informações de endereço.

## ESTRUTURA DE PASTAS:

- `./js/services`: responsável pela requisição e processamento dos serviços.

- `./js/models`: responsável por armazenar as entidades de negócio.

- `./js/controllers`: responsável por guardar os controladores do site, tudo que o usuário poder interagir, será colocado aqui.

- `./js/services/exceptions`: responsável pelo controle de excessões.

## DESIGN PATTERN:

Usei um Design Pattern chamado "State Managment" ou em português, "Gerenciamento de Estado" e "Module Pattern", usando o metódo `State()` para armazenar o estado das variáveis, e o `init()` para inicializar elas, encapsulando o código, deixando ele mais legivel, e colocando a responsabilidade de cada um, em uma função ou modulo diferente.

### Vantagens:

- Encapsulamento
- Fácil testibilidade
- Centralização do estado
- Reutilização do código
- Separação de responsabilidades
- Organização e leitura do código
- Independência de Frameworks
- Código feito para escalar

## API's USADAS:

- [viaCep](https://viacep.com.br/)

## Deploy:

- [Consulta CEP](https://felipelohan.github.io/projeto-ConsultaviaCEP/)
