<div>
    <h1>Overview</h1>

    <p> O +Controle Arduíno é um aplicativo que serve de interface entre um Arduíno e um aparelho Android através de
        Bluetooth.</p>

    <p>É possível programar o Arduíno para que, através dos comandos recebidos do aparelho Android via Bluetooth, o
        mesmo realize os mais variados tipos de tarefas.</p>
</div>
<div>
    <h1>Important concepts</h1>

    <p>Nessa seção são listados vários conceitos importantes relativos ao aplicativo.</p>

    <p><b>Perfil: </b><span>É o nome dados a cada tela com controles e comandos, geralmente é criado um para cada projeto diferente.</span>

    <p><b>Comando: </b><span>Dentro de cada perfil existe uma aba que contém vários comandos, cada comando nada mais é que uma associação
        de uma palavra que será inserida no app, seja por comando de voz ou por texto, e outra palavra, que será
        enviada ao Arduíno, por exemplo, você pode querer enviar "1" ao Arduíno a cada vez que você der o comando
        "acender" no +Controle Arduíno. O uso de comandos é útil para simplificar e flexibilizar tanto o código
        Arduíno quanto o uso do app, visto que pode-se facilmente mudar uma palavra-chave no app sem ter que mudar o
        código Arduíno.
    </span>

    <p><b> Controle: </b><span>Refere-se a cada item que aparece na tela inicial de um perfil (ex.: Monitor serial, botão para comando de
        voz, etc), podem ser mostrados ou escondidos de acordo com a necessidade do projeto.</span>
</div>
<div>
    <h1>Creating a Profile</h1>

    <p>
        Para criar um perfil acione o botão "+" na tela de listagem de perfis, após, preencha os campos de acordo com o
        seu projeto. </p>

    <p>
        Os campos são os seguintes:
    </p>

    <ul>
        <li><strong>Autor</strong>: Recebe o nome do criador do perfil, esse nome vai na exportação e muitos colocam
            seus e-mails aqui;
        </li>
        <li><strong>Título</strong>: É o título do perfil, o nome que aparece na listagem de perfis e que identifica o
            perfil ao longo do app;
        </li>
        <li><strong>Descrição</strong>: Deve conter uma descrição do perfil, escreva algo claro e direto aqui;
        </li>
        <li><strong>Tema</strong>: Os quadradinhos coloridos representam os temas disponíveis, esse tema é aplicado na
            tela do perfil, selecione o que você mais gostar – experimente todos.
        </li>
    </ul>
</div>
<div>
    <h1>Creating a command</h1>

    <p>
        Para criar um comando acione o botão "+" na tela de um perfil, na aba "comandos", após, escreva o comando que
        será dado no app e o comando que o app enviará para o Arduíno, toque na opção de salvar e pronto! Verifique se a
        opção "Ativar mapeamento" está ativada e se o comando está ativado, se estiverem, cada vez que você der o
        comando especificado no app, o app enviará para o Arduíno o outro comando.</p>
</div>
<div>
    <h1>Buttons with mappable commands</h1>

    <p>
        Na tela de perfil estão disponíveis alguns botões que são capazes de enviar apenas um comando pré-definido, como
        por exemplo, o botão "Ativado/Desativado" que sempre envia <code>btn_ativado</code> ou
        <code>btn_desativado</code>. Porém, esses <strong>comandos pré-definidos são
        mapeáveis</strong>, o que significa que é possível criar um comando que receba o comando fixo enviado pelo botão
        e o transforme em um comando que seja interessante para seu projeto.
    </p>

    <p>
        Exemplo: Cria-se um comando que transforma <code>btn_ativado</code> em "2" e, então, programa-se o Arduíno para,
        quando receber "2", acionar determinada carga. Depois, cria-se outro comando que transforme
        <code>btn_desativado</code> em "3" e usa-se esse código para informar ao Arduíno para desativar a carga
        anteriormente acionada.</p>
</div>
<div>
    <h1>Home screen</h1>

    <p>A tela inicial do +Controle Arduíno mostra um botão para criação de um perfil e uma lista de todos os perfis já
        criados/importados para o app, ao tocar e segurar em um perfil apresenta também as opções de selecionar perfis
        para exportar, editar (ao selecionar apenas 1 perfil) ou excluir. Além disso, no menu lateral, estão as opções
        de importação de perfis e de preferências do app.</p>
</div>
<div>
    <h1>Profile Screen</h1>

    <p> A tela do perfil é a tela principal do aplicativo, é nela que toda interação com o Arduíno acontece, através
        dessa tela você poderá criar, editar e excluir comandos, poderá mostrar ou ocultar controles e poderá se
        conectar com o Arduíno para usar o seu projeto.</p>

    <p>
        Dentro dessa tela se encontram as abas <strong>inicio</strong>, onde você pode se conectar e interagir com um
        Arduíno através do Bluetooth, <strong>comandos</strong>, onde você pode criar, editar, ativar ou desativar
        comandos de acordo com as necessidades do seu projeto – você pode ter quantos comandos quiser – é também
        possível ativar/desativar todos os comandos através do switch no topo da tela e também tem a aba <strong>controles</strong>
        onde você escolhe quais controles são relevantes para seu projeto – é aqui que se configura o que aparece na aba
        "inicio".</p>
</div>
<div>
    <h1>Profile Export</h1>

    <p>
        Ao exportar um perfil, todas as configurações do mesmo são salvas no seu celular na forma de um arquivo com a
        extensão <code>.jun</code>, esse arquivo não se perde se você desinstalar o app e você pode, inclusive,
        compartilha-lo com os amigos e quem mais você quiser.</p>
    <p class="destaque"
       style="text-justify: distribute; text-indent: 1.5em; border-radius: 4px; color: white; text-align: center; background: #00897b; padding: 8px;"
       align="center">sugestão: Compartilhe o arquivo <code>.jun</code> junto com o programa Arduíno.
    </p>

    <p>
        Depois de exportado, o arquivo do perfil pode ser importado em qualquer celular que tenha o
        <strong>+Controle Arduíno</strong> instalado. O perfil gerado através de um arquivo é a mesma coisa que um
        perfil criado manualmente, ou seja, funciona exatamente da mesma forma.
    </p>

    <p> A opção de exportação é encontrada tanto na listagem de perfis (a opção é mostrada ao tocar num perfil e segurar
        – aqui você pode exportar vários perfis de uma só vez) e também dentro de um perfil, no menu, onde você poderá
        exportar o perfil no qual estiver.</p>
</div>
<div>
    <h1>Import profile</h1>

    <p>A importação pega o arquivo de um perfil exportado por alguém (aquele com a extensão <code>.jun</code>) e, a
        partir dele, cria um perfil que é a cópia exata do perfil exportado. Se alguém usar o
        <strong>+Controle Arduíno</strong> em um projeto, poderá compartilhar o perfil junto com o seu código Arduíno,
        assim os outros poderão ter em seus celulares o mesmo perfil que o projeto original. Muito útil para quem gosta
        de compartilhar seus projetos Arduino</p>

    <p> A opção de importação se encontra no menu lateral da tela de listagem de perfis.</p>
</div>