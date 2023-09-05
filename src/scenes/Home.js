
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

		// logoPrefab
		const logoPrefab = new LogoPrefab(this, 540, 400);
		this.add.existing(logoPrefab);

		// btn_play
		const btn_play = this.add.image(540, 1213, "btn_play");

		// btn_info
		const btn_info = this.add.image(740, 1490, "btn_info");

		// btn_music_on
		const btn_music_on = this.add.image(540, 1490, "btn_music_on");

		// btn_sound_on
		const btn_sound_on = this.add.image(340, 1490, "btn_sound_on");

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
				texture.setScale(1);
				if (callback) callback();
			}
		});
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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
