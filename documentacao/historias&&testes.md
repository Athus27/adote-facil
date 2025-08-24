# Histórias de Usuário e Cenários de Teste - Adote Fácil

Este documento especifica os requisitos funcionais do sistema Adote Fácil através de Histórias de Usuário e seus respectivos cenários.

## 1. Gerenciamento de Conta

> **História de Usuário:** Como um novo usuário, eu quero me cadastrar no sistema para que eu possa fazer login e interagir com as funcionalidades.

**Cenário Principal (Cadastro com Sucesso):**
1. **Dado** que o visitante está na página de cadastro.
2. **Quando** ele preenche o formulário com dados válidos (nome, e-mail e senha).
3. **Então** o sistema deve criar a conta e autenticar o usuário.
4. **E** o usuário deve ser redirecionado para a página principal da área logada.

> **História de Usuário:** Como um usuário cadastrado, eu quero fazer login no sistema para que eu possa acessar minha conta.

**Cenário Principal (Login com Sucesso):**
1. **Dado** que um usuário cadastrado está na página de login.
2. **Quando** ele insere seu e-mail e senha corretos.
3. **Então** o sistema deve autenticá-lo e retornar um token de acesso.
4. **E** o usuário deve ser redirecionado para a página principal da área logada.

**Cenário Alternativo (Credenciais Inválidas):**
1. **Dado** que um usuário está na página de login.
2. **Quando** ele tenta fazer login com e-mail ou senha incorretos.
3. **Então** o sistema não deve autenticá-lo e deve exibir uma mensagem de erro "Credenciais inválidas".

## 2. Publicação e Gestão de Anúncios

> **História de Usuário:** Como um usuário logado, eu quero adicionar um novo animal para adoção para que outras pessoas possam encontrá-lo e adotá-lo.

**Cenário Principal (Criação de Anúncio):**
1. **Dado** que o usuário está logado.
2. **Quando** ele acessa a função para adicionar um novo anúncio.
3. **E** preenche o formulário com os dados do animal (nome, tipo, gênero, etc.) e faz upload de até 5 fotos.
4. **E** clica em "Publicar Anúncio".
5. **Então** o sistema deve salvar o anúncio.
6. **E** o novo anúncio deve ser exibido na lista de animais disponíveis.

**Cenário Alternativo (Gerenciar Anúncios):**
1. **Dado** que o usuário está logado.
2. **Quando** ele acessa a página "Meus Anúncios".
3. **Então** o sistema deve exibir uma lista com todos os animais que ele publicou.

**Cenário Alternativo (Atualização de Status):**
1. **Dado** que o usuário está visualizando um de seus anúncios.
2. **Quando** ele marca o animal como "Adotado".
3. **Então** o sistema deve remover o animal da lista pública de animais disponíveis para adoção.

## 3. Busca e Interação

> **História de Usuário:** Como um usuário, eu quero buscar e filtrar animais para que eu possa encontrar o animal ideal para adoção.

**Cenário Principal (Busca com Filtros):**
1. **Dado** que o usuário está na página de busca.
2. **Quando** ele utiliza os filtros (ex: "tipo", "gênero") e digita um nome na busca.
3. **Então** o sistema deve exibir uma lista de animais que correspondem a todos os critérios.

**Cenário Alternativo (Iniciar uma Conversa):**
1. **Dado** que um usuário encontrou um animal de interesse.
2. **Quando** ele clica no anúncio e na opção para iniciar uma conversa.
3. **Então** o sistema deve criar um novo chat entre o interessado e o anunciante.

**Cenário Alternativo (Responder a uma Mensagem):**
1. **Dado** que um anunciante recebeu uma nova mensagem.
2. **Quando** ele acessa sua caixa de mensagens e responde ao interessado.
3. **Então** o sistema deve enviar a mensagem, dando continuidade ao processo de adoção.