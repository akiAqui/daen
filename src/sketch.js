function setup() {
    let parentDiv = document.getElementById('container');
    
    // <canvas class="p5Canvas" width="800" height="800" style="width: 800px; height: 800px;"></canvas>
    let canvas = createCanvas(800, 800);
    canvas.id('p5Canvas');
    canvas.parent(parentDiv); // 特定の要素に挿入    

    translate(width / 2, height / 2); // 中心を原点に設定
    scale(20,20);
    strokeWeight(0.07);
    background(255);
    colorMode(HSL,100);
    blendMode(HARD_LIGHT);
    let k = 3.0;
    let max=12;
    let cValues = []; //[-5, -2.5, 0, 2.5, 5]; // cのパラメトリック値
    for (let i=0; i<max*2+1; i+=0.4){
	cValues.push(-max+i);
    }
    let counter=0;
    for (let c of cValues) {
	
	//
	// 2パターン
	//
	// 1) let b=10;
	// 2) let b = k*c;  
	let b=10;
	noFill();
	//stroke(20+counter,100,40);

	beginShape();
	//fill(random(10,255),random(10,255),random(10,255));
	for (let theta = 0; theta <= Math.PI*2.0; theta += 0.01) {
	    let A = Math.sqrt(k * k * c * c + b * b)/k;
	    let B = k*c;
	    let x = c + (B * Math.cos(theta));
	    let y = A * Math.sin(theta);
	    vertex(x, y);
	}
	endShape();
	counter+=2;
    }
}

function draw() {
  // 背景やエフェクトを追加する場合はここに
}

