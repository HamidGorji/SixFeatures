"use strict";

var sketch_4 = function(p) {

	p.setup = function() {
		p.createCanvas(640, 360);
	}

	p.draw = function() {
		p.background(p.random(255));
	}

}

var p5_4 = new p5(sketch_4, "canvas4");