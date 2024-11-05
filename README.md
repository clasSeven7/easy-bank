<h1 align="center">
  EasyBank
</h1>

<div align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/clasSeven7/easy-bank.svg" />
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/clasSeven7/easy-bank.svg" />
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/clasSeven7/easy-bank.svg" />

  <a href="https://github.com/clasSeven7/easy-bank/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/clasSeven7/easy-bank.svg" />
  </a>
  
  <a href="https://github.com/clasSeven7/easy-bank/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/clasSeven7/easy-bank.svg" />
  </a>
</div>

<div align="center">
  <img src=".github/preview.png" width="100%"/>
</div>

### 📖 Sobre

**EasyBank** é uma plataforma de cartões de credito volta para pessoas que desejam ter um cartão sem burocracia e sem anuidade e com um limite de crédito que cabe no seu bolso. Ele vai facilitar a vida de muitas pessoas que não tem acesso a um cartão de crédito convencional.

### Funcionalidades

- **Cadastro de Usuário:** Cadastre-se na plataforma para ter acesso a um cartão de crédito.
- **Solicitação de Cartão:** Solicite um cartão de crédito e aguarde a aprovação.
- **Aprovação de Cartão:** Aprovação do cartão de crédito após análise de crédito.
- **Limite de Crédito:** Definição do limite de crédito do cartão aprovado.
- **Fatura:** Acompanhe a fatura do seu cartão de crédito.

### Tecnologias Utilizadas

- **Django:** Framework web em Python que promove um desenvolvimento rápido e design limpo.
- **Django Rest Framework:** Conjunto de ferramentas para construir APIs web.
- **PostgreSQL:** Banco de dados relacional robusto com suporte a transações ACID.
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript:** Superset JavaScript que adiciona tipagem estática ao código.

### 🚀 Instalação

#### Passos para instalação

**1. Clone o repositório:**

```bash
  git clone https://github.com/clasSeven7/easy-bank.git
  cd easy-bank
```

- **backend:** O servidor de desenvolvimento do Django rodando na porta `8000`.
- **frontend:** O servidor de desenvolvimento do React rodando na porta `5174`.

**3. Acesse o projeto:**

Abra o navegador e vá para `http://localhost:8000` para acessar a aplicação.

**3. Instale as dependências:**

```bash
pip install -r requirements.txt
```

**4. Aplique as migrações:**

```bash
python manage.py migrate
```

**5. Crie um superusuário para acessar a interface de administração do Django:**

```bash
python3 manage.py createsuperuser
```

**6. Execute o servidor de desenvolvimento:**

```bash
python3 manage.py runserver
```

**7. Acesse a aplicação:**

- Acesse `http://127.0.0.1:8000/`.
- A interface de administração estará em `http://127.0.0.1:8000/admin/`.

### 🖥 Endpoints da API

A aplicação possui uma API RESTful para gerenciar links. Abaixo alguns dos endpoints:

- `GET /api/links/`: Recupera todos os links.
- `POST /api/links/`: Cria um novo link.
- `GET /api/links/{id}/`: Recupera um link específico.
- `PUT /api/links/{id}/`: Atualiza um link específico.
- `DELETE /api/links/{id}/`: Exclui um link específico.

#### Exemplos de Requisições

**Criar um Novo Link:**

```bash
curl -X POST http://127.0.0.1:8000/api/links/ -H "Content-Type: application/json" -d '{"url": "https://exemplo.com", "description": "Descrição do link"}'
```

**Recuperar Todos os Links:**

```bash
curl http://127.0.0.1:8000/api/links/
```

### 🔍 Testes

A aplicação inclui uma suíte de testes para verificar a integridade das funcionalidades.

**Dependências para Testes:**

- Django
- Django REST Framework
- Django REST Framework Simple JWT (para autenticação)

#### Descrição dos Testes

A classe `PostAPITestCase` realiza os seguintes testes:

- **Criação de Post:** Verifica se um post pode ser criado por um usuário autenticado.
- **Recuperação de Post:** Testa se um post existente pode ser recuperado.
- **Atualização de Post:** Valida se um post pode ser atualizado.
- **Exclusão de Post:** Confirma que um post pode ser excluído.
- **Criação de Post sem Autenticação:** Garante que a criação de um post é negada sem autenticação.

#### Executando Testes

Execute os testes com o comando:

```bash
python3 manage.py test
```

### 🚀 Como Contribuir

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie um novo branch `(git checkout -b feature/NovaFuncionalidade)`.
3. Faça suas alterações.
4. Commit suas alterações `(git commit -m 'Adicionar nova funcionalidade')`.
5. Envie para o branch `(git push origin feature/NovaFuncionalidade)`.
6. Abra um pull request
