//Cria um pacote que conterá a Classe superior deste jogo, "DocumentClass"
package{
	//Importação de classes nativas do AS3
	import flash.display.MovieClip;//Classe que define funções de clips de filme
	import flash.events.Event;//Classe que define funções de eventos gerais
	import flash.events.ProgressEvent;//Classe que define funções de eventos de progresso
	import fl.transitions.Tween;
	import fl.transitions.TweenEvent;
	import fl.transitions.easing.Regular;
	import flash.display.SimpleButton;
	import flash.display.StageScaleMode;
	import flash.media.SoundChannel;
	
	//Criação da classe pública "DocumentClass" que extende a classe "MovieClip"
	public class DocumentClass extends MovieClip{
	
		//Declaração de variáveis
		public var canal:SoundChannel;
		public var novoProgresso:BarraProgresso;/*Variável pública "novoProgresso", do tipo "BarraProgresso"
		(classe criada para o jogo e que define funções do preloader)*/
		public var novaTelaInicial:TelaInicial;/*Variável pública "novaTelaInicial", do tipo "TelaInicial"
		(classe criada para o jogo e que define funções do menu inicial*/
		public var novaTelaJogo:TelaDeJogo;/*Variável pública "novaTelaJogo", do tipo "TelaDeJogo"
		(classe criada para o jogo e que define funções da tela de jogo em si*/
		public var novaTelaFim:TelaDeFimDeJogo;/*Variável pública "novaTelaFim", do tipo "TelaDeFimDeJogo"
		(classe criada para o jogo e que define funções do menu de fim de jogo*/
		public var posicaoX:Number = 0;//Variável pública "posicaoX", do tipo Number e valor = 0 (zero)
		public var posicaoY:Number = 0;//Variável pública "posicaoX", do tipo Number e valor = 0 (zero)
		public var somAtingidoBonus:SomAtingidoBonus;
		public var transicaoTela1:Tween;
		public var transicaoTela2:Tween;
		
	//Funções da classe
		public function DocumentClass(){/*Função pública construtora da classe*/
			stage.scaleMode = StageScaleMode.EXACT_FIT;
			
			novoProgresso = new BarraProgresso();/*Aciona o construtor da classe "BarraProgresso"
			na variável pública declarada acima*/
			novoProgresso.x = 400;/*Atribui 250 (metade da largura do palco) como valor da
			abscissa de novoProgresso*/
			novoProgresso.y = 240;/*Atribui 200 (metade da altura do palco) como valor da
			ordenada de novoProgresso*/
			
			/*OBS: A classe "BarraProgresso" extende a classe MovieClip, por isso
			possui as propriedades de posicionamento (cordenadas) escritas acima*/
			
			addChild(novoProgresso);/*Adiciona o objeto criado e definido acima ao ambiente da
			classe "DocumentClass". Agora "novoProgresso" é um objeto filho de "DocumentClass".
			Perceba que a função "addChild()" foi escrita sem um ponto (.) no início. Isso ocorre
			porque o Flash entende que, quando uma função ou propriedade é escrita dentro de uma
			classe sem seguir o	modelo "nomedoobjeto.função", é porque tal função ou propriedade
			se refere à própria classe (no caso, "DocumentClass")*/
			
			loaderInfo.addEventListener(Event.COMPLETE, downloadTerminado, false, 0, true);/*Pega o objeto nativo
			"loaderInfo" (que contém informações e propriedades sobre o carregamento do jogo) e
			adiciona a ele um ouvinte de evento. Este ouvinte ficará "escutando" tudo o que acontece
			durante a execução do código. Quando o evento "Event.COMPLETE"(definido na classe nativa
			importada acima "Event") ocorrer, o ouvinte de evento acionará a função "downloadTerminado"
			descrita logo abaixo*/
			loaderInfo.addEventListener(ProgressEvent.PROGRESS, mostraProgresso, false, 0, true);/*Este outro ouvinte de
			evento adicionado ao "loaderInfo" aguarda a ocorrência do evento "ProgressEvent.PROGRESS"
			e aciona a função "progresso" descrita logo abaixo*/
			
			/*OBS: Há uma peculiaridade no evento "ProgressEvent.PROGRESS". O objeto "loaderInfo" está
			sempre calculando a quantidade de Bytes carregados e a quantidade total de Bytes a serem
			carregados. Sempre que esse objeto carrega mais Bytes, o evento ".PROGRESS" é disparado.
			Isso quer dizer que, dependendo da velocidade do carregamento, esse evento pode ser dis-
			parado dezenas de vezes por segundo, e em todas as vezes a função "progresso" abaixo é
			acionada.*/
			stage.stageFocusRect = false;
		}
		
		public function downloadTerminado(Evento:Event):void{/*Função pública que recebe de entrada a
		variável "Evento" de tipo "Event" e não retorna nada (void)*/
			gotoAndStop(3);/*Esta linha faz com que a animação, que estava no 1º quadro da linha do
			tempo, pule para o 3º quadro e PARE, ou seja, não execute mais. Isso só é possível porque
			esta classe (DocumentClass) extende (herda) todas as funcionalidades de MovieClip.
			Perceba novamente a falta do ponto antes de "gotoAndStop(3)", que indica que esta função
			se refere à própria classe em que ela está*/
			canal = new SoundChannel();
			somAtingidoBonus = new SomAtingidoBonus();
			canal = somAtingidoBonus.play();
			mostraTelaInicial();/*Aciona a função "mostraTelaInicial" descrita mais abaixo. Mais uma
			vez não foi utilizado o ponto*/
		}
		
		public function mostraProgresso(Evento:ProgressEvent):void{/*Função pública que recebe de entrada a
		variável "Evento" de tipo "PorgressEvent" e não retorna nada (void). Note que na função acima
		também foi usada a variável de nome "Evento" como entrada. Isso não causa nenhum tipo de con-
		flito no código, pois ambas as variáveis são locais, ou seja, só existem dentro de suas respec-
		tivas funções. Neste jogo, essas variáveis sempre se chamarão "Evento", pois o nome delas não
		tem muita importância para nós e porque referenciá-las é bem mais fácil se não temos que ficar
		decorando vários nomes*/
			novoProgresso.determinaValor(Math.floor(100*(loaderInfo.bytesLoaded/loaderInfo.bytesTotal)));
			/*Esta linha aciona a função "determinaValor" descrita dentro da classe "BarraProgresso". Se
			olharmos a classe, veremos que esta função exige como entrada um número real. Este número
			é recalculado continuamente de acordo com a expressão acima, que faz uma relação entre os
			Bytes carregados e os Bytes totais e multiplicado o resultado por 100. A função "Math.floor"
			retira as casas decimais do resultado e garante que essa porcentagem seja mostrada como um
			número inteiro.*/
			
			/*OBS: Repare agora que a função "determinaValor", que não faz parte da classe "DocumentClass",
			teve de ser precedida do nome do objeto da classe à qual ela pertence e de um ponto. Só
			assim ela pode ser referenciada com sucesso*/
		}
		
		public function mostraTelaInicial():void{/*Função pública sem entrada ou retorno*/
			novaTelaInicial = new TelaInicial();/*Aciona o construtor da classe "TelaInicial"
			na variável pública declarada acima*/
			novaTelaInicial.x = posicaoX;/*Atribui "posicaoX" (zero) como abscissa do objeto*/
			novaTelaInicial.y = posicaoY;/*Atribui "posicaoY" (zero) como ordenada do objeto*/
			addChild(novaTelaInicial);/*Adiciona o objeto "novaTelaInicial" ao ambiente da classe
			"DocumentClass". Agora esse objeto é filho de "DocumentClass"*/
			novaTelaInicial.addEventListener(EventoDisparador.INICIAR, pedidoIniciar, false, 0, true);/*Adiciona
			um ouvinte de evento que checará pela ocorrência de "EventoDisparador.INICIAR" (que
			é uma classe de eventos criada por nós) e executará a função "pedidoIniciar", que será
			descrita logo abaixo desta função*/
			stage.focus = novaTelaInicial;
		}
		
		public function pedidoIniciar(Evento:EventoDisparador):void{/*Função pública que recebe de
		entrada a variável "Evento" de tipo "EventoDisparador" e não tem retorno*/
			novaTelaJogo = new TelaDeJogo();/*Aciona o construtor da classe "TelaInicial" com o
			valor de entrada "modoMouseVF" na variável pública declarada acima*/
			novaTelaJogo.x = posicaoX;/*Atribui "posicaoX" (zero) como abscissa do objeto*/
			novaTelaJogo.y = posicaoY;/*Atribui "posicaoY" (zero) como ordenada do objeto*/
			addChild(novaTelaJogo);/*Adiciona o objeto "novaTelaInicial" ao ambiente da classe
			"DocumentClass". Agora esse objeto é filho de "DocumentClass"*/
			transicaoTela1 = new Tween(novaTelaInicial, "x", Regular.easeIn, 0, 800, 0.7, true);
			transicaoTela2 = new Tween(novaTelaJogo, "x", Regular.easeIn, -795, 0, 0.7, true);
			transicaoTela1.addEventListener(TweenEvent.MOTION_FINISH, iniciaTemporizador1, false, 0, true);
			novaTelaJogo.addEventListener(EventoJogador.MORTO, jogadorMorre, false, 0, true);/*Adiciona
			um ouvinte de evento que checará constantemente pela ocorrência de "EventoJogador.MORTO"
			(que é uma classe de eventos criada por nós) e executará a função "protagonistaMorre", que será
			descrita logo abaixo desta função*/
			
			stage.focus = novaTelaJogo;
		}
		
		public function jogadorMorre(Evento:EventoJogador):void{/*Função pública que recebe
		de entrada a variável "Evento" de tipo "EventoJogador" e não tem retorno*/
			var pontuacaoFinal:Number = novaTelaJogo.obtemPontuacao();/*Pela primeira vez estamos decla-
			rando uma variável local dentro de uma função. De tipo "Number", ela recebe como valor a 
			função "obtemPontuacao()" definida na classe "TelaDeJogo"*/
			var tempoFinal:Number = novaTelaJogo.tempoDeJogo;/*Esta variável recebe como valor a variável
			"tempoDeJogo" definida na classe "TelaDeJogo"*/
			
			novaTelaFim = new TelaDeFimDeJogo();/*Aciona o construtor da classe "TelaInicial" na variável
			pública declarada acima*/
			novaTelaFim.x = posicaoX;/*Atribui "posicaoX" (zero) como abscissa do objeto*/
			novaTelaFim.y = posicaoY;/*Atribui "posicaoY" (zero) como ordenada do objeto*/
			addChild(novaTelaFim);/*Adiciona o objeto "novaTelaFim" ao ambiente da classe "DocumentClass".
			Agora esse objeto é filho de "DocumentClass"*/
			novaTelaFim.addEventListener(EventoDisparador.REINICIAR, pedidoReiniciar, false, 0, true);/*Adiciona um ouvinte
			de evento que checará pela ocorrência de "EventoDisparador.Reiniciar" (que é uma classe de
			eventos criada por nós) e executará a função "pedidoIniciar", que foi descrita mais acima*/
			novaTelaFim.addEventListener(EventoDisparador.MENU, menu, false, 0, true);/*Adiciona um ouvinte de evento que
			checará pela ocorrência de "EventoDisparador.MENU"(que é uma classe de eventos criada por nós)
			e executará a função "menu", descrita logo abaixo desta função*/
			novaTelaFim.mostraValores(tempoFinal,pontuacaoFinal);/*Aciona a função "mostraValores"
			que está definida na classe TelaDeFimDeJogo*/
			stage.focus = novaTelaFim;
			removeChild(novaTelaJogo);/*Remove graficamente o objeto "novaTelaJogo" do palco*/
			novaTelaJogo = null;/*O identificador "null" faz com que tudo (variáveis, propriedades,
			eventos) seja resetado*/
		}
		
		public function pedidoReiniciar(Evento:EventoDisparador):void{/*Função pública que recebe
		de entrada a variável "Evento" de tipo "EventoJogador" e não tem retorno*/
			novaTelaJogo = new TelaDeJogo();/*Aciona o construtor da classe "TelaInicial" com o
			valor de entrada "modoMouseVF" na variável pública declarada acima*/
			novaTelaJogo.x = posicaoX;/*Atribui "posicaoX" (zero) como abscissa do objeto*/
			novaTelaJogo.y = posicaoY;/*Atribui "posicaoY" (zero) como ordenada do objeto*/
			addChild(novaTelaJogo);/*Adiciona o objeto "novaTelaInicial" ao ambiente da classe
			"DocumentClass". Agora esse objeto é filho de "DocumentClass"*/
			transicaoTela1 = new Tween(novaTelaFim, "x", Regular.easeIn, 0, 800, 0.7, true);
			transicaoTela2 = new Tween(novaTelaJogo, "x", Regular.easeIn, -795, 0, 0.7, true);
			transicaoTela1.addEventListener(TweenEvent.MOTION_FINISH, iniciaTemporizador2, false, 0, true);
			
			novaTelaJogo.addEventListener(EventoJogador.MORTO, jogadorMorre, false, 0, true);/*Adiciona
			um ouvinte de evento que checará constantemente pela ocorrência de "EventoJogador.MORTO"
			(que é uma classe de eventos criada por nós) e executará a função "protagonistaMorre", que será
			descrita logo abaixo desta função*/
			stage.focus = novaTelaJogo;
		}
		
		public function menu(Evento:EventoDisparador):void{
			mostraTelaInicial();
			/*Aqui surge uma dúvida: na função acima, quando foi adicionado o "EventoDisparador.REINICIAR",
			a função que ele acionava era "pedidoIniciar", que é uma função que já havia sido definida e
			que tem por finalidade trocar a tela inicial pela tela de jogo. Por que, então, não foi feito
			o mesmo com o "EventoDisparador.MENU", que poderia acionar a função "mostraTelaInicial" dire-
			tamente, ao invés de acionar uma função "menu" que aciona a tal "mostraTelaInicial"? A respos-
			ta é simples: "mostraTelaInicial" é uma função que não recebe nenhum parâmetro de entrada.
			Porém, SEMPRE que uma função é acionada por um ouvinte de evento, o parâmetro dessa função
			TEM QUE SER o próprio evento que foi disparado. Por isso, seria impossível acionar
			"mostraTelaInicial" pelo "EventoDisparador.MENU", pois obrigatoriamente sua entrada seria
			esse evento. Assim, a solução é criar uma função "menu" que recebe de entrada o "EventoDispara-
			dor" e cujo único propósito é acionar a função "mostraTelaInicial"*/
			transicaoTela1 = new Tween(novaTelaFim, "x", Regular.easeIn, 0, -800, 0.7, true);
			transicaoTela2 = new Tween(novaTelaInicial, "x", Regular.easeIn, 800, 0, 0.7, true);
			transicaoTela1.addEventListener(TweenEvent.MOTION_FINISH, removeInstancia, false, 0, true);
		}
		
		function iniciaTemporizador1(Evento:TweenEvent):void{
			novaTelaJogo.temporizadorDoJogo.start();
			removeChild(novaTelaInicial);
			novaTelaInicial = null;/*Esta linha elimina todas as formas de referência existentes para
			"novaTelaInicial", ou seja, todas as variáveis e os eventos deste objeto são descartados.
			Se não fizéssemos isso, o menu inicial e a tela de jogo estariam sendo executados ao mesmo
			tempo, e não é isso que desejamos. Além de poder gerar conflitos no código, a existência
			de duas telas poderia deixar o jogo mais lento, especialmente à medida que o jogador morre
			e reinicia o jogo*/
		}
		
		function iniciaTemporizador2(Evento:TweenEvent):void{
			novaTelaJogo.temporizadorDoJogo.start();
			removeChild(novaTelaFim);
			novaTelaFim = null;
		}
		
		function removeInstancia(Evento:TweenEvent):void{
			removeChild(novaTelaFim);/*Remove graficamente o objeto "novaTelaFim" do palco*/
			novaTelaFim = null;
		}
	}
}