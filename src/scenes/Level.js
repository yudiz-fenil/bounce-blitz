
// You can write more code here
let nGameCurrentLevel = 1;

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_bg
		const container_bg = this.add.container(0, 0);

		// bg_rectangle
		const bg_rectangle = this.add.rectangle(540, 960, 1080, 1920);
		bg_rectangle.isFilled = true;
		bg_rectangle.fillColor = 0;
		bg_rectangle.fillAlpha = 0.4;
		bg_rectangle.strokeColor = 0;
		bg_rectangle.strokeAlpha = 5;
		bg_rectangle.lineWidth = 5;
		container_bg.add(bg_rectangle);

		// container_game
		const container_game = this.add.container(0, 0);

		// container_bricks
		const container_bricks = this.add.container(-4320.56957994668, -441.0750337117809);

		// container_scoreboard
		const container_scoreboard = this.add.container(0, 0);

		// score_board
		const score_board = this.add.image(150, -5, "score_board");
		score_board.scaleX = 1.5;
		score_board.scaleY = 1.5;
		score_board.setOrigin(0.5, 0);
		container_scoreboard.add(score_board);

		// txt_score
		const txt_score = this.add.text(149, 38, "", {});
		txt_score.setOrigin(0.5, 0.5);
		txt_score.text = "SCORE 0";
		txt_score.setStyle({ "align": "center", "fontSize": "35px", "stroke": "#792a39", "strokeThickness": 5 });
		container_scoreboard.add(txt_score);

		// container_header
		const container_header = this.add.container(0, 0);

		// container_settings
		const container_settings = this.add.container(0, 0);
		container_header.add(container_settings);

		// btn_settings
		const btn_settings = this.add.image(998, 73, "btn_settings");
		container_settings.add(btn_settings);

		// btn_settings_icon
		const btn_settings_icon = this.add.image(998, 73, "btn_settings_icon");
		container_settings.add(btn_settings_icon);

		// txt_level
		const txt_level = this.add.text(540, 50, "", {});
		txt_level.setOrigin(0.5, 0.5);
		txt_level.text = "LEVEL 1";
		txt_level.setStyle({ "align": "center", "fontSize": "35px", "stroke": "#792a39", "strokeThickness": 5 });
		container_header.add(txt_level);

		// container_popup
		const container_popup = this.add.container(538.9673063634997, 974.0390200855007);

		// bg_popup
		const bg_popup = this.add.rectangle(1.0326861750680791, -14.039010276187355, 1080, 1920);
		bg_popup.isFilled = true;
		bg_popup.fillColor = 0;
		bg_popup.fillAlpha = 0.5;
		bg_popup.strokeColor = 0;
		bg_popup.strokeAlpha = 5;
		bg_popup.lineWidth = 5;
		container_popup.add(bg_popup);

		// popup_win
		const popup_win = this.add.image(1, -14, "popup_win");
		popup_win.scaleX = 1.5;
		popup_win.scaleY = 1.5;
		container_popup.add(popup_win);

		// btn_replay
		const btn_replay = this.add.image(-130, 210, "btn_replay");
		container_popup.add(btn_replay);

		// btn_popup
		const btn_popup = this.add.image(80, 210, "btn_next");
		btn_popup.scaleX = 1.5;
		btn_popup.scaleY = 1.5;
		container_popup.add(btn_popup);

		// txt_score_1
		const txt_score_1 = this.add.text(1, -27, "", {});
		txt_score_1.setOrigin(0.5, 0.5);
		txt_score_1.text = "YOUR SCORE";
		txt_score_1.setStyle({ "align": "center", "fontSize": "52px", "stroke": "#944A4C", "strokeThickness": 5 });
		container_popup.add(txt_score_1);

		// popup_score
		const popup_score = this.add.text(1, 50, "", {});
		popup_score.setOrigin(0.5, 0.5);
		popup_score.text = "150";
		popup_score.setStyle({ "align": "center", "fontSize": "72px", "stroke": "#944A4C", "strokeThickness": 5 });
		container_popup.add(popup_score);

		this.container_game = container_game;
		this.container_bricks = container_bricks;
		this.txt_score = txt_score;
		this.txt_level = txt_level;
		this.container_popup = container_popup;
		this.popup_score = popup_score;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_game;
	/** @type {Phaser.GameObjects.Container} */
	container_bricks;
	/** @type {Phaser.GameObjects.Text} */
	txt_score;
	/** @type {Phaser.GameObjects.Text} */
	txt_level;
	/** @type {Phaser.GameObjects.Container} */
	container_popup;
	/** @type {Phaser.GameObjects.Text} */
	popup_score;

	/* START-USER-CODE */

	// Write more your code here

	setAssets = () => {
		this.oLevelManager.setLevel(this.nCurrentLevel);
	}
	updateScore = (n) => {
		this.nScore += n;
		this.txt_score.setText("SCORE " + this.nScore);
	}
	create() {
		this.bricksGroup = this.physics.add.group();
		this.powerUpsGroup = this.physics.add.group();
		this.ballsGroup = this.physics.add.group();
		this.fireGroup = this.add.group();
		this.nCurrentLevel = 1;
		this.nScore = 0;
		this.nTotalLife = 3;
		this.editorCreate();
		this.oLevelManager = new LevelManager(this);
		this.container_popup.setDepth(2);
		this.txt_level.setText("LEVEL " + this.nCurrentLevel);
		this.updateScore(0);
		this.isGameStart = false;
		this.isGameOver = true;
		this.isFire = false;
		this.oBallVelocity = { x: 0, y: 0 };
		this.oBallInitial = { x: 540, y: 1645 };

		this.setAssets();

		// paddle
		this.paddle = this.physics.add.image(this.oBallInitial.x, this.oBallInitial.y + 55, "paddle");
		this.paddle.setName("paddle");
		this.paddle.setImmovable();
		this.container_game.add(this.paddle);

		// ball
		const ball = this.ballsGroup.create(this.oBallInitial.x, this.oBallInitial.y, "ball");
		ball.setCircle(ball.width / 2);
		ball.setName("ball");
		ball.setCollideWorldBounds();
		this.container_game.add(ball);

		this.fire = this.add.particles("fire");

		// endline
		this.endline = this.physics.add.image(540, 1916).setSize(1080, 10);
		this.endline.setName("endline");
		this.endline.setImmovable();

		this.input.on('pointerdown', () => {
			if (!this.isGameStart) {
				this.isGameStart = true;
				this.ballsGroup.getChildren().forEach((ball, i) => {
					ball.setVelocity(150, -1500);
					ball.setBounce(1);
				})
			}
		})
		this.input.on('pointermove', (p) => {
			let x = p.x;
			x = Math.min(Math.max(100, x), 980);

			this.paddle.x = x;
			// if (!this.isGameOver) {

			// }
			if (!this.isGameStart) {
				this.ballsGroup.getChildren().forEach(ball => {
					ball.x = x;
				})
			}
		})

		// ball, paddle collider
		this.physics.add.collider(this.ballsGroup, this.paddle, (paddle, ball) => {
			// console.log(ball.name, paddle.name);
			if (this.isGameStart) {
				ball.setVelocityX(Phaser.Math.Between(-800, 800));
			}
		});
		// ball, eneline collider
		this.physics.add.collider(this.ballsGroup, this.endline, (endline, ball) => {
			this.setBalls(ball);
		});
		// powerups, eneline collider
		this.physics.add.collider(this.endline, this.powerUpsGroup, (eneline, powerup) => {
			powerup.destroy();
		});
		// paddle, power-ups collider
		this.physics.add.collider(this.paddle, this.powerUpsGroup, (paddle, powerup) => {
			powerup.destroy();
			switch (powerup.name) {
				case "fire":
					this.showFire();
					break;
				case "balls":
					this.addTwoBalls();
					break;

				default:
					break;
			}
		});
	}
	setBalls = (ball) => {
		ball.destroy();
		if (this.ballsGroup.getLength() == 0) {
			this.isGameStart = false;
			const ball = this.ballsGroup.create(this.paddle.x, this.oBallInitial.y, "ball");
			ball.setCircle(ball.width / 2);
			ball.setName("ball");
			ball.setCollideWorldBounds();
			this.container_game.add(ball);
		}
	}
	fallPowerUps = (brick) => {
		const powerName = brick.name.split("_")[1];
		switch (powerName) {
			case "fire":
				const fire = this.powerUpsGroup.create(brick.x, brick.y, "fire");
				fire.name = "fire";
				fire.setScale(0.4, 0.4);
				fire.body.setGravityY(800);
				break;
			case "balls":
				const balls = this.powerUpsGroup.create(brick.x, brick.y, "power_3");
				balls.name = "balls";
				balls.body.setGravityY(800);
				break;

			default:
				console.log("DEFAULT POWER FALL");
				break;
		}
	}
	showFire = () => {
		this.ballsGroup.getChildren().forEach(ball => {
			const fireParticles = this.fire.createEmitter({
				x: ball.x,
				y: 1080,
				speed: { min: -500, max: 500 },
				angle: { min: 0, max: 360 },
				scale: { start: 0.4, end: 0 },
				blendMode: "ADD",
				lifespan: 100,
				frequency: 30,
			});
			fireParticles.startFollow(ball);
			fireParticles.flow(0, 1);
			this.isFire = true;

			setTimeout(() => {
				fireParticles.remove();
				this.isFire = false;
			}, 5000);
		})
	}
	addTwoBalls = () => {
		const ball = this.ballsGroup.getChildren()[0];
		const ball2 = this.ballsGroup.create(ball.x, ball.y, "ball");
		ball2.setCircle(ball2.width / 2);
		ball2.setName("ball2");
		ball2.setBounce(1);
		ball2.setCollideWorldBounds();
		this.container_game.add(ball2);
		ball2.setVelocity(this.oBallVelocity.x - 150, this.oBallVelocity.y);

		const ball3 = this.ballsGroup.create(ball.x, ball.y, "ball");
		ball3.setCircle(ball3.width / 2);
		ball3.setName("ball3");
		ball3.setCollideWorldBounds();
		ball3.setBounce(1);
		this.container_game.add(ball3);
		ball3.setVelocity(this.oBallVelocity.x + 150, this.oBallVelocity.y);
	}
	setBrokenBrick = (brick) => {
		const name = brick.name;
		const aName = name.split("_");
		const texture = brick.texture.key;
		const aTexture = texture.match(/\d+/g);
		const brokenBrick = this.bricksGroup.create(brick.x, brick.y, "broken" + aTexture[0]);
		brokenBrick.setName("broken_" + aName[1] + "_" + aName[2] + "_" + aName[3]);
		brokenBrick.setScale(brick.scale);
		brick.destroy();
	}
	popBrick = (brick) => {
		if (brick.name.includes("hard")) {
			this.setBrokenBrick(brick);
		} else if (brick.name.includes("broken")) {
			this.fallPowerUps(brick);
			brick.destroy();
		} else {
			brick.destroy();
		}
	}
	update() {
		this.setBallsVelocity();
		this.physics.world.collide(this.bricksGroup, this.ballsGroup, (brick, ball) => {
			// brick.setImmovable(true);
			ball.setVelocityX(this.oBallVelocity.x);
			ball.setVelocityY(this.isFire ? this.oBallVelocity.y : -this.oBallVelocity.y);
			this.popBrick(brick);
			this.updateScore(10);
			if (this.bricksGroup.getLength() == 0) {
				this.nCurrentLevel++;
				this.txt_level.setText("LEVEL " + this.nCurrentLevel);
				this.setAssets();
			}
		}, null, this);
	}
	setBallsVelocity = () => {
		const ball = this.ballsGroup.getChildren()[0];
		this.oBallVelocity.x = ball.body.velocity.x;
		this.oBallVelocity.y = ball.body.velocity.y;
	};
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
