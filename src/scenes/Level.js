
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
		const container_bricks = this.add.container(0, 0);

		// container_header
		const container_header = this.add.container(0, 0);

		// container_header_base
		const container_header_base = this.add.container(0, 0);
		container_header.add(container_header_base);

		// header
		const header = this.add.image(540, 106, "header");
		container_header.add(header);

		// txt_level
		const txt_level = this.add.text(540, 140, "", {});
		txt_level.setOrigin(0.5, 0.5);
		txt_level.text = "LEVEL - 1";
		txt_level.setStyle({ "align": "center", "fontSize": "35px", "stroke": "#792a39", "strokeThickness": 5 });
		container_header.add(txt_level);

		// txt_score
		const txt_score = this.add.text(177, 65, "", {});
		txt_score.setOrigin(0.5, 0.5);
		txt_score.text = "0";
		txt_score.setStyle({ "align": "center", "fontSize": "35px", "stroke": "#792a39", "strokeThickness": 5 });
		container_header.add(txt_score);

		// container_settings
		const container_settings = this.add.container(0, 0);
		container_header.add(container_settings);

		// container_settings_button
		const container_settings_button = this.add.container(0, -1);
		container_settings_button.visible = false;
		container_settings.add(container_settings_button);

		// btn_info
		const btn_info = this.add.image(1000, 70, "btn_info");
		btn_info.scaleX = 0.3;
		btn_info.scaleY = 0.3;
		container_settings_button.add(btn_info);

		// btn_sound_on
		const btn_sound_on = this.add.image(1000, 70, "btn_sound_on");
		btn_sound_on.scaleX = 0.3;
		btn_sound_on.scaleY = 0.3;
		container_settings_button.add(btn_sound_on);

		// btn_music_on
		const btn_music_on = this.add.image(1000, 70, "btn_music_on");
		btn_music_on.scaleX = 0.3;
		btn_music_on.scaleY = 0.3;
		container_settings_button.add(btn_music_on);

		// btn_settings
		const btn_settings = this.add.image(1000, 70, "btn_settings");
		container_settings.add(btn_settings);

		// btn_settings_icon
		const btn_settings_icon = this.add.image(1000, 70, "btn_settings_icon");
		container_settings.add(btn_settings_icon);

		// container_lifes
		const container_lifes = this.add.container(0, 0);
		container_header.add(container_lifes);

		// ball_2
		const ball_2 = this.add.image(76, 136, "ball");
		ball_2.scaleX = 0.9;
		ball_2.scaleY = 0.9;
		container_lifes.add(ball_2);

		// ball_1
		const ball_1 = this.add.image(156, 136, "ball");
		ball_1.scaleX = 0.9;
		ball_1.scaleY = 0.9;
		container_lifes.add(ball_1);

		// ball_0
		const ball_0 = this.add.image(236, 136, "ball");
		ball_0.scaleX = 0.9;
		ball_0.scaleY = 0.9;
		container_lifes.add(ball_0);

		// bg_popup
		const bg_popup = this.add.rectangle(540, 960, 1080, 1920);
		bg_popup.visible = false;
		bg_popup.isFilled = true;
		bg_popup.fillColor = 0;
		bg_popup.fillAlpha = 0.5;
		bg_popup.strokeColor = 0;
		bg_popup.strokeAlpha = 5;
		bg_popup.lineWidth = 5;

		// container_popup
		const container_popup = this.add.container(538.9673063634997, 974.0390200855007);
		container_popup.visible = false;

		// popup_win
		const popup_win = this.add.image(0, -14, "popup_gameover");
		popup_win.scaleX = 1.5;
		popup_win.scaleY = 1.5;
		container_popup.add(popup_win);

		// btn_replay
		const btn_replay = this.add.image(-130, 210, "btn_replay");
		container_popup.add(btn_replay);

		// btn_popup
		const btn_popup = this.add.image(80, 210, "btn_retry");
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
		this.container_header_base = container_header_base;
		this.txt_level = txt_level;
		this.txt_score = txt_score;
		this.container_settings_button = container_settings_button;
		this.btn_info = btn_info;
		this.btn_sound_on = btn_sound_on;
		this.btn_music_on = btn_music_on;
		this.btn_settings = btn_settings;
		this.btn_settings_icon = btn_settings_icon;
		this.container_lifes = container_lifes;
		this.bg_popup = bg_popup;
		this.container_popup = container_popup;
		this.popup_win = popup_win;
		this.btn_replay = btn_replay;
		this.btn_popup = btn_popup;
		this.popup_score = popup_score;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_game;
	/** @type {Phaser.GameObjects.Container} */
	container_bricks;
	/** @type {Phaser.GameObjects.Container} */
	container_header_base;
	/** @type {Phaser.GameObjects.Text} */
	txt_level;
	/** @type {Phaser.GameObjects.Text} */
	txt_score;
	/** @type {Phaser.GameObjects.Container} */
	container_settings_button;
	/** @type {Phaser.GameObjects.Image} */
	btn_info;
	/** @type {Phaser.GameObjects.Image} */
	btn_sound_on;
	/** @type {Phaser.GameObjects.Image} */
	btn_music_on;
	/** @type {Phaser.GameObjects.Image} */
	btn_settings;
	/** @type {Phaser.GameObjects.Image} */
	btn_settings_icon;
	/** @type {Phaser.GameObjects.Container} */
	container_lifes;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_popup;
	/** @type {Phaser.GameObjects.Container} */
	container_popup;
	/** @type {Phaser.GameObjects.Image} */
	popup_win;
	/** @type {Phaser.GameObjects.Image} */
	btn_replay;
	/** @type {Phaser.GameObjects.Image} */
	btn_popup;
	/** @type {Phaser.GameObjects.Text} */
	popup_score;

	/* START-USER-CODE */

	// Write more your code here
	btnAnimation = (texture, callback) => {
		const scale = texture.scale;
		this.tweens.add({
			targets: texture,
			scaleX: scale - 0.2,
			scaleY: scale - 0.2,
			duration: 50,
			yoyo: true,
			onComplete: () => {
				texture.setScale(scale);
				if (callback) callback();
			}
		});
	}
	showPopup = () => {
		this.container_popup.setScale(0, 0)
		this.bg_popup.setScale(0.4, 0.4);
		if (this.isGameOver) {
			this.btn_replay.setVisible(false);
			this.btn_popup.setTexture("btn_retry");
			this.btn_popup.setX(0);
			this.popup_win.setTexture("popup_gameover");
		} else {
			this.btn_popup.setTexture("btn_next");
			this.popup_win.setTexture("popup_win");
		}
		this.container_popup.setVisible(true);
		this.popup_score.setText(this.targetScore);
		this.bg_popup.setVisible(true);
		this.tweens.add({
			targets: this.container_popup,
			scaleX: 1,
			scaleY: 1,
			ease: "Bounce.easeOut",
			duration: 800,
		})
		this.tweens.add({
			targets: this.bg_popup,
			scaleX: 1,
			scaleY: 1,
			duration: 300,
		})
	}
	setInitialBall = () => {
		this.ballsGroup.clear(true, true);
		this.powerUpsGroup.clear(true, true);
		this.starParticlesGroup.forEach(emitters => {
			emitters.forEach(emitter => {
				emitter.stop();
				emitter.remove();
			})
		})
		// add a ball
		this.isGameStart = false;
		const ball = this.ballsGroup.create(this.paddle.x, this.oBallInitial.y, "ball");
		ball.setCircle(ball.width / 2);
		ball.setName("ball");
		ball.setCollideWorldBounds();
		ball.setDepth(1);
		this.container_game.add(ball);
	}
	setAssets = () => {
		this.oLevelManager.setLevel(this.nCurrentLevel);
		this.txt_level.setText("LEVEL - " + this.nCurrentLevel);
	}
	updateScore = (n) => {
		this.targetScore += n;
		if (this.nScore === this.targetScore) return;
		this.tweens.killTweensOf(this);
		this.tweens.add({
			targets: this,
			nScore: this.targetScore,
			duration: 1000,
			ease: 'Linear',
			onUpdate: () => {
				this.nScore = Math.round(this.nScore);
				this.txt_score.setText(this.nScore);
			}
		});
	};
	updateLife = () => {
		if (this.nTotalLife <= 0) {
			// GAME OVER
			console.log("GAME OVER");
			this.physics.pause();
			this.isGameOver = true;
			this.showPopup();
		}
		this.container_lifes.list[this.nTotalLife].setAlpha(0.5);
	}
	showStarParticles = (ball) => {
		const emitters = [];
		for (let i = 0; i < 4; i++) {
			const emitter = this.starParticles[i].createEmitter({
				speed: 50,
				scale: { start: 0.8, end: 0 },
				frequency: 250 * (i),
				lifespan: 150,
				quantity: 1,
				blendMode: "ADD",
				alpha: { start: 0.8, end: 0.2, ease: 'Power2' }
			});
			emitter.startFollow(ball);
			emitters.push(emitter);
		}
		ball.emitters = emitters;
		this.starParticlesGroup.push(emitters);
	}
	showDustparticles = (brick) => {
		// const emitter = this.cube.createEmitter({
		// 	x: brick.x,
		// 	y: brick.y,
		// 	speed: { min: -500, max: 500 },
		// 	angle: { min: 0, max: 360 },
		// 	scale: { start: 0.1, end: 0 },
		// 	blendMode: 'NORMAL',
		// 	lifespan: 500,
		// 	gravityY: 3000,
		// });
		// setTimeout(() => {
		// 	emitter.remove();
		// }, 500);
	}
	settingsHandler = () => {
		if (this.container_settings_button.visible) {
			// To Close
			this.container_settings_button.list.forEach((button, i) => {
				this.tweens.add({
					targets: button,
					x: 1000,
					y: 70,
					scaleX: 0.3,
					scaleY: 0.3,
					duration: 250,
					delay: 200 * i,
					onComplete: () => {
						if (i == 2) this.container_settings_button.setVisible(false);
					}
				})
			})
		} else {
			// To Open
			this.container_settings_button.setVisible(true);
			const pos = [{ x: 1000, y: 210 }, { x: 876, y: 196 }, { x: 875, y: 70 }]
			this.container_settings_button.list.forEach((button, i) => {
				this.tweens.add({
					targets: button,
					x: pos[i].x,
					y: pos[i].y,
					scaleX: 1,
					scaleY: 1,
					duration: 250,
					delay: 200 * i,
				})
			})
		}
		this.tweens.add({
			targets: this.btn_settings_icon,
			scaleX: -1,
			duration: 200,
			yoyo: true,
			ease: 'Power2',
		})
	}
	infoHandler = () => {
		const callback = () => { };
		this.btnAnimation(this.btn_info, callback);
	}
	musicHandler = () => {
		let callback;
		if (this.isMusicPlaying) {
			this.isMusicPlaying = false;
			callback = () => {
				this.btn_music_on.setTexture("btn_music_off");
			}
		} else {
			this.isMusicPlaying = true;
			callback = () => {
				this.btn_music_on.setTexture("btn_music_on");
			}
		}
		this.btnAnimation(this.btn_music_on, callback);
	}
	soundHandler = () => {
		let callback;
		if (this.isSoundPlaying) {
			this.isSoundPlaying = false;
			callback = () => {
				this.btn_sound_on.setTexture("btn_sound_off");
			}
		} else {
			this.isSoundPlaying = true;
			callback = () => {
				this.btn_sound_on.setTexture("btn_sound_on");
			}
		}
		this.btnAnimation(this.btn_sound_on, callback);
	}
	create() {
		this.bricksGroup = this.physics.add.group();
		this.powerUpsGroup = this.physics.add.group();
		this.ballsGroup = this.physics.add.group();
		this.fireGroup = this.add.group();
		this.starParticlesGroup = [];
		this.nCurrentLevel = 1;
		this.targetScore = 0;
		this.nScore = 0;
		this.nTotalLife = 3;
		this.isMusicPlaying = true;
		this.isSoundPlaying = true;
		this.editorCreate();
		this.oLevelManager = new LevelManager(this);
		this.container_popup.setDepth(2);
		this.updateScore(0);
		this.isGameStart = false;
		this.isGameOver = false;
		this.isFire = false;
		this.oBallVelocity = { x: 0, y: 0 };
		this.oBallInitial = { x: 540, y: 1645 };

		this.bg_popup.setInteractive().on("pointerdown", () => { });
		this.btn_info.setInteractive().on("pointerdown", () => this.infoHandler());
		this.btn_music_on.setInteractive().on("pointerdown", () => this.musicHandler());
		this.btn_sound_on.setInteractive().on("pointerdown", () => this.soundHandler());
		this.btn_settings.setInteractive().on("pointerdown", () => this.settingsHandler());
		this.btn_popup.setInteractive().on("pointerdown", () => {
			let callback;
			if (this.isGameOver) {
				callback = () => {
					this.scene.restart();
				}
			} else {
				callback = () => {
					this.nCurrentLevel++;
					this.setAssets();
					this.container_popup.setVisible(false);
					this.bg_popup.setVisible(false);
				}
			}
			this.btnAnimation(this.btn_popup, callback);
		});
		this.btn_replay.setInteractive().on("pointerdown", () => {
			const callback = () => {
				this.setAssets();
				if (this.isGameOver) this.scene.restart();
				this.container_popup.setVisible(false);
				this.bg_popup.setVisible(false);
			}
			this.btnAnimation(this.btn_replay, callback);
		});

		// paddle
		this.paddle = this.physics.add.image(this.oBallInitial.x, this.oBallInitial.y + 55, "paddle");
		this.paddle.setName("paddle");
		this.paddle.setSize(this.paddle.width - 20, this.paddle.height - 60);
		this.paddle.setImmovable();
		this.paddle.setInteractive();
		this.container_game.add(this.paddle);

		this.fire = this.add.particles("fire");
		this.cube = this.add.particles("cube");
		this.star1 = this.add.particles("star1");
		this.star1.setAlpha(0.5);
		this.star2 = this.add.particles("star2");
		this.star2.setAlpha(0.5);
		this.star3 = this.add.particles("star3");
		this.star3.setAlpha(0.5);
		this.star4 = this.add.particles("star4");
		this.star4.setAlpha(0.5);
		this.starParticles = [this.star1, this.star2, this.star3, this.star4];

		this.setAssets();
		this.setInitialBall();

		// header
		const header = this.physics.add.image(540, 106, "header");
		header.setName("header");
		header.setSize(1096, 212);
		header.setImmovable();
		this.container_header_base.add(header);

		// endline
		this.endline = this.physics.add.image(540, 1916).setSize(1080, 10);
		this.endline.setName("endline");
		this.endline.setImmovable();

		this.input.on('pointerdown', (p, g) => {
			if (!this.isGameStart && !g.length) {
				this.isGameStart = true;
				this.ballsGroup.getChildren().forEach((ball, i) => {
					ball.setVelocity(150, -1350);
					ball.setBounce(1);
					this.showStarParticles(ball);
				})
			}
		})
		this.input.on('pointermove', (p) => {
			let x = p.x;
			x = Math.min(Math.max(150, x), 930);

			if (!this.isGameOver) {
				this.paddle.x = x;
			}
			if (!this.isGameStart && !this.isGameOver) {
				this.ballsGroup.getChildren().forEach(ball => {
					ball.x = x;
				})
			}
		})

		// ball, paddle collider
		this.physics.add.collider(this.ballsGroup, this.paddle, (paddle, ball) => {
			// console.log(ball.name, paddle.name);
			if (this.isGameStart) {
				ball.setVelocity(Phaser.Math.Between(-800, 800), -1350);
			}
		});
		// ball, header collider
		this.physics.add.collider(this.ballsGroup, header, (header, ball) => {
			// console.log(ball.name, header.name);
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
		if (ball.emitter) {
			ball.emitter.stop(); // Stop the emitter
			ball.emitter.remove(); // Remove the emitter
		}
		ball.emitters.forEach(emitter => {
			emitter.stop();
			emitter.remove();
		})
		ball.destroy();
		if (this.ballsGroup.getLength() == 0) {
			this.nTotalLife--;
			this.updateLife();
			this.isGameStart = false;
			this.setInitialBall();
			// const ball = this.ballsGroup.create(this.paddle.x, this.oBallInitial.y, "ball");
			// ball.setCircle(ball.width / 2);
			// ball.setName("ball");
			// ball.setCollideWorldBounds();
			// ball.setDepth(1);
			// this.container_game.add(ball);
		}
	}
	fallPowerUps = (brick) => {
		const powerName = brick.name.split("_")[1];
		switch (powerName) {
			case "fire":
				const fire = this.powerUpsGroup.create(brick.x, brick.y, "flames");
				fire.name = "fire";
				fire.setScale(0.3, 0.3);
				fire.body.setGravityY(800);
				break;
			case "balls":
				const balls = this.powerUpsGroup.create(brick.x, brick.y, "power_3");
				balls.name = "balls";
				balls.body.setGravityY(800);
				break;

			default:
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
				lifespan: 100,
				frequency: 30,
			});
			fireParticles.startFollow(ball);
			fireParticles.flow(0, 1);
			this.isFire = true;
			ball.emitter = fireParticles;

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
		ball2.setDepth(1);
		ball2.setCollideWorldBounds();
		this.container_game.add(ball2);
		ball2.setVelocity(this.oBallVelocity.x - 150, this.oBallVelocity.y);

		const ball3 = this.ballsGroup.create(ball.x, ball.y, "ball");
		ball3.setCircle(ball3.width / 2);
		ball3.setName("ball3");
		ball3.setCollideWorldBounds();
		ball3.setBounce(1);
		ball3.setDepth(1);
		this.container_game.add(ball3);
		ball3.setVelocity(this.oBallVelocity.x + 150, this.oBallVelocity.y);

		this.showStarParticles(ball2);
		this.showStarParticles(ball3);
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
		this.showDustparticles(brick);
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
				this.setInitialBall();
				this.showPopup();
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
