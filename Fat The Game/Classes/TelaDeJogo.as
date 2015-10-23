//Criação do pacote que conterá a classe
package{
	//Importação de classes nativas do AS3
	import fl.transitions.easing.Regular;
	import fl.transitions.easing.Strong;
	import fl.transitions.Tween;
	import fl.transitions.TweenEvent;
	import flash.display.MovieClip;//Classe que define funções de clips de filme
	import flash.display.SimpleButton;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.KeyboardEvent;//Classe que define funções de eventos de teclado
	import flash.events.TimerEvent;//Classe que define funções de eventos de cronômetros
	import flash.media.SoundChannel;
	import flash.media.SoundTransform;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import flash.ui.Mouse;//Classe que define funções de clips de mouse
	import flash.utils.Timer;//Classe que define funções de cronômetros

	//Criação da classe "TelaDeJogo" que extende a classe "MovieClip"
	public class TelaDeJogo extends MovieClip{
		
		//Declaração de variáveis
		private var camadaBaixo:MovieClip;
		private var camadaMeio:MovieClip;
		private var camadaTopo:MovieClip;
		public var botaoDireita:BotaoDireita;
		public var botaoEsquerda:BotaoEsquerda;
		public var botaoPause:MovieClip;
		public var direita:Boolean;//Variável "direita" de tipo Boolean
		public var efeitosCanal:SoundChannel;/*Canal de som que se encarregará de todos os outros sons da
		tela de jogo. Ele não controla sons de outras telas*/
		public var esquerda:Boolean;//Variável "esquerda" de tipo Boolean
		public var exercito:Array;//Variável "exercito" de tipo Array
		public var formato:SoundTransform;
		public var grupoDeBonus:Array;//Variável "grupoDeBonus" de tipo Array
		public var grupoDePoderes:Array;
		public var jogador:Jogador;/*Variável "jogador" de tipo Jogador. Perceba
		que não há conflito nos nomes, pois a variável começa com letra minúscula e o tipo om letra
		maiúscula*/
		public var limpaTela:Boolean = false;
		public var mfCanal:SoundChannel;/*"mf" se refere a MusicaDeFundo. É um canal seperado para que
		tenhamos maior controle sobre a música, e além disso as ações sobre este áudio são diferentes das
		ações dos outros*/
		public var MostradorTempo:TextField;
		public var musicaFundo:MusicaDeFundo;/*Variável que contém o áudio "MusicaDeFundo"*/
		public var pontosNaTela:MovieClip;
		public var PontuacaoProximoNivel:TextField;
		public var posicaoDaMusica:Number = 0;
		public var semAudio:Boolean = false;
		public var simboloJogoPausado:SimboloJogoPausado;
		public var somAtingidoBonus:SomAtingidoBonus;/*Variável que contém o áudio "SomAtingidoBonus"*/
		public var somAtingidoInimigo:SomAtingidoInimigo;/*Variável que contém o áudio "SomAtingidoInimigo"*/
		public var somJogadorMorre:SomJogadorMorre;/*Variável que contém o áudio "SomJogadorMorre"*/
		public var taxaDeBonus:Number = 0.04;//Variável "taxaDeBonus" de tipo Number
		public var taxaDeInimigos:Number = 0.08;//Variável "taxaDeInimigos" de tipo Number
		public var tempoDeJogo:Number = 0;
		public var tempoParaSubirNivel:Number = 10;
		public var temporizadorDoJogo:Timer;//Variável "temporizadorDoJogo" de tipo Timer
		public var textoPontosNovos:TextoPontosNovos;
		public var velocidade:int = 10;//Variável "velocidade" de tipo int
	
	//Funções da classe
		public function TelaDeJogo(){/*Construtor da classe. Sua entrada é a variável "mM",
		de tipo Boolean (verdadeiro/falso). Não tem retorno*/
			//Áudio
			formato = new SoundTransform(1,0);
			botaoPause.stop();
			botaoPause.buttonMode = true;
			botaoPause.addEventListener(MouseEvent.CLICK, paraContinuaTemporizador, false, 0, true);

			musicaFundo = new MusicaDeFundo();
			somAtingidoBonus = new SomAtingidoBonus();
			somAtingidoInimigo = new SomAtingidoInimigo();
			somJogadorMorre = new SomJogadorMorre();
			audioOnOff();
			
			//Elementos gráficos
			camadaBaixo = new MovieClip;
			this.addChild(camadaBaixo);
			camadaMeio = new MovieClip;
			this.addChild(camadaMeio);
			camadaTopo = new MovieClip;
			this.addChild(camadaTopo);
			
			exercito = new Array();/*Aciona o construtor da classe "Array" na variável pública
			"exercito" declarada acima*/
			grupoDeBonus = new Array();/*Aciona o construtor da classe "Array" na variável pública
			"grupoDeBonus" declarada acima*/
			grupoDePoderes = new Array();
			
			botaoDireita = new BotaoDireita();
			botaoDireita.x = 750;
			botaoDireita.y = 440;
			botaoEsquerda = new BotaoEsquerda();
			botaoEsquerda.x = 50;
			botaoEsquerda.y = 440;
			camadaTopo.addChild(botaoDireita);
			camadaTopo.addChild(botaoEsquerda);
			
			jogador = new Jogador();/*Essas duas linhas fazem exatamente o mesmo que as
			duas linhas acima, mas para a variável "jogador"*/
			camadaMeio.addChild(jogador);/*Adiciona o objeto "novaTelaInicial" ao ambiente da classe
			"DocumentClass". Agora esse objeto é filho de "DocumentClass"*/
			jogador.width *= 1.2;
			jogador.height *= 1.2;
			jogador.x = 400;//Abscissa do "jogador" é igual a 250
			jogador.y = 370;//Ordenada do "jogador" é igual a 340
			
			camadaTopo.addChild(MostradorTempo);
			camadaTopo.addChild(pontosNaTela);
			camadaTopo.addChild(botaoPause);
			
			temporizadorDoJogo = new Timer(25);/*Adiciona o temporizador, que é uma	classe nativa
			do Flash que define que o código repetirá algo indefinidamente em vários intervalos de
			tempo (no caso, a cada 25ms)*/
			temporizadorDoJogo.addEventListener(TimerEvent.TIMER, clock, false, 0, true);/*Adiciona um ouvinte
			de eventos ao "temporizadorDoJogo". Este ouvinte "escuta" a ocorrência de um evento de
			pulso, ou seja, a cada 25 ms (que foi o valor definido acima), "temporizadorDoJogo"
			lançará um pulso que será capturado pelo ouvinte acima. Este ouvinte então acionará
			a função "clock", descrita logo abaixo*/
		}
		
		public function clock(eventoTimer:TimerEvent):void{/*Função pública que recebe um 
			evento Timer como parâmetro e não retorna nada (void). O nome clock foi escolhido porque
			é muito usado em informática como sendo um valor de pulso*/
			var jogadorAtingido:Boolean = false;/*Declaração da variável privada "jogador-
			Atingido", do tipo Boolean e valor false e que só existe dentro desta função (clock)*/
			var aleatorioX:Number = 25+(Math.random() *750);/*Declaração da variável privada "aleatorioX
			do tipo Number e que só existe dentro desta função (clock). O valor dela será recalculado a cada
			pulso de clock (25 ms). A função matemática "Math.random()" calcula um número aleatório entre
			0 (zero) e 1 (um). Portanto, o valor de aleatorioX será sempre um número entre 25 e 475,
			inclusive*/
			
			botaoEsquerda.addEventListener(MouseEvent.MOUSE_DOWN, moveEsquerda, false, 0, true);
			botaoEsquerda.addEventListener(MouseEvent.MOUSE_UP, stopMoveEsquerda, false, 0, true);
			botaoEsquerda.addEventListener(MouseEvent.MOUSE_OUT, stopMoveEsquerda, false, 0, true);
			botaoDireita.addEventListener(MouseEvent.MOUSE_DOWN, moveDireita, false, 0, true);
			botaoDireita.addEventListener(MouseEvent.MOUSE_UP, stopMoveDireita, false, 0, true);
			botaoDireita.addEventListener(MouseEvent.MOUSE_OUT, stopMoveDireita, false, 0, true);
			
			if(direita || esquerda){
				if(esquerda){
					if(jogador.x > 0+jogador.width/2){
						jogador.moveJogador(-velocidade,0);
					}
				}
				if(direita){
					if(jogador.x < 800-jogador.width/2){
						jogador.moveJogador(velocidade,0);
					}
				}
			}
						
			if(Math.random() < taxaDeInimigos){/*Este é um cálculo de probabilidade. Se "Math.random()",
			que é um valor entre zero e um, for menor do que a variável "taxaDeInimigos"(0.10), então ele
			executa as instruções abaixo. A cada clock existe 10% de chance de um inimigo ser adicionado
			à tela do jogo. Isso quer dizer que o número de inimigos adicionados por segundo não é cons-
			tante, mas é o resultado de uma probabilidade. Isso dá mais desafio ao jogo*/
				var novoInimigo:Inimigo;/*Cria novo objeto do tipo "Inimigo". Se lembrarmos da classe
				"Inimigo", veremos que o construtor dela recebia duas entradas do tipo Number, inicioX
				e inicioY, que eram usadas para definir a posição inicial do inimigo na tela. Como inicioX
				recebe "aleatorioX" como entrada, sempre que um novo inimigo for criado, sua posição
				horizontal será um número aleatório entre 25 e 475 (leia linha 91). Já inicioY recebe o
				valor -20, que, de acordo com o plano cartesiano do Flash, fica 20 pixels acima da tela do
				jogo*/
				if(Math.random() <= 0.9){/*Aqui temos outra probabilidade. No caso, SE o cálculo de random()
				for menor ou igual a 0.9, faça:*/
					novoInimigo = new Inimigo("Batatas",aleatorioX, -20);/*Cria um novo inimigo cuja apa-
					rência está definida dentro da classe "Inimigo" para palavra "Batatas". Em 90% dos
					clocks, o objeto "novoInimigo" será "Batatas"*/
				}
				else{//Senão:
					novoInimigo = new Inimigo("Hamburger",aleatorioX, -20);/*Cria um novo inimigo cuja apa-
					rência está definida dentro da classe "Inimigo" para palavra "Hamburger". Em 10% dos
					clocks, o objeto "novoInimigo" será "Hamburger"*/
				}
				exercito.push(novoInimigo);/*Adiciona o "novoInimigo" recém criado à lista Array "exercito"*/
				camadaBaixo.addChild(novoInimigo.grafico);/*Insere "novoInimigo" fisicamente no palco (ou
				tela de jogo)*/
			}
			
			/*Todo este trecho é semelhante ao algoritmo dos inimigos (vide a partir da linha 97)*/
			if(Math.random() < taxaDeBonus){
				var novoBonus:Bonus;
				var defineTaxaDeTipo:Number = Math.random();
				if(defineTaxaDeTipo < 0.6){
					novoBonus = new Bonus("Cenoura",aleatorioX, -35);
				}
				else if(defineTaxaDeTipo >= 0.6 && defineTaxaDeTipo <= 0.97){
					novoBonus = new Bonus("Maca",aleatorioX, -40);
				}
				else{
					novoBonus = new Bonus("Melancia", aleatorioX, -45);
				}
				grupoDeBonus.push(novoBonus);
				camadaBaixo.addChild(novoBonus.grafico);
			}
			
			//Laço "for" para os inimigos
			for each(var inimigo:Inimigo in exercito){/*Para cada nova variável "inimigo", do tipo "Inimigo"
			presente em "exercito", faça:*/
					inimigo.moveInimigo();//Chamada à função "moveInimigo" descrita na classe "Inimigo"
					var indiceExercito:Number = exercito.indexOf(inimigo);/*Declaração da variável
					"indiceExercito", de tipo Number. "indexOf" é uma função definida na classe Array e que
					retorna o índice de um objeto (no caso, "inimigo") dentro de uma lista (no caso, exercito)*/
					if(PixelPerfectCollisionDetection.isColliding(jogador, inimigo.grafico, this, true)){
					/*Chama a função "isColliding" da classe "PixelPerfectCollisionDetection", criada por Troy
					Gilbert, para checar se dois objetos (no caso, "jogador" e "inimigo") se chocaram*/
						if(jogador.frameAtual == 3){/*Se a variável "frameAtual", pertencente ao objeto
						"jogador" e definida na classe "Jogador, for igual a 3, faça:*/
							botaoPause.removeEventListener(MouseEvent.CLICK, paraContinuaTemporizador);
							botaoEsquerda.removeEventListener(MouseEvent.MOUSE_DOWN, moveEsquerda);
							botaoEsquerda.removeEventListener(MouseEvent.MOUSE_UP, stopMoveEsquerda);
							botaoEsquerda.removeEventListener(MouseEvent.MOUSE_OUT, stopMoveEsquerda);
							botaoDireita.removeEventListener(MouseEvent.MOUSE_DOWN, moveDireita);
							botaoDireita.removeEventListener(MouseEvent.MOUSE_UP, stopMoveDireita);
							botaoDireita.removeEventListener(MouseEvent.MOUSE_OUT, stopMoveDireita);
							var tweenJogadorMorto:Tween = new Tween(jogador, "alpha", null, 1, 0, 50, false);
							jogador.gotoAndStop("AnimacaoJogadorMorto");
							tweenJogadorMorto.addEventListener(TweenEvent.MOTION_FINISH, despachoFinal, false, 0, true);
							mfCanal.stop();
							efeitosCanal = somJogadorMorre.play(0);
							temporizadorDoJogo.stop();//Para o temporizador
						}
						jogador.incrementaEstado();/*Chama a função "incrementaEstado", definifa na
						classe "Jogador"*/
						exercito.splice(indiceExercito,1);/*Chama a função "splice". Esta é uma função da classe
						Array, e recebe dois parâmetros de entrada: o índice inicial da contagem, ou seja, o
						índice a partir do qual será feita uma contagem para excluir "n" elementos; e o nú-
						mero da contagem. Por exemplo, digamos que queiramos excluir 6 elementos de um Array
						a partir do 12º elemento; para isso, chamaremos a função "splice(12, 6)". Como aqui
						nós estamos testando se o jogador foi atingido por um inimigo, então o índice
						que será usado é "indiceExercito", e o número de elementos é 1, pois eu só quero
						excluir do Array o elemento que atingiu o jogador*/
						camadaBaixo.removeChild(inimigo.grafico);/*Na linha de código acima nós excluimos o
						inimigo do Array, mas ele permanece na tela. Para removê-lo definitivamente, precisamos
						usar o código "this.removeChild(inimigo)". Utilizamos o identificador "this" porque a
						função "removeChild" SÓ PODE SER USADA pela classe "pai" do objeto removido.*/
						efeitosCanal = somAtingidoInimigo.play();
					}				
					if(inimigo.grafico.y > 480 + inimigo.grafico.height/2){/*Se a ordenada do "inimigo" for maior
					do que 400 + metade da altura do inimigo, faça:*/
						exercito.splice(indiceExercito,1);//Vide linha 212
						camadaBaixo.removeChild(inimigo.grafico);//Vide linha 220
					}
					if(limpaTela){
						for each(var inimigoASerRemovido:Inimigo in exercito){
							camadaBaixo.removeChild(inimigoASerRemovido.grafico);
						}
						exercito.splice(0);
						limpaTela = false;
					}
			}
			//Laço "for" para os Bonus
			for each(var bonus:Bonus in grupoDeBonus){/*Este trecho contém um erro ainda não identificado.
			Acontece que, se a taxaDeBonus for grande a ponto de vários bonus aparecerem ao mesmo tempo
			na tela, se o jogador pegar um deles, um ou mais elementos param. A única solução até
			agora foi diminuir a taxa, o que é lógico, pois não queremos que haja tantos bonus quanto
			inimigos. Este trecho é semelhante ao laço for dos Inimigos, para mais informações vide
			linha 196*/
				bonus.moveBonus();
				var indiceBonus:Number = grupoDeBonus.indexOf(bonus);
				if(PixelPerfectCollisionDetection.isColliding(jogador, bonus.grafico, this, true)){
					switch(bonus.tipoDeBonus){
						case "Cenoura":
							jogador.decrementaEstado();/*Ao contrário do que acontece quando um inimigo
							atinge o jogador, o bônus faz com que o estado do jogador seja decrementado*/
							break;
						case "Maca":
							jogador.decrementaEstado();/*Ao contrário do que acontece quando um inimigo
							atinge o jogador, o bônus faz com que o estado do jogador seja decrementado*/
							break;
						case "Melancia":
							limpaTela = true;
							break;
					}
					mostraPontosNovos(bonus.valor, bonus.grafico.x, bonus.grafico.y);
					grupoDeBonus.splice(indiceBonus,1);
					camadaBaixo.removeChild(bonus.grafico);
					pontosNaTela.incrementaValor(bonus.valor);
					efeitosCanal = somAtingidoBonus.play(70);
				}
				if(bonus.grafico.y > 480 + bonus.grafico.height/2){
					grupoDeBonus.splice(indiceBonus,1);
					camadaBaixo.removeChild(bonus.grafico);
				}
			}
			
			if(temporizadorDoJogo.currentCount/40 == tempoParaSubirNivel){/*Se a variável "valorAtual"
			do objeto "pontosNaTela" for maior ou igual à variável "pontosParaSubirNivel", faça:*/
				taxaDeInimigos += 0.02;/*Incrementa em 0.02 o valor de "taxaDeInimigos"*/
				taxaDeBonus += 0.01;
				tempoParaSubirNivel += 10;/*Incrementa "pontosParaSubirNivel" em
				500 * taxaDePontuacao. Isso é importante porque se a variável "pontosParaSubirNivel"
				tiver sempre o mesmo valor, então depois que a pontuação passar de 500, a cada clock
				este bloco de código será executado, ou seja, a "taxaDeInimigos" e a "taxaDePontuacao"
				serão incrementadas 40 vezes por segundo. É óbvio que isso não é desejado. Então escre-
				vemos um código que muda "pontosParaSubirNivel" sempre que esse mesmo valor seja atin-
				gido. Assim, no nível 1 esse valor é 500, no nível 2 é 500 + 500*2 = 1500, no nível 3
				é 1500 + 500*3 = 3000, e assim por diante*/
			}
			
			if(temporizadorDoJogo.currentCount % 40 == 0){/*Se o resto da divisão entre a propriedade
			"currentCount" (contagem atual) da variável "temporizadorDoJogo" e 40 for igual a zero, faça:*/
				tempoDeJogo = temporizadorDoJogo.currentCount/40;/*Variável "tempoDeJogo" recebe o resul-
				tado da divisão entre "currentCount" (contagem atual) da variável "temporizadorDoJogo" e
				40*/
				
				/*OBS: Um pouco de cálculo se faz necessário para explicar esse bloco. Lembre-se, nós defi-
				nimos que o evento do temporizador seria acionado a cada 25 ms. Sempre que se passa esse
				tempo, existe um contador sendo incrementado. Assim, quando 25ms, contador = 1, 50 ms,
				contador = 2, 75 ms, contador = 3, e assim por diante. Acontece que se nós dividirmos
				1 segundo (ou 1000 milissegundos) por 25 ms, encontraremos o valor 40. Ou seja, a cada
				1 segundo, o evento do temporizador é acionado 40 vezes. Portanto, é fácil descobrirmos
				quanto tempo se passou desde o início do jogo, basta sabermos o valor do contador (no caso,
				"currentCount"). Como eu só quero mostrar o tempo que se passou em segundos, eu checo se o
				resto da divisão entre o contador e 40 é igual a 0. Se for, então o resultado da divisão
				me mostrará quanto tempo passou. Contador = 40 --> 1 s, Contador = 80 --> 2 s,
				Contador = 120 --> 3 s, Contador = 160 --> 4 s, e assim por diante*/
			}
			MostradorTempo.text = tempoDeJogo.toString() + "s";/*Atribui à propriedade ".text" da caixa de
			texto "MostradorTempo" o valor da variavel "tempoDeJogo" transformada em texto*/
		}
		
		public function obtemPontuacao():Number{/*Função pública sem entrada, mas que retorna um valor
		numérico*/
			return pontosNaTela.valorAtual;/*Retorna o valor de "valorAtual", do objeto "pontosNaTela",
			para a classe que a chamou*/
		}
		
		public function mostraPontosNovos(valor:Number, posX:Number, posY:Number):void{
			if(textoPontosNovos != null){
				removeChild(textoPontosNovos);
			}
			textoPontosNovos = new TextoPontosNovos();
			textoPontosNovos.x = posX;
			textoPontosNovos.y = posY + 10;
			addChild(textoPontosNovos);
			textoPontosNovos.caixaDeTexto.text = valor.toString();
			
			var animacao:Tween = new Tween(textoPontosNovos, "alpha", Strong.easeIn, 1, 0, 1, true);
		}
		
		public function despachoFinal(Evento:TweenEvent):void{
			dispatchEvent(new EventoJogador(EventoJogador.MORTO));
		}
		
		public function paraContinuaTemporizador(Evento:MouseEvent):void{
			if(temporizadorDoJogo.running){
				simboloJogoPausado = new SimboloJogoPausado();
				simboloJogoPausado.buttonMode = true;
				simboloJogoPausado.x = 400;		simboloJogoPausado.y = 240;
				simboloJogoPausado.width *= 2.5;	simboloJogoPausado.height *= 2.5;
				simboloJogoPausado.addEventListener(MouseEvent.CLICK, paraContinuaTemporizador, false, 0, true);
				camadaTopo.addChild(simboloJogoPausado);
				botaoPause.gotoAndStop(2);
				audioOnOff();
				temporizadorDoJogo.stop();
			}
			else{
				simboloJogoPausado.removeEventListener(MouseEvent.CLICK, paraContinuaTemporizador);
				camadaTopo.removeChild(simboloJogoPausado);
				botaoPause.gotoAndStop(1);
				audioOnOff();
				temporizadorDoJogo.start();
			}
		}
		
		function moveEsquerda(Evento:MouseEvent):void{/*Esta função pública é chamada
		pelo ouvinte de eventos adicionado ao palco na linha 146. Ela recebe como entrada um evento de
		teclado e não retorna nada*/
			esquerda = true;
		}
		
		function stopMoveEsquerda(Evento:MouseEvent):void{
			esquerda = false;
		}
		
		function moveDireita(Evento:MouseEvent):void{
			direita = true;
		}
		
		function stopMoveDireita(Evento:MouseEvent):void{
			direita = false;
		}
		
		public function loopMusicaFundo(Evento:Event):void{
			mfCanal.soundTransform = formato;
			mfCanal = musicaFundo.play(0,1,formato);
			mfCanal.addEventListener(Event.SOUND_COMPLETE, loopMusicaFundo, false, 0, true);
		}
		
		public function audioOnOff():void{
			if(semAudio){
				posicaoDaMusica = mfCanal.position;
				mfCanal.stop();
				semAudio = false;
			}
			else{
				mfCanal = musicaFundo.play(posicaoDaMusica,0,formato);
				mfCanal.addEventListener(Event.SOUND_COMPLETE, loopMusicaFundo, false, 0, true);
				semAudio = true;
			}
		}
	}
}