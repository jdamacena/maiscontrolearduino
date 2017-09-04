# Visão geral


O +Controle Arduino é um aplicativo que serve de interface entre um Arduino e um aparelho Android através de
Bluetooth.

É possível programar o Arduino para que, através dos comandos recebidos do aparelho Android via Bluetooth, o
mesmo realize os mais variados tipos de tarefas.


# Conceitos importantes


- **Perfil:** é o nome dado a cada tela com controles e comandos. Geralmente é criado um perfil para cada projeto;
- **Comando:** dentro de cada perfil existe uma aba que contém vários comandos, cada comando nada mais é que uma associação 
de uma palavra que será inserida no app (seja por comando de voz ou por texto) e outra palavra, que será enviada ao Arduino, 
por exemplo, você pode querer enviar "1" ao Arduino a cada vez que você der o comando "acender" no aplicativo. O uso de comandos 
é útil para simplificar e flexibilizar tanto o código Arduino quanto o uso do app, visto que pode-se facilmente mudar uma 
palavra-chave no app sem ter que mudar o código Arduino;
- **Controle:** refere-se a cada item que aparece na tela inicial de um perfil (ex.: Monitor serial, botão para comando de voz, etc), 
podem ser mostrados ou escondidos de acordo com a necessidade do projeto.


# Criando um perfil


Para criar um perfil acione o botão "+" na tela de listagem de perfis, após, preencha os campos de acordo com o
seu projeto. 

Os campos são os seguintes:

- **Autor**: recebe o nome do criador do perfil, esse nome vai na exportação e muitos colocam seus e-mails nesse campo;
- **Título**: é o título do perfil, o nome que aparece na listagem de perfis e que identifica o perfil ao longo do app;
- **Descrição**: deve conter uma descrição do perfil. Escreva algo claro e direto nesse campo;
- **Tema**: os quadradinhos coloridos, no diálogo de criação de perfil, representam os temas disponíveis. O tema é 
aplicado na tela do perfil modificando sua cor. Selecione o que você mais gostar – experimente todos.


# Criando um comando


Para criar um comando, acione o botão "+" na aba "comandos", dentro de um perfil. Após isso, escreva o comando que será dado 
no app e o comando que o app enviará para o Arduino, toque na opção de salvar e pronto! Certifique-se que a opção "Ativar 
mapeamento" está ativada e se o comando está ativado, desta forma, cada vez que você der o comando especificado ao app, 
ele enviará para o Arduino o outro comando.


# Botões com comandos mapeáveis


Na tela de perfil estão disponíveis alguns botões que são capazes de enviar apenas um comando (pré-definido), como por 
exemplo, o botão "Ativado/Desativado" que sempre envia ```btn_ativado``` ou ```btn_desativado```. Porém, esses 
**comandos pré-definidos são mapeáveis**, o que significa que é possível criar um comando que receba o comando fixo 
enviado pelo botão e o transforme em um comando que seja interessante para seu projeto.

**Exemplo**: cria-se um mapeamento que recebe ```btn_ativado``` e envia ```2```, então, programa-se o Arduino para, quando 
receber um ```2```, acionar determinada carga. Depois, cria-se outro mapeamento que recebe ```btn_desativado``` e envia 
```3``` e usa-se esse código para informar ao Arduino para desativar a carga anteriormente acionada.


# Tela inicial


A tela inicial do +Controle Arduino mostra um botão para criação de um perfil e uma lista de todos os perfis disponíveis 
no app, ao tocar e segurar em um perfil o app apresenta também as opções de selecionar vários perfis para exportar, 
editar (ao selecionar apenas 1 perfil) ou excluir. Além disso, no menu lateral, estão as opções de importação de perfis 
e de preferências do app.


# Tela do perfil


A tela do perfil é a tela principal do aplicativo, é nela que toda interação com o Arduino acontece, através
dessa tela você poderá criar, editar e excluir comandos, poderá mostrar ou ocultar controles e poderá se
conectar com o Arduino para usar o seu projeto.

Dentro dessa tela se encontram as abas **inicio**, onde você pode se conectar e interagir com um Arduino através do 
Bluetooth, **comandos**, onde você pode criar, editar, ativar ou desativar comandos de acordo com as necessidades do 
seu projeto (você pode ter quantos comandos quiser) – é também possível ativar/desativar todos os comandos através do 
_switch_ no topo da tela – e também tem a aba **controles** onde você escolhe quais controles são relevantes para seu 
projeto – é aqui que se configura o que aparece na aba "início".


# Exportação


Ao exportar um perfil, todas as configurações do mesmo são salvas no seu dispositivo na forma de um arquivo com a 
extensão ```.jun```, esse arquivo fica numa pasta com o nome do app, não se perde se você desinstalar o aplicativo e 
você pode, inclusive, compartilhá-lo com os amigos e quem mais você quiser.

<p style="text-justify: distribute; text-indent: 1.5em; border-radius: 4px; color: white; text-align: center; background: #00897b; padding: 8px;" align="center">
Sugestão: compartilhe o arquivo ```.jun``` junto com o programa Arduino.
</p>


Depois de exportado, o arquivo do perfil pode ser importado em qualquer celular que tenha o **+Controle Arduino** 
instalado. O perfil importado funciona exatamente da mesma forma que um perfil criado manualmente.

A opção de exportação é encontrada tanto na listagem de perfis (a opção é mostrada ao tocar num perfil e segurar
– aqui você pode exportar vários perfis de uma só vez) e também dentro de um perfil, no menu, onde você poderá
exportar o perfil no qual estiver.


# Importação


A importação pega o arquivo de um perfil exportado por alguém (aquele com a extensão ```.jun```) e, a partir dele, cria 
um perfil que é a cópia exata do perfil exportado. Se alguém usar o **+Controle Arduino** em um projeto, poderá 
compartilhar o perfil junto com o seu código Arduino, assim os outros poderão ter em seus celulares o mesmo perfil que 
o projeto original. Muito útil para quem gosta de compartilhar seus projetos Arduino. 

A opção de importação se encontra no menu lateral da tela de listagem de perfis.
