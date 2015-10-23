//Criação do pacote que conterá a classe
package{
	//Importação de classes nativas do AS3
	import flash.text.TextField;//Classe que define funções de caixas de texto
	import flash.display.MovieClip;//Classe que define funções de clips de filme
	
	//Criação da classe pública "Pontuacao" que extende a classe "MovieClip"
	public class Pontuacao extends MovieClip{
		
		//Declaração de variáveis
		public var mostradorPontuacao:TextField;
		public var valorAtual:Number = 0;//Cria a variável "valorAtual", de tipo Number
		
		public function Pontuacao(){/*Construtor da classe. Não recebe entrada nem dá retorno*/
			atualiza();/*Chama a função "atualiza" descrita abaixo*/
		}
		
		public function incrementaValor(incremento:Number):void{/*Função pública
		que recebe dois valores numéricos e não retorna nada*/
			valorAtual += incremento;/*Incrementa o "valorAtual" sempre que a função for chamada.
			O uso de dois valores para isso é necessário porque há dois elementos que dão pontos ao
			jogador: Bonus e Inimigo. Como não queremos que os inimigos tenham o mesmo valor de pontuação
			dos bonus e como não queremos encher o código de valores numéricos (por exemplo, ao invés de
			escrever 30, nós queremos uma variável que guarde o valor 30), a variável "taxa" se faz neces-
			sária*/
			atualiza();/*Chama a função "atualiza" descrita abaixo*/
		}
		
		public function atualiza():void{//Função pública sem entrada ou retorno
			mostradorPontuacao.text = valorAtual.toString();/*Esta linha diz que a propriedade .text
			da caixa de texto "mostradorPontuacao" (que é um elemento verdadeiramente instanciado no
			jogo) recebe a informação de "valorAtual" transformada em texto pela função .toString()
			[que é uma função nativa da classe MovieClip]. Assim, sempre que esta função for chamada,
			a caixa de texto mostrará o texto da variável "valorAtual"*/
		}
		/*OBS: É importante notar que a variável "valorAtual" desta classe NÃO TEM NENHUMA RELAÇÃO com
		a variável de mesmo nome da classe "barraProgresso"*/
	}
}