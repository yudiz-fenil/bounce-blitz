class LevelManager {
	constructor(oScene) {
		this.oScene = oScene;
	}
	setLevel = (level) => {
		switch (level) {
			case 1:
				this.level1();
				break;
			case 2:
				this.level2();
				break;
			case 3:
				this.level3();
				break;
			case 4:
				this.level4();
				break;
			case 5:
				this.level5();
				break;
			case 6:
				this.level6();
				break;
			case 7:
				this.level7();
				break;
			case 8:
				this.level8();
				break;
			case 9:
				this.level9();
				break;
			case 10:
				this.level10();
				break;

			default:
				this.level1();
				break;
		}
	}
	level1 = () => {
		console.log('%cLEVEL 1', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 6; i++) { // column count
			for (let j = 0; j < i; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((180 * i) - (j * 90), 300 + (j * 150), "brick" + (nBrick));
				brick.setName(nBrickCount == 9 ? "hard_balls_brick_" + nBrickCount : "normalbrick_" + nBrickCount);
				brick.setScale(1.5, 1.5);
			}
		}
	}
	level2 = () => {
		console.log('%cLEVEL 2', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 5; i++) { // column count
			for (let j = 0; j < 4; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((180 * i) + 180, 300 + (j * 150), "brick" + (nBrick));
				brick.setScale(1.5, 1.5);
				brick.setName("normalbrick_" + nBrickCount);
				if (nBrickCount == 4 || nBrickCount == 8 || nBrickCount == 16 || nBrickCount == 20) {
					brick.setName("hard_brick_" + nBrickCount);
				}
				if (nBrickCount == 12) {
					brick.setName("hard_fire_brick_" + nBrickCount);
				}
			}
		}
	}
	level3 = () => {
		console.log('%cLEVEL 3', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 5; i++) { // column count
			for (let j = 0; j < 6; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((180 * i) + 180, 300 + (j * 130), "brick" + (nBrick));
				brick.setScale(1.5, 1.5);
				brick.setName("normalbrick_" + nBrickCount);
				if (j == 0 || j == 3) {
					brick.setName("hard_brick_" + nBrickCount);
				}
				if (nBrickCount == 17) {
					brick.setName("hard_balls_brick_" + nBrickCount);
				}
			}
		}
	}
	level4 = () => {
		console.log('%cLEVEL 4', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 6; i++) { // column count
			for (let j = 0; j < 6; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((170 * i) + 120, 300 + (j * 130), "brick" + (nBrick));
				brick.setScale(1.5, 1.5);
				brick.setName("normalbrick_" + nBrickCount);
				if (j == 0 || j == 1 || j == 3 || j == 5) {
					brick.setName("hard_brick_" + nBrickCount);
				}
				if (nBrickCount == 17) {
					brick.setName("hard_fire_brick_" + nBrickCount);
				}
				if (nBrickCount == 23) {
					brick.setName("hard_balls_brick_" + nBrickCount);
				}
			}
		}
	}
	level5 = () => {
		console.log('%cLEVEL 5', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 6; i++) { // column count
			for (let j = 0; j < 7; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((170 * i) + 120, 300 + (j * 120), "brick" + (nBrick));
				brick.setScale(1.5, 1.5);
				brick.setName("normalbrick_" + nBrickCount);
				if (j == 0 || j == 1 || j == 3 || j == 5) {
					brick.setName("hard_brick_" + nBrickCount);
				}
				if (nBrickCount == 17) {
					brick.setName("hard_fire_brick_" + nBrickCount);
				}
			}
		}
	}
	level6 = () => {
		console.log('%cLEVEL 6', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 6; i++) { // column count
			for (let j = 0; j < 7; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((170 * i) + 120, 300 + (j * 120), "brick" + (nBrick));
				brick.setScale(1.5, 1.5);
				brick.setName("normalbrick_" + nBrickCount);
				if (j == 0 || j == 1 || j == 3 || j == 4 || j == 6) {
					brick.setName("hard_brick_" + nBrickCount);
				}
				if (nBrickCount == 17) {
					brick.setName("hard_fire_brick_" + nBrickCount);
				}
			}
		}
	}
	level7 = () => {
		console.log('%cLEVEL 7', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 8; i++) { // column count
			for (let j = 0; j < 8; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((130 * i) + 90, 300 + (j * 120), "brick" + (nBrick));
				brick.setScale(1.3);
				brick.setName("normalbrick_" + nBrickCount);
				if (j == 0 || j == 2 || j == 4 || j == 6) {
					brick.setName("hard_brick_" + nBrickCount);
				}
				if (nBrickCount == 18) {
					brick.setName("hard_balls_brick_" + nBrickCount);
				}
				if (nBrickCount == 28) {
					brick.setName("hard_fire_brick_" + nBrickCount);
				}
			}
		}
	}
	level8 = () => {
		console.log('%cLEVEL 8', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 8; i++) { // column count
			for (let j = 0; j < 8; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((130 * i) + 90, 300 + (j * 120), "brick" + (nBrick));
				brick.setScale(1.3);
				brick.setName("normalbrick_" + nBrickCount);
				if (j == 0 || j == 2 || j == 4 || j == 6 || j == 7) {
					brick.setName("hard_brick_" + nBrickCount);
				}
				if (nBrickCount == 18) {
					brick.setName("hard_balls_brick_" + nBrickCount);
				}
				if (nBrickCount == 28) {
					brick.setName("hard_fire_brick_" + nBrickCount);
				}
			}
		}
	}
	level9 = () => {
		console.log('%cLEVEL 9', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 0; i < 8; i++) { // column count
			for (let j = 0; j < 9; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((130 * i) + 90, 300 + (j * 110), "brick" + (nBrick));
				brick.setScale(1.3);
				brick.setName("normalbrick_" + nBrickCount);
				if (j == 8 || j == 7 || j == 5 || j == 4 || j == 2 || j == 1) {
					brick.setName("hard_brick_" + nBrickCount);
				}
				if (nBrickCount == 18 || nBrickCount == 65) {
					brick.setName("hard_balls_brick_" + nBrickCount);
				}
				if (nBrickCount == 28 || nBrickCount == 5) {
					brick.setName("hard_fire_brick_" + nBrickCount);
				}
			}
		}
	}
	level10 = () => {
		console.log('%cLEVEL 10', 'color: #5BB381');
		let nBrick = 0;
		let nBrickCount = 0;
		for (let i = 1; i < 9; i++) { // column count
			for (let j = 1; j < 10; j++) { // row count
				nBrick++;
				nBrickCount++;
				if (nBrick > 9) nBrick = 1;
				const brick = this.oScene.bricksGroup.create((127 * i) - 30, 250 + (j * 110), "brick" + (j));
				brick.setScale(1.3);
				brick.setName("hard_brick_" + nBrickCount);
				if (nBrickCount == 18 || nBrickCount == 65) {
					brick.setName("hard_balls_brick_" + nBrickCount);
				}
				if (nBrickCount == 28 || nBrickCount == 5 || nBrickCount == 50) {
					brick.setName("hard_fire_brick_" + nBrickCount);
				}
			}
		}
	}
}