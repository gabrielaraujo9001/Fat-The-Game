//Criação do pacote que conterá a classe
package{
	//Importação de classes nativas do AS3
	import flash.text.TextField;//Classe que define funções de caixas de texto
	import flash.display.MovieClip;//Classe que define funções de clips de filme
	
	//Criação da classe pública "BarraProgresso" que extende a classe "MovieClip"
	public class BarraProgresso extends MovieClip{
		
		//Declaração de variáveis
		public var textoProgresso:TextField;
		public var valorAtual:Number;//Variável pública "valorAtual", do tipo "Number" (real)
		
		//Funções da classe
		public function BarraProgresso(){//Função pública construtora da classe
			super();/*Esta linha ordena que todo o construtor da classe pai (no caso, MovieClip)
			seja executado. Não interessa realmente saber o que será feito aqui.*/
		}
		
		public function determinaValor(quantia:Number):void{//Função pública que não tem retorno
			valorAtual = quantia;/*Torna "valorAtual" igual a valor de "quantia"*/
			atualiza();/*Chamada de função descrita a seguir*/
		}
		
		public function atualiza():void{//Função pública sem retorno e sem entrada
			textoProgresso.text = valorAtual.toString();/*Esta linha diz que a propriedade .text
			da caixa de texto "textoProgresso" (que é um elemento real da classe) recebe a informação
			de "valorAtual" transformada em texto pela função .toString() [que é uma função nativa
			da classe MovieClip]. Assim, sempre que esta função for chamada, a caixa de texto mostrará
			o texto da variável "valorAtual"*/
		}
	}
}
