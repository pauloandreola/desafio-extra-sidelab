# desafio-extra-sidelab
Desafio extra criando sistema de login


## Sistema de login

PARTE 01

### Funcionalidades:

- Banco em memória
    - Array de users, com no mínimo 5 itens, que cada item deve ter pelo menos os seguintes campos: id, email, password, name

- Rota de login
    - Retorna access_token e refresh_token
- Middleware de autenticação
    - Verifica se o token é válido
- Rota privada para buscar informações do usuário
    - Apenas o próprio usuário pode ver suas informações
- Rota de refresh token
    - Com base no refresh token, gerar um novo token
    

### Observações

- Pode utilizar express
- Utilzar Typescript
- Utilizar ESLint para deixar o código formatado, de preferência utilizar as configs do template: [https://github.com/sidelab-development/function_app_template/blob/main/.eslintrc.json](https://github.com/sidelab-development/function_app_template/blob/main/.eslintrc.json)
- Organizar o código em pastas (ex: controllers, providers, repositories, etc)
- Utilizar classes para as implementações

PARTE 02

## Melhorias do Desafio Extra #1

Essa segunda parte conterá algumas implementações e melhorias no desafio anterior. São elas:

- Adicionar etapa de criptografia e descriptografia das senhas
- Adicionar tratamento de exceções e erros customizados (utilizando exceptions customizadas com classes)
    
    Exemplo:

/*  Lançando exception customizada */
throw new UserNotFoundException()

/* Tratando exceção */
try {
	// codigo q lança exceção
} catch (e) {
	// tratar exceção e retornar para o usuário
}

PARTE 03

## Melhorias do Desafio Extra #2

Essa terceira parte conterá algumas implementações e melhorias no desafio anterior. São elas:

- Adicionar autorização baseada em *roles*, ou melhor, cargos.
    
    Exemplo:
    
    - Digamos que os usuarios da sua aplicação tenha 2 cargos: admin e user.
    - Admin terá mais privilégios que user, como acessar rotas privadas, etc
    - Exemplo de código:

// Rota que apenas admins podem acessar
"/admin"

// Rota que qualquer usuário (inclusive admins) pode acessar
"/user"

Obs: não precisa necessariamente usar os cargos e rotas do exemplo, você pode criar outros e implementar suas próprias regras de acesso.