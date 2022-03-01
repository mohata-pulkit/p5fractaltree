var theta;
var initialWeight;
var rotateTheta1;
var rotateTheta2;

function setup() {
	createCanvas(innerWidth, innerHeight);
}

function draw() {
	background(171, 205, 239);
	theta = (2 * PI) / 20;
	rotateTheta1 = theta;
	rotateTheta2 = -theta;
	// rotateTheta1 = theta - Math.random() * (theta / 2);
	// rotateTheta2 = -theta + Math.random() * (theta / 2);
	initialWeight = 15;
	translate(width / 2, height);
	branch(height / 8, initialWeight);
}

function branch(len, weight) {
	if (weight < initialWeight / 100) {
		stroke(67, 101, 33);
	} else {
		stroke(101, 67, 33);
	}

	strokeWeight(weight);
	line(0, 0, 0, -len);
	translate(0, -len);
	if (weight > 0.02) {
		push();
		rotate(rotateTheta1);
		branch(len * 0.8, weight * 0.6);
		pop();
		push();
		rotate(rotateTheta2);
		branch(len * 0.8, weight * 0.6);
		pop();
	}
}
