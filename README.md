SISTEMA PARA CRIAÇÃO E GERENCIAMENTO DE EVENTOS

1. PERSONAS :
Administrador Global

Responsável pelo gerenciamento geral da plataforma.

Cadastrar usuários administrativos;
Cadastrar eventos;
Editar e excluir eventos;
Acessar dashboard;
Gerenciar usuários administrativos.

Organizador

Responsável pelo gerenciamento dos próprios eventos.

Cadastrar eventos;
Editar eventos;
Excluir eventos;
Visualizar informações relacionadas aos seus eventos.leitor: somente ver dashboard

Leitor

Usuário administrativo com acesso somente para consulta.

Visualizar dashboard;
Visualizar informações dos eventos;
Não possui permissão para alteração de dados.

Usuário

Participante da plataforma.

Criar sua própria conta;
Visualizar eventos;
Consultar detalhes dos eventos;
Inscrever-se em eventos;
Consultar suas inscrições;
Cancelar sua inscrição.


2. PAGINA ADIMINSITRATIVA:
2.1 LOGIN
usuário/email
senha
botão de login
botão para cadastro de organizador

2.2 DASHBOARD:
quantidade de eventos 
quantidade de usuários
eventos com mais cadastros
quantidade de inscrição

Sidebar para navegação:
Dashboard
Administradores/usuários
eventos
inscrições

Opções variam de acordo com o perfil

3 CADASTRO DE USUARIO(admin):
Disponível para master admin
campos:
1. Nome
2. e-mail
3. Senha
4.Perfil de acesso

perfis: 
administrador Global
Organizador
Leitor

4. CADASTRO ORGANIZADOR
A Plataforma disponibilizaraá uma opção de cadastro específica para organizadores. Cadastro automaticamente atrelado ao perfil de organizador, não pdoendo alterar durante o cadastro

1. Nome
2. Usuario/E-mail
3. Senha

4. CADASTRO DE EVENTOS
Disponível para Administrador Global e Organizador

Campos:

1.  Nome do evento
2.  Tipo do evento (físico ou remoto)
3.  palestrante/organizador
4.  tema
5. local(quando aplicavel)
6. endereço (quando aplicável)
7.  Data
8.  Horario
9.  Quantidade de vagas
10. Descrição

Botao:

Cadastrar evento

Vincula automaticamente o evento ao usuário do organizador.

5. GERENCIAMENTO DE EVENTOS
pagina administrativa com todos os eventos

opções:
 Visualizar
 Editar
 Excluir

Administrador Global pode gerenciar todos os eventos

Organizador poderá somente, gerenciar seus eventos

6. PÁGINA DO USUÁRIO

6.1 HOME
Pagina pública da plataforma

oferece uma vitrine com os principais eventos, mostrando as seguintes informações:

Nome
Tema
Local
Data

Cada evento possui a opção

Saiba Mais

A barra superior apresenta

Login
Cadastre-se
Eventos

O usuário poderá visualizar eventos sem estar cadastrado.

7. PAGINA DO EVENTO
Apresenta as informações cadastradas pelo organizador/administrador

Nome
Tema
Descrição
Palestrante/Organizador
Data
Horário
tipo do evento
Vagas disponíveis

Botão:

Inscreva-se

Usuário autenticado:

Ao clicar em inscreva-se, o sistema cria uma inscrição vinculada ao perfil do usuário autenticado na plataforma e dispara um pop-up informando ao usuário que o cadastro foi feito com sucesso.

Usuário não autenticado:

Ao clicar em inscreva-se, o sistema solicita a autenticação do usuário com os seguintes botões:

Login, caso já possua cadastro.
Cadastro caso ainda não possua cadastro.

Após a autenticação, o usuário poderá seguir com a sua inscrição

8. MINHAS INSCRIÇÕES:

Pagina onde o usuário poderá consultar os eventos que está inscrito:

Cada evento consta a seguinte informação:

Nome
Data
Local
Tema
Status da inscrição

Possibilidade:

Ver detalhes do evento
Cancelar inscrição

MAPEANDO A JORNADA DO USUÁRIO:

Jornada 1: Administrador geral

Autenticação
Se autentica com as suas credenciais.
2. Dashboard
Acompanha indicadores gerais da plataforma, como:
Quantidade de eventos;
Quantidade de usuários;
Quantidade de inscrições;
Eventos com maior número de inscritos.

3. Gerenciamento de usuário
Realiza o cadastro e gerenciamento dos usuários administrativos:

Administradores;
Organizadores;
Usuários Read Only.

4. Gerenciamento de eventos
Visualiza e gerencia os eventos cadastrados, podendo:

Visualizar;
Editar;
Excluir.

Jornada 2: Organizador

Cadastro:
Se cadastra, na área de administração do sistema
O perfil é definido automaticamente como organizador

2. Autenticação:
Se autentica na ferramenta, com as suas credenciais.

3. Cadastro de eventos:
Cadastra novos eventos informando:

Nome;
Tipo;
Tema;
Palestrante;
Local;
Data;
Horário;
Vagas;
Descrição.

4. Gerenciamento de eventos:

Visualiza somente os eventos sob sua responsabilidade

Jornada 3: leitor

Autenticação:
Se autentica na ferramenta, com as suas credenciais.

2. Dashboard:
Consulta indicadores da plataforma, como:

Métricas dos eventos;
Principais eventos;
Quantidade de inscrições.

3.Leitura dos eventos:
Le eventos cadastrados, quantos usuários se inscreveram e quais eventos foram criados.

Jornada 4: Usuário:

1.Acesso:
Acessa o sistema, verificando os eventos disponíveis na vitrine.

2. Seleção:
Verifica as demais informações do evento.

3. Autenticação:
Se autentica na ferramenta para  que possa realizar a inscrição em um dos eventos.

4. Cadastro:
Se cadastra no sistema, para que possa realizar a autenticação na plataforma.

5. Inscrição:
Se inscreve no evento herdando as informações do seu perfil autenticado.

6. Minhas inscrições:
Consulta seus eventos inscritos, podendo cancelar sua inscrição.

LISTA DE COMPONENTES

Para uma boa navegação, e uma interface amigável, é sugerido os seguintes componentes:

Componentes gerais

Header - Barra superior de navegação.
Sidebar - Menu lateral com opções administrativas.
footer - rodapé das pagians públicas.
botão - ações gerais do sistema
Pop-up - Confirmação e mensagem de ações.
alerta - Apresentação de mensagem de erros, alertas e avisos gerais.
Loading - Indicação de carregamento de informações


Componentes de eventos:

card de evento - Apresentação resumida de um evento na vitrine.
Lista de eventos - apresentação de eventos disponíveis.
Detalhe de eventos - Apresentação completa do evento.
Formulário de evento - cadastro e edição de evento.
Status de evento - indicação de disponibilidade e vagas.

Componente administrativo:

Dashboard card - Apresentação de indicadores gerais.
Tabela de eventos - visualização e gerenciamento de eventos.
Tabela de usuários - visualização e gerenciamento de usuários.
Tabela de inscrições - Consulta das inscrições realizadas.
Formulário de usuário - Cadastro de usuário administrativo.

Componente de autenticação:

Formulário de Login
Formulário de Cadastro Organizador
Formulário de cadastro de usuário
Mensagem de autenticação






