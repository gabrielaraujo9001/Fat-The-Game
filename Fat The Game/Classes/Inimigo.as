//Criação do pacote que conterá a classe
package{
	//Importação de classes nativas do AS3
	import flash.display.DisplayObject;//Classe que define funções de clips de filme
	
	//Criação da classe pública "Inimigo" que não extende nenhuma classe
	//Esta classe é muito semelhante à "Bonus"
	public class Inimigo{
		
		public var grafico:DisplayObject;/*Variável "grafico" do tipo "DisplayObject". Este tipo sempre
		recebe como valor um objeto físico do documento*/
		public var valorBase:Number;//Variável "valorBase" do tipo númerico
		public var tipoDeInimigo:String;//Variável "tipoDeInimigo", do tipo String (texto)
		public var velocidadeY:Number;/*Variável pública de tipo Number que define
		o valor da velocidade dos inimigos.*/ 
		
		public function Inimigo(tipo:String, inicioX:Number, inicioY:Number){/*Construtor da classe "Inimigo",
		que recebe de entrada um valor String e dois valores numéricos*/
			tipoDeInimigo = tipo;
			switch(tipoDeInimigo){//Faz uma escolha limitada dos valores de "tipoDeInimigo"
				case "Batatas"://Caso "tipoDeInimigo" = Batatas, faça:
					grafico = new Batatas();/*Agora o valor de "grafico" é o objeto definido na classe
					"Batatas". Perceba que agora nós sempre temos que nos referenciar a "grafico" se quiser-
					mos mudar propriedades como "x", "y" e "width", pois ele é o elemento gráfico que repre-
					senta esta classe*/
					grafico.height = 30;
					grafico.width = 30;
					valorBase = 5;/*Atribui 5 a "valorBase" (esta variável será usada como pontuação)*/
					break;/*Todo comando "switch" precisa chegar a um "break", porque só assim nosso progra-
					ma fará o desvio do bloco. Isso evita que o programa siga adiante com o "switch"*/
				case "Hamburger"://Caso "tipoDeInimigo" = Hamburger, faça:
					grafico = new Hamburger();/*Agora o valor de "grafico" é o objeto definido na classe
					"Hamburger". Perceba que agora nós sempre temos que nos referenciar a "grafico" se
					quisermos mudar propriedades como "x", "y" e "width", pois ele é o elemento gráfico que
					representa esta classe*/
					grafico.height = 40;
					grafico.width = 40;
					valorBase = 10;/*Atribui 10 a "valorBase" (esta variável será usada como pontuação)*/
					break;
			}
		
			grafico.x = inicioX;//Atribui a entrada "inicioX" à abscissa do objeto
			grafico.y = inicioY;//Atribui a entrada "inicioY" à ordenada do objeto
			
			velocidadeY = 3+Math.random()*1.5;/*O valor da velocidade é calculado com uma função que
			gera número aleatório. Portanto, cada inimigo criado terá uma velocidade diferente*/
			
			/*OBS: o cálculo desta função não foi escrito na mesma linha da declaração da variável
			porque se assim fosse, a velocidadeY só seria calculada uma vez, portanto todas as ins-
			tâncias de "Inimigo" teriam a mesma velocidade. Este cálculo foi colocado no construtor
			da classe justamente para que, a cada instância adicionada, o objeto tivesse que calcular
			um novo valor*/
		}
		
		public function moveInimigo():void{/*Função pública sem entrada ou retorno*/
			grafico.y += velocidadeY;/*Soma o valor de velocidadeY à ordenada do objeto sempre que a função
			for chamada. Assim, se a posição inicial for 40 e a velocidade for 3, o cálculo da
			nova posição será y = 40 + 3 * n, sendo "n" o número de vezes que a função é chamada*/
		}
	}
}