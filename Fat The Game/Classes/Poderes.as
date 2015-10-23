//Criação do pacote que conterá a classe
package{
	//Importação de classes nativas do AS3
	import flash.display.DisplayObject;
	
	//Criação da classe pública "Bonus" que não extende nenhuma classe
	public class Poderes{
		
		//Declaração de variáveis
		public var grafico:DisplayObject;/*Variável "grafico" do tipo "DisplayObject". Este tipo sempre
		recebe como valor um objeto físico do documento*/
		public var tipoDePoder:String;//Variável "tipoDePoder", do tipo String (texto)
		public var velocidadeY:Number = 6;/*Variável pública "velocidadeY", do tipo "Number" (real)
		e cujo valor foi atribuído como 6*/
		
		//Funções da classe
		public function Poderes(tipo:String, inicioX:Number, inicioY:Number){/*Função pública construtora da
		classe.	Este construtor recebe três parâmetros como entrada para a criação do objeto: "tipo", de
		tipo String, e inicioX e inicioY, de tipos Number*/
			tipoDePoder = tipo;//Atribui o valor de "tipo" à variável "tipoDePoder"
			switch(tipoDePoder){//Faz uma escolha limitada dos valores de "tipoDePoder"
				case "Escudo"://Caso "tipoDePoder" = Escudo, faça:
					grafico = new Escudo();/*Agora o valor de "grafico" é o objeto definido na classe
					"Escudo". Perceba que agora nós sempre temos que nos referenciar a "grafico" se quiser-
					mos mudar propriedades como "x", "y" e "width", pois ele é o elemento gráfico que repre-
					senta esta classe*/
					grafico.height = grafico.width = 50;
					break;/*Todo comando "switch" precisa chegar a um "break", porque só assim nosso progra-
					ma fará o desvio do bloco. Isso evita que o programa siga adiante com o "switch"*/
			}
			
			grafico.x = inicioX;//A abscissa do objeto recebe o valor de inicioX
			grafico.y = inicioY;//A ordenada do objeto recebe o valor de inicioY
			
			/*OBS: Não é necessário, dentro da classe, referenciar suas propriedades com um ponto.
			Por exemplo, para escrever o código acima, não foi necessário dizer "Bonus.x = inicioX"
			e "Bonus.y = inicioY". O Flash já sabe que quando uma propriedade é simplesmente escrita
			(por exemplo, "x") ela se refere à própria classe*/
		}
		public function movePoder():void{//Função pública sem entrada ou retorno
			grafico.y += velocidadeY;/*Sempre que esta função for chamada, a ordenada do objeto será incremen-
			tada com o valor da variável pública "velocidadeY", declarada mais acima.*/
			
			/*OBS: Perceba que não foi dito qual o tipo do retorno desta função. Em Flash, se uma
			função não tem retorno, tanto faz escrever que seu retorno será "void" como não escrever
			nada*/
		}
	}
}