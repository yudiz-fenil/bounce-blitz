
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg_rectangle
		const bg_rectangle = this.add.rectangle(540, 960, 1080, 1920);
		bg_rectangle.isFilled = true;
		bg_rectangle.fillColor = 0;
		bg_rectangle.fillAlpha = 0.4;
		bg_rectangle.strokeColor = 0;
		bg_rectangle.strokeAlpha = 5;
		bg_rectangle.lineWidth = 5;

		// logoPrefab
		const logoPrefab = new LogoPrefab(this, 540, 400);
		this.add.existing(logoPrefab);

		// btn_play
		const btn_play = this.add.image(540, 1213, "btn_play");
		btn_play.scaleX = 1.2;
		btn_play.scaleY = 1.2;

		// btn_info
		const btn_info = this.add.image(740, 1490, "btn_info");
		btn_info.scaleX = 1.2;
		btn_info.scaleY = 1.2;

		// btn_music_on
		const btn_music_on = this.add.image(540, 1490, "btn_music_on");
		btn_music_on.scaleX = 1.2;
		btn_music_on.scaleY = 1.2;

		// btn_sound_on
		const btn_sound_on = this.add.image(340, 1490, "btn_sound_on");
		btn_sound_on.scaleX = 1.2;
		btn_sound_on.scaleY = 1.2;

		this.btn_play = btn_play;
		this.btn_info = btn_info;
		this.btn_music_on = btn_music_on;
		this.btn_sound_on = btn_sound_on;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_play;
	/** @type {Phaser.GameObjects.Image} */
	btn_info;
	/** @type {Phaser.GameObjects.Image} */
	btn_music_on;
	/** @type {Phaser.GameObjects.Image} */
	btn_sound_on;

	/* START-USER-CODE */

	// Write your code here
	btnAnimation = (texture, callback) => {
		this.tweens.add({
			targets: texture,
			scaleX: "*=0.8",
			scaleY: "*=0.8",
			duration: 80,
			yoyo: true,
			onComplete: () => {
				texture.setScale(1.2);
				if (callback) callback();
			}
		});
	}
	pointerOver = (btn, scale) => {
		this.input.setDefaultCursor('pointer');
		this.tweens.add({
			targets: btn,
			scaleX: scale + 0.05,
			scaleY: scale + 0.05,
			duration: 50
		})
	}
	pointerOut = (btn, scale) => {
		this.input.setDefaultCursor('default');
		this.tweens.add({
			targets: btn,
			scaleX: scale,
			scaleY: scale,
			duration: 50,
			onComplete: () => {
				btn.forEach(element => {
					element.setScale(scale);
				});
			}
		})
	}
	create() {
		this.editorCreate();
		this.isMusicPlaying = true;
		this.isSoundPlaying = true;
		this.btn_play.setInteractive().on('pointerdown', () => {
			const callback = () => {
				this.scene.stop("Home");
				this.scene.start("Level");
			}
			this.btnAnimation(this.btn_play, callback);
		})
		this.btn_music_on.setInteractive().on('pointerdown', () => {
			const callback = () => {
				if (this.isMusicPlaying) {
					this.isMusicPlaying = false;
					this.btn_music_on.setTexture("btn_music_off")
				} else {
					this.isMusicPlaying = true;
					this.btn_music_on.setTexture("btn_music_on")
				}
			};
			this.btnAnimation(this.btn_music_on, callback);
		})
		this.btn_info.setInteractive().on('pointerdown', () => {
			const callback = () => {

			};
			this.btnAnimation(this.btn_info, callback);
		})
		this.btn_sound_on.setInteractive().on('pointerdown', () => {
			const callback = () => {
				if (this.isSoundPlaying) {
					this.isSoundPlaying = false;
					this.btn_sound_on.setTexture("btn_sound_off")
				} else {
					this.isSoundPlaying = true;
					this.btn_sound_on.setTexture("btn_sound_on")
				}
			};
			this.btnAnimation(this.btn_sound_on, callback);
		})

		this.btn_play.on('pointerover', () => this.pointerOver([this.btn_play], 1.2));
		this.btn_play.on('pointerout', () => this.pointerOut([this.btn_play], 1.2));
		this.btn_music_on.on('pointerover', () => this.pointerOver([this.btn_music_on], 1.2));
		this.btn_music_on.on('pointerout', () => this.pointerOut([this.btn_music_on], 1.2));
		this.btn_sound_on.on('pointerover', () => this.pointerOver([this.btn_sound_on], 1.2));
		this.btn_sound_on.on('pointerout', () => this.pointerOut([this.btn_sound_on], 1.2));
		this.btn_info.on('pointerover', () => this.pointerOver([this.btn_info], 1.2));
		this.btn_info.on('pointerout', () => this.pointerOut([this.btn_info], 1.2));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
