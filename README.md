Desenvolvimento de um Portal de Agendamento para uma Clínica Médica

CONTEXTO
Uma clínica médica em uma cidade de médio porte está enfrentando desafios para gerenciar os
agendamentos de consultas médicas. Atualmente, os agendamentos são realizados apenas por
telefone, o que frequentemente resulta em longas esperas para os pacientes, erros no registro de
informações e dificuldades em reorganizar a agenda em casos de cancelamentos ou remarcações.
Além disso, muitos pacientes relatam insatisfação devido à falta de transparência sobre horários
disponíveis e à impossibilidade de realizar agendamentos fora do horário comercial.
Diante disso, o gerente da clínica decidiu investir no desenvolvimento de um portal de agendamento
online. O objetivo principal do portal é permitir que os pacientes visualizem os horários disponíveis
em tempo real, realizem agendamentos diretamente pela plataforma, recebam notificações por email ou SMS como lembrete e façam alterações ou cancelamentos com facilidade. O portal também
deve incluir funcionalidades para que os funcionários da clínica possam gerenciar os agendamentos,
acompanhar a ocupação dos consultórios e gerar relatórios de utilização.
No entanto, surgiram diversos desafios técnicos e estratégicos. A equipe de desenvolvimento precisa
definir a melhor tecnologia para construir o portal, garantindo que ele seja responsivo, tenha uma
boa estrutura de banco de dados e seja fácil de usar.

DESAFIO
Passo 1:
O seu primeiro passo é a partir do entendimento do problema, criar um diagrama de classes que
represente o sistema de consultas médicas. O sistema deve registrar informações sobre pacientes,
como nome, endereço, data de nascimento e telefone. Cada paciente pode estar vinculado a um
plano de saúde, que possui atributos como limite de cobertura e data de vencimento, e deve ser
validado antes da realização da consulta.

As consultas médicas devem incluir informações como o valor, a data e o médico responsável, que é
identificado pelo nome e especialidade. Cada consulta pode gerar uma receita médica, que inclui a
descrição do medicamento, o tempo de tratamento e a dosagem, sendo emitida pelo médico. Além
disso, deve ser possível registrar os pagamentos realizados para cada consulta, com informações
sobre o valor e a data do pagamento.

O sistema também deve emitir relatórios financeiros que consolidem informações das consultas
realizadas, incluindo a data de emissão e o valor total. A partir do diagrama, identifique as classes,
seus atributos e métodos, e crie os relacionamentos necessários para atender aos requisitos
descritos.

Outros pontos levantados pelo cliente são:
1. Gerenciar o cadastro de pacientes, médicos e planos de saúde.
2. Agendar consultas, vincular pacientes a médicos e emitir receitas.
3. Registrar pagamentos e gerar relatórios financeiros de consultas realizadas.
4. Validar os planos de saúde antes de confirmar as consultas.
   
Simule um cenário em que um paciente realiza uma consulta, efetua o pagamento e recebe uma
receita médica. Em seguida, emita um relatório com o resumo das operações realizadas. Garanta que
o diagrama de classes e a implementação do sistema estejam consistentes com os requisitos.

Passo 2:
Sua tarefa agora é criar uma página para os agendamentos: você desenvolverá uma página simples
onde os pacientes poderão realizar o agendamento. Essa página será o segundo passo para o
protótipo do portal e deve incluir elementos básicos para interação, como campos de entrada e
botões.

Para isto, esta página deve permitir que os pacientes:

• Selecionem uma data: Use um campo interativo de seleção de data (date picker) para que o
paciente possa escolher o dia desejado para a consulta.

• Escolham um horário: Mostre uma lista de horários disponíveis para aquele dia. Essa lista será
gerada dinamicamente em JavaScript com base em um conjunto pré-definido de horários
disponíveis (simulados para esta atividade).

• Insiram informações pessoais: Adicione campos de entrada para que o paciente forneça
nome, telefone e e-mail. Isso garante que as informações necessárias sejam coletadas para
confirmar o agendamento.

Passos a seguir:
a) Crie a estrutura HTML (index.html):
§ Adicione os campos necessários para data, horário e informações do paciente.
§ Inclua um botão para confirmar o agendamento.
§ Crie uma área onde o resumo será exibido após a confirmação.

b) Estilize a página com CSS (style.css):
§ Garanta que a página seja simples, mas visualmente agradável e organizada.
§ Use cores suaves e elementos bem alinhados para melhorar a experiência do usuário.

c) Implemente o JavaScript (script.js):
§ Use um array para simular os horários disponíveis.
§ Adicione uma funcionalidade que preencha o menu de horários quando o paciente
selecionar uma data.
§ Valide os dados do formulário e exiba alertas caso algum campo esteja incompleto.
§ Mostre um texto de confirmação no final do processo, com as informações do
agendamento.

Passo 3:
Agora que a funcionalidade básica do portal foi criada, sua tarefa será torná-lo responsivo, garantindo
que a página de agendamento ofereça uma experiência agradável em diferentes tamanhos de tela,
incluindo dispositivos móveis, tablets e desktops.

Objetivos:
1. Adapte o layout para que todos os elementos fiquem organizados e utilizáveis em dispositivos
móveis.

2. Melhore a navegação com ajustes para tamanhos de fonte, botões e espaçamento,
otimizando a usabilidade em telas menores.

3. Use Media Queries para implementar diferentes estilos com base na largura da tela.

4. Verifique se o design se adapta corretamente em dispositivos com larguras de tela de 320px
(smartphones), 768px (tablets) e acima de 1024px (desktops)

Modifique o CSS (arquivo style.css):
a) Para telas menores (largura máxima de 768px):
• Defina a largura do conteúdo principal como 100% e um pequeno espaçamento
interno (ex. padding: 10px)
• Aumente os tamanhos de fonte dos campos de entrada e botões para facilitar a leitura
(mínimo 16px).
• Reduza as margens e espaçamentos para otimizar o uso do espaço.

b) Para telas intermediárias (largura entre 768px e 1024px)
• Centralize e defina uma proporção de largura menor para o conteúdo em relação a
tela (ex. 90%)
• Adicione espaçamento equilibrado entre os campos.

c) Validação:
• No navegador, redimensione a janela para verificar o comportamento da página.
• Nas ferramentas de desenvolvedor (F12): Teste diferentes larguras de tela.
• Caso possível, abra a página em um smartphone ou tablet.

Passo 4:
Desenhe o Modelo Entidade-Relacionamento (MER), incluindo:
1. Entidades: Paciente, Médico, Consulta, Plano de Saúde, Receita, Pagamento.
2. Relacionamentos e cardinalidades apropriadas.
3. Inclua atributos adicionais, como e-mail e CPF para Paciente, e CRM para Médico.

Passo 5:
Em um sistema de agendamento para uma clínica médica, o uso de funções (FUNCTION) e visões
(VIEW) no MySQL é essencial para garantir a organização e a eficiência no acesso às informações.
Enquanto funções permitem a realização de cálculos ou validações reutilizáveis, as visões oferecem
uma maneira simplificada de consultar dados complexos. Esses elementos são fundamentais para
atender a demandas como a validação de planos de saúde, a consolidação de relatórios financeiros
e a exibição de horários disponíveis.

A seguir, são apresentadas duas perguntas relacionadas ao uso de funções e visões no MySQL, com
suas respectivas respostas.

1. Pergunta:
Como criar uma FUNCTION em MySQL que valide se um plano de saúde está dentro do período de
validade?

3. Pergunta:
Como criar uma VIEW que consolide informações financeiras das consultas realizadas, incluindo o
nome do paciente, o médico responsável e o valor total pago?
