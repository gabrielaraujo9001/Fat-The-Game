//Criação do pacote que conterá a classe
package{
	//Importação de classes nativas do AS3
	import fl.transitions.easing.Regular;
	import fl.transitions.Tween;
	import flash.display.MovieClip;//Classe que define funções de clips de filme
	import flash.display.SimpleButton;
	import flash.events.MouseEvent;
	import flash.media.SoundChannel;
	import flash.net.*

//Classe que definem funções de eventos de mouse
	
	//Criação da classe "TelaInicial" que extende a classe MovieClip
	public class TelaInicial extends MovieClip{
		
		public var Instrucoes:MovieClip;
		public var novoBotaoInstrucoes:SimpleButton;
		public var novoBotaoIniciar:SimpleButton;
		public var somBotaoPressionado:SomBotaoPressionado;/*Apesar de o nome desta variável ser igual
		à da variável na classe TelaDeFimDeJogo, não há conflito pois ambas não existem ao mesmo tempo*/
		private var somBotaoPressionadoReverso:SomBotaoPressionadoReverso;
		public var botaoCanal:SoundChannel;
		
		public function TelaInicial(){/*Construtor de "TelaDeFimDeJogo", que não recebe entrada
		e não dá retorno*/
			somBotaoPressionado = new SomBotaoPressionado();
			somBotaoPressionadoReverso = new SomBotaoPressionadoReverso();
			Instrucoes.visible = false;
			Instrucoes.alpha = 0;
			novoBotaoInstrucoes.addEventListener(MouseEvent.CLICK, abreInstrucoes, false, 0, true);
			novoBotaoIniciar.addEventListener(MouseEvent.CLICK, iniciaJogo, false, 0, true);/*Adiciona um ouvinte
			de eventos ao botão "novoBotaoIniciar", que foi criado fisicamente dentro do MovieClip
			"TelaInicial". Este ouvinte "escuta" a ocorrência de um evento de clique do mouse.
			Quando o botão é clicado, ele aciona a função "iniciaJogo" descrita abaixo*/
		}
		
		private function abreInstrucoes(Evento:MouseEvent):void{
			Instrucoes.visible = true;
			var fadeIn:Tween = new Tween(Instrucoes, "alpha", Regular.easeIn, 0, 1, 0.3, true);
			Instrucoes.novoBotaoFechaInstrucoes.addEventListener(MouseEvent.CLICK, fechaInstrucoes, false, 0, true);
			botaoCanal = somBotaoPressionado.play();
		}
		
		private function fechaInstrucoes(Evento:MouseEvent):void{
			var fadeOut:Tween = new Tween(Instrucoes, "alpha", Regular.easeIn, 1, 0, 0.3, true);
			var invisivel:Tween = new Tween(Instrucoes, "visible", Regular.easeIn, 1, 0, 0.3, true);
			botaoCanal = somBotaoPressionadoReverso.play();
		}
		
		public function iniciaJogo(Evento:MouseEvent):void{/*Função pública que recebe como
		entrada um evento do tipo "MouseEvent" e não retorna nada*/
			botaoCanal = somBotaoPressionado.play();
			dispatchEvent(new EventoDisparador(EventoDisparador.INICIAR));/*Uma explicação detalhada
			do uso desse tipo de código está disponível na classe TelaDeFimDeJogo*/
			novoBotaoIniciar.removeEventListener(MouseEvent.CLICK, iniciaJogo);
			novoBotaoInstrucoes.removeEventListener(MouseEvent.CLICK, abreInstrucoes);
		}
	}
}