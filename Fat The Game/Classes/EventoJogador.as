//Criação do pacote que conterá a classe de eventos
package{
	//Importação de classes nativas do AS3
	import flash.events.Event;
	
	//Criação da classe pública "EventoProtagonista" que extende a classe "Event"
	public class EventoJogador extends Event{
		
		//Declaração de constantes
		public static const MORTO:String = "morto";/*Esta constantes será usada para referenciar
		o evento de que precisamos. Ela não tem muito valor para nós. A constante MORTO poderia
		muito bem receber o valor "água". Isso não faria diferença para o programa, pois ele não
		vai usar o valor, o mais importante é o nome da constante*/
		
		public function EventoJogador(tipo:String){/*Construtor da classe. Em sua inicialização, o
		construtor receberá como entrada uma String. Poderia ser QUALQUER nome, mas então a criação
		desta classe perderia o propósito. A entrada será sempre a constante acima*/
			super(tipo);/*Esta linha executará todo o construtor da classe Event, da qual a nossa classe
			EventoDisparador herda. Não nos interessa realmente saber O QUE será feito com a variável tipo*/
		}
	}
}