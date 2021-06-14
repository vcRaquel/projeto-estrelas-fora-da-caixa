Em relação ao desafio final, conte para nós como foi o seu processo para chegar até este resultado, quais foram as etapas, como você se organizou, etc. 

Comecei com o projeto pelo arquivo HTML criando uma estrutura de  container que iria depois receber uma div com quatro estruturas de cards inseridos dinamicamente via JS.

no CSS atribui uma cor qualquer ao main e ao container para poder visualizar melhor onde estava cada coisa.

Parti para trabalhar a lógica da página no JS. Nele declarei uma variável personagens que receberia um array com os personagens; uma variável ids com um array que receberia as ids dos personagens; uma constante com o número máximo de personagens com o valor fixo de 671 e faço a captura do elemento container do HTML.

Fiz uma função criandoCard com os parâmetros imagem e nome que cria a div com a classe card que recebe em um h3 o nome do personagem por meio de uma template string que será alimentada pelos dados recebidos da API e recebe a imagem do personagem da mesma maneira, acrescentando uma descrição para a imagem por questões de acessibilidade usando alt e uma template string.

Fiz outra função criandoCards com uma variável do tipo let chamada cards e com uma string vazia, a função irá pegar as informações recebidas da API e percorrer o array de personagens e criar pra em cada laço criar a view do html por meio da função criandoCard declarada anteriormente. Depois concatena os cards na variável cards e retorna o mesmo.

A função inserirCards vai pegar o retorno da função criandoCards e vai inserir no container (do HTML) para formar a view.

A função gerarIds irá atribuir à variável ids um array vazio (para garantir que ao ser chamada a função o array irá iniciar como vazio), criar um contador (count) e atribuir o valor de 4 a ele (número de elementos que queremos receber resposta da API) e criar um while que enquanto o contador for maior que 0 a variável ids irá receber os dados de id aleatória (limitado ao número máximo de personagens declarado na variável numeroMaximoDePersonagens) e se o array de id estiver vazio OU se o número de id não existir no array irá acrescentar o id no array de ids. E foi essa a solução para garantir que as 4 figuras aleatórias sejam de personagens diferentes.

A função buscarPersonagens irá chamar a função gerarIds explicada anteriormente e irá buscar os personagens na API por meio da função fetch, como indica na documentação da api utilizada. Usei a url padrão para buscar personagens com os 4 ids separados por vírgula ao final da url, utilizei o método join pra concatenar os itens do meu array id separados por vírgula.  A resposta da Api eu atribuo ao meu array de personagens e logo em seguida chamo a função inserirCards que monta os meus cards a partir do meu array de personagens.


Com a lógica do JS pronta e funcionando, parti para o CSS para a organização visual da página.
Primeiramente, zerei as configurações predeterminadas de margin, paddin, e coloquei o box-sizing em border-box no seletor geral *

selecionei a id main com o # para determinar as configurações que eu queria no documento como um todo.
Pesquisei qual era a fonte do Rick e Morty e a importei do google fonts para ser usada na página.
Pesquisei um degradê no google (CSS Gradient) e usei as configurações de cor do que mais gostei.

selecionei a id container com o # e coloquei as configurações que eu queria para a parte do container que estava recebendo os cards para deixar os cards alinhados em relação à página e depois retirei a cor que tinha colocado antes para que recebesse o degradê aplicado na main.

Voltei ao arquivo HTML e na main fiz um título h1 para ficar mais visual do que a página se tratava. No CSS selecionei o h1 e atribuí uma cor de fonte que lembrasse o design da animação mas que ao mesmo tempo ficasse legível no degradê do backgroud. Além da cor, também atribuí uma margem no topo para que ficasse melhor visualmente.

Selecionei a classe card usando o . para atribuir as configurações que eu queria e tive certa dificuldade para que quando os nomes fossem extensos demais, o alinhamento não fosse desfeito e por isso optei por limitar o tamanho da imagem usando o f12 e inspecionando os dados de tamanho da imagem que estavam no card. Selecionando o card img também fixei a largura da imagem também usando o recurso de inspecionar o elemento.

Selecionei a classe card usando o . e usei o hover com um sombreamento pesquisado na internet na biblioteca do materialize, usei o transform para que o tamanho seja aumentado e o transition para definir o tempo de transição da animação. Fiz para dar uma ideia de profundidade e interatividade com a página.

Por fim, selecionei o h3 que corresponde aos nomes dos personagens nos cards (e que foi atribuído no CSS na função criandoCard) para atribuir uma cor e dar mais suavidade e adequação ao visual da página.

