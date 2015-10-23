//Criação do pacote que conterá a classe de eventos
package{
	//Importação de classes nativas do AS3
	import flash.events.Event;
	
	//Criação da classe pública "EventoDisparador" que extende a classe "Event"
	public class EventoDisparador extends Event{
		
		//Declaração de constantes
		public static const INICIAR:String = "iniciar";/*Estas constantes serão usadas para referenciar*/
		public static const REINICIAR:String = "reiniciar";/*os eventos de que precisamos. Elas não têm*/
		public static const MENU:String = "menu";/*valor muito grande para nós. A constante MENU poderia
		muito bem receber o valor "água". Isso não faria diferença para o programa, pois ele não vai usar
		o valor, o mais importante é o nome da constante*/
		public static const TRANSICAO_FIM:String = "transicao_fim";
		public static const VITORIA:String = "vitoria";
		
		public function EventoDisparador(tipo:String){/*Construtor da classe. Em sua inicialização, o
		construtor receberá como entrada uma String. Poderia ser QUALQUER nome, mas então a criação
		desta classe perderia o propósito. A entrada será sempre uma das três constantes acima, mesmo
		porque quem decide a entrada é o programador, não o programa*/
			super(tipo);/*Esta linha executará todo o construtor da classe Event, da qual a nossa classe
			EventoDisparador herda. Não nos interessa realmente saber O QUE será feito com a variável tipo*/
		}
	}
}