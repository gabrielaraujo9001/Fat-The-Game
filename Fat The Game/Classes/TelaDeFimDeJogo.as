//Criação do pacote que conterá a classe
package{
	//Importação de classes nativas do AS3
	import flash.display.MovieClip;//Classe que define funções de clips de filme
	import flash.display.SimpleButton;//Classe que define funções de botões
	import flash.events.MouseEvent;//Classe que define funções de eventos de mouse
	import flash.text.TextField;//Classe que define funções de caixas de texto
	import flash.ui.Mouse;
	import flash.media.SoundChannel;
	import flash.net.SharedObject;

//Classe que define funções de mouse
	
	//Criação da classe pública "TelaDeFimDeJogo" que extende a classe MovieClip
	public class TelaDeFimDeJogo extends MovieClip{
		
		public var objetoCompartilhado:SharedObject;
		public var novoBotaoReiniciar:SimpleButton;
		public var novoBotaoMenu:SimpleButton;
		public var novoBotaoZerar:SimpleButton;
		public var mostradorTempoFinal:TextField;
		public var mostradorPontuacaoFinal:TextField;
		public var mostradorMelhorTempo:TextField;
		public var mostradorMelhorPontuacao:TextField;
		private var fim:SomFim;
		private var somBotaoPressionado:SomBotaoPressionado;
		private var somBotaoPressionadoReverso:SomBotaoPressionadoReverso;
		private var somZeraContador:SomZeraContador;
		public var CanalDeSom:SoundChannel;
		
		public function TelaDeFimDeJogo(){/*Construtor de "TelaDeFimDeJogo", que não recebe entrada
		e não dá retorno*/
			objetoCompartilhado = SharedObject.getLocal("resultadosJogoFHS");
			
			fim = new SomFim();
			somBotaoPressionado = new SomBotaoPressionado();
			somBotaoPressionadoReverso = new SomBotaoPressionadoReverso();
			somZeraContador = new SomZeraContador();
			CanalDeSom = fim.play();
			
			Mouse.show();//Esta função faz com que o ponteiro do mouse apareça na tela
			
			novoBotaoReiniciar.addEventListener(MouseEvent.CLICK, disparaReinicio, false, 0, true);/*Adiciona um ouvinte
			de eventos ao botão "novoBotaoReiniciar", que foi criado fisicamente dentro do MovieClip
			"TelaDeFimDeJogo". Este ouvinte "escuta" a ocorrência de um evento de clique do mouse.
			Quando o botão é clicado, ele aciona a função "reiniciaJogo" descrita abaixo*/
			novoBotaoMenu.addEventListener(MouseEvent.CLICK, disparaVoltaMenu, false, 0, true);/*Adiciona um ouvinte
			de eventos ao botão "novoBotaoMenu", que foi criado fisicamente dentro do MovieClip
			"TelaDeFimDeJogo". Este ouvinte "escuta" a ocorrência de um evento de clique do mouse.
			Quando o botão é clicado, ele aciona a função "voltaParaMenu" descrita abaixo*/
			novoBotaoZerar.addEventListener(MouseEvent.CLICK, zeraMelhoresValores, false, 0, true);
		}
		
		public function disparaReinicio(Evento:MouseEvent):void{/*Função pública que recebe como
		entrada um evento do tipo "MouseEvent" e não retorna nada*/
			CanalDeSom = somBotaoPressionado.play();
			dispatchEvent(new EventoDisparador(EventoDisparador.REINICIAR));/*Atenção para esta
			explicação. A função "dispatchEvent" serve para despachar um evento. Este despacho é
			direcionado para o local em que a classe "TelaDeFimDeJogo" foi criada, ou seja, dentro
			da classe "DocumentClass". O evento despachado foi escrito dentro dos parênteses:
			"new EventoDisparador" cria uma nova instância da classe "EventoDisparador", criada
			por nós. "(EventoDisparador.REINICIAR)" é o construtor da classe. Se lembrarmos deste
			construtor, ele recebia uma variável do tipo String. Esta variável, como foi escrito
			aqui, é "EventoDisparador.REINICIAR", que é uma constante do tipo String. Portanto, tudo
			o que a função "reiniciaJogo" é despachar o evento acima para "DocumentClass", que traba-
			lhará este evento de modo a reiniciar o jogo*/
			novoBotaoReiniciar.removeEventListener(MouseEvent.CLICK, disparaReinicio);
			novoBotaoMenu.removeEventListener(MouseEvent.CLICK, disparaVoltaMenu);
		}
		
		public function disparaVoltaMenu(Evento:MouseEvent):void{/*Função pública que recebe como
		entrada um evento do tipo "MouseEvent" e não retorna nada*/
			CanalDeSom = somBotaoPressionado.play();
			dispatchEvent(new EventoDisparador(EventoDisparador.MENU));/*A explicação acima se aplica
			totalmente a esta função*/
			novoBotaoReiniciar.removeEventListener(MouseEvent.CLICK, disparaReinicio);
			novoBotaoMenu.removeEventListener(MouseEvent.CLICK, disparaVoltaMenu);
		}
		
		public function mostraValores(tempo:Number, pontos:Number):void{/*Função pública que recebe
		um valor inteiro e dois numéricos e não dá retorno*/
			mostradorTempoFinal.text = tempo.toString() + " s";/*Esta linha diz que a propriedade .text da
			caixa de texto "TempoFinal" (que é um elemento verdadeiramente instanciado no jogo) recebe a
			informação de "tempo" transformada em texto pela função .toString()[que é uma função nativa do
			Flash]. Assim, sempre que esta função for chamada,	a caixa de texto mostrará o texto da
			variável "tempo"*/
			mostradorPontuacaoFinal.text = pontos.toString();/*A explicação acima se aplica a esta linha*/
			
			if(objetoCompartilhado.data.melhorTempo == null){
				objetoCompartilhado.data.melhorPontuacao = pontos;
				objetoCompartilhado.data.melhorTempo = tempo;
			}
			else if(tempo > objetoCompartilhado.data.melhorTempo){
				objetoCompartilhado.data.melhorPontuacao = pontos;
				objetoCompartilhado.data.melhorTempo = tempo;
			}
			
			mostradorMelhorPontuacao.text = objetoCompartilhado.data.melhorPontuacao.toString();
			mostradorMelhorTempo.text = objetoCompartilhado.data.melhorTempo.toString() + " s";
			objetoCompartilhado.flush();
		}
		
		public function zeraMelhoresValores(Evento:MouseEvent):void{
			objetoCompartilhado.clear();
			objetoCompartilhado.flush();
			mostradorMelhorPontuacao.text = mostradorMelhorTempo.text = "0";
			CanalDeSom = somZeraContador.play(70);
		}
	}
}