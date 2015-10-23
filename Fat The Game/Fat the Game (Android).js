(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.DocumentClass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ConjuntoGlobal();
	this.instance.setTransform(237.5,203.9,1,1,0,0,0,-45.5,-55.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:



(lib.TextoPontosNovos = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("+", "25px Holstein", "#000099");
	this.text.lineHeight = 27;
	this.text.setTransform(-26.2,-16.2);

	this.caixaDeTexto = new cjs.Text("pontos", "25px Holstein", "#000099");
	this.caixaDeTexto.lineHeight = 27;
	this.caixaDeTexto.setTransform(-7.2,-16.2);

	this.addChild(this.caixaDeTexto,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.2,-16.2,87.2,32.6);


(lib.Tempo = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Tempo:", "45px Holstein", "#FFFFFF");
	this.text.lineHeight = 47;
	this.text.setTransform(-28.9,-11.3,0.412,0.412);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.9,-11.3,58,22.8);


(lib.SimboloJogoPausado = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("AjGjGIGNDGImNDHg");
	this.shape.setTransform(4.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgmF4QhKgHg9gbQg8gcgygvQh1huAAidQAAicB1huQBLhFBegaQAjgJAogFQAUgCATAAQBUABBIAcQBFAcA7A2QASASAQASQBTBkAACCQAABhgvBRQgbAvgrAqQg/A6hLAbQhEAahOgBQgTAAgTgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(19,19,19,0.8)").s().p("AkMFJQgQgOgPgPQgygygdg6QguhXABhpQgBiuB9h9QAPgQAQgNQBIg8BagXQAzgNA3ABQARgBARACQCaALBwBwQA8A8AgBJQAhBNgBBZQABAZgDAYQgPCRhrBqQgZAYgZATQhsBRiOAAQiZABhzhggAgnl3QgoAFgjAJQheAahLBFQh1BuAACcQAACdB1BuQAyAvA8AcQA9AbBKAHQATABATAAQBOABBEgaQBLgbA/g6QArgqAbgvQAvhRAAhhQAAiChThkQgQgSgSgSQg7g2hFgcQhIgchUgBQgTAAgUACg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.4,-42.4,85,85);


(lib.Pontuacao = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Pontos:", "27px Holstein", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.setTransform(-55.2,-17.4);

	this.mostradorPontuacao = new cjs.Text("0        ", "27px Holstein", "#FFFFFF");
	this.mostradorPontuacao.lineHeight = 29;
	this.mostradorPontuacao.setTransform(7,-17.4);

	this.addChild(this.mostradorPontuacao,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.5,-17.4,204.4,34.9);


(lib.Personagem3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2B2C").ss(1,1,1).p("ABIjPQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPQgPgOAAgVQAAgUAPgPQAPgPAUAAgAlWCMQgbhBAAhLQAAiYBshtQBthsCYAAQCZAABsBsQBtBtAACYQAABLgaBBQgcBCg3A3QhsBtiZAAQiYAAhthtQg3g3gahCgAiDi7QAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPQgOgOAAgVQAAgUAOgPgAh3CxQABAAABAAQB1gWB6AXQgag4gbgeQhDhMhDBMQgaAegaAzQgBACgBACg");
	this.shape.setTransform(37,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2B2C").ss(0.1,1,1).p("ABhgjQAHADAFAFQALALAAAPQAAAMgLALQgKALgPAAQgKAAgIgFABhgjQgGgCgHAAQgPAAgLAKQgKALAAAPQAAAMAKALQAEADAEADAhmAhQAIAFALAAQAOAAALgLQALgKAAgPQAAgNgLgLQgGgFgGgDQgGgCgHAAQgPAAgLAKQgKALAAANQAAAPAKAKQADADAEADg");
	this.shape_1.setTransform(35.9,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AlWC5QgbhAAAhMQAAiXBthtQBshsCYAAQCZAABsBsQBtBtgBCXQAABMgaBAQirCLisAAQiqAAisiLgAB7DfQgcg3gageQhEhNhBBNQgbAdgaA0IgCADIACAAQB1gWB7AXIAAAAgAiDiNQgOAPAAAUQAAAVAOAOQAQAPAUAAQAUAAAPgPQAPgOAAgVQAAgUgPgPQgPgPgUAAQgUAAgQAPgAAliTQgOAPAAAVQAAAUAOAPQAPAPAUAAQAVAAAOgPQAPgPABgUQgBgVgPgPQgOgOgVAAQgUAAgPAOg");
	this.shape_2.setTransform(37,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AkFCxQg3g3gahCQFWEWFXkWQgbBCg3A3QhsBtiZAAQiYAAhthtgAh1BdIgCAAIACgEQAagzAageQBChKBEBKQAaAfAbA3Qh6gXh1AWgAhxjVIgHgFQgKgLAAgPQAAgOAKgLQALgLAPAAQAHAAAGADQAGACAGAGQALALAAAOQAAAPgLALQgLAKgOAAQgLAAgIgFgAA3jaIgIgGQgKgKAAgPQAAgPAKgKQALgLAPAAQAHAAAGADQAHACAFAGQALAKAAAPQAAAPgLAKQgKALgPAAQgKAAgIgFg");
	this.shape_3.setTransform(37,45.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah3AlQgOgOAAgVQAAgSAOgPQAPgPAVAAQAUAAAPAPQAPAPAAASQAAAVgPAOQgPAPgUAAQgVAAgPgPgAhxggQgKAKAAAPQAAANAKAKQAFAGAHACQAIAFALABQAOAAALgLQALgLAAgMQAAgPgLgLQgGgFgGgDQgIgFgKAAQgPAAgLALgAAxAgQgPgPAAgSQAAgVAPgPQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAASgPAPQgOAPgVAAQgUAAgPgPgAA2gmQgKALAAAPQAAAMAKALQAGAGAHADQAIAEAKAAQAPABAKgLQALgLAAgNQAAgOgLgLQgFgGgHgCQgIgFgKAAQgPAAgLAKg");
	this.shape_4.setTransform(35.8,21.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


(lib.Personagem2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2B2C").ss(1.5,1,1).p("AA+AFIg4gTIhDAd");
	this.shape.setTransform(48.3,46.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2B2C").ss(2,1,1).p("AjmFdQErAWEtgsQgOn5hmidQkEgtkUA1AjmFdIiJgeQgPkOBel3");
	this.shape_1.setTransform(37,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2C2B2C").ss(1,1,1).p("ADGAdQACACACACQAEAFAAAIQAAAIgEAGIgBAAQgEAFgFAAQgFAAgDgCQgBgCgBgBQgFgGAAgIQAAgIAFgFQADgFAFgBQgBAAgBAAQgMAAgJAMQgJAMAAAUQAAAXAMASQAOATARAAQARAAAIgTQAIgSgFgXQgFgUgMgMQgHgHgHgDQgDgCgDAAQgBAAgBAAABnBwQgJATgRAAQgRAAgNgTQgMgSAAgXQAAgUAJgMQAIgMAMAAQANAAALAMQANAMAEAUQAGAXgIASgABVAxQAAAIgFAFQgBABAAABQgEAEgFAAQgDAAgDgCQgCgCgBgCQgFgFAAgIQAAgIAFgGQAEgFAFAAQAGAAAEAFQAFAGAAAIgAjgiCIgBAAAjmiCIAFAA");
	this.shape_2.setTransform(31.2,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AkRFdQAcmNhRkXIABAAQEUg1EEAtQBmCdAOH5QjJAdjHAAQhkAAhkgHgAAHB2IBEgeIA4AVIg4gVgABCicQgJANAAAUQAAAWAMASQAOAUARAAQARAAAIgUQAIgSgFgWQgFgUgMgNQgHgGgHgDQgDgCgDAAIgCAAIgCAAQgMAAgJALgAg3icQgJANAAAUQAAAWAMASQANAUARAAQARAAAHgUQAIgSgGgWQgEgUgLgNQgLgLgNAAQgMAAgIALg");
	this.shape_3.setTransform(41.3,35.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AkAE0QgPkNBel4IAFAAQBREXgcGMgAB2iLIgEgEQgFgFAAgIQAAgIAFgGQAEgFAFAAQAGAAAEAFQAFAGAAAIQAAAIgFAFIgBACQgEAEgFAAQgDAAgCgCgADtiOIgCgDQgFgGAAgIQAAgIAFgFQADgFAFgBIACAAQADAAADACIAEAEQAEAFAAAIQAAAIgEAGIAAAAQgFAFgFAAQgEAAgEgCg");
	this.shape_4.setTransform(25.9,36.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlAgQgMgSAAgUQAAgVAJgMQAIgLAMAAIADAAQgFAAgEAFQgEAFAAAIQAAAJAEAFIADADQADACAEAAQAGABAEgGIAAAAQAEgFAAgJQAAgIgEgFIgDgEQAHADAGAHQANAMAEAVQAGAUgIASQgJATgRAAQgRAAgNgTgAhVAgQgMgSAAgUQAAgVAJgMQAJgLAMAAQAMAAAMALQAMAMAFAVQAFAUgIASQgIATgRAAQgRAAgOgTgAhHgrQgEAGAAAIQAAAIAEAFIAEAEQADACADAAQAFAAADgEIACgCQAEgFAAgIQAAgIgEgGQgEgFgGAAQgGAAgEAFg");
	this.shape_5.setTransform(44.6,24);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,71.4);


(lib.Personagem1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2B2C").ss(2,1,1).p("Ai3F6IJWgOQhEiYhqjyQhGiih1huQgggfgmgcIgZgTAgsl/QiSIujgDRIDngG");
	this.shape.setTransform(41.5,38.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2B2C").ss(1,1,1).p("AA3AbQAFgFAGAAQAGAAAEAFQAFAGAAAJQAAAGgDAEQAAACgCACQgEAGgGAAQgFAAgDgDQgBgBgCgCQgEgGAAgIQAAgJAEgGgAAqAeQAJgMANAAQANAAAMAMQANANAFAVQAGAYgIASQgJAVgSAAQgSAAgOgVQgNgSAAgYQAAgVAJgNgAg+AYQAGAAAEAGQAFAGAAAIQAAAHgDAEQgBACgBABQgEAGgGAAQgDAAgCgBQgDgBgDgEQgEgFAAgJQAAgIAEgGQAFgGAGAAgAgnAeQANANAFAVQAGAYgIASQgJAVgSAAQgSAAgOgVQgNgSAAgYQAAgVAJgNQAJgMANAAQANAAAMAMgAh2kmQAAAAgBAHIgBAGIAAgQAg8D0QBiByBTiB");
	this.shape_1.setTransform(49.1,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006633").s().p("ABTl/IAAAQIABgGIABgHQAUAkgfDNQgnD5hZEMIjnAFQDgjQCQougACIgVQgDgBgDgDQgEgGAAgJQAAgIAEgGQAFgFAGAAQAGAAAEAFQAFAGAAAIQAAAHgDAEIgCAEQgEAFgGAAIgFgBgAEHgZIgDgDQgEgGAAgIQAAgIAEgHQAFgFAGAAQAGAAAEAFQAFAHAAAIQAAAGgDAEIgCAEQgEAGgGAAQgFAAgDgDg");
	this.shape_2.setTransform(28.6,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAhQgMgSgBgWQAAgVAKgNQAJgMANAAQANAAAMAMQANANAFAVQAFAWgIASQgJAVgSAAQgSAAgOgVgAAxgsQgFAGAAAJQAAAIAFAGIACADQAEADAEAAQAGAAAFgGIACgEQACgEAAgGQAAgJgEgGQgFgFgGAAQgGAAgEAFgAhZAhQgMgSgBgWQAAgVAKgNQAJgMANAAQANAAAMAMQANANAFAVQAFAWgIASQgJAVgSAAQgSAAgOgVgAhPgpQgFAGAAAIQAAAJAFAFQACAEADABIAFABQAGAAAFgGIACgDQACgEAAgHQAAgIgEgGQgFgGgGAAQgGAAgEAGg");
	this.shape_3.setTransform(49.8,37.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AioiKQAfjNgUgjIAaASQAnAdAhAeQByBuBGCiQBqDyBECYIpVAOQBbkMAnj5gAgJDVQAtAAAqg+IAEgGIgEAGQgqA+gtAAIAAAAIAAAAQgqAAgtgyIgDgDIADADQAtAyAqAAIAAAAIAAAAgAADg1QgHANAAAVQAAAWAKATQAOAVATAAQARAAAKgVQAHgTgFgWQgFgVgNgNQgMgMgNAAQgNAAgJAMgAh9g1QgKANAAAVQABAWANATQAOAVARAAQATAAAIgVQAJgTgGgWQgFgVgNgNQgMgMgNAAQgNAAgJAMg");
	this.shape_4.setTransform(53.1,38.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,76.8);


(lib.Hamburger = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2B2C").ss(1,1,1).p("AXDtUIAAAQIARAAIDBAAIAAJ2IDOAAIAAGlIjNAAIgDAAIAADSIDVAAIAADNIjPAAIgGAAIAAAHIADJvIjSACIAADQMgt9AAAIAAjQIAIAAA2+TjIAAAGIgmAAIiuAAIAAjKA6SQcICuAAIADAAIAAgCIgDAAIiuAAIAAjLA6SNNICuAAIAEAAA3kNIIiuAAIAAiKIAAhBA6SJ7IAFAAA6SJ1IAAADIjVAAIAAjKA9nGrIDVAAIAAAJIAADBA6HGrIgBjWIjVACIADmlIDSAAIAAp2IC3AAIAbAAIAAJ2MAt5AAAIAAp2IjQAAIAAgPIAAgeIAAikIjUAAIABjEIAAgPIAAAAMggzAAAIAAgBIADjUMAgwAADIAAC3IAAAbA24tcIgBi7IDGACAzowgIAAicIAAgeIAAgOIDUAAIAAAAIAAAOIABDFAQ6zoIC5AAIAAAPIAAAeIAACRAUIwVIC8gBIgBDCAaWDXIAAgFIAAjSMg0eAACIAADPIAAADIACAAMA0YAADIABAAAaTGwIAAgFIgFAAMg0VAAAIAAAAAaTGrIAAgCAXBTuIADAAIAAgCIAAmdIjNAAIgIAAIAAjZIGkAAATlNlIAAC8Ih6AAIgtAAIAAAAIjVAAIAAjBANVNNIjFAAIAAgCAKGNVIAADKIjVAAIAAACIjUAAIjVAAIAAjKAADNNIjSAAIAAACIjVAAIjRAAAp9NZIAADIIjVAAIAAhEAtcPgIAABBIjUAAIAAjKAwwNUIABAAAw5NIIjHAAA0MNTIAADMIiIAAIglAAA2UQhIglAAIAAgCIgFAAIAADEAaTGwIAADGAQ6zoIgaAAATzwVIAAgVAUIwVIgVAAAwawVIjOAAIAACjIAAAeIAAAQIjQAAIAAgYAzowgIAAALIgLAAA6IDUIAAABAp4KFIAADJIAAABIADAAAqDNUIAGAAIAAAFAmkKCIjUAAAmkNPIAAjNAw5NIIAEAAIAAjNIjVAAA0KJ9IAADLIAKAAAtcO6IAAhmIjTAAAtSNXIAABgIAAAmAtcO6IAAAmAqDNUIjPAAA0MNTIAAgBIiyAAIgeAAIgFAAA2+NSIAAgFIgiAAA3kNIIAmAAIAAjNIjPAAA3hQcIAAADIAbAAIAIAAA3hQaIAAjGATlNlIAAgRIh6AAIgtAAIAAAAIAADNAKQKCIAADJAKGNVIAAgDIjVAAAGxNUIAABeIAABtANpNYIAAAIANhNNIgMAAANpNXIAAABANhNNIADAAIAAjNIjUAAAQ+NUIjVAAAGxNUIjUAAIAADNAjPKCIAABjIAABoAADNNIAAAAIAAjNIjSAAADdNUIjVAAAjPKCIjVAAAXBTuMgtyAAA");
	this.shape.setTransform(189.6,147);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2B2C").ss(0.1,1,1).p("AXQs5IgQgRAaWKBIgGAGA20T5IgNgLA3jNYIgEgFA6QKGIgFgHA6VG/IALgJA3Us5IAZgYAz2wLIALgKAwXzdIABgBAQdz4IAaAbATwwfIAVAVAaTDdIgEAEAaLG2IAFAFA6LDbIACAEAXBT3IgDACAT0NaIgSAVANmNrIgUgTAKNNWIgKAKAAFNhIgFgJAp4NaIgIAKAtVPnIgKAEAwyNfIgKgMA0DNTIgMALAp7NYIgLAHAtVPBIgKADANmNjIgIgL");
	this.shape_1.setTransform(189.9,146);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2B2C").s().p("A25W+IAAjQIAIAAMAtyAAAIADAAIAADQgAXETsIAAmdIjNAAIgIAAIAAjZIGkAAIAAAHIADJvIjSACgA3kTpIiuAAIAAjKIAAgDICuAAIADAAIAAgCIgDAAIiuAAIAAjLIAAgCICuAAIAEAAIAiAAIAAAFICyAAIAAACIAADLIiIAAIglAAIAlAAIAAACIglAAIAAgCIgFAAIgIAAIgbAAIAAgDIAAADIAbAAIAIAAIAADEIAAAGgA3hQaIAAjGgA3cNSIAeAAIgeAAIgFAAgARrQhIgtAAIAAAAIAAjNIAAAAIAtAAIB6AAIAAARIAAC8gANpQhIAAjBIAAgIIAAgBIAAgDIDVAAIAADNgADdQhIAAjNIDUAAIAABeIAABtIAAhtIAAheIAAgCIDVAAIAAADIAADKIjVAAIAAACgAAIQhIAAjKIAAgBIAAgCIDVAAIAADNgAtSQhIAAhEIAAgmIAAhgIAAgDIDQAAIAFAAIAAAFIAADIgAwwQhIAAjKIAAgDIABAAIDTAAIAABmIAAAmIAABBgA2UQfgA2+QfgAmkNPIAAjNIDVAAIAAgCIDSAAIAADNIAAAAIjSAAIAAhpIAAhiIAABiIAABpIAAACgAmkNPIjRAAIgDAAIAAgBIAAjJIAAgDIDUAAIAADNgANhNNIgMAAIjFAAIAAgCIAAjJIAAgCIDUAAIAADNgAw5NIIjHAAIgKAAIAAjLIAAgCIDVAAIAADNgA3kNIIiuAAIAAiKIAAhBIAAgCIAFAAIDPAAIAADNgA9nJ4IAAjKIAAgDIDVAAIAAAJIAADBIAAADgAaZJ2IgGAAIAAjGIAAgFIgFAAMg0VAAAIAAAAIgBjWIAAgBIAAABIjVACIADmlIDSAAIAAp2IC3AAIAbAAIAAJ2MAt5AAAIAAp2IjQAAIAAgPIAAgeIAAikIjUAAIABjEIAAgPIAaAAIC5AAIAAAPIAAAeIAACRIAAAVIAVAAIC8gBIgBDCIAAAQIAQAAIDCAAIAAJ2IDOAAIAAGlIjNAAIAAgFIAAjSMg0eAACIAADOIAAAEIADAAMA0XAADIABAAIAADSIDVAAIAADNgAaTGrIAAgCgAaTJ2gA24tEIAAgYIgBi7IDGACIALAAIAAgLIAAicIAAgeIAAgOIDUAAIAAAAIAAAOIABDFIgHAAIjOAAIAACjIAAAeIAAAQgAwTzoIAAgBIADjUMAgwAADIAAC3IAAAbg");
	this.shape_2.setTransform(189.6,147);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32CD32").s().p("AtfChIjTAAIgKgMIAEAAIAAjLIjVAAIAAACIAADJIAKAAIgMAMIAAgCIiyAAIAAgFIgiAAIgEgFIAmAAIAAjLIjPAAIgFgGIAAjBIALgJIAAAAMA0VAAAIAFAFIAADGImkAAIAADXIAIAAIgSAWIAAgRIh6AAIgtAAIAAAAIjVAAIAAADIAAACIgIgMIADAAIAAjLIjUAAIAAACIAADHIgKAKIAAgDIjVAAIAAACIjUAAIjVAAIAAACIgFgJIAAAAIAAjLIjSAAIAAACIjVAAIjUAAIAAADIAADHIgKAGIjQAAIAAADIAABgIgKADgAaQg7IAGAAIgGAHg");
	this.shape_3.setTransform(189.9,216.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B4513").s().p("A6MBpIgDgEIAAjMMA0fgADIAADRIgEAEg");
	this.shape_4.setTransform(190.3,157.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0E68C").s().p("A2yT5IgMgLIAAjFIAFAAIAAADIAlAAIAAgDICHAAIAAjLIAMgMIDHAAIAKANIgBAAIAAADIAADKIDVAAIAAhBIAKgDIAABEIDUAAIAAjIIAJgKIDRAAIDUAAIAAgCIDSAAIAGAJIAAABIAADKIDUAAIDVAAIAAgDIDUAAIAAjJIAKgKIAAACIDFAAIAVATIAADBIDUAAIABAAIAtAAIB6AAIAAi9IARgVIDNAAIAAGdIgDACgA23jDIAAp2IgbAAIAagYIAAAYIDQAAIAAgQIAAgeIAAijIDOAAIAGAAIgBjFIAAgOIACgBIAAAAMAgyAAAIAAABIAAAPIgBDEIDVAAIAACkIAAAdIAAAQIDQAAIAAJ2gAXDs5IAAgRIAQARgATzwfIAUAVIgUAAgAz0wKIAMgLIAAALgAQfzdIAAgBIAAgaIAaAbgAQfzeg");
	this.shape_5.setTransform(189.7,146);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,379.3,294.1);


(lib.Batatas = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2B2C").ss(1,1,1).p("AVRrhIAAAEIDSAAIAApwIqCAAIAADYIABAAIGvAAgAOix1IgBACIAAGWIjIAAIAAGoIDIAAIAAjQIDfAAIAAjYIDPAAIACgEAOhxzIAAgCIi9AAIgLAAIAAGYIjQAAIAAGoIjQAAIAAjIIjYAAIAADIImWAAIAAjIIjVAAIAADIIjXAAIgFDcIaHgEIAAjYIDigBIgDW7IjRAAIAADXI6IAAIgDjXIjSAAIAA21IDNgFIAAjIIjIAAIAAjYImlAAIgMAAIAADYIDIAAIAAdbIDYAAIAADIMAhDAAAIAAjIIDQAAMgAIgg7AVPrdIACAAAIZ1NIgIgJIAAAJgAIR1WIAAjPIjRAAIAADUIAAAEIDRAAALZyBIAAAMIjIAAIAAjYALkx1IgLgMIAAjMIjAAAAB01NIgLAAIAAGoIDXAAIAAmoIgGAAgAFA1RQgDACgDACAlCyMIAAjBIDZAAIgFjQIDXAAIAADIIALAIABp1VIAAAIIjSAAIAAJ4IDKAAIAADYAFArdIDJAAIAAjIIjJAAgAlCyMQgIAEgLADIATAAgArY1NIgJgIIAAAIgArh1VIAAjQIjIAAIAADSIAAAGIAAAAIDIAAIAADIIDXAAIAADYIDIAAIAADYIDZAAIgEDYIDOAAAoEyFIgGgFIAAAFgAoKyKIAAjDIjOAAArhutIAAGwIDXAAIAAmwIjXAAIjIAAIAAjYAlVyFIivAAArhyFIAADYAlCutIAAjYAup1TIgIAGIAIAAAup1MIAADHIDIAAAup1MIAAgBAux1NIjRAAIAADIIACAAIAHAAIDQAAAyCx8IAAgHIAAgCIjYAAIAADRIAAAHIAAAAIDYAAgAyAyFIgCACA1autIAAAAA1arVIjIAAIAAjYIDBAAIAHgHA1hutIAHAAA1arVIAAgMIAAjMA1arhIAMAM");
	this.shape.setTransform(157.1,157.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AtDNJIgDjWIjSAAIAA22IDMgEIgEDbIaGgDIAAjYIDjgBIgDW7IjSAAIAADWg");
	this.shape_1.setTransform(167.7,210.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD700").s().p("ALeIQIAAmoIDIAAIAAmUIABgCIGvAAIAAGSIgCAEIjOAAIAADYIjgAAIAADQgAE+IQIAAjIIjYAAIAAjYIjKAAIAAp2IDSAAIAAgIIAMAIIgMAAIAAGoIDYAAIAADGIDIAAIAAjGIjIAAIAAmoIgHAAIAHgEIAAAEIDQAAIAADYIDIAAIAAgMIALAMIgLAAIAAGWIjQAAIAAGogAkwIQIAAjIIjUAAIAAmuIjYAAIAAGuIDYAAIAADIIjYAAIAAjIIjIAAIAAjYImlAAIgLgMIAAjKIgBAAIABAAIAAAAIDYAAIAAjQIAIgIIDQAAIAADYIDIAAIAAjYIjIAAIAAjIIAAAAIDIAAIAADIIDYAAIAADYIDIAAIAADWIDYAAIgEDYIDOAAIAADIgABmFIgAoEFIgAFGhegAlPk+IATgHIAAAHgAoEk+IAAgGIAFAGgAIWoGIAAgJIAIAJgArcoGIAAgJIAJAJg");
	this.shape_2.setTransform(156.6,73.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C2B2C").s().p("Au6YmIAAjIIjYAAIAA9bIjIAAIAAjYIAMAAIGkAAIAADYIDIAAIAADIIDYAAIAAjIIDVAAIAADIIGVAAIAAjIIDYAAIAADIIDQAAIAAmoIDRAAIAAGoIDIAAIAAjQIDgAAIAAjYIDOAAIACAAMAAIAg7IjQAAIAADIgAutkwIAAW2IDRAAIADDVIaHAAIAAjVIDTAAIAC28IjiABIAADYI6HAEIAEjcgAhun9IAFjYIjYAAIAAjYIAAjYIAAgHIAAjAIDYAAIgFjQIDWAAIAADHIAAAJIjRAAIAAJ3IDJAAIAADYgArin9IAAmwIjIAAIAAjYIjPAAIgHAAIgCAAIAAjHIDRAAIAHAAIAAAAIAADHIDIAAIAADYIDYAAIAAGwgA4irVIAAjYIDBAAIAHAAIAAAAIAADMIAAAMgAVRrdIAAgDIAAmUImvAAIgBAAIAAjYIKBAAIAAJvgALZrdIAAmXIALAAIC9AAIAAABIAAGWgAFArdIAAjIIDIAAIAADIgABoulIAAmnIAMAAIDFAAIAHAAIAAGngAoKutIAAjYIjYAAIAAjHIjHAAIgBAAIAAgHIAAjSIDIAAIAADQIAAAJIAKAAIDOAAIAADCIAAAFIAGAAICvAAIAUAAIAADYgA1autIAAAAIAAgHIAAjRIDYAAIAAACIAAAHIAADPgAIQx0IAAjYIjQAAIAAgFIAAjUIDQAAIAADPIAAAKIAJAAIDAAAIAADMIAAAMgAlByFg");
	this.shape_3.setTransform(157.1,157.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314.2,314.8);


(lib.Escudo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AMJmOQhuKXqbLfQrHshhBpWQIUj1D0ljQEwGdHZC8g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AsImOQIUj2D0liQEwGcHZC8QhuKXqbLeQrHsghBpVg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.7,-99.9,155.6,200);


(lib.FecharInstrucoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("ABsBFIjXAAIAAiJIDXAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAgAgIggggIgfAgAgfgfIAfAfIAggf");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AhrBFIAAiJIDXAAIAACJgAAgAgIggggIAggfIggAfIgfgfIAfAfIgfAgIAfgggAAAAAgAAAAAgAAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#131313").s().p("AjGDAIAAl/IGNAAIAAF/g");
	this.shape_3.setTransform(-7.5,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-6.9,21.7,13.9);


(lib.BotaoZerar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("zerar contagem", "22px Holstein", "#FF9900");
	this.text.lineHeight = 24;
	this.text.setTransform(-80.8,-14.5);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131313").s().p("AuDETIAAolIcHAAIAAIlg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#FF9900"}}]}).to({state:[{t:this.text,p:{color:"#CC0033"}}]},1).to({state:[{t:this.text,p:{color:"#FF9900"}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.8,-14.5,161.8,29.2);


(lib.BotaoReiniciar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AiSB3IAAjtIElB3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSh2IElB3IklB2g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AjPDmQhZAAgPg3QgCgKgBgKIAPAAIHkAAQAYAAAUgEQA/gOAAg+IAAjsIAAgEIgPAAInkAAQhrAAAABQIAADrIAAAFIgEAAQgqgEgVgSQgDgOAAgPIAAiPQABhOAtg5QAcgiAigMQAXgJAZAAIHfAAQAeAOAIAfQACAIABALIAEAAQANABAMACQBAAOAAA/IAADrQAAA+hAAOQgTAEgZAAg");
	this.shape_2.setTransform(-3.4,-3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AkIEGQhBAAgtg4QgggngJgzIgCgPQAVASAqAEIAEAAQABAKACAKQAPA3BZAAIHkAAQAZAAATgEQBAgOAAg+IAAjrQAAg/hAgOQgMgCgNgBIgEAAQgBgLgCgIQgIgfgegOIAwAAQBBAAAtA3QAtA5ABBOIAACPQgBBOgtA4QgtA4hBAAgAlPB7IgPAAIAAgFIAAjrQAAhQBrAAIHkAAIAPAAIAAAEIAADsQAAA+g/AOQgUAEgYAAg");
	this.shape_3.setTransform(0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiSh2IElB3IklB2g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("AjPDmQhZAAgPg3QgCgKgBgKIAPAAIHkAAQAYAAAUgEQA/gOAAg+IAAjsIAAgEIgPAAInkAAQhrAAAABQIAADrIAAAFIgEAAQgqgEgVgSQgDgOAAgPIAAiPQABhOAtg5QAcgiAigMQAXgJAZAAIHfAAQAeAOAIAfQACAIABALIAEAAQANABAMACQBAAOAAA/IAADrQAAA+hAAOQgTAEgZAAg");
	this.shape_5.setTransform(-3.4,-3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AkIEGQhBAAgtg4QgggngJgzIgCgPQAVASAqAEIAEAAQABAKACAKQAPA3BZAAIHkAAQAZAAATgEQBAgOAAg+IAAjrQAAg/hAgOQgMgCgNgBIgEAAQgBgLgCgIQgIgfgegOIAwAAQBBAAAtA3QAtA5ABBOIAACPQgBBOgtA4QgtA4hBAAgAlPB7IgPAAIAAgFIAAjrQAAhQBrAAIHkAAIAPAAIAAAEIAADsQAAA+g/AOQgUAEgYAAg");
	this.shape_6.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-26.2,84,52.5);


(lib.BotaoMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ADigbQAAAMACAUQACAXAAALQAAANgBAKQgCADgBADQgCAEgDAAQgJAAgSAEQgSAEgJAAQgiAAAAgzQAAgHgBgNQgCgLAAgGQAAgUALgJQACABACAEQADAFAAAAQABAGAAAdQAAAVAFAKQAGAQAQAEQAQgJAGgRQAFgLACgWQADgWADgKQACgFADAAQAEAAADAEQADADAAADgABsgeQAIAQAAAZQAAABAAAPQABAPAAAKQAAAfgGAAIgGABQgIgNAAgeQAAgFAAgHQAAgIAAgDQAAgQgEgJQgGgQgOAAQgNAAgIAVQgHAOgEAdQgCARgCASQgBAJgEAAIgIgDQgHgJAAgSQAAgHACgMQABgNAAgFQAAgGgCgLQgCgIAAgGQAAgPAKgEQAagKApAAQADAAAFAFQAGAFABACgAjlg6QAAgJAFgJQAGgKAJAAQAHAAAFAMQAFANAFAMQAHAMAKAAQAJAAAHgNQAFgNAFgNQAHgOALAAQAMAAADAPQABAFAAAUQAAASgCAsQgCAuAAASQAAACgDADQgDADgBAAIgCAAQgGgHgCgaQgCgVgCgWQgDgTgGAAQgEgBgHAPQgIARgGABQgHAAgJgRQgIgQgDAAQgLAAAAAkQAAAEABAJQAAAJAAAEQAAAjgKAAQgGAAgDgrQgBgZAAgXQAAgHgCgTQgBgQAAgKgAg6gSQgGAHAAAKQAAADAIAHQAIAGAGAAQAHAAAIgHQAIgHAAgEQAAgJgHgGQgIgHgIAAQgKAAgGAHgAgpgpQAVAAAQAQQANAQAAATQAAAFgHAHQgGAIgFAAQgFAAgKgCQgKgBgFAAQgLAAgJAHQgJAHAAALQAAAaArAAQAHAAAGAAIAAAEQgMAJgQAAQgaAAgQgVQgOgTAAgdQAAgWAOgUQARgVAYAAg");
	this.shape.setTransform(-0.2,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSBGQgOgTAAgdQAAgWAOgUQARgVAYAAQAVAAAQAQQANAQAAATQAAAFgHAHQgGAIgFAAIgPgCIgPgBQgLAAgJAHQgJAHAAALQAAAaArAAIANAAIAAAEQgMAJgQAAQgaAAgQgVgAg6gSQgGAHAAAKQAAADAIAHQAIAGAGAAQAHAAAIgHQAIgHAAgEQAAgJgHgGQgIgHgIAAQgKAAgGAHgAAYBSQgHgJAAgSIACgTIABgSIgCgRIgCgOQAAgPAKgEQAagKApAAQADAAAFAFIAHAHQAIAQAAAZIAAAQIABAZQAAAfgGAAIgGABQgIgNAAgeIAAgMIAAgLQAAgQgEgJQgGgQgOAAQgNAAgIAVQgHAOgEAdIgEAjQgBAJgEAAgAjhAqIgBgwIgCgaIgBgaQAAgJAFgJQAGgKAJAAQAHAAAFAMIAKAZQAHAMAKAAQAJAAAHgNIAKgaQAHgOALAAQAMAAADAPQABAFAAAUIgCA+IgCBAQAAACgDADQgDADgBAAIgCAAQgGgHgCgaIgEgrQgDgTgGAAQgEgBgHAPQgIARgGABQgHAAgJgRQgIgQgDAAQgLAAAAAkIABANIAAANQAAAjgKAAQgGAAgDgrgACFAdIgBgUIgCgRQAAgUALgJQACABACAEIADAFQABAGAAAdQAAAVAFAKQAGAQAQAEQAQgJAGgRQAFgLACgWQADgWADgKQACgFADAAQAEAAADAEQADADAAADIACAgIACAiQAAANgBAKIgDAGQgCAEgDAAQgJAAgSAEQgSAEgJAAQgiAAAAgzg");
	this.shape_1.setTransform(-0.2,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AjPDmQhZAAgPg3QgCgKgBgKIAPAAIHkAAQAYAAAUgEQA/gOAAg+IAAjsIAAgEIgPAAInkAAQhrAAAABQIAADrIAAAFIgEAAQgqgEgVgSQgDgOAAgPIAAiPQABhOAtg5QAcgiAigMQAXgJAZAAIHfAAQAeAOAIAfQACAIABALIAEAAQANABAMACQBAAOAAA/IAADrQAAA+hAAOQgTAEgZAAg");
	this.shape_2.setTransform(-3.4,-3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AkIEGQhBAAgtg4QgggngJgzIgCgPQAVASAqAEIAEAAQABAKACAKQAPA3BZAAIHkAAQAZAAATgEQBAgOAAg+IAAjrQAAg/hAgOQgMgCgNgBIgEAAQgBgLgCgIQgIgfgegOIAwAAQBBAAAtA3QAtA5ABBOIAACPQgBBOgtA4QgtA4hBAAgAlPB7IgPAAIAAgFIAAjrQAAhQBrAAIHkAAIAPAAIAAAEIAADsQAAA+g/AOQgUAEgYAAg");
	this.shape_3.setTransform(0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("AAaggQAagKApAAQADAAAFAFQAGAFABACQAIAQAAAZQAAABAAAPQABAPAAAKQAAAfgGAAIgGABQgIgNAAgeQAAgFAAgHQAAgIAAgDQAAgQgEgJQgGgQgOAAQgNAAgIAVQgHAOgEAdQgCARgCASQgBAJgEAAIgIgDQgHgJAAgSQAAgHACgMQABgNAAgFQAAgGgCgLQgCgIAAgGQAAgPAKgEgACNglQACABACAEQADAFAAAAQABAGAAAdQAAAVAFAKQAGAQAQAEQAQgJAGgRQAFgLACgWQADgWADgKQACgFADAAQAEAAADAEQADADAAADQAAAMACAUQACAXAAALQAAANgBAKQgCADgBADQgCAEgDAAQgJAAgSAEQgSAEgJAAQgiAAAAgzQAAgHgBgNQgCgLAAgGQAAgUALgJgAACAWQgGAIgFAAQgFAAgKgCQgKgBgFAAQgLAAgJAHQgJAHAAALQAAAaArAAQAHAAAGAAIAAAEQgMAJgQAAQgaAAgQgVQgOgTAAgdQAAgWAOgUQARgVAYAAQAVAAAQAQQANAQAAATQAAAFgHAHgAjlg6QAAgJAFgJQAGgKAJAAQAHAAAFAMQAFANAFAMQAHAMAKAAQAJAAAHgNQAFgNAFgNQAHgOALAAQAMAAADAPQABAFAAAUQAAASgCAsQgCAuAAASQAAACgDADQgDADgBAAIgCAAQgGgHgCgaQgCgVgCgWQgDgTgGAAQgEgBgHAPQgIARgGABQgHAAgJgRQgIgQgDAAQgLAAAAAkQAAAEABAJQAAAJAAAEQAAAjgKAAQgGAAgDgrQgBgZAAgXQAAgHgCgTQgBgQAAgKgAg6gSQgGAHAAAKQAAADAIAHQAIAGAGAAQAHAAAIgHQAIgHAAgEQAAgJgHgGQgIgHgIAAQgKAAgGAHg");
	this.shape_4.setTransform(0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhSBGQgOgTAAgdQAAgWAOgUQARgVAYAAQAVAAAQAQQANAQAAATQAAAFgHAHQgGAIgFAAIgPgCIgPgBQgLAAgJAHQgJAHAAALQAAAaArAAIANAAIAAAEQgMAJgQAAQgaAAgQgVgAg6gSQgGAHAAAKQAAADAIAHQAIAGAGAAQAHAAAIgHQAIgHAAgEQAAgJgHgGQgIgHgIAAQgKAAgGAHgAAYBSQgHgJAAgSIACgTIABgSIgCgRIgCgOQAAgPAKgEQAagKApAAQADAAAFAFIAHAHQAIAQAAAZIAAAQIABAZQAAAfgGAAIgGABQgIgNAAgeIAAgMIAAgLQAAgQgEgJQgGgQgOAAQgNAAgIAVQgHAOgEAdIgEAjQgBAJgEAAgAjhAqIgBgwIgCgaIgBgaQAAgJAFgJQAGgKAJAAQAHAAAFAMIAKAZQAHAMAKAAQAJAAAHgNIAKgaQAHgOALAAQAMAAADAPQABAFAAAUIgCA+IgCBAQAAACgDADQgDADgBAAIgCAAQgGgHgCgaIgEgrQgDgTgGAAQgEgBgHAPQgIARgGABQgHAAgJgRQgIgQgDAAQgLAAAAAkIABANIAAANQAAAjgKAAQgGAAgDgrgACFAdIgBgUIgCgRQAAgUALgJQACABACAEIADAFQABAGAAAdQAAAVAFAKQAGAQAQAEQAQgJAGgRQAFgLACgWQADgWADgKQACgFADAAQAEAAADAEQADADAAADIACAgIACAiQAAANgBAKIgDAGQgCAEgDAAQgJAAgSAEQgSAEgJAAQgiAAAAgzg");
	this.shape_5.setTransform(0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("AjPDmQhZAAgPg3QgCgKgBgKIAPAAIHkAAQAYAAAUgEQA/gOAAg+IAAjsIAAgEIgPAAInkAAQhrAAAABQIAADrIAAAFIgEAAQgqgEgVgSQgDgOAAgPIAAiPQABhOAtg5QAcgiAigMQAXgJAZAAIHfAAQAeAOAIAfQACAIABALIAEAAQANABAMACQBAAOAAA/IAADrQAAA+hAAOQgTAEgZAAg");
	this.shape_6.setTransform(-3.4,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AkIEGQhBAAgtg4QgggngJgzIgCgPQAVASAqAEIAEAAQABAKACAKQAPA3BZAAIHkAAQAZAAATgEQBAgOAAg+IAAjrQAAg/hAgOQgMgCgNgBIgEAAQgBgLgCgIQgIgfgegOIAwAAQBBAAAtA3QAtA5ABBOIAACPQgBBOgtA4QgtA4hBAAgAlPB7IgPAAIAAgFIAAjrQAAhQBrAAIHkAAIAPAAIAAAEIAADsQAAA+g/AOQgUAEgYAAg");
	this.shape_7.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-26.2,84,52.5);


(lib.BotaoIniciar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ACTABIklB2IAAjtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSh2IElB3IklB2g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AjPDmQhZAAgPg3QgCgKgBgKIAPAAIHkAAQAYAAAUgEQA/gOAAg+IAAjsIAAgEIAEAAQANABAMACQBAAOAAA/IAADrQAAA+hAAOQgTAEgZAAgAk+CbQgqgEgVgSQgDgOAAgPIAAiPQABhOAtg5QAcgiAigMQAXgJAZAAIHfAAQAeAOAIAfQACAIABALIgPAAInkAAQhrAAAABQIAADrIAAAFIgEAAg");
	this.shape_2.setTransform(-3.4,-3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AkIEGQhBAAgtg4QgggngJgzIgCgPQAVASAqAEIAEAAIAAgFIAAjrQAAhQBrAAIHkAAIAPAAQgBgLgCgIQgIgfgegOIAwAAQBBAAAtA3QAtA5ABBOIAACPQgBBOgtA4QgtA4hBAAgAlbCPQAPA3BZAAIHkAAQAZAAATgEQBAgOAAg+IAAjrQAAg/hAgOQgMgCgNgBIgEAAIAAAEIAADsQAAA+g/AOQgUAEgYAAInkAAIgPAAQABAKACAKg");
	this.shape_3.setTransform(0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("AiSB3IAAjtIElB3g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AiSh2IElB3IklB2g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("AjPDmQhZAAgPg3QgCgKgBgKIAPAAIHkAAQAYAAAUgEQA/gOAAg+IAAjsIAAgEIAEAAQANABAMACQBAAOAAA/IAADrQAAA+hAAOQgTAEgZAAgAk+CbQgqgEgVgSQgDgOAAgPIAAiPQABhOAtg5QAcgiAigMQAXgJAZAAIHfAAQAeAOAIAfQACAIABALIgPAAInkAAQhrAAAABQIAADrIAAAFIgEAAg");
	this.shape_6.setTransform(-3.4,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AkIEGQhBAAgtg4QgggngJgzIgCgPQAVASAqAEIAEAAIAAgFIAAjrQAAhQBrAAIHkAAIAPAAQgBgLgCgIQgIgfgegOIAwAAQBBAAAtA3QAtA5ABBOIAACPQgBBOgtA4QgtA4hBAAgAlbCPQAPA3BZAAIHkAAQAZAAATgEQBAgOAAg+IAAjrQAAg/hAgOQgMgCgNgBIgEAAIAAAEIAADsQAAA+g/AOQgUAEgYAAInkAAIgPAAQABAKACAKg");
	this.shape_7.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-26.2,84,52.5);


(lib.BotaoEsquerda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.698)").s().p("Ai1AAICSidIAABIQAAgBAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIDTAAQAEAAAAAGIAAClQAAAGgEAAIjTAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIAABIg");
	this.shape.setTransform(0,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AioD6QhRAAAAiDIAAjtQAAiDBRAAIFQAAQBRAAABCDIAADtQgBCDhRAAgAi1AJICSCfIAAhJQAAABAAABQAAAAAAABQAAAAABAAQAAAAAAAAIDUAAQADABAAgHIAAilQAAgGgDAAIjUAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAhIg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.698)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-24.9,50,50);


(lib.BotaoDireita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.749)").s().p("AAmBWQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIjaAAQgDAAAAgGIAAilQAAgGADAAIDaAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABABABIAAhIICVCdIiVCeg");
	this.shape.setTransform(0.6,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AioD6QhRAAAAiDIAAjtQAAiDBRAAIFQAAQBRAAABCDIAADtQgBCDhRAAgAAsCoICVifIiVidIAABIQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIjaAAQgDAAAAAGIAAClQAAAHADgBIDaAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBABgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.698)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-24.9,50,50);


(lib.AbreInstrucoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AA/gSQgjAmgmAYQgHgBgEgMQgGgKAAgGQAAgRAjghQAkghAAgUQAAgSgRgNQgRgMgXAAQgLAAgUAJQgSAJgLAAQgJAAgIgFQgJgGAAgGQAAgSAhgOQAcgMAbAAQAtAAAhAWQAhAVAAAkQAAAhglAsgAAmCOQAAAIgDAFQgEAGgQAGQgOAIgIAAQgSAAgOgLQgPgLAAgNQAAgLATgOQARgOAPAAQAUAAALAOQAKALAAAQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnCkQgOgLAAgNQAAgMASgNQARgOAQAAQASAAAMAOQAJALAAAQQABAIgDAEQgFAHgPAGQgOAIgIgBQgSABgOgLgAgVAeQgFgJAAgGQAAgRAighQAkghAAgUQgBgSgQgNQgRgMgXAAQgKAAgVAJQgSAJgLAAQgIABgJgGQgIgFAAgHQAAgSAggNQAcgMAbAAQAtAAAhAVQAgAWAAAjQAAAigkAsQgjAlglAYQgIgCgEgMg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AjPDmQhZAAgPg3QgCgKgBgKIAPAAIHkAAQAYAAAUgEQA/gOAAg+IAAjsIAAgEIgPAAInkAAQhrAAAABQIAADrIAAAFIgEAAQgqgEgVgSQgDgOAAgPIAAiPQABhOAtg5QAcgiAigMQAXgJAZAAIHfAAQAeAOAIAfQACAIABALIAEAAQANABAMACQBAAOAAA/IAADrQAAA+hAAOQgTAEgZAAg");
	this.shape_2.setTransform(-3.4,-3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AkIEGQhBAAgtg4QgggngJgzIgCgPQAVASAqAEIAEAAQABAKACAKQAPA3BZAAIHkAAQAZAAATgEQBAgOAAg+IAAjrQAAg/hAgOQgMgCgNgBIgEAAQgBgLgCgIQgIgfgegOIAwAAQBBAAAtA3QAtA5ABBOIAACPQgBBOgtA4QgtA4hBAAgAlPB7IgPAAIAAgFIAAjrQAAhQBrAAIHkAAIAPAAIAAAEIAADsQAAA+g/AOQgUAEgYAAg");
	this.shape_3.setTransform(0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("AA/gSQgjAmgmAYQgHgBgEgMQgGgKAAgGQAAgRAjghQAkghAAgUQAAgSgRgNQgRgMgXAAQgLAAgUAJQgSAJgLAAQgJAAgIgFQgJgGAAgGQAAgSAhgOQAcgMAbAAQAtAAAhAWQAhAVAAAkQAAAhglAsgAgDBlQAUAAALAOQAKALAAAQQAAAIgDAFQgEAGgQAGQgOAIgIAAQgSAAgOgLQgPgLAAgNQAAgLATgOQARgOAPAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgnCkQgOgLAAgNQAAgMASgNQARgOAQAAQASAAAMAOQAJALAAAQQABAIgDAEQgFAHgPAGQgOAIgIgBQgSABgOgLgAgVAeQgFgJAAgGQAAgRAighQAkghAAgUQgBgSgQgNQgRgMgXAAQgKAAgVAJQgSAJgLAAQgIABgJgGQgIgFAAgHQAAgSAggNQAcgMAbAAQAtAAAhAVQAgAWAAAjQAAAigkAsQgjAlglAYQgIgCgEgMg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("AjPDmQhZAAgPg3QgCgKgBgKIAPAAIHkAAQAYAAAUgEQA/gOAAg+IAAjsIAAgEIgPAAInkAAQhrAAAABQIAADrIAAAFIgEAAQgqgEgVgSQgDgOAAgPIAAiPQABhOAtg5QAcgiAigMQAXgJAZAAIHfAAQAeAOAIAfQACAIABALIAEAAQANABAMACQBAAOAAA/IAADrQAAA+hAAOQgTAEgZAAg");
	this.shape_6.setTransform(-3.4,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AkIEGQhBAAgtg4QgggngJgzIgCgPQAVASAqAEIAEAAQABAKACAKQAPA3BZAAIHkAAQAZAAATgEQBAgOAAg+IAAjrQAAg/hAgOQgMgCgNgBIgEAAQgBgLgCgIQgIgfgegOIAwAAQBBAAAtA3QAtA5ABBOIAACPQgBBOgtA4QgtA4hBAAgAlPB7IgPAAIAAgFIAAjrQAAhQBrAAIHkAAIAPAAIAAAEIAADsQAAA+g/AOQgUAEgYAAg");
	this.shape_7.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-26.2,84,52.5);


(lib.BotaoPause = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(24,130,207,0)").s().p("Eg+eAdsMAAAg7WMB89AAAMAAAA7Wg");
	this.shape.setTransform(0,-29.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-399.9,-219.9,800,380);


(lib.Melancia = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("AhFBpQgRgZgHgfQgGgXAAgaQAAgZAGgYQAHgeARgZQAdgsAoAAQApAAAdAsQARAZAHAeQAGAYAAAZQAAAagGAXQgHAfgRAZQgdAtgpgBQgoABgdgtg");
	this.shape.setTransform(-139.9,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC00").s().p("AyxPOQjBiUh2irQgfkOCQiCQhIHIMEIVQkQhfjmivgArPOYQoUkviUlqQWBOSYNpgIAQgGIgQAaQhgCmikCSQsHCroEAAQnYAAj/iQgA0YCbQAGgYAAgaQAAgagGgYQXCCwVtj5ICIgZQAEAwABAyQgBAygEAyIiIAeQruCfqwAAQrtAAqki9gA6jA3QABgyAEgwIDJBiQhUlwCylzQBXhdBvhWQHyl8K/AAQJwAAHPEsQxLhqsTEyQqGFKAuFyQgpAAgdArQgRAYgHAfQgGAYAAAaQAAAaAGAYQiFALg2BZQgThhAAhngAXpofQAZAlAVAlQAlA9AaBBIg/ACQ3lAu2pD8UAJVgGUAkLgBgg");
	this.shape_1.setTransform(0,-5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("Aq7QcQsEoVBInIQiQCCAfEOQiAi6gojWQA2hXCFgLQAHAfARAXQAdAsApAAQAqAAAdgsQARgXAHgfQURFpYelLICIgeQgTDThlC7IgQAGQ4NJg2BuSQCUFrIUEuQIUEtXOlIQguAqg0AnQnyF9q/AAQl6AAlBhvgA0YiHQgHgfgRgZQgdgsgqAAQWpj7XlgvIA/gCQA7CPAOCdIiIAaQswCTtMAAQpSAAphhJgA6ejrQAgllEHkcQiyFzBUFygA13jrQgulyKGlKQMTkxRLBpQA7AmA3ArQDBCUB3CrUgkLABhgJVAGTIAAAAg");
	this.shape_2.setTransform(0,13.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.9,-129.9,340,260);


(lib.Maçã = function() {
	this.initialize();

	// branco
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAojtIAABPIBPAAIABBSIhQAAIAABMIhOAAIgBhOIhPgBIgBhPIBQAAIAAhQgAB4DvIhQAAIAAhOIBQgBg");
	this.shape.setTransform(-56,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoDvIAAhOIBQgBIAABPgAgmAAIgBhOIhPgBIgBhPIBQAAIAAhQIBPABIAABPIBPAAIABBSIhQAAIAABMg");
	this.shape_1.setTransform(-56,-8);

	// vermelho
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EE2222").ss(0.1,1,1).p("AKomOIAAFBIhPgBIgBCdIhRAAIABCgIhQgBIAABQIhQABIAABPIlBAAIABhPIhOgBIABBQIlBABIgBhQIhPgBIgBhQIhPAAIAAifIhRAAIABieIhRAAQABg8AAg7QACh4gBAAIBPAAIgCChICggBIAAhQIBUAAIgBBQICfAAIgChQICiAAIAABQICeAAIAAhQICfABIABBPICggCIgBhNIChgBIAAigg");
	this.shape_2.setTransform(-8,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2222").s().p("AlnE/IhPgBIgBhQIhPAAIAAifIhRAAIABieIhRAAIABh3QACh4gBAAIBPAAIgBChICggBIAAhQIBUAAIgCBQICfAAIgChQICiAAIAABQICeAAIAAhQICfABIABBPICggCIgChNICigBIAAigIBQAAIAAFBIhPgBIgBCdIhSAAIACCgIhQgBIAABQIhQABIAABPIlBAAIABhPIhOgBIABBQIlBABg");
	this.shape_3.setTransform(-8,24);

	// laranja
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E75F20").ss(0.1,1,1).p("AG2i4ICiAAIAAhSIBQAAIAACkIgcBZIgeBAIj2DBIkAAKInAABIi1AMIhIhQIgxglIgfiEIgQgqIgCigIBQgCIBoAqIA7ApIDtgEIAAhMICggBIAABQICfAAIABhQICdAAIACBRICgAAg");
	this.shape_4.setTransform(-7.9,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E75F20").s().p("ApFC6IgxgkIgfiEIgQgqIgBigIBPgBIBoApIA7ApIDugEIAAhMICggBIAABQICdAAIAChQICdAAIABBRIChAAIgChRICiAAIAAhRIBQAAIAACjIgcBZIgeBAIj2DBIkBAKIm+ABIi2ALg");
	this.shape_5.setTransform(-7.9,-5.4);

	// verde
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#88AA00").ss(0.1,1,1).p("ADMhUIlLADIAABLIhNACIADBUIFEAFIgBhTIBTAAg");
	this.shape_6.setTransform(32.1,-79.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88AA00").s().p("AjJBPIgChUIBMgBIAAhLIFKgCIABBUIhSAAIABBUg");
	this.shape_7.setTransform(32.1,-79.9);

	// amarelo
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#EEBB44").ss(0.1,1,1).p("ACVgLIhQgBIAAikICfABIgChUIFKgBIAABRIBPAAIgDCkIAUBIIiGCFIi8A/Im4AAIkJAIIhjgHIhQg9Igqg0Qg0hNgBABIgChTIBQgBIgBidIBPAAIAAhSIFIAAIABBUICcAAIAACgIhRABIABBMIDtAAg");
	this.shape_8.setTransform(-11,-30.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EEBB44").s().p("AnZD+IhRg9Igqg0Qg0hNgBABIgChTIBQgBIgBidIBQAAIAAhSIFHAAIABBUICdAAIAACgIhSABIACBMIDsAAIAAhKIhQgBIAAikICfABIgBhUIFIgBIAABRIBPAAIgCCkIAUBIIiGCFIi8A/Im4AAIkJAIg");
	this.shape_9.setTransform(-11,-30.4);

	// PRETO
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AKoqnIhPAAIgBBRIhQABIAACdIBPABIABBPIBQABIABCgIBPAAIgCHdIhRAAIAACiIhNgBIAACeIhRACIAABPIhPAAIgBBRIhSAAIACBPIlAABIAAhPIhOAAIgBBPIk/gBIgBhOIhPgBIgBhOIhPgCIAChSIhSABIgBieIhPAAIgBigIhPgBIAAndIBQgBIgBieIBSgBIgBhSIBQABIABhSIE+AAIABBSIChAAIgBk/IBOgBIAACgIBRAAIgBhSIBRACIABhQIBOABIAAhQIGRAAgADIm4IigAAIABhPQCggCgBACg");
	this.shape_10.setTransform(-7.9,-11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAmL4IhMAAIgBBPIlAgCIgBhNIhPgBIgBhOIhPgCIAChSIhSABIgBieIhOAAIgCigIhOgBIAAndIBQgBIgCieIBSgBIgBhTIBQACIABhSIE/AAIABBSICgAAIAAk/IBMgBIAAChIBRgBIAAhSIBRACIABhQIBNABIABhQIGRAAIAACfIhPAAIgBBRIhQABIAACcIBPACIABBOIBQACIABCgIBPAAIgCHdIhRgBIAACiIhNAAIAACeIhRACIAABPIhPAAIgBBRIhSAAIABBOIlAACgAApoHIgBBOICfAAIAAhOQABgBgnAAIh4ABg");
	this.shape_11.setTransform(-7.9,-11.9);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-95.8,152,167.9);


(lib.Cenoura = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2B2C").ss(1,1,1).p("AO2mcIGkAAIAAjNIDIAAIAFqAIjNAAIAAjSIp7AAIAADSIjSAAIAAGkIjSAAIAAjIImeAAIAADNIjXAAIAADNIjNAFIAADNIjSAAIAADXIjSAAIAADQIjXAAIAAGkIjXAAIAAGfIjNAAIAFGpIDNAAIAADIQDVABDUABQGnABgDgDIAAjIIGkAAIAAjSIGjAAIAAjSIDSAAIAAjNIDSAAIAAjXIDSAAIAAjSIDSAAIAAmiIjSAAIgBGgIjSAAIABDQIjXAAIAADXIjMgBIAADPIjTAAIAAjOIjQgCIgBAAIAAGkIjQACIAAjSIjWAAIAAGfItGAAIABmfIDQgCIABmiIDSgCIAAmiIDSAAIgBjQIDVABIAAjSIDSAAIAAjTIDRABIAAgCIgBjRIGjAAIAADSIDPgBAIQpuIACDRIDRACIABjTIDSgCIABjNQAAgBBpAAQA0AAA0AAIAAjXIDSACIAAGiImkACIAADTASGwYIACjOImkADIAAGhIDSADIAAjYQAzABA1AAQBoAAAAgCgAO2pwIAAABAIQpuIgBAAALkmbIgBAAAO2jKIjSAAIAAjRAhipuIDQACIAADSIDSgBIAADRQgBgBjRAAIAAjPIjPAAIgBjSAO2jKIAAAAIAAjSIjSABAhiJ6IjTAAIAAjQIjSAAIgBjRIDVABIgBDQIDRAAIABDQIAAABAk0GqIgBAAAoJNOIjQAAIAAjRIDPgBIABDSIAAAB");
	this.shape.setTransform(157.5,146.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9024").s().p("AyCQXIABmfIDQgCIABmiIDSgCIAAmgIDSAAIgBjSIDVABIAAjSIDSAAIAAjTIDPABIABDSIDQAAIABDPQDQAAABABIAAjRIjSABIAAjRIjRgDIgCjRIGlAAIABDSIDPgBIAAAAIACDRIDRACIABAAIAADRIDSAAIABAAIgBGhIjSAAIAADPIjXAAIAADXIjLgBIAADPIjTAAIAAjOIjSgCIAAgBIgBjQIjPAAIABjQIjVgBIABDRIDSAAIAADQIDRAAIAAABIgBAAIAAGkIjOACIAAjRIjWAAIAAgCIgBjSIjPABIAADSIDQgBIAAACIAAGeg");
	this.shape_1.setTransform(137,168.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AjRGlIABjTIDRgCIABjNQAAgBBoAAIBpAAIAAjVIDSACIAAGgImkACIAAgBIAAABIAADTIjRABgAmkDSIABjSIDSgBIAADSIjSABgAABDRgAjQAAIAAmhIGjgDIgBDOQgBAChoAAIhogBIAADWg");
	this.shape_2.setTransform(252.4,63.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C2B2C").s().p("AurW8ImpgCIAAjIIjMAAIgGmpIDOAAIAAmfIDXAAIAAmkIDXAAIAAjQIDSAAIAAjXIDRAAIAAjNIDNgFIAAjNIDYAAIAAjNIGdAAIAADIIDRAAIAAmkIDTAAIAAjSIJ6AAIAADSIDOAAIgGKAIjIAAIAADNImjAAIAAjTIGkgCIAAmiIjSgCIAADXIhpAAQhoAAAAABIgBDNIjTACIgBDTIjQgCIgCjRIDSgBIAAjUIjSACIgBDTIjOABIgBjSImjAAIABDRIAAACIjRgBIAADTIjSAAIAADSIjUgBIABDQIjSAAIAAGiIjTACIgBGiIjPACIgBGfINFAAIAAmfIDWAAIAADSIDRgCIgBmkIABAAIDQACIAADOIDUAAIAAjPIDKABIAAjXIDXAAIAAjQIDSAAIABmgIDSAAIAAGiIjSAAIAADSIjTAAIAADXIjRAAIAADNIjSAAIAADSImiAAIAADSImlAAIAADIQADACjuAAIi5AAgALjzjIAAGhIDTADIAAjYIBoABQBoAAABgCIABjOgArYJ9IDPgBIAADSIjPAAgAk0J6IgBjQIACAAIgCAAIjSAAIgBjRIDWABIgBDQIDRAAIAADQgAk1GqgALjjKIAAjRIDTgBIAADSgABujLIgBjPIDTgBIAADRQgCgBjQAAgAhhmaIgBjSIAAgCIDPACIAADSgAhipug");
	this.shape_3.setTransform(157.5,146.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,315,293.7);


(lib.BarraProgresso = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2B2C").ss(2,1,1).p("AiaE/IH4gMQg5iAhZjMQg8iJhjhcQgagagggYIgVgPAgklCQh8HWi9CvIDDgE");
	this.shape.setTransform(115,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2B2C").ss(1,1,1).p("Ahjj3QgBAAgBAFIAAAGAhljyIAAgIAAjAZQAIgKALAAQALAAAKAKQALALAEASQAFAUgHAQQgIARgPAAQgPAAgMgRQgKgQgBgUQAAgSAIgLgAAqAjQAAgHAEgFQAEgFAFAAQAFAAAEAFQAEAFAAAHQAAAFgCAEQgBACgBABQgEAFgFAAQgEAAgCgCQgBgCgCgBQgEgEAAgIgAg1AVQAGAAADAEQAEAFAAAHQAAAGgCAEQgBABgBABQgDAFgGAAQgCAAgCgBQgCgBgCgDQgEgEAAgIQAAgHAEgFQADgEAFAAgAhIAZQAHgKALAAQALAAAKAKQALALAEASQAFAUgHAQQgHARgPAAQgQAAgLgRQgLgQAAgUQAAgSAIgLgAgyDOQBSBgBGht");
	this.shape_1.setTransform(121.5,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhAcQgLgPAAgTQAAgRAIgLQAHgKALAAQALAAAKAKQALALAFARQAEATgGAPQgIASgPAAQgPAAgMgSgAApgkQgEAEAAAIQAAAHAEAEIACADQADACAEABQAFAAADgGIADgCQABgEAAgFQAAgIgEgEQgDgGgFABQgFgBgEAGgAhLAcQgKgPgBgTQAAgRAIgLQAIgKALAAQALAAAKAKQALALAEARQAFATgHAPQgIASgPAAQgPAAgMgSgAhDgiQgEAFAAAGQAAAIAEAEQACAEADABIAEABQAFAAAEgGIACgCQACgEAAgGQAAgGgEgFQgEgFgFAAQgFAAgEAFg");
	this.shape_2.setTransform(122,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AiOh0QAbitgRgdIAWAPQAhAYAbAaQBgBcA8CJICSFLIn3AMQBNjhAgjSgAgHCzQAmAAAkg1IACgEIgCAEQgkA1gmAAIAAAAIgBAAQgjAAgmgrIgCgCIACACQAmArAjAAIABAAIAAAAgAACgsQgFALAAARQAAATAJAPQAMASAPAAQAPAAAHgSQAHgPgEgTQgFgRgLgLQgKgKgLAAQgLAAgIAKgAhpgsQgIALAAARQAAATALAPQAMASAPAAQAPAAAHgSQAIgPgGgTQgEgRgKgLQgLgKgLAAQgKAAgIAKg");
	this.shape_3.setTransform(124.8,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006633").s().p("ABGlCIAAAIIAAAFIAAgFIACgFQARAegbCsQggDShLDiIjDAEQC9ivB5nWgABzgRQgDgBgCgDQgEgEAAgIQAAgHAEgFQADgFAFABQAGgBADAFQAFAFAAAHQAAAGgCAEIgDACQgDAFgGAAIgDgBgADegUIgCgDQgFgFAAgHQAAgHAFgFQADgFAGAAQAFAAADAFQAEAFAAAHQAAAFgBAEIgDADQgDAFgFAAQgEAAgDgCg");
	this.shape_4.setTransform(104.2,13);

	this.text = new cjs.Text("carregado", "25px Holstein");
	this.text.lineHeight = 27;
	this.text.setTransform(-58.4,16.7);

	this.text_1 = new cjs.Text("%", "25px Holstein");
	this.text_1.lineHeight = 27;
	this.text_1.setTransform(3.5,-13.3);

	this.textoProgresso = new cjs.Text("H", "25px Holstein");
	this.textoProgresso.textAlign = "right";
	this.textoProgresso.lineHeight = 27;
	this.textoProgresso.setTransform(-3.7,-13.3);

	this.addChild(this.textoProgresso,this.text_1,this.text,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.4,-19.3,208.5,68.6);


(lib.TelaDeJogo = function() {
	this.initialize();

	// Elementos
	this.text = new cjs.Text("Tempo:", "27px Holstein", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.setTransform(189.9,401);

	this.MostradorTempo = new cjs.Text("0        ", "27px Holstein", "#FFFFFF");
	this.MostradorTempo.lineHeight = 29;
	this.MostradorTempo.setTransform(252.2,401);

	this.pontosNaTela = new lib.Pontuacao();
	this.pontosNaTela.setTransform(249.6,458.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(110,122,130,0.498)").s().p("Eg+fAGPIAAseMB8/AAAIAAMeg");
	this.shape.setTransform(400,440);

	this.botaoPause = new lib.BotaoPause();
	this.botaoPause.setTransform(397.5,233.5,1,1,0,0,0,-2.5,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1882CF").s().p("Eg+fAlgMAAAhK/MB8+AAAMAAABK/g");
	this.shape_1.setTransform(400,240);

	this.addChild(this.shape_1,this.botaoPause,this.shape,this.pontosNaTela,this.MostradorTempo,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,480);


(lib.TelaDeFimDeJogo = function() {
	this.initialize();

	// Layer 1
	this.novoBotaoMenu = new lib.BotaoMenu();
	this.novoBotaoMenu.setTransform(325,415.2,1.19,1.333);
	new cjs.ButtonHelper(this.novoBotaoMenu, 0, 1, 2);

	this.novoBotaoReiniciar = new lib.BotaoReiniciar();
	this.novoBotaoReiniciar.setTransform(475,415.2,1.19,1.333);
	new cjs.ButtonHelper(this.novoBotaoReiniciar, 0, 1, 2);

	this.novoBotaoZerar = new lib.BotaoZerar();
	this.novoBotaoZerar.setTransform(414.1,330,1.36,1.2);
	new cjs.ButtonHelper(this.novoBotaoZerar, 0, 1, 2, false, new lib.BotaoZerar(), 3);

	this.mostradorMelhorTempo = new cjs.Text("tempo   ", "27px Holstein", "#FFFFFF");
	this.mostradorMelhorTempo.lineHeight = 29;
	this.mostradorMelhorTempo.setTransform(516.9,176.2,1.327,1.2);
	this.mostradorMelhorTempo.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.mostradorTempoFinal = new cjs.Text("tempo   ", "27px Holstein", "#FFFFFF");
	this.mostradorTempoFinal.lineHeight = 29;
	this.mostradorTempoFinal.setTransform(331.9,176.2,1.327,1.2);
	this.mostradorTempoFinal.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.text = new cjs.Text("Tempo:", "30px Holstein", "#CCCCCC");
	this.text.lineHeight = 32;
	this.text.setTransform(185.6,174.1,1.327,1.2);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.mostradorMelhorPontuacao = new cjs.Text("pontos   ", "27px Holstein", "#FFFFFF");
	this.mostradorMelhorPontuacao.lineHeight = 29;
	this.mostradorMelhorPontuacao.setTransform(516.9,244.2,1.327,1.2);
	this.mostradorMelhorPontuacao.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.mostradorPontuacaoFinal = new cjs.Text("pontos   ", "27px Holstein", "#FFFFFF");
	this.mostradorPontuacaoFinal.lineHeight = 29;
	this.mostradorPontuacaoFinal.setTransform(331.9,244.2,1.327,1.2);
	this.mostradorPontuacaoFinal.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.text_1 = new cjs.Text("Pontuação:", "30px Holstein", "#CCCCCC");
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(106.9,242.2,1.327,1.2);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.text_2 = new cjs.Text("Recorde", "30px Holstein", "#CCCCCC");
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(516.9,112,1.327,1.2);
	this.text_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.text_3 = new cjs.Text("Você", "30px Holstein", "#CCCCCC");
	this.text_3.lineHeight = 32;
	this.text_3.setTransform(331.9,112,1.327,1.2);
	this.text_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(2,1,1).p("AUMh/QARAOAAAkQAAAIgBAXQgBAXAAAOQAABZgCAUQgFBGgaAlQghAxhEAAQgCAAgNABQgNAAgIAAQgnAAAAgPQAAgGAPgNQAdgBAdgCQAlgGAAgYQAAgWgvgPQg/gXgXgSQgvglAAhIQAAhDA1gpQAygmBNAAQA+AAAWAQgASZBqQAkAAATglQAQgdAAglQAAgjgTgeQgWgjgmAAQgqAAgVAjQgRAcAAAoQAAAOARAhQAZA1AuAAgAOpAMQAABFgkAuQgpA3hKAAQhFAAgggxQgbgoAAhCQAAg/AdgyQAkg/BBAAQBFAAAqA0QAmAvAAA+gAaXAMQAABFglAuQgpA3hJAAQhFAAghgxQgagoAAhCQAAg/AdgyQAkg/BBAAQBEAAArA0QAmAvAAA+gAYDhfQgnAAgcAhQgYAeAAAjQAAAwAaAnQAfAtAyAAQAlAAAXgvQARgkAAgnQAAgngXggQgbglgrAAgAIOiAQAnAAAACvQAABXgLAmQgWBJhFAAQgYAAgcgQQgfgSAAgTQAAgHAHgHQAHgGAHAAQAJAAAUAPQAUAPAOAAQAjAAAQgzQALgiAAguQAAgngMhGQgMgMgNgTQgPgWAAgJQAAgOATgIQAPgGASAAgAIBjQQAQAAANAOQAEAEAAAJQAAATgaAIQgHACgBAAQgfAAAAgeQAAgIAJgJQAJgJAOAAgAChgLQAAALgUARQgUASgOAAQgNAAgbgFQgbgDgNAAQgbAAgXARQgYASAAAaQAAA/BuAAQATAAASgBIAAALQgiAVgoAAQhGAAgqg0QglgtAAhEQAAg6AngvQArgzBAAAQA3AAApAnQAqAmAAAzgAK6ADQAAAwAbAnQAeAtAyAAQAmAAAWgvQASgkAAgnQAAgngXggQgcglgqAAQgoAAgbAhQgZAeAAAjgAkBj4QAcADAHAuQABALAAA9QAAATgEAlQgEAlAAASQAAASADAmQADAnAAATQAAAzgoAMQgPAEhLAAQhJAAgpgyQglgsAAhFQAAhMAugmQAkgeBbgWQAZgGATgmQASgmAMgCgAm+AAQAAAqAWAlQAbAuArAAQAnAAAVgmQASggAAgnQAAgxgPgjQgVgygwAAQgnAAgaArQgVAjAAAogAAThjQgZAAgQAQQgPAQAAAZQAAANAVAPQAUAOAPAAQATAAAVgPQAWgQAAgRQAAgUgUgQQgUgPgWAAgAvliLQBSAAAfAxQAXAlAABQQAABFgBAJQgFA8gYAAQADAAgTgEQgXgaAAgvQAAgNACgZQACgYAAgLQAAgSgFgWQgGgggMAAQg0AAAABOQAAAOACAXQACAYAAAFQAAAVgHAXQgJAggRAAQggAAAAhPQAAgOABgVQABgVAAgCQAAhWgiAAQgVAAgOAbQgKAWAAAUQAAAPADAcQAEAeAAAOQAAAYgHASQgKAbgVAAQgeAAAAi/QAAgTAAgZQABgZAAgDQAAgdAoAAQAbAAA2gHQA2gFAbAAgA3LjpQAAAHgIAEQgOAJgmAHQgmAHgOAHQgZAOgCAbQgDAtAWAUQAMAKAfAKQAYAHgCAMQgBAMglAEQgkAEgFARQgGASAAAiQAAAGAAAPQABAPAAAIQAAAxgRAZIgWADQgZg0AAhgQAAgeACg/QABg+AAgfQAAgrASgUQAUgWAuAAQASAAAiADQAjAEASAAQADAAAEAFQAEAFAAAGgA2FjGQAAgMAKgJQAJgJAPAAQAKAAAMAHQAMAHAAAGQAAAYgKAIQgPALgPgDQgcgFAAgZgA1ciBQA6AAAACQQAAAqgEAoQgIBBgQAAQgMAAgKgeQgIgWAAgPQAAgNAEgZQAEgagBgNQgBgggMgXIgXgfQgMgQAAgUQAAgLAPgHQANgHANAAg");
	this.shape.setTransform(396.6,60.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("ARKDyQAAgGAPgMIA6gFQAlgFAAgYQAAgVgvgQQg/gWgXgTQgvglAAhIQAAhDA1gpQAygmBNAAQA+AAAWAQQARAOAAAkIgBAfIgBAlQAABZgCAUQgFBGgaAmQghAwhEAAIgPAAIgVABQgnAAAAgPgARSg9QgRAbAAAoQAAANARAjQAZA0AuAAQAkAAATglQAQgeAAgkQAAgjgTgdQgWgkgmAAQgqAAgVAkgAGbDlQgfgSAAgTQAAgIAHgGQAHgGAHAAQAJAAAUAPQAUAPAOAAQAjAAAQgzQALgjAAgtQAAgngMhGQgMgMgNgSQgPgWAAgKQAAgNATgJQAPgGASAAQAnAAAACvQAABXgLAmQgWBJhFAAQgYAAgcgQgAWaCFQgagoAAhCQAAg/AdgyQAkg/BBAAQBEAAArA1QAmAuAAA+QAABFglAvQgpA2hJAAQhFAAghgxgAXAg9QgYAdAAAjQAAAwAaAnQAfAuAyAAQAlgBAXguQARgkAAgoQAAgngXggQgbglgrAAQgnAAgcAigAKtCFQgbgoAAhCQAAg/AdgyQAkg/BBAAQBFAAAqA1QAmAuAAA+QAABFgkAvQgpA2hKAAQhFAAgggxgALTg9QgZAdAAAjQAAAwAbAnQAeAuAyAAQAmgBAWguQASgkAAgoQAAgngXggQgcglgqAAQgoAAgbAigAhWCCQglgtAAhDQAAg7AnguQArg0BAAAQA3AAApAnQAqAnAAAyQAAALgUASQgUARgOAAQgNAAgbgFQgbgDgNAAQgbAAgXARQgYASAAAaQAAA/BuAAQATAAASgCIAAAMQgiAVgoAAQhGAAgqg0gAgWhTQgPARAAAYQAAANAVAQQAUANAPAAQATAAAVgOQAWgRAAgRQAAgUgUgQQgUgPgWAAQgZAAgQAQgAnTB0QglgtAAhFQAAhMAugmQAkgeBbgWQAZgFATgnQASgmAMgCQAcAEAHAtQABAMAAA8QAAATgEAlQgEAlAAATQAAARADAmQADAnAAAUQAAAygoAMQgPAEhLAAQhJAAgpgxgAmphLQgVAjAAAoQAAApAWAmQAbAuArABQAnAAAVgoQASgfAAgmQAAgygPgjQgVgygwAAQgnAAgaArgAuLChQgXgaAAguQAAgNACgaIACgjQAAgSgFgWQgGgggMAAQg0AAAABOQAAAPACAWIACAdQAAAVgHAXQgJAggRAAQggAAAAhPIABgjIABgXQAAhVgiAAQgVAAgOAbQgKAWAAATQAAAPADAdQAEAdAAAOQAAAYgHASQgKAbgVAAQgeAAAAi/IAAgsIABgbQAAgeAoAAQAbAAA2gGQA2gGAbAAQBSAAAfAxQAXAlAABQIgBBOQgFA8gYAAIgQgEgA6WAOIAChbIABheQAAgrASgTQAUgXAuAAQASAAAiADQAjAEASAAQADAAAEAFQAEAFAAAHQAAAHgIAEQgOAIgmAIQgmAHgOAGQgZAOgCAcQgDAsAWAUQAMAKAfAKQAYAHgCAMQgBAMglAEQgkAEgFARQgGATAAAgIAAAXIABAWQAAAxgRAYIgWAEQgZg0AAhhgA1UCEQgIgWAAgQQAAgMAEgZQAEgZgBgNQgBghgMgXIgXgfQgMgQAAgUQAAgKAPgIQANgHANAAQA6AAAACQQAAArgEAmQgIBCgQAAQgMAAgKgegAHhi2QAAgIAJgJQAJgIAOgBQAQAAANAPQAEAEAAAIQAAATgaAIIgIACQgfAAAAgegA1pioQgcgEAAgaQAAgLAKgKQAJgJAPAAQAKAAAMAHQAMAHAAAGQAAAYgKAIQgLAJgMAAIgHgBg");
	this.shape_1.setTransform(396.6,60.5);

	this.instance = new lib.Personagem3();
	this.instance.setTransform(111.5,84,1.545,1.466,0,32.7,27.4,37,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B8AD9").s().p("Eg+fAlfMAAAhK+MB8/AAAMAAABK+g");
	this.shape_2.setTransform(400,240);

	this.addChild(this.shape_2,this.instance,this.shape_1,this.shape,this.text_3,this.text_2,this.text_1,this.mostradorPontuacaoFinal,this.mostradorMelhorPontuacao,this.text,this.mostradorTempoFinal,this.mostradorMelhorTempo,this.novoBotaoZerar,this.novoBotaoReiniciar,this.novoBotaoMenu);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,480);


(lib.JogadorMorto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Personagem3();
	this.instance.setTransform(0,0,0.338,0.338,0,0,0,37,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:3.7,y:0.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:7.3,y:0},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:11},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:14.7,x:0.1,y:0.1},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:18.4,y:0},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:22,y:0.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:25.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:29.4,y:0},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:33.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:36.7,y:0.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:40.4,x:0},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:44.1,x:0.1,y:0},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:47.8,x:0,y:0.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:51.4},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:55.1},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:58.8},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:62.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:66.1,y:0},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:69.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:73.5,y:0.1},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:77.1},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:80.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:84.5,y:0},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:88.2},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:91.8,y:0.1},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:95.5},0).wait(1).to({scaleX:0.21,scaleY:0.21,rotation:99.2,y:0},0).wait(1).to({scaleX:0.21,scaleY:0.21,rotation:102.9,y:0.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,rotation:106.5,y:0},0).wait(1).to({scaleX:0.2,scaleY:0.2,rotation:110.2},0).wait(1).to({scaleX:0.19,scaleY:0.19,rotation:113.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,rotation:117.6},0).wait(1).to({scaleX:0.18,scaleY:0.18,rotation:121.2,y:0.1},0).wait(1).to({scaleX:0.18,scaleY:0.18,rotation:124.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,rotation:128.6,y:0},0).wait(1).to({scaleX:0.17,scaleY:0.17,rotation:132.2},0).wait(1).to({scaleX:0.17,scaleY:0.17,rotation:135.9},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:139.6},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:143.3},0).wait(1).to({scaleX:0.15,scaleY:0.15,rotation:146.9},0).wait(1).to({scaleX:0.15,scaleY:0.15,rotation:150.6},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:154.3},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:158},0).wait(1).to({scaleX:0.13,scaleY:0.13,rotation:161.6},0).wait(1).to({scaleX:0.13,scaleY:0.13,rotation:165.3},0).wait(1).to({scaleX:0.12,scaleY:0.12,rotation:169},0).wait(1).to({scaleX:0.12,scaleY:0.12,rotation:172.7},0).wait(1).to({scaleX:0.12,scaleY:0.12,rotation:176.3},0).wait(1).to({scaleX:0.11,scaleY:0.11,rotation:180},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.4,25,25);


(lib.Jogador = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{AnimacaoJogadorMorto:4});

	// Layer 1
	this.instance = new lib.Personagem1();
	this.instance.setTransform(0,0,0.301,0.301,0,0,0,41.5,38.4);

	this.instance_1 = new lib.Personagem2();
	this.instance_1.setTransform(0,0,0.338,0.337,0,0,0,37,35.8);

	this.instance_2 = new lib.Personagem3();
	this.instance_2.setTransform(0,0,0.338,0.338,0,0,0,37,37);

	this.instance_3 = new lib.JogadorMorto();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-11.5,25,23.1);


(lib.Instrucoes = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(" Sua missão é conquistar pontos comendo as comidas saudáveis e sobreviver o maior tempo possível. Os níveis crescem de acordo com sua pontuação. Mas cuidado: se comer algo ruim, você engorda e muda de cor! Para emagrecer, é só comer comida saudável, mas se comer o que não deve enquanto estiver vermelho, é fim de jogo! A cada nível, começam a aparecer mais comidas ruins, e o jogo fica bem mais dicífil! Quanto tempo você aguenta???\nBom jogo!", "18px Holstein", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 581;
	this.text.setTransform(-1.9,-152.5);

	this.novoBotaoFechaInstrucoes = new lib.FecharInstrucoes();
	this.novoBotaoFechaInstrucoes.setTransform(281.4,-171.3,1.613,1.61);
	new cjs.ButtonHelper(this.novoBotaoFechaInstrucoes, 0, 1, 2, false, new lib.FecharInstrucoes(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("AgHAMIgDgHIAAgFIAAgEIADgHQAEgFADAAQAEAAAEAFIADAHIAAAEIAAAFIgDAHQgEAFgEAAQgDAAgEgFg");
	this.shape.setTransform(-89.4,94.9,1.003,1.149);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AhRB7Qhbg+AIg2QASArA+AjQA/AkCtgnIgMAKQg6AshSAAQgrAAgmgNgAikAHQAFAAAEgFIADgFQCYApC3gmIAQgDQgCAXgNAWIgBABQhJAchGAAQhoAAhkhAgAjFAHQAHgIAQgCIACAFQAEAFAEAAQgRAPAFAgQgQgWgFgZgAiYgOIgDgHQgEgFgFAAQCqgeCxgFIAHAAQAHAQACATIgQADQhgARhiAAQhGAAhHgIgAjGgaQAEgqAegiQgUAsAKAsgAhdhsQBcgkCBAMIAMAKQAYARANAUQkOALhHAwQgFgsBMgmg");
	this.shape_1.setTransform(-72.9,96.1,1.003,1.149);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCC00").s().p("AiMByQgXgRgNgUQgFggARgPQgIA1BbA/QgggLgbgVgAhUBsQg+gkgSgqQCkBrC3hHIABgBIgBADQgMATgTASQhbAUg9AAQg2AAgegRgAiYASIAAgGIAAgGQCsAVCjgcIAQgDIABAKIgBAMIgQADQhYAThRAAQhWAAhQgWgAjHAGIABgKIAYAKQgKgpAUgsQALgLANgKQA7gtBRAAQBJAAA3AkQiBgNhcAkQhMAnAFArQgEAAgEAEIgCAGIgBAGIABAGQgQABgHALQgCgMAAgMgACxg+IAGAIIAHAPIgHAAQixAGiqAdQBHgvEOgLg");
	this.shape_2.setTransform(-72.9,93.5,1.003,1.149);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.749)").s().p("AAfBFQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIixAAQgDAAAAgEIAAiEQAAgGADAAICxAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAAg6IB6B+Ih6B+g");
	this.shape_3.setTransform(164.4,180.7,1.003,1.003);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.698)").s().p("AiIDHQhDAAAAhoIAAi+QAAhoBDABIERAAQBDgBAABoIAAC+QAABohDAAgAAkCGIB6h/Ih6h9IAAA6QAAgBgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIixAAQgDAAAAAFIAACEQAAAFADAAICxAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBg");
	this.shape_4.setTransform(163.9,180,1.003,1.003);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.698)").s().p("AiTAAIB3h+IAAA6QAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAICrAAQADAAAAAGIAACEQAAAEgDAAIirAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAA5g");
	this.shape_5.setTransform(87.2,180.7,1.003,1.003);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.698)").s().p("AiIDHQhDAAAAhoIAAi+QAAhoBDABIERAAQBDgBAABoIAAC+QAABohDAAgAiTAHIB2B/IAAg6QAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAICsAAQADAAAAgFIAAiEQAAgFgDAAIisAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAABIAAg6g");
	this.shape_6.setTransform(87.3,180,1.003,1.003);

	this.text_1 = new cjs.Text("Mover o jogador", "15px Holstein", "#FFFFFF");
	this.text_1.lineHeight = 17;
	this.text_1.setTransform(54.4,129.8,1.046,0.994);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2C2B2C").ss(1.3,1,1).p("AjBBLQgPgiAAgpQAAhRA9g6QA+g6BVAAQBWAAA9A6QA+A6AABRQAAApgPAiQgQAjgfAeQg9A6hWAAQhVAAg+g6QgfgegPgjg");
	this.shape_7.setTransform(179.6,94.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2C2B2C").ss(0.7,1,1).p("AAvhmQAMAAAIAIQAJAIAAALQAAALgJAIQgIAHgMAAQgMAAgIgHQgIgIAAgLQAAgLAIgIQAIgIAMAAgAgbhcQAJAIAAAMQAAALgJAHQgIAIgLAAQgMAAgJgIQgIgHAAgLQAAgMAIgIQAJgHAMAAQALAAAIAHgAg7BnQBAgMBHANQgQgegPgRQgmgpgkApQgPAQgPAcQgBABAAABQAAAAABAAg");
	this.shape_8.setTransform(179,94.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2C2B2C").ss(0.1,1,1).p("AA3gSQgDgBgFAAQgIAAgHAGQgFAFAAAIQAAAGAFAGQACACADABQAEADAGAAQAJAAAGgGQAGgGAAgGQAAgIgGgFQgEgDgDgCgAg5ASQgCgCgCgBQgGgGAAgIQAAgGAGgGQAGgFAJAAQADAAAEABAg5ASQAEACAHAAQAHAAAHgFQAGgGAAgIQAAgGgGgGQgEgDgDgB");
	this.shape_9.setTransform(179,86.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AiTBfQgfgegPgjQDBCVDCiVQgQAjgfAeQg9A6hWAAQhVAAg+g6gAhBAyIgCAAIACgCQAOgcAPgQQAkgnAmAnQAQARAPAeQhFgNhBAMgAg/hxIgEgDQgGgGAAgIQAAgIAGgGQAGgFAJAAIAHABIAHAEQAGAGAAAIQAAAIgGAGQgHAFgHAAQgHAAgEgCgAAfh0IgFgDQgFgGAAgIQAAgIAFgFQAHgGAIAAQAFAAADABIAHAFQAGAFAAAIQAAAIgGAGQgGAGgJAAQgGAAgEgDg");
	this.shape_10.setTransform(179.6,99.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AjBBjQgPgiAAgpQAAhQA9g6QA+g7BVAAQBWAAA9A7QA+A6AABQQAAApgPAiQhhBLhhAAQhgAAhhhLgABFB4QgPgegQgQQgmgqgkAqQgPAQgOAbIgCADIACAAQBBgNBFANIAAAAgAhJhLQgJAIAAALQAAALAJAIQAIAIAMAAQALAAAIgIQAJgIAAgLQAAgLgJgIQgIgIgLAAQgMAAgIAIgAAUhOQgIAIAAALQAAAMAIAHQAJAIAMAAQALAAAJgIQAIgHAAgMQAAgLgIgIQgJgIgLAAQgMAAgJAIg");
	this.shape_11.setTransform(179.6,92.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhDAUQgIgIAAgLQAAgJAIgIQAJgIAMAAQALAAAIAIQAJAIAAAJQAAALgJAIQgIAIgLAAQgMAAgJgIgAg/gRQgGAGAAAIQAAAGAGAGQACADAEABQAFADAHAAQAHAAAGgGQAHgFAAgGQAAgIgHgGIgHgFQgEgCgGAAQgIAAgGAFgAAbARQgIgHAAgKQAAgLAIgIQAIgIAMAAQAMAAAIAIQAJAIAAALQAAAKgJAHQgIAIgMAAQgMAAgIgIgAAegTQgGAFABAJQgBAFAGAGIAHAFQAFACAGAAQAIAAAHgGQAFgFABgGQgBgIgFgGIgIgEQgEgDgGAAQgJAAgGAGg");
	this.shape_12.setTransform(179,86.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2C2B2C").ss(0.5,1,1).p("AAkhKQgBgCgCAAIgBAAQgDABgCACQgCAEAAAEQAAAEACADQABABAAABQACABADAAQADAAACgDIAAAAQACgDAAgEQAAgEgCgEQgBgBgBAAgAAghMQgBAAgBAAQgGAAgFAHQgFAGAAAMQAAAMAHAJQAHAKAKAAQAJAAAFgKQAFgJgEgMQgCgMgHgGQgEgEgEgBAgOgzQADAMgFAJQgEAKgKAAQgKAAgHgKQgHgJAAgMQAAgMAFgGQAFgHAHAAQAHAAAGAHQAHAGADAMgAgZhAQAAAFgDACQgBABAAAAQgDACgCAAQgCAAgBAAQgCgCAAgBQgDgCAAgFQAAgEADgDQACgDADAAQADAAADADQADADAAAEgAA3BIIgfgMIgkAR");
	this.shape_13.setTransform(126,94);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2C2B2C").ss(1,1,1).p("AiBC7IhOgQQgIiRA1jIIADAAIAAAAQCcgdCSAYQA7BUAHEOQiqAXiogLg");
	this.shape_14.setTransform(121.7,95.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AiQClQgIiQA1jJIADAAQAuCVgQDUgABDhKIgCgCQgDgDAAgEQAAgEADgEQACgCADAAQADAAADACQADAEAAAEQAAAEgDADIgBABQgDACgCAAIgDgBgACGhMIgBgBQgCgDAAgEQAAgFACgDQACgCADAAIABAAIADABIACABQACADAAAFQAAAEgCADIAAABQgCACgDAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_15.setTransform(115.4,95.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AiZC7QAQjUguiVIAAAAQCcgdCSAYQA7BUAGEOQhxAQhvAAQg4AAg5gEgAAEA/IAmgQIAgALIgggLgAAmhSQgGAGAAALQAAAMAIAKQAHAKAKAAQAJAAAFgKQAEgKgDgMQgDgLgGgGIgIgGIgEgBIAAAAIgCAAQgGAAgFAHgAgehSQgFAGgBALQABAMAGAKQAIAKAKAAQAJAAADgKQAFgKgDgMQgDgLgFgGQgGgHgIAAQgGAAgFAHg");
	this.shape_16.setTransform(124.1,95.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVARQgHgJAAgKQAAgLAFgHQAFgGAGAAIACAAQgDAAgCADQgCADAAAEQAAAEACADIABACQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQADAAACgCIAAgBQACgDAAgEQAAgEgCgDIgCgCIAIAFQAHAHACALQAEAKgFAJQgFAKgJAAQgKAAgHgKgAgvARQgHgJAAgKQAAgLAFgHQAFgGAHAAQAHAAAGAGQAHAHADALQADAKgFAJQgEAKgKAAQgKAAgHgKgAgngWQgDADAAAEQAAAFADACIACADIADABQACAAADgDIABgBQADgCAAgFQAAgEgDgDQgDgDgDAAQgDAAgCADg");
	this.shape_17.setTransform(126,89.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2C2B2C").ss(0.5,1,1).p("Aglg+QADAAACACQACADAAAEQAAAEgBACQAAABgBABQgCACgDAAQgCAAgBAAQgBgBgBgBQgDgDAAgFQAAgEADgDQACgCADAAgAgag8QAHAHADAKQACAMgEAJQgEAJgJAAQgJAAgIgJQgGgJAAgMQAAgKAFgHQAFgFAGAAQAHAAAFAFgAAbg/QADAAACACQACADAAAEQAAADgBADQAAABgBAAQgCADgDAAQgDAAgBgBQgBgBgBgBQgCgCAAgFQAAgEACgDQACgCAEAAgAAOg8QAFgFAHAAQAGAAAHAFQAGAHACAKQADAMgEAJQgEAJgJAAQgKAAgGgJQgHgJgBgMQAAgKAFgHgAgkApQAxA2Aqg9");
	this.shape_18.setTransform(69.8,96.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2C2B2C").ss(1,1,1).p("AhcC1IEtgHQgihJg1hyQgkhOg7g0QgQgPgSgNIgNgJIgBAGIAAgIQhKEJhxBkg");
	this.shape_19.setTransform(65.3,93.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006633").s().p("AApi2IAAAIIABgGQAKARgPBiQgTB2gtCAIh0ACQBxhkBHkJgABEgJIgCgCQgDgDAAgEQAAgEADgDQABgDADAAQAEAAACADQACADAAAEIgBAGIgBABQgCADgEAAIgCgBgACEgLIgBgBQgCgDAAgEQAAgEACgDQACgDAEAAQACAAACADQADADAAAEIgBAFIgCACQgCADgCAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_20.setTransform(58.9,93.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUAQQgHgJgBgJQAAgLAFgGQAFgGAHAAQAGAAAHAGQAGAGACALQADAJgEAJQgEAKgJAAQgKAAgGgKgAAYgUQgCADAAAEQAAAEACADIACABQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQADAAACgDIABgCIABgFQAAgEgCgDQgCgDgDAAQgEAAgCADgAgtAQQgGgJAAgJQAAgLAFgGQAFgGAGAAQAHAAAFAGQAHAGADALQACAJgEAJQgEAKgJAAQgJAAgIgKgAgngTQgDADAAAEQAAAEADADIACACIADABQADAAACgDIABgBIABgGQAAgEgCgDQgCgDgDAAQgDAAgCADg");
	this.shape_21.setTransform(69.5,92.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AhUhBQAQhigKgRIANAJQAUANAQAPQA5A0AkBOIBXC7IktAHQAviAATh2gAgDBlQAWAAAWgfIAAgBIAAABQgWAfgWAAIAAAAIgBAAQgUAAgWgWIAAAAIgBgBIgCgCIACACIABABIAAAAQAWAWAUAAIABAAIAAAAgAABgZQgDAGAAALQABAJAFAJQAGAKAKAAQAJAAAEgKQAEgJgDgJQgCgLgGgGQgHgGgGABQgHgBgFAGgAg+gZQgFAGAAALQAAAJAGAJQAIAKAJAAQAJAAAEgKQAEgJgCgJQgDgLgHgGQgFgGgHABQgGgBgFAGg");
	this.shape_22.setTransform(71.1,93.3);

	this.text_2 = new cjs.Text("Estados", "15px Holstein", "#FFFFFF");
	this.text_2.lineHeight = 17;
	this.text_2.setTransform(91.3,40.5,1.046,0.994);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#2C2B2C").ss(0.1,1,1).p("ACKhtIADACAChhWIACACAC5BDIgBABAigCFIgBgBAilBZIAAAAAi4AuIABgBAijhUIADgDAiLhrIACgBAhyiAIAAAAABziDIADADAi3AXIAAAAAh1BaIgBgBAiMBZIgBABAi4BDIAAAAAheBpIABgBAhdBkIgBAAAC5AXIgBABAC3AtIABABACLBaIgCACAhEBaIgBABAAABaIAAgBAhFBaIgBAAABHBZIgBABABfBcIgCgDABfBbIAAgC");
	this.shape_23.setTransform(-96.2,181.5,1.003,1.003);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2C2B2C").ss(1,1,1).p("AB3iBIAUAAIAAABIAAADIAAAPACNhsIAVAAIAAAUIAAADIACAAIAVAAIAABBIAXAAIAAArIgXAAIAAAAIAAAVIAXAAIAAAVIgXAAIAAAAIAAABIAABBIgXAAIAAAWIlBAAIAAgWIAAAAIFBAAIAAgqIgWAAIgBAAIAAgYIAuAAIAAgUIAAgBIgBAAIlvAAIAAgWIgXABIABgrIAWAAIAAhBIAVAAIADAAIAABBIFBAAIAAhBIgXAAIAAgDIAAgCIAAgSIgXAAIAAgUIAAgBIjlAAIAAgXIDlAAIAAATIAAAEIADAAAigCCIAAABIgEAAIgUAAIAAgVAi4BuIAAgVAi4BYIAUAAAikBYIgUAAIAAgPIAAgHAi4BCIgXAAIAAgVAjPAsIAXAAIAAABIAAAUIAAABIABAAIAXAAIAAAWIgEAAAifhZIAAgTIAVAAAiJhtIAAgQIAAgDIAAgBIAXAAIAAABIABAUACLhsIAAgCACNhsIgCAAAhyhsIgXAAIAAASIAAACIAAACIgWAAIAAgDAiJhtIAAABIgBAAAi3AVIAAABIABAAIFvABAC5AWIAAgWIlwAAIAAAVAhcBaIAAAJIAAAEIAAAHIAXAAIAAgUIAAgBIAAAAIgXAAAh1BYIgWAAAiMBZIAAAVIgPAAIgEAAIgBAAIAAAUAh1BaIAAAUIAYAAIAAgGIAAgFIAAgKIgXAAIgBAAAh1BYIAAgWIgXAAAiMBCIAAAWIABAAAikBYIAAAAIAAAWIAAAAIADAAIABAAAiMBZIAAAAIgUAAIgEgBAigBZIAAgBIgEAAAikBuIgUAAAC5AXIAAgBACKBaIAAgBIgNAAIgGAAIAAAVIAGAAIANAAgAgVBDIAAAKIAAALIAVAAIAAgWIgVAAAgVBYIAAABIgXAAIgYAAAhEBZIAAAAAgsBDIgYAAIAAAWAgsBDIAAAWABGBZIAAAVIgXAAIgXAAIgYAAIAAgUAgVBDIgXAAABGBZIAAAAIgXAAAAvBZIAAAKIAAALABHBDIAAAVIAXAAIABAAIAAgWIgYAAABfBaIAAAAIAAAUIAYAAAAvBZIgXAAIAAAVAAYBZIgYAAAB3BZIgYAA");
	this.shape_24.setTransform(-96.2,181.6,1.003,1.003);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#32CD32").s().p("AheAbIAAgKIgWAAIgBgBIAAgUIgYAAIAAAAIAAAUIABAAIgBABIAAAAIgTAAIAAgBIgEAAIgBAAIAAAAIAFAAIAAgUIgYAAIAAgBIAAgUIABgBIFuAAIABABIAAAUIguAAIAAAWIABAAIgCACIAAgCIgNAAIgGAAIgXAAIAAABIgBgCIAAgUIgXAAIAAABIAAATIgBABIAAAAIgYAAIAAAAIgXAAIgXAAIAAgBIAAgUIgWAAIAAABIgXAAIgYAAIAAAUIAAAAIgYAAIAAABIAAAJgAC4gFIABAAIgBABg");
	this.shape_25.setTransform(-96.2,188.9,1.003,1.003);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8B4513").s().p("Ai3ALIAAgBIAAgUIFwAAIAAAVIgBAAg");
	this.shape_26.setTransform(-96.1,182.8,1.003,1.003);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C2B2C").s().p("AigCZIAAgWIABAAIFBAAIAAAWgACiCDIAAgqIgWAAIgBAAIAAgYIAuAAIAAABIABBBgACiCDgAikCDIgTAAIAAgVIAAAAIAAgVIAAgBIATAAIABAAIADABIATAAIAAAAIAAAVIgOAAIgFAAIAAAAIgBAAIgDAAIAAAAIAAgWIAAAWIgTAAIATAAIAAAAIADAAIABAAIAAAUIAAABgAB8BuIgFAAIAAgVIAFAAIAOAAIAAACIAAATgABgBuIAAgTIAAgBIAAgBIAXAAIAAAVgAAvBuIAAgLIAAgKIAAAKIAAALIgXAAIAAgVIAAAVIgYAAIAAgUIAAgBIAYAAIAXAAIAAAAIAXAAIAAAAIAAAVgAhcBuIAAgHIAAgEIAAgJIAAgBIAXAAIAAAAIAAABIAAAUgAh1BuIAAgUIAAgBIABAAIAXAAIAAAKIAAAEIAAAHgAigBugAikBugAgtBZIAAgWIAYAAIAAAKIAAALIAAgLIAAgKIAAgBIAVAAIAAAWIgVAAIAAABgAhDBZIgBAAIAAgWIAXAAIAAAWgAigBZIgDgBIADAAIAAABgABeBYIgXAAIAAgVIAAgBIAYAAIAAAWgAijBYgAiLBYIgBAAIAAgWIAAAAIAXAAIAAAWgAikBYIgTAAIAAgPIAAgHIAAAAIgYAAIAAgVIAAgBIAYAAIAAABIAAAUIAAABIAAAAIAXAAIAAAWgAC6BBIgBAAIAAgUIAAgBIgBAAIluAAIAAgWIgYAAIABgqIAXAAIAAhCIAUAAIACAAIAABCIFCAAIAAhCIgXAAIAAgBIAAgDIAAgSIgXAAIAAgUIAAgCIjlAAIAAgWIDlABIAAATIAAACIACAAIAVAAIAAACIAAADIAAAPIAAACIACAAIAVAAIAAAVIAAABIACAAIAWAAIAABCIAVAAIAAAqIgVAAIAAAAIAAgWIlwAAIAAAVIAAABIAAAAIFvAAIAAAWIAXAAIAAAVgAC5BBgAighWIAAgCIAAgUIAWAAIACAAIAAASIAAADIAAABgAhyhsIgWAAIAAgBIAAgQIAAgDIAAgCIAWAAIAAACIABAUgAiIhsg");
	this.shape_27.setTransform(-96.2,181.6,1.003,1.003);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F0E68C").s().p("AifCEIgBgBIAAgUIAAAAIAEAAIAPAAIAAgVIABgBIAXAAIABABIgBAAIAAABIAAAUIAXAAIAAgHIABAAIAAAHIAYAAIAAgUIABgBIAXAAIAXAAIAAgBIAWAAIAAABIAAABIAAAUIAXAAIAXAAIAYAAIAAgVIABgBIAWAAIACADIAAATIAXAAIAGAAIANAAIAAgTIACgCIAXAAIAAAqgAiggTIAAhCIgCAAIACgCIAAACIAXAAIAAgBIAAgDIAAgSIAXAAIAAAAIAAgUIAAgCIAAAAIDmAAIAAACIAAAUIAWAAIAAASIAAADIAAABIAYAAIAABCgACihVIAAgBIABABgACKhrIAAgCIADACgAiLhrIACgBIAAABgAB0iBIAAgCIACACg");
	this.shape_28.setTransform(-96.2,181.5,1.003,1.003);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2C2B2C").ss(1,1,1).p("AiWhhIABAAIAAAAgABRh1IAUAAIAAgXIBHAAIAABBIgXAAIABDbIgXAAIAAAUIjnAAIAAgUIgYAAIAAjEIgVAAIAAgWIgWAAIAAgXIAVAAAiVhhIAAgWIAYAAIAAgVIAWAAIABgBIAAgWIAWAAIAAAWIABABIAXAAIAAAVIAAAAIAUAAQABAAABgBIAAgUIAYAAIgBgWIAWAAIAAAVIABABIAWAAQAAAAABAAIAAgXIAXAAIAAAWIABABIAUAAIAAAWIACABAhmh3IAWAAIAAgVIgWAAgAhniMIABAAIAAgBAh8h3IgBAAIAAABAiUhKIAuAAIAAAWIAWAAIAAgtIgWAAIAAgWIgWAAAiVhhIAYAAIAAgVAg4h3IAAAAIAAAAAhPiMIgBAAIAAgBAg4h3IAAAWIAWAAIAAgWIgCAAAhQg0IAYAAIAAgtIgYAAAhQh3IAYAAAhQh3IAAAWAgih3IAAgBAAjiMIAAAAIAXAAIAAgBAAMiMIgBAAIAAAsIAYAAIAAgsIgBAAAALiNIAAABIgVAAIAABCIAUAAIAAAWIAYAAIAAAWIAXAAIAAgtIgWAAIAAgVIAWAAIAAAVAAKg0IAAAWIgrAAIAAgWIgXAAIAAAWIgYAAIAAAXIC1gBIAAgWIgWAAIAAgtIgWAAAgihhIAAAXIAYAAIgBAWIAVAAAhQgeIAAgWABlgeIAZgBIAACYIgXAAIAAAWIi2AAIAAgWIgYAAIAAiXIAXAAAiVhKIAAgBIAAgWAiUhKIgBAAAiVhLIABABABPh2IAAABIACAAABlgeIAAgWIAZAAIAAgXIAXAAIAAAAIAAgqIgvAAIgBAAIAAAqIgWAAIAAgqIgVAAIAAgXIABAA");
	this.shape_29.setTransform(-150.9,180.8,1.003,1.003);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AhaBYIAAgXIgYAAIAAiXIAXAAIAAAXIC1AAIAAgXIAZgBIAACYIgYAAIAAAXg");
	this.shape_30.setTransform(-149.8,186.4,1.003,1.003);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD700").s().p("ABQA3IAAgtIgXAAIAAgTIgVAAIAAgsIgBAAIABAAIAAAAIAWAAIAAgBIABABIgBAAIAAAXIAWAAIAAAoIAWAAIAAgoIAAAAIAvAAIAAAoIAAAAIgWAAIAAAXIgZAAIAAAWgAAiA3IAAgWIgXAAIAAgWIgVAAIAAhAIAWAAIAAgBIABABIgBAAIAAAsIAYAAIAAATIAVAAIAAAtgAggA3IAAgWIgYAAIAAgrIgXAAIAAgWIAXAAIAAAWIAXAAIAAAVIAXAAIAAAWIAVAAIAAAWgAhPA3IAAgWIAXAAIAAAWgAg4AhgAhmAhIAAgWIgtAAIgBgBIAAgUIAYAAIAAgVIABgBIAVAAIAAAWIAXAAIAAArgAAkgJgABQgeIAAgBIACABgAgkggIADgBIAAABgAg4ggIAAAAIABAAgAhmggIAAgVIAXAAIAAAVgAhPg1IAAgBIABABg");
	this.shape_31.setTransform(-151,172,1.003,1.003);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C2B2C").s().p("AhoCkIAAgVIgYAAIAAjDIgVAAIAAgWIgWAAIAAgXIAVAAIABAAIAAgBIAAgVIAYAAIAAgVIAWAAIABAAIAAgBIAAgWIAWAAIAAAWIAAABIABAAIAXAAIAAAVIAAAAIAAAAIAUAAIACAAIAAgBIAAgUIAYAAIgBgWIAWAAIAAAVIAAABIgVAAIAABCIAUAAIAAAWIAYAAIAAAWIAXAAIAAgtIgWAAIAAgVIAWAAIAAAVIAWAAIAAAtIAWAAIAAAWIi1AAIAAgWIAYAAIAAgWIAXAAIAAAWIArAAIAAgWIgVAAIABgWIgYAAIAAgXIAAgWIAAAWIgWAAIAAgWIgYAAIAAgVIgWAAIAAAVIAWAAIAAAWIAYAAIAAAtIgYAAIAAgtIgWAAIAAgWIgWAAIgBAAIAAABIAAAVIgYAAIAAAWIAAABIABAAIAuAAIAAAWIAWAAIAAAWIgXAAIAACXIAYAAIAAAWIC2AAIAAgWIAXAAIAAiYIgZABIAAgXIAZAAIAAgWIAXAAIAAAAIAAgrIgvAAIgBAAIAAgWIBHAAIAABBIgXAAIABDaIgXAAIAAAVgAhQg0gABPhLIAAgrIgVAAIAAgWIABAAIAUAAIAAAVIAAABIACAAIAUAAIAAArgAALhgIAAgsIABAAIAWAAIABAAIAAAsgABlh2gAhQh3gAAjiMIAAAAIAAgXIAXAAIAAAWIAAABg");
	this.shape_32.setTransform(-150.9,180.8,1.003,1.003);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AgXgeIAQAAIAAgPIAPAAIAAAPIAQAAIAAAQIAAABIgQAAIAAANIgPAAIAAgOIgQAAgAAIAfIAQAAIAAAPIgQAAg");
	this.shape_33.setTransform(-136.2,94.9,1.003,1.003);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#88AA00").ss(0.1,1,1).p("AgpAAIAAAAIABAAAgZgOIAAgBIACAAAAqAAIgBAAAAZAQIAAAAIgBAAAAqAAIgBgPIhAAAAAZAQIAAgQIAQAAAgZgOIAAAOIgPAAAgpAAIABAPIBAAB");
	this.shape_34.setTransform(-118,80.8,1.003,1.003);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#E75F20").ss(0.1,1,1).p("ACLgWIAAAAAiKAXIAAgdAB7gWIAQAAAgHgGIAAAOIAfAAIAAgOIAhAAIAAAOIAhAAIAAgOIAhAAIAAgQIAAAAAhJAIIAhgBIAAgNIAZAAACLAIIAAgeAgHgGQgEAAgEAAAh6gGIgQAA");
	this.shape_35.setTransform(-126.3,92.5,1.003,1.003);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#EE2222").ss(0.1,1,1).p("ACLgPIAAABIAAAAIgQAAIAAAdIgRAAIABAgIgBAAIgQAAIAAAPIgQAAIAAAPIgBAAIhBAAIAAgPIgPAAIAAAPIhCAAIAAgPIgQAAIAAgPIgQAAIgBAAIAAgBIAAgfIgQAAIAAgdIgQAAQAAgMAAgMQAAgXAAAAIAAAAIAQAAIAAAfIAhAAIAAgQIARAAIAAAQIAgAAIAAgQIAhAAIAAAQIAfAAIAAgQIAhAAIAAAQIAhAAIAAgQIAhAAIAAgeIAQAAg");
	this.shape_36.setTransform(-126.3,101.2,1.003,1.003);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#EEBB44").ss(0.1,1,1).p("AiDAQIAAgBIABAAIAPAAIAAgcIAAgBIABAAIAPAAIAAgPIAAgBIABAAIBCAAIABAAIAAABABzgeIABAAIAAABIAAAPIAPAAIABAAIAAAAAiCAfIgBgPACDAPIABgdAgHAfIgIAAIgBgPIAQAAIAAgdIgfAAIAAgQAAAAfIAgAAIAAgPIgQAAIAAgeIAgAAIAAgPIAAgBIAAAAIBDAA");
	this.shape_37.setTransform(-127.1,88.6,1.003,1.003);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AhpB0IgRABIAAgfIgQAAIAAggIgRAAIAAhcIAQAAAiKgnIAAgdIAPgBAh6hFIAAgQIAPAAAhphVIAAgPIBCAAIAAAPAgnhVIAgAAIAAg+IAPAAIAAAfIARAAIAAgQIAPABAApiFIAAgOIAPAAAA6iUIAAgOIBSAAIAAAfIgPAAAB8iDIgBAQIgPAAABrhzIAAAdABshVIAPAAIAAAPAB8hFIAQAAIAAAfACMgmIAQAAIAABcIgQAAACLA2IAAAfIgQAAIAAAfIgQABABqB1IAAAPIgQAAIAAAQIgQAAABKCUIAAAPIhCABIAAgQIgPAAIAAAQIhCgBIAAgPIgQAAIAAgQIgQAAIAAgPAAohVIggAAIABgPQAgAAgBAAIAAAO");
	this.shape_38.setTransform(-126.3,94.1,1.003,1.003);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAIAuIAAgPIAQAAIAAAPgAgHAAIAAgOIgQAAIAAgQIAQAAIAAgPIAPAAIAAAPIAQAAIAAAQIAAABIgQAAIAAANg");
	this.shape_39.setTransform(-136.2,94.9,1.003,1.003);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#88AA00").s().p("AAYAQIhAgBIgBgPIAAAAIABAAIAPAAIAAgOIAAgBIACAAIBAAAIABAPIgBAAIgQAAIAAAQIAAAAg");
	this.shape_40.setTransform(-118,80.8,1.003,1.003);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E75F20").s().p("AA5AXIghAAIAAAQIgfAAIAAgQIghAAIAAAQIggAAIAAgQIgRAAIAAAQIghAAIAAgfIgQAAIAAgeIAQAAIAAAPIAQABIAAAOIARAAIAAgOIAQAAIAAAAIAhgBIAAgPIAZAAIAIAAIAAAQIAfAAIAAgQIAhAAIAAAQIAhAAIAAgQIAhAAIAAgQIAAAAIAQAAIAAABIAAAfIgQAAIAAAdIghAAIAAAPIghABg");
	this.shape_41.setTransform(-126.3,94.1,1.003,1.003);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EE2222").s().p("ABJBNIhBAAIAAgPIgPgBIAAAQIhCAAIAAgPIgQgBIAAgOIgQAAIgBAAIAAgBIAAgfIgQAAIAAgdIgQAAIAAgYIAAgXIAAAAIAQAAIAAAgIAhAAIAAgRIARAAIAAARIAgAAIAAgRIAhAAIAAARIAfAAIAAgRIAhAAIAAARIAhgBIAAgQIAhAAIAAgeIAQAAIAAA+IAAAAIAAAAIgQAAIAAAdIgRAAIABAgIgBAAIgQAAIAAAOIgQABIAAAPgAhZgOIAQAAIAAgPIgQAAg");
	this.shape_42.setTransform(-126.3,101.2,1.003,1.003);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EEBB44").s().p("ABBAnIAAgQIghAAIAAAQIggAAIAAgQIAgAAIAAgPIgQAAIAAgeIAgAAIAAgPIAAgBIAAAAIBDAAIABAAIAAABIAAAPIAPAAIABAAIAAAAIgBAdIAAAAIAAAQIghAAIAAAQgAhBAXIgQAAIAAgPIgRAAIAAAPIgQAAIgQAAIgBgPIAAgBIABAAIAPAAIAAgcIAAgBIABAAIAPAAIAAgPIAAgBIABAAIBCAAIABAAIAAABIAAAQIAfAAIAAAdIgQAAIABAPIAIAAIgZABIAAAPIghAAg");
	this.shape_43.setTransform(-127.1,89.4,1.003,1.003);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAICUIgPAAIAAAQIhCgBIAAgPIgQAAIAAgQIgRAAIABgPIAQAAIAAAOIAQABIAAAQIBCAAIAAgRIAPABIAAAQIBBAAIAAAPIhBABgABKCUIAAgQIAQgBIAAgOIAQAAIAAAOIgQAAIAAARgABqBVIARAAIAAgfIAQAAIAAAfIgQAAIAAAfIgQABgAh6BVIgQAAIAAgfIgRAAIAAhcIARAAIAAAQIABAdIgBAAIAAAXIAAAYIARAAIgBAfIAQAAIAAAfIgPABgACMA2IAAg8IAAggIAQAAIAABcgAgHgWIgIAAIgIAAIgBgQIARAAIAAgfIgfAAIgBgQIAgAAIAAg/IAPAAIAAAgIAQAAIAAgQIAQABIABAPIBCABIAAAdIhCAAIAAgOIghAAIAAAPIAgAAIAAAQIggAAIAAAfIAQAAIAAAQgAB7gnIABgeIAQAAIAAAegAiKgnIAAgdIAPgBIAAAegAh5hFIgBgQIAPAAIAAAQgABshGIAAgPIAPAAIAAAPgAhqhVIAAgQIBDAAIAAAQgABshzIgBgQIAQAAIAAAQgAB8iDIAAgRIhCAAIAAgPIBSAAIAAAggAApiFIAAgPIAPAAIAAAPg");
	this.shape_44.setTransform(-126.3,94.1,1.003,1.003);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#2C2B2C").ss(1,1,1).p("AB9gyIA4AAIAAgaIAaAAIABhRIgbAAIAAgaIhUAAIAAAaIgdAAIAAA1IgbAAIAAgZIg1AAIAAAaIA1AAIABAaIAbAAABhhoIAAg0IA4AAIgBAZQAAABgNAAQgHAAgHAAIAAAbIgcAAABhhNIAcAAIAAgaIAOAAQAHAAAHAAIAAgbIAcAAIAAA1Ig4AAIAAAbIgcAAgAgMhnIAAAaIAaAAIAAAbIAbAAIAAAaIgbAAIAAgaIgaAAIAAgbIgcAAIAAAbIgcAAIAAAaIgbAAIgBAAIABAYIgcAAIAAA1IgcAAIAAA1IgcAAIAAA0IBvAAIAAg0IAAAAIgbAAIAAgbIAbAAIAAAbAhEBqIAcAAIAAAaIAcAAIAAg1IgcAAIAAgaIgcAAIAAgaIAcAAIAAAaIAcAAIAAAaIAaAAIAAAaIAcAAIAAgaIAaAAIAAgaIAdAAIAAgbIAcAAIAAgyIgcAAIAAgaIgcgBIAAgaABhhoIAAABAB9AaIAcAAIAAgyIgcAAIAAgaAgMCEIA1AAIAAgaIAcAAIAAgaIAcAAIAAgbIAcAAIAAgbAgMhnIAAAAAgMhnIgdAAIAAAZIgbABIAAAaIgbAAIAAAbAgMhNIAAAAAgoA1IAAAAAh7AAIgdAAIAAA1IgcAAIAAA0IgbAAIAAA2IAcAAIAAAZQAbAAAdAAQA4AAgBAAIAAgZIA4AAIAAgbAhggYIgbAAIAAAY");
	this.shape_45.setTransform(-179.5,93.5,1.003,1.003);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF9024").s().p("AiXCDIAAg0IAbAAIAAg1IAcAAIAAgzIAcAAIAAgaIAAAAIAcAAIAAgaIAcAAIAAgbIAaAAIAAAbIAbAAIAAAaIAcAAIAAgaIgcAAIAAgbIgbAAIgBgaIABAAIA3AAIAAAaIAbAAIABAaIAcABIAAAaIAbAAIAAAzIgbAAIAAAaIgdAAIAAAaIgbAAIAAAaIgcAAIAAgaIgbAAIAAgaIgaAAIAAgaIgcAAIAAAaIAbAAIAAAaIAbAAIAAA1IgaAAIAAgaIgdAAIAAAAIAAgbIgbAAIAAAbIAbAAIAAAAIAAA0g");
	this.shape_46.setTransform(-182.3,96.2,1.003,1.003);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#008000").s().p("AgaA0IAAgbIgdAAIAAgZIAdAAIAAgzIA1gBIAAAaIgNAAIgOAAIAAAaIgaAAIAAAAIAAAAIAAAZIAaAAIAAgZIAOAAIANAAIAAgaIAcABIAAAyIg3AAIAAAbg");
	this.shape_47.setTransform(-167,83,1.003,1.003);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2C2B2C").s().p("AizC4IAAgZIgbAAIgBg2IAbAAIAAg0IAdAAIAAg1IAcAAIAAgYIAbAAIABAYIgcAAIAAA1IgcAAIAAA1IgbAAIAAA0IBuAAIAAg0IAcAAIAAAaIAcAAIAAg1IgcAAIAAgaIgcAAIAAgaIAcAAIAAAaIAcAAIAAAaIAaAAIAAAaIAcAAIAAgaIAaAAIAAgaIAeAAIAAgbIAbAAIAAgyIgbAAIAAgaIgcgBIgBgaIAdAAIAAAbIAbAAIAAgbIA4AAIAAg1IgcAAIAAAbIgOAAIgNAAIgBAaIgbAAIAAgaIAbAAIAAgbIAOAAIAOgBIAAgZIg3AAIAAA0IgdABIAAAaIgbAAIgBgaIg1AAIAAgaIA1AAIAAAZIAbAAIAAg1IAdAAIAAgaIBUAAIAAAaIAbAAIAABRIgbAAIAAAaIg4AAIAAAaIAcAAIAAAyIgcAAIAAAbIgbAAIAAAbIgcAAIAAAaIgdAAIAAAaIg1AAIAAAbIg4AAIAAAZIg3AAIg4AAgAgoA1IAAAAgAhfBqIAAgbIAbAAIAAAbgAAOgYIAAgaIgaAAIAAgbIgcAAIAAAbIgcAAIAAAaIgbAAIAAgbIAbAAIAAgaIAbgBIAAgZIAdAAIAAAaIAaAAIAAAbIAbAAIAAAagAgMhNIAAAAgABFhNg");
	this.shape_48.setTransform(-179.5,93.5,1.003,1.003);

	this.text_3 = new cjs.Text("Comidas ruins", "15px Holstein", "#FFFFFF");
	this.text_3.lineHeight = 17;
	this.text_3.setTransform(-179.6,131.9,1.046,0.994);

	this.text_4 = new cjs.Text("Comidas saudáveis", "15px Holstein", "#FFFFFF");
	this.text_4.lineHeight = 17;
	this.text_4.setTransform(-198,41.8,1.046,0.994);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#003366").s().p("Egu2AfPMAAAg+dMBdtAAAMAAAA+dg");
	this.shape_49.setTransform(0,17);

	this.addChild(this.shape_49,this.text_4,this.text_3,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.text_2,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.text_1,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.novoBotaoFechaInstrucoes,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-299.9,-182.9,600,400);


(lib.Hamburger_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// preto
	this.instance = new lib.Hamburger();
	this.instance.setTransform(-3,-10.7,1,1,0,0,0,189.6,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.8,y:-10.5},0).wait(1).to({rotation:7.6,y:-10.6},0).wait(1).to({rotation:11.4},0).wait(1).to({rotation:15.2,y:-10.5},0).wait(1).to({rotation:18.9},0).wait(1).to({rotation:22.7},0).wait(1).to({rotation:26.5,y:-10.6},0).wait(1).to({rotation:30.3},0).wait(1).to({rotation:34.1},0).wait(1).to({rotation:37.9},0).wait(1).to({rotation:41.7,y:-10.5},0).wait(1).to({rotation:45.5,y:-10.6},0).wait(1).to({rotation:49.3,y:-10.5},0).wait(1).to({rotation:53.1,x:-3,y:-10.6},0).wait(1).to({rotation:56.8,x:-2.9,y:-10.5},0).wait(1).to({rotation:60.6},0).wait(1).to({rotation:64.4,x:-3,y:-10.6},0).wait(1).to({rotation:68.2,x:-2.9},0).wait(1).to({rotation:72},0).wait(1).to({rotation:75.8,y:-10.5},0).wait(1).to({rotation:79.6,y:-10.6},0).wait(1).to({rotation:83.4,y:-10.5},0).wait(1).to({rotation:87.2,y:-10.6},0).wait(1).to({rotation:90.9,x:-3},0).wait(1).to({rotation:94.7,x:-2.9},0).wait(1).to({rotation:98.5},0).wait(1).to({rotation:102.3,y:-10.5},0).wait(1).to({rotation:106.1,x:-3,y:-10.6},0).wait(1).to({rotation:109.9,y:-10.5},0).wait(1).to({rotation:113.7,x:-2.9},0).wait(1).to({rotation:117.5,y:-10.6},0).wait(1).to({rotation:121.3},0).wait(1).to({rotation:125.1,x:-3},0).wait(1).to({rotation:128.8,x:-2.9},0).wait(1).to({rotation:132.6,y:-10.5},0).wait(1).to({rotation:136.4,x:-3,y:-10.6},0).wait(1).to({rotation:140.2,x:-2.9,y:-10.5},0).wait(1).to({rotation:144,x:-3},0).wait(1).to({rotation:147.8,x:-2.9,y:-10.6},0).wait(1).to({rotation:151.6},0).wait(1).to({rotation:155.4},0).wait(1).to({rotation:159.2,x:-3},0).wait(1).to({rotation:162.9,x:-2.9},0).wait(1).to({rotation:166.7},0).wait(1).to({rotation:170.5},0).wait(1).to({rotation:174.3},0).wait(1).to({rotation:178.1},0).wait(1).to({rotation:182,x:-3},0).wait(1).to({rotation:185.8,x:-2.9},0).wait(1).to({rotation:189.6},0).wait(1).to({rotation:193.4,x:-3},0).wait(1).to({rotation:197.2,x:-2.9},0).wait(1).to({rotation:200.9,x:-3},0).wait(1).to({rotation:204.7},0).wait(1).to({rotation:208.5},0).wait(1).to({rotation:212.3,x:-2.9},0).wait(1).to({rotation:216.1,x:-3},0).wait(1).to({rotation:219.9},0).wait(1).to({rotation:223.7,x:-2.9},0).wait(1).to({rotation:227.5},0).wait(1).to({rotation:231.3},0).wait(1).to({rotation:235},0).wait(1).to({rotation:238.8},0).wait(1).to({rotation:242.6},0).wait(1).to({rotation:246.4},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:254},0).wait(1).to({rotation:257.8},0).wait(1).to({rotation:261.6},0).wait(1).to({rotation:265.4},0).wait(1).to({rotation:269.2},0).wait(1).to({rotation:272.9},0).wait(1).to({rotation:276.7},0).wait(1).to({rotation:280.5},0).wait(1).to({rotation:284.3},0).wait(1).to({rotation:288.1},0).wait(1).to({rotation:291.9},0).wait(1).to({rotation:295.7},0).wait(1).to({rotation:299.5},0).wait(1).to({rotation:303.3},0).wait(1).to({rotation:307},0).wait(1).to({rotation:310.8},0).wait(1).to({rotation:314.6},0).wait(1).to({rotation:318.4},0).wait(1).to({rotation:322.2,y:-10.5},0).wait(1).to({rotation:326,y:-10.6},0).wait(1).to({rotation:329.8,y:-10.5},0).wait(1).to({rotation:333.6},0).wait(1).to({rotation:337.4},0).wait(1).to({rotation:341.2},0).wait(1).to({rotation:344.9,y:-10.6},0).wait(1).to({rotation:348.7,y:-10.5},0).wait(1).to({rotation:352.5,y:-10.6},0).wait(1).to({rotation:356.3,y:-10.5},0).wait(1).to({rotation:360,y:-10.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.7,-157.7,379.3,294.1);


(lib.Batatas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Batatas();
	this.instance.setTransform(157.1,157.4,1,1,0,0,0,157.1,157.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:7.7,y:157.5},0).wait(1).to({rotation:15.3,y:157.4},0).wait(1).to({rotation:23,y:157.5},0).wait(1).to({rotation:30.6},0).wait(1).to({rotation:38.3},0).wait(1).to({rotation:46,y:157.4},0).wait(1).to({rotation:53.6,y:157.5},0).wait(1).to({rotation:61.3,y:157.4},0).wait(1).to({rotation:68.9},0).wait(1).to({rotation:76.6},0).wait(1).to({rotation:84.3},0).wait(1).to({rotation:91.9},0).wait(1).to({rotation:99.6},0).wait(1).to({rotation:107.2},0).wait(1).to({rotation:114.9},0).wait(1).to({rotation:122.6},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:137.9},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:153.2},0).wait(1).to({rotation:160.9},0).wait(1).to({rotation:168.5},0).wait(1).to({rotation:176.2},0).wait(1).to({rotation:183.9},0).wait(1).to({rotation:191.6},0).wait(1).to({rotation:199.2},0).wait(1).to({rotation:206.9},0).wait(1).to({rotation:214.6},0).wait(1).to({rotation:222.2},0).wait(1).to({rotation:229.9},0).wait(1).to({rotation:237.5},0).wait(1).to({rotation:245.2},0).wait(1).to({rotation:252.9},0).wait(1).to({rotation:260.5},0).wait(1).to({rotation:268.2},0).wait(1).to({rotation:275.8},0).wait(1).to({rotation:283.5},0).wait(1).to({rotation:291.2,x:157.2},0).wait(1).to({rotation:298.8},0).wait(1).to({rotation:306.5,x:157.1},0).wait(1).to({rotation:314.1},0).wait(1).to({rotation:321.8,x:157.2},0).wait(1).to({rotation:329.5,x:157.1},0).wait(1).to({rotation:337.1,x:157.2},0).wait(1).to({rotation:344.8,x:157.1},0).wait(1).to({rotation:352.4,x:157.2},0).wait(1).to({rotation:360,x:157.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314.2,314.8);


(lib.Melancia_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Melancia();
	this.instance.shadow = new cjs.Shadow("#CC0000",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-129.9,340,260);


(lib.Maca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Maçã();
	this.instance.setTransform(0.1,0,0.197,0.197,0,0,0,-7.8,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-7.8,regY:-11.8,rotation:-0.8,x:0},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-2.8,x:0.1},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-4.8,x:0},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-1.5,x:0.1},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1.7,x:0},0).wait(1).to({rotation:3.3,x:0.1},0).wait(1).to({rotation:5,x:0},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:3.3,x:0.1},0).wait(1).to({rotation:2.5,x:0},0).wait(1).to({rotation:1.7},0).wait(1).to({rotation:0.8,x:0.1},0).wait(1).to({rotation:0},0).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-16.5,30,33.1);


(lib.Cenoura_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cenoura
	this.instance = new lib.Cenoura();
	this.instance.setTransform(0,0,0.095,0.095,0,0,0,157.5,147.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:146.9,rotation:1},0).wait(1).to({rotation:2},0).wait(1).to({rotation:3,x:0.1},0).wait(1).to({rotation:4,x:0},0).wait(1).to({rotation:5,x:0.1},0).wait(1).to({rotation:3.3,x:0},0).wait(1).to({rotation:1.7,x:0.1},0).wait(1).to({rotation:0,x:0},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-4.8,y:0.1},0).wait(1).to({rotation:-4,y:0},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-2.3,x:0.1},0).wait(1).to({rotation:-1.5,x:0},0).wait(1).to({rotation:-0.6,y:0.1},0).wait(1).to({rotation:0,y:0},0).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-13.9,30,28);


(lib.TelaInicial = function() {
	this.initialize();

	// Layer 1
	this.Instrucoes = new lib.Instrucoes();
	this.Instrucoes.setTransform(400.5,220.7,1.333,1.199);
	this.Instrucoes.alpha = 0.09;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C2B2C").ss(0.1,1,1).p("ABXo/IAOADADEokIAKADAEuoKIAIADAKEiBIAAACAj2JAIgGgBAlSHQIgCgBAmvGwIgEgBAnWF3IADgEAqDgWIACgMApkh4IADgEAI2j5IAAACAJei5IgCAAAInACIgDAIAGqBJIgKgDAFiBnIgCAEACUDWIgFgCAg5E/IgBADAhlGMIgDADAjFGJIgGgBAkLGpIgCAGAGpBGIgFgBAg7E/IgBADAhtGBIgCAD");
	this.shape.setTransform(640.4,242.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2B2C").ss(1,1,1).p("ABJpBIA8gfIADAFIAFAIIAbAqACyolIA8ghIAkA4AEaoLIA/ghIBzC2IBCgiIBPB6IhDAiIAnA8IBFgkIAlA8IhDAiIgBABIABACIBzCzIhCAjIAnA8IuuHqIgng8IADgBIOrnpIhLh2IhDAjIgCAAIgpg/ICHhGIglg5IAAgBIgCABIwvIsIgpg8IhEAjIhNh6IBDgjIh1i2IA8gdIAHgDIgFgIIgig2IA/ghAkYI6IABADIgMAGIg4AdIgmg7IA4gdIAAgBIg4AcIgkg5AmnHpIA4gdIABgBAlwHLIg3AcIgZgnIgNgUIACgBAnPGqIABABIhEAkIglg6Ao3GTIBEgjIABACIAjA4Ap9iBIgegtIgFgIIgDgFIBEgjIgmg+IKflcIAhA0IAGAHIqgFfABJpBIgIAEIACAFIAlA5IBEgjIgEgHACyolIgGADIAeAvIAGAJIADAEIBDgjIgEgFAEWoJIAEgCAIaj8IAAAAIAAgCIgog9IwxIwIAmA8gAJCi/IgBgBAIIAGIAjA2IgnAVIgOAIIhEAjIgkg4AGEBCIg+AhAFEBmIAkA7IhEAjIABABIhEAkIhFAjIgkg6ABzDQIhDAjIABABIhCAjIhEAkAhWE+IAlA6IhEAjIgMgUAiEGKIALATIhEAkIglg6AjjGGIACgCAjnGEIhAAgAkpGqIAkA6IgqAXIgMAGAkuH8IgNAGIAAgBIgCAAIAlA5AIIAGIgCgFIgmAVIgPAHIAlA8AGIBAIABgBIglg7IhEAjAEhApIAlA6AGEBCIAEgCAGNBCIABACAFEBmIgBAAIhEAjAEACKIARAbIATAfABzDQIABgBIglg7IhFAjAALC5IASAcIATAeAC8CtIAlA8AC8CtIhFAkAEACKIhEAjAHRAdIhFAkAo7ihIhBAjIAfAwIAEAHIAEAGIhCAiIB1C0IOsnoIh0i2Ao4iiIgkg4IgDgEAp9iBIABADIgEABAqYgeIABgBAoZExIABABAliHGIgJAGIgDABIAlA6AlwHLIAMgHIglg7IhCAiAg3DcIhFAkIAlA6IABABIABAAAALC5IhCAjIAmA7AjnGEIAAgBIglg7IhEAjIAlA8IAEgDAiaFhIARAcIAIAKAiLGAIgTgeIhDAiAkpGqIgBAAIg4AcIgBgBIgLAGAlJIIIAKgGIACgBAhYE9IABAAIABABAiLGAIAHAKAhYE9IhDAj");
	this.shape_1.setTransform(643.2,243.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32CD32").s().p("AmqFEIAMgGIglg8IhDAjIgDgBIgkg4IADgEIQvosIADAAIAkA5IiHBGIAqA/IACgBIgDAIIgDgEIgmAVIgPAHIhEAkIABABIgGgCIACgBIgmg7IhDAjIAAABIAlA6IgCAEIgBAAIhEAhIABABIhEAjIhFAkIABABIgFgCIACgBIgmg7IhCAjIAAABIhDAkIhFAkIAkA6IAAADIhDAjIABABIARAcIgDACIgSgdIhEAiIgGAAIABgBIglg7IhEAjIAlA7IAEgCIgDAGIAAAAIg4AcIgCgBIgKAGgAIskLIABgBIABADg");
	this.shape_2.setTransform(649.1,256.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B4513").s().p("AosD6IQxovIAoA9IAAACIwyIsg");
	this.shape_3.setTransform(641.3,242.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0E68C").s().p("AkUI/Iglg5IABgBIABABIANgGIgBgBIAqgWIglg6IADgGIA/ghIAGABIgBABIABABIAkA7IBFgkIgLgTIACgDIAMAUIBEgkIgkg6IABgDIBEgjIBBgkIgBgBIBDgjIAFACIAlA6IBEgjIBEgjIAAgBIBDgkIgkg6IACgEIA/ghIAKADIAjA4IBEgkIAPgIIAngUIgjg3IADgIIBCggIBMB1IurHpgAqTgbIBCgiIgEgFIgFgIIgfgwIBCgiIACgBIgkg4IgCgFIKfleIgGgHIAOADIgIAEIACAFIAlA5IBFgkIgFgGIALADIgGADIAeAvIAGAJIACAEIBDgiIgEgGIAJADIgFADIB0C1IusHogAqagiIAFAIIgHAEgAp6h8IABACIgEACg");
	this.shape_4.setTransform(642.9,242.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2B2C").s().p("AkUI9IACgBIOsnpIhNh2IhBAjIgCAAIgqg/ICHhGIglg5IAAgBIAAgBIAAABIgCABIwvIsIgpg8IAAgBIAAABIhEAjIhNh6IBDgjIh1i2IA8gdIAHgDIgFgIIgig2IA/ghIAEgBIgBgDIgegtIgFgIIgCgFIBDgjIglg+IKelcIAhA0IAGAHIqgFfIADAEIAkA4IgDABIhBAjIAfAwIAFAHIADAGIhBAiIB0C0IOsnoIh0i2IAEgCIA/ghIB0C2IBBgiIBPB6IhCAiIAnA8IBEgkIAmA8IhEAiIgBABIABACIBzCzIhBAjIAmA8IuuHqgAo/D1IAnA8IQyotIABAAIgBgCIgog9gAqYgeIACgBgAmAIlIA4gdIgBgBIgkg6IACgBIAJgGIgJAGIgCABIAkA6Ig4AcIgkg5IgBgBIA3gdIACgBIAKgGIABABIA4gcIABAAIAlA6IgqAXIAAABIgMAGIgBgBIANgGIgNAGIgCAAIAlA5IACADIgNAGIg4AdgAk/ICIgJAGIAJgGIACgBgAlJIHgAnAHAIgNgUIACgBIBDgiIAkA7IgLAHIg4AcgAo2GVIgBgCIBEgjIABACIAjA4IABABIhEAkgAjiGHIgBgBIACgCIBDgiIATAeIAIAKIAKATIhEAkgAlQFrIBFgjIAlA7IgBABIg/AgIgFADgAiBGHIgIgKIgRgcIgBgBIBEgjIABAAIAAABIAlA6IhEAjgAhXE6Igkg6IBEgkIAnA7Igng7IBCgjIASAcIATAeIgTgeIgSgcIAAgCIBEgjIAmA7IgCABIhDAjIABABIhBAjIhFAkIgBAAgAoYEygAB4DSIgBgBIBFgkIAlA8IhFAjgAC8CtIBEgjIARAbIATAfIgTgfIgRgbIgBgBIBEgjIABAAIAkA7IhEAjIABABIhEAkgAGOBEIAAgCIgBgBIBDgkIAmA8Igmg8IAQgHIAmgVIADAFIAiA2IgnAVIgOAIIhEAjgAEhApIAAgCIBDgjIAlA7IgBABIgDACIg/AhgAJCi/gADRnqIgHgJIgdgvIAGgDIA7ghIAkA4IAEAFIhDAjgABDo4IgCgFIAIgEIA8gfIADAFIAFAIIAbAqIAFAHIhFAjg");
	this.shape_5.setTransform(643.2,243.4);

	this.text = new cjs.Text("Fat:\nthe Game", "60px Holstein", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 214;
	this.text.setTransform(361.9,20,1.332,1.199);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("Ag4gjIAZgGIgGgYIAbgGIAHAYIAYgHIAIAYIABAAIgbAHIAGAXIgZAFIgHgVIgbAGIgIgYgAAzAqIAIAYIgcAGIgHgYg");
	this.shape_6.setTransform(562,106);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#EE2222").ss(0.1,1,1).p("ADxhBIAAAAIgBAAIgaAGIAOAxIgbAGIAOAvIAAABIgbAFIAHAYIgbAHIAIAZIhtAaIgHgZIgcAHIAJAZIhrAZIgIgYIgbAGIgIgYIgaAGIAAAAIgOgwIgbAGIgPgwIgcAHQgEgSgGgTQgKgjgBAAIABAAIAbgGIANAvIA2gNIgGgXIAcgGIAHAYIA2gMIgJgZIA3gNIAHAYIA1gNIgHgYIA1gOIAIAZIA2gOIgIgXIA3gNIgOgxIAagHg");
	this.shape_7.setTransform(579,110.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E75F20").ss(0.1,1,1).p("Ah0ApIA2gNIgHgYIA1gLIAHAXIA1gNIgHgXIA1gNIAIAYIA2gNIgIgYIA3gNIgHgZIAAgBADpgpIgOgyIgbAGAjLAkIgCAAIgbAHIABABIAOAw");
	this.shape_8.setTransform(576.8,98.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#EEBB44").ss(0.1,1,1).p("ACohiIABAAIABACIAGAXIAagGIACgBIAAACAjXBKIgBgBIACAAIAZgHIgNguIgCgBIACgBIAagGIgIgWIAAgBIACgBIBsgaIAAAAIACABIAIAZIA0gNIAMAvIgYAHIAHAXIBOgUIgHgXIgbAHIgPgwIA2gNIgIgYIAAgBIABgBIBtgbADZgeIgNgwAjPBiIgIgY");
	this.shape_9.setTransform(574.3,93.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#88AA00").ss(0.1,1,1).p("ABGgPIAAABIgCAAAAxAPIABABIgCAAAhEARIgBgCIADAAAgxgMIAAgBIACAAAgxgMIAHAUIgYAHAhEARIAJAYIBrgZAAxAPIgHgWIAagHABGgPIgIgZIhtAb");
	this.shape_10.setTransform(584.9,77.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AAVjxIgHgXIBYgVIAwgMIAOAxIgYAGACKjxIAHAZIgaAFAB2jRIAOAtACGiiIAEgBIAVgFIAHAXACoiQIAagGIAPAxIAagHIArCQIgaAHAD7AsIAPAwIgaAHIAOAwIgWAFIgGABADiCaIAHAYIgbAGIAIAZIgcAHIAIAXIhtAbIgHgYIgbAHIAHAYIhqAZIgHgXIgbAGIgHgYIgbAGIgHgaAh8DtIgaAIIgPgwIgbAGIgPgwIgbAGIgriSIAagIAj6AHIgPguIAbgGAjuguIgHgZIAagFAjahOIgHgXIBsgaIAHAXAhshoIA1gMIgdhhIAagHIAOAxIAcgGIgIgaIAYgFAACjTIgFgXIAWgFAAXiJIgHgXIgzANIAHAYIAygN");
	this.shape_11.setTransform(577.9,99.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYAwIAbgGIAIAYIgcAGgAgXgQIgbAGIgIgYIACgBIAZgGIgGgYIAbgGIAHAYIAYgHIAIAYIABAAIgbAHIAGAXIgZAFg");
	this.shape_12.setTransform(562,106);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE2222").s().p("AhKCLIgbAGIgIgYIgaAGIAAAAIgOgwIgbAHIgPgxIgbAHIgKglIgLgiIAAAAIAbgHIANAvIA2gNIgHgXIAdgGIAGAYIA2gMIgIgZIA3gNIAHAZIA1gOIgIgYIA2gNIAIAYIA2gOIgIgXIA3gNIgOgwIAagHIAdBhIAAABIAAAAIgaAFIAPAxIgcAHIAOAuIgBABIgaAFIAHAYIgbAHIAIAZIhtAbIgHgaIgcAIIAJAYIhqAZgAiQAAIAIAYIAbgHIgIgWg");
	this.shape_13.setTransform(579,110.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E75F20").s().p("Ai+BAIgbAHIgOgwIgBgBIAbgHIACAAIgCABIAIAXIAagFIAIAXIAbgGIgHgYIAcgHIgBAAIA2gNIgHgWIA1gNIAHAYIA1gNIgHgZIA1gMIAIAYIA2gNIgIgYIA3gNIgHgaIAAAAIAbgGIAOAyIgaAHIAOAwIg3ALIAIAXIg2AOIgIgYIg1ANIAHAYIg3AOIgHgZIg0ANIAIAZIg2AMIgHgYIgcAGIAHAZIg2ANg");
	this.shape_14.setTransform(576.8,100.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EEBB44").s().p("AjbBKIgBgBIACAAIAagHIgOgvIgBAAIACgBIAZgGIgHgWIAAgBIABAAIBsgaIABgBIABABIAIAZIA0gNIAPAvIgbAHIAHAYIBOgUIgGgYIgbAHIgQgwIA3gNIgJgYIAAgBIABgBIBtgbIABAAIABACIAGAYIAagHIACgBIAAACIAOAxIAAAAIAHAZIg4AMIAIAYIg2ANIgIgZIg1ANIAHAZIg3ANIgHgZIgyAOIAGAXIg2AOIgIgZIgbAHIgGgYIgbAGIAGAZIgZAFIgCAAIgbAHg");
	this.shape_15.setTransform(574.7,93.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#88AA00").s().p("AhEARIgBgCIACAAIAZgHIgHgUIAAgBIACAAIBtgbIAIAZIAAABIgDAAIgZAHIAHAWIAAABIgBAAIhrAZg");
	this.shape_16.setTransform(584.9,77.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag3ESIgbAGIgHgYIgbAHIgHgaIAagGIAIAYIAbgGIAIAYIBqgZIgIgYIAbgHIAHAZIBtgbIgHgZIAagHIgHgYIAbgFIAHAYIgbAFIAIAaIgcAHIAIAXIhtAbIgHgYIgbAHIAHAXIhqAZgAilDFIgbAGIgPgxIgbAHIgriSIAagHIAIAYIABABIAOAwIAAAAIALAkIAKAlIAcgHIAOAxIAbgHIAOAwIgaAHgADUBpIAcgHIgPgxIAagFIAPAwIgaAHIAOAvIgWAGIgGABgADeg0IgOgyIgbAGIgNgwIAagGIAPAwIAagGIArCQIgaAHgAkJgnIAbgGIAOAtIgaAHgAg8gjIAagHIgOgxIg0AMIgIgZIA1gMIgdhhIAagHIAOAxIAcgGIgIgaIAYgFIAJAYIBtgaIAOAuIhtAbIgHgXIgzANIAHAYIAygMIAIAXIg0AOIAPAxIAZgGIAHAXIhOAUgAj1hHIAagGIAHAZIgaAGgAjhhmIBsgZIAHAXIhsAagACGiiIAEgBIAVgFIAHAXIgaAGgABwjqIAagHIAHAZIgaAFgAgDjpIAWgGIAHAWIgYAGgAAOkIIBYgVIAwgLIAOAwIgYAGIgIgZIhvAag");
	this.shape_17.setTransform(577.9,99.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2C2B2C").ss(1,1,1).p("AFBh8ICOAAIAAg/IBEAAIABjDIhFAAIAAg/IjXAAIAAA/IhGAAIAACAIhIAAIAAg9IiKAAIAAA/IhJAAIAAA+IhFABIAAA/IhHAAIAABCIBHAAIAAhAIBIAAIAAhBIBGACIAAgCIAAg/ICMAAIAAA/IBGAAAD6j9IAAh/ICOgBIAAA/IgkAAQgSAAgRAAIAABCgACzi9IABBBIBGAAIAAhBIBHAAIABg+QAAgBAjAAQARAAASAAIAAhBIBIABIAAB/IiPAAIAABBAj1g8IAAAAAj1g8IhHAAIAAA9IhJAAIAACBIhJAAIAAB9IhFAAIACCCIBFAAIAAA9QBIAABIAAQCPAAgBAAIAAg9ICOAAIAAhAICMAAIAAhAIBIAAIAAg+IBGAAIAAhBIBHAAIAAhBIBHAAIAAh9IhHAAIAAB9IhHAAIAAA/IhIAAIAABCIhFgBIAAA/IhHAAIAAg+IhGgBIAAAAIAACAIhGAAIAAg/IhJAAIAAB+IkbAAIAAh/IBHgBIAAh+IBHgBIAAiAIBHAAgAivEBIhGAAIAAg/IBGgBIAABAIAAABAggDBIhHAAIAAg/IhHAAIAAhAIBIAAIgBBAIBHAAIAAA/ACzi9IgBAAAggi9IBFACIAAA/IBHAAIAABAQAAgBhGAAIgBg/IhEAAIgBg/AD6h8IAABAIBHAAIAAhAg");
	this.shape_18.setTransform(138.3,274.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008000").s().p("AhGA/IBGAAIAAg/IAkAAIAjAAIAAg/IBHABIAAB9IiOAAIAABAIhGABgAiNA/IAAg/IBHAAIAAh+ICNgBIgBA/IgjAAIgjAAIAABAIhGAAIAAA/IhHAAg");
	this.shape_19.setTransform(170.4,249.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9024").s().p("AmFE+IAAh+IBGgBIAAh/IBIgBIAAh9IBHAAIgBhAIABAAIBHABIAAhAIBHAAIAAhBIBFABIABBAIBGAAIABA/IBGAAIAAg/IhHAAIAAhAIhHgBIAAg/ICOAAIAAA/IBGAAIABAAIABBAIBFABIAAA/IBIAAIAAB+IhIAAIAAA/IhIAAIAABBIhEAAIAAA/IhHAAIAAg/IhIAAIAAhAIhFAAIAAhAIhIAAIAABAIBIAAIAABAIBFAAIAAB/IhFABIAAhAIhJAAIAAAAIAAhAIhFAAIAABAIBFAAIAAAAIAAB+g");
	this.shape_20.setTransform(131.4,281.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2B2C").s().p("AnMG+IAAg+IhFAAIgCiBIBFAAIAAh9IBJAAIAAiBIBJAAIAAg+IBHAAIAAA+IhHAAIAACAIhHABIAAB/IhHAAIAAB/IEbAAIAAh+IBJAAIAAA/IBGAAIAAiAIAAAAIBGABIAAA+IBHAAIAAg/IBFABIAAhCIBIAAIAAhAIBHAAIAAh9IBHAAIAAB+IhHAAIAABBIhHAAIAABBIhGAAIAAA+IhIAAIAABAIiMAAIAAA/IiOAAIAAA+IiOABIiQgBgAj1EBIAAg/IBGgBIAABAgAggDBIhHAAIAAg/IhHAAIAAhAIBIAAIgBBAIBHAAIAAA/gAggDBgAj1g9IAAhBIBHAAIAAg/IBFgBIAAg+IBJAAIAAg/ICKAAIAAA9IBIAAIAAiAIBGAAIAAg/IDXAAIAAA/IBFAAIgBDDIhEAAIAAA+IiOAAIAAhAICPAAIAAh/IhIgBIAABBIgjAAIgjAAIgBA/IhHAAIAABBIhGgBIgBhAIBHAAIAAhAIhHABIgBA/IhGAAIAAg/IiMAAIAAA/IAAABIhGgBIAABBIhIAAIAABAgAD6l8IAAB/IBHABIAAhCIAjAAIAkAAIAAg/gAD6g9IAAg/IBHgBIAABAgAAmg9IgBg/IBHAAIAAA/IhGAAgAAlh8IhEAAIgBhAIAAgBIBFABIAABAgAggi9g");
	this.shape_21.setTransform(138.3,274.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2C2B2C").ss(1,1,1).p("Ag+lGIgCAAIABABgAgak0IAXgiIglgTIgWAjAh7k4IgBgBIgBAAIgBACAi8kqIAoAVIAWgiAjRkFIBPApIgYAkIAlATIAuhIIglgTIAYgkIgngUAi9kqIACgBIAXgjIAoAVIAUghIAoAUAjRkFIgBgBIgYAkIAlAUIjJE3IAoAVIgVAhIGGDLIAVghIAnAVIDgleIgBgBIgmgUIgXAiIgqgTIgWAhIAqAWIidDzIgngUIgVAkIk2ihIAWgkIgmgUICcjyIAlATIAWghIApAVIAuhIIgpgVAjRkHIAAACAi7krIgBABIgBAAIgkgTIgXAkIAmATIABgBIAVgjACpAbIgmgUIAuhEIgmgUIguBHIgngUIAWghIgogVIgVAhIhKgnIAVgiIgmgUIgXAhIgogVIgXAlIE0CegAAcjqQgBAAgDgBIAEACIAAgBIAVggIAoAVIAWgkIAnAVIgVAiIABACIAlATQABAAABAAIAWgjIAnAUIgWAjIAAABIAjATIgVAiIABAEIAjASIAXglIB2A+IhCBmIgmgSAgGj9IASghIgkgTIgCgCIgWAiIApAVgAg/lFIAlASIAAgBAgGj7IAAgCAgGj7IgBgBIgXAkIAiATIAYgkAgwkRIgXAkAgYkxIgCgDAAEjFIgUAkIAmAVIBDhpAAAhoIAkAUIAXglIglgTgACLhRIglgTIAVghIgogVIAthHIgngUAAYjrIgegQAhUkkIAVghAhUkkIAkATACnjNIABABIABgBACBjiIgBABIACABACxg9IAshDIglgUIAXgkIgngUIgtBHIAlASIgVAiADQi5IgBABIABAAADeiDIgBADIACABAEngBIArhDIhPgpIgBAAIgBAAIgqBDIgmgTAEngBIAAABAEmgBIABAA");
	this.shape_22.setTransform(190,106.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Aj/BFIAWgkIgmgUICcjyIAlATIgYAlIE1CgIAWgkIArAWIidDxIgngUIgXAkg");
	this.shape_23.setTransform(183.9,114.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFD700").s().p("ABDCdIAuhGIgmgUIAVgiIglgTIAthFIAnAUIgXAjIAlAUIgsBDIAmATIAqhDIABAAIABAAIBPApIgrBDIgBAAIgmgUIgXAkIgqgVIgWAigAgIB2IAUghIgmgVIAXglIglgUIgYAkIAmAVIgVAgIhMgmIAVgiIgmgUIAuhGIgpgVIAXgkIgkgTIAVghIAlASIAAgBIACACIgCgBIgWAiIApAVIABgBIAAACIgBgBIgXAkIAkATIgWAkIAoASIBBhmIAnAUIgtBHIAoASIgVAiIAlATIguBHgABLBDgAgaBAgAjKAPIAVgeIApATIgWAhgACdAUIABgDIABAEgAiMAEgAjagiIAYglIhOgoIgBgCIAVgjIAoAUIAWgiIADAAIAnAUIgYAjIAlAUIguBIgACPgjIABgBIAAACgABog3IgBAAIACAAIgBAAgABAhLIABgBIABACgAgmhVIAEABIAAABg");
	this.shape_24.setTransform(196.3,91.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C2B2C").s().p("Al8CfIAWghIgogVIDJk3IglgUIAYgkIABABIBPApIgYAkIAlATIgWAhIAoAVIAXghIAmAUIgVAiIBKAnIAVghIAoAVIgWAhIAnAUIAthHIAnAUIguBEIAlAUIgWAkIk1ieIAYglIglgTIicDyIAmAUIgWAkIE2ChIAVgkIAnAUICdjzIgrgWIAXghIApATIAYgiIAlAUIABABIjgFeIgmgVIgVAhgAEmAAIABgBIAqhDIhPgpIgBAAIAAAAIgrBDIglgTIArhDIglgUIAYgkIgogUIgtBHIAlASIgVAiIgkgTIAUghIgngVIAthHIgogUIAXgkIAmAVIgUAiIgBABIABABIAlATIABABIABgBIAXgjIAmAUIgVAjIgBABIABAAIAjATIgWAiIgBADIACABIAjASIAYglIB2A+IhCBmgAAkhUIglgUIAWgkIAmATIgXAlgAgQihIAUgkIAYgkIAAgBIAUggIAoAVIhDBpgAhMiQIgpgVIAuhIIglgTIAXgkIgmgUIgBgBIAUghIAnAUIACABIAAgBIAXgjIAlATIgXAiIgBABIgkgSIgWAhIAlATIgXAkIApAVIguBIgAh1ilgAgejYIAXgkIABABIAeAQIAEACIgYAkgAAcjpgABYj1gAgwkRIAVgiIADACIAkATIgSAhIgBABgAj4kZIAXgkIAkATIABAAIgVAjIgBABgAi8kqIABgBIAWgjIApAVIgBAAIgBACIgWAigAi8kqg");
	this.shape_25.setTransform(190,106.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#2C2B2C").ss(2,1,1).p("Ak1I3IPxgWQhzjjizlsQh2jxjEinQg4gthBgqIgqgcAhKo+Qj3NGl6E3IGGgI");
	this.shape_26.setTransform(400,263.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2C2B2C").ss(1,1,1).p("ACABTQgIAKgJAAQgIAAgFgFQgEgDAAgCQgIgHAAgNQAAgMAIgLQAGgHALAAQAJAAAIAHQAIALAAAMQAAAHgCAIQgDACgDADgACDC+QgfAAgWgeQgWgbAAgmQAAggAQgSQAOgTAXAAQAWAAAUATQAWASAJAgQAIAmgOAbQgOAegfAAgAgpCgQgOAegeAAQgfAAgZgeQgUgbAAgmQAAggAOgSQARgTAWAAQAUAAAWATQAXASAIAgQAJAmgPAbgAjIm4IgDAKIAAgPAhQBBQAAALgFAHQgDACAAADQgJAHgIAAQgFAAgEAAQgFgCgGgFQgIgKAAgNQAAgMAIgIQAJgJALAAQAIAAAJAJQAIAIAAAMgAhmFvQCmCpCMi/");
	this.shape_27.setTransform(412.9,250.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AkejQQA1kzghg0IAqAbQBEAqA4AuQDBCmB2DxQCzFsBzDjIvxAWQCamTBAl1gAgQE/QBOAABIhgIAAAAIABgBIAAgBIABgBIACgCIgCACIgBABIAAABIgBABIAAAAQhIBghOAAIAAAAIgBAAQhIAAhOhOIgBgBIABABQBOBOBIAAIABAAIAAAAgAAHhQQgPASAAAgQAAAkAUAbQAXAeAeAAQAfAAAOgeQAOgbgIgkQgIgggXgSQgTgTgXAAQgWAAgOATgAjVhQQgNASAAAgQAAAkATAbQAZAeAfAAQAeAAAOgeQAPgbgIgkQgJgggXgSQgWgTgTAAQgXAAgRATg");
	this.shape_28.setTransform(419.5,263.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006633").s().p("ACNo+IAAAPIADgJQAhA0g1EzQhAF1iYGTImFAHQF6k3D0tFgADmgfIgKgHQgJgKABgNQgBgNAJgHQAIgJALAAQAJAAAIAJQAJAHAAANQgBALgFAGQgDADAAADQgIAHgJAAIgJAAgAG8gmQgEgDAAgDQgHgHgBgMQABgMAHgLQAHgIAKABQAJgBAIAIQAJALAAAMQgBAHgCAIIgGAEQgIAKgJAAQgIABgFgFg");
	this.shape_29.setTransform(378.3,263.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABCA0QgWgcAAgjQAAggARgSQAOgTAWAAQAXAAATATQAXASAIAgQAJAjgPAcQgOAdgeAAQgfAAgXgdgABThCQgIAKAAANQAAAMAIAHQAAADADADQAFAEAJAAQAIAAAJgKIAFgFQADgHAAgHQAAgNgIgKQgJgIgIAAQgLAAgGAIgAiZA0QgTgcAAgjQAAggANgSQARgTAXAAQATAAAXATQAWASAJAgQAIAjgOAcQgOAdgfAAQgfAAgZgdgAiIg9QgIAHAAANQAAAMAIALIALAHIAIAAQAJAAAIgHQAAgDADgDQAGgHAAgKQAAgNgJgHQgIgKgJAAQgLAAgIAKg");
	this.shape_30.setTransform(414.1,261.5);

	this.novoBotaoInstrucoes = new lib.AbreInstrucoes();
	this.novoBotaoInstrucoes.setTransform(475,400,1.19,1.332);
	new cjs.ButtonHelper(this.novoBotaoInstrucoes, 0, 1, 2);

	this.novoBotaoIniciar = new lib.BotaoIniciar();
	this.novoBotaoIniciar.setTransform(325,400,1.19,1.332);
	new cjs.ButtonHelper(this.novoBotaoIniciar, 0, 1, 2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1B8AD9").s().p("Eg+fAleMAAAhK7MB8/AAAMAAABK7g");
	this.shape_31.setTransform(400,239.9);

	this.addChild(this.shape_31,this.novoBotaoIniciar,this.novoBotaoInstrucoes,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.text,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.Instrucoes);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800.5,481);


(lib.ConjuntoGlobal = function() {
	this.initialize();

	// Gráficos
	this.instance = new lib.TelaDeFimDeJogo();
	this.instance.setTransform(0.1,0.1,0.232,0.232,0,0,0,400.2,240.3);

	this.instance_1 = new lib.TelaDeJogo();
	this.instance_1.setTransform(0.1,0,0.232,0.232,0,0,0,400.2,-536.8);

	this.instance_2 = new lib.TelaInicial();
	this.instance_2.setTransform(0.1,0,0.232,0.232,0,0,0,400.2,239.4);

	this.instance_3 = new lib.Jogador();

	this.instance_4 = new lib.TextoPontosNovos();
	this.instance_4.setTransform(0.1,0,0.321,0.321,0,0,0,17.4,0);

	this.instance_5 = new lib.Tempo();
	this.instance_5.setTransform(0,0,0.321,0.321);

	this.instance_6 = new lib.SimboloJogoPausado();
	this.instance_6.setTransform(0,0,0.321,0.321);

	this.instance_7 = new lib.Pontuacao();
	this.instance_7.setTransform(0,0,0.321,0.321);

	this.instance_8 = new lib.Instrucoes();
	this.instance_8.setTransform(0,0,0.321,0.321,0,0,0,-0.5,15);

	this.instance_9 = new lib.Hamburger_1();
	this.instance_9.setTransform(-0.1,0,0.198,0.198,0,0,0,-4.2,-11.1);

	this.instance_10 = new lib.Hamburger();
	this.instance_10.setTransform(0.1,0,0.198,0.198,0,0,0,189.8,147);

	this.instance_11 = new lib.Batatas_1();
	this.instance_11.setTransform(0,0,0.198,0.198,0,0,0,156.9,156.6);

	this.instance_12 = new lib.Batatas();
	this.instance_12.setTransform(0,0,0.198,0.198,0,0,0,156.9,156.6);

	this.instance_13 = new lib.FecharInstrucoes();
	this.instance_13.setTransform(0,0.1);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib.FecharInstrucoes(), 3);

	this.instance_14 = new lib.BotaoZerar();
	new cjs.ButtonHelper(this.instance_14, 0, 1, 2, false, new lib.BotaoZerar(), 3);

	this.instance_15 = new lib.BotaoReiniciar();
	new cjs.ButtonHelper(this.instance_15, 0, 1, 2);

	this.instance_16 = new lib.BotaoMenu();
	new cjs.ButtonHelper(this.instance_16, 0, 1, 2);

	this.instance_17 = new lib.BotaoIniciar();
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2);

	this.instance_18 = new lib.AbreInstrucoes();
	new cjs.ButtonHelper(this.instance_18, 0, 1, 2);

	this.instance_19 = new lib.BotaoPause();
	this.instance_19.setTransform(0.1,0,1,1,0,0,0,-2.5,13.5);

	this.instance_20 = new lib.BotaoEsquerda();
	new cjs.ButtonHelper(this.instance_20, 0, 1, 2, false, new lib.BotaoEsquerda(), 3);

	this.instance_21 = new lib.BotaoDireita();
	new cjs.ButtonHelper(this.instance_21, 0, 1, 2, false, new lib.BotaoDireita(), 3);

	this.instance_22 = new lib.Melancia_1();
	this.instance_22.setTransform(0,0,0.128,0.128);

	this.instance_23 = new lib.Melancia();
	this.instance_23.setTransform(0,0,0.128,0.128);

	this.instance_24 = new lib.Maca();
	this.instance_24.setTransform(0,0,0.128,0.128);

	this.instance_25 = new lib.Maçã();
	this.instance_25.setTransform(0,0.2,0.128,0.128,0,0,0,-8.1,-10.5);

	this.instance_26 = new lib.Cenoura_1();
	this.instance_26.setTransform(0,0,0.128,0.128);

	this.instance_27 = new lib.Cenoura();
	this.instance_27.setTransform(0.1,-0.1,0.128,0.128,0,0,0,158,145.4);

	this.addChild(this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-397.4,-233.4,800,469.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;