//Criação do pacote que conterá a classe
package{
	//Importação de classes nativas do AS3
	import flash.display.MovieClip;//Classe que define funções de clips de filme
	
	//Criação da classe pública "Jogador" que extende a classe "MovieClip"
	public class Jogador extends MovieClip{
		
		//Declaração das variáveis
		public var frameAtual:int;//Variável pública "frameAtual", de tipo int (inteiro)
		
		public function Jogador(){/*Construtor da classe "Jogador", que não recebe entrada
		e não dá retorno*/
			stop();/*Esta é uma função nativa da classe MovieClip. Ela faz com que o ponteiro da
			linha do tempo deste objeto permaneça parado (no caso, já no primeiro quadro ou frame).
			Isso é necessário aqui porque o MovieClip "Jogador" (objeto gráfico ligado a esta
			classe) possui três quadros que representam três estados diferentes. Esta função não
			foi usada nas classes "Inimigo" e "Bonus" pois ambas só possuem um quadro*/
			frameAtual = 1;/*Atribui valor 1 à variável "frameAtual"*/
			width *= 2;/*Faz com que a largura do objeto gráfico aumente em 1.3 vezes*/
			height *= 2;/*Faz com que a altura do objeto gráfico aumente em 1.3 vezes*/
			
			/*OBS: Nenhuma das duas propriedades acima é importante, são só uma questão de estética*/
		}
		
		public function moveJogador(velocidadeX:Number, velocidadeY:Number){/*Função pública com
		dois valores numéricos de entrada e nenhum valor de saída (retorno)*/
			x += velocidadeX;/*Incrementa a abscissa do objeto com o valor de "velocidadeX"*/
			y += velocidadeY;/*Incrementa a ordenada do objeto com o valor de "velocidadeY"*/
			
			/*Sempre que esta função for chamada, as coordenadas do objeto serão incrementadas ou
			decrementadas (dependerá do sinal dos números de entrada)*/
		}
		
		public function incrementaEstado(){/*Função pública sem entrada ou retorno*/
			frameAtual += 1;//Incrementa em 1 o valor de "frameAtual"
			if(frameAtual < 4){/*Se o valor de "frameAtual" for menor que 4, faça:*/
				gotoAndStop(frameAtual);/*Posiciona o ponteiro da linha do tempo no quadro correspon-
				dente ao valor de "frameAtual"*/
				width *= 1.1;
				height *= 1.1;
				/*Multiplica altura e largura em 1.2 vezes*/
			}
			/*Esta função, quando chamada, incrementa "frameAtual" e, se este resultado for menor que
			4, avança 1 quadro na linha do tempo do objeto e aumenta seu tamanho em 1.2 vezes*/
		}
		
		public function decrementaEstado(){/*Função pública sem entrada ou retorno*/
			if(frameAtual > 1){//Se o valor de "frameAtual" for menor que 4, faça:
				frameAtual -= 1;//Decrementa em 1 o valor de "frameAtual"
				gotoAndStop(frameAtual);/*Posiciona o ponteiro da linha do tempo no quadro correspon-
				dente ao valor de "frameAtual"*/
				width *= 1/1.1;
				height *= 1/1.1;
				/*Divide altura e largura em 1.2 vezes*/
			}
			/*Esta função, quando chamada, checa se "frameAtual" é maior que 1. Se for, decrementa
			"frameAtual", retrocede 1 quadro na linha do tempo do objeto e diminui seu tamanho em 1.2 vezes*/
		}
	}
}