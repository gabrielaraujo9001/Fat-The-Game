package{
	import flash.display.MovieClip;
	public class Estrela extends MovieClip{
		
		public var velocidadeY:Number = 3;
		public function Estrela(){
			x = 300;
			y = -35;
			height = width = 35;
		}
		
		public function moveEstrela(){
			y += velocidadeY;
		}
	}
}
