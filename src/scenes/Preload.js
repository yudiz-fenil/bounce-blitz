
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
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

		// progress
		const progress = this.add.text(540, 1209, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.visible = false;
		progress.text = "0%";
		progress.setStyle({ "fontSize": "100px" });

		// logoPrefab
		const logoPrefab = new LogoPrefab(this, 540, 400);
		this.add.existing(logoPrefab);

		// outerBar
		const outerBar = this.add.sprite(540, 1660, "energyBarContainer");

		// innerBar
		const innerBar = this.add.sprite(286, 1660, "energyBar");
		innerBar.setOrigin(0, 0.5);

		// ball
		const ball = this.add.image(320, 1661, "ball");
		ball.visible = false;

		// progress (components)
		new PreloadText(progress);

		this.outerBar = outerBar;
		this.innerBar = innerBar;
		this.ball = ball;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	outerBar;
	/** @type {Phaser.GameObjects.Sprite} */
	innerBar;
	/** @type {Phaser.GameObjects.Image} */
	ball;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;

		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		// this.outerBar = this.add.sprite(540, 1660, "energyBarContainer");
		// this.outerBar.setOrigin(0.5);

		// this.innerBar = this.add.sprite(
		// 	this.outerBar.x - this.outerBar.displayWidth / 2 + 20,
		// 	this.outerBar.y,
		// 	"energyBar"
		// );
		// this.innerBar.setOrigin(0, 0.5);

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 500;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x - 30,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);

			currentInterval++;

			this.ball.x = this.innerBar.x - 30 + (this.innerBarWidth * currentProgress);

			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);

		this.tweens.add({
			targets: this.ball,
			duration: 3000,
			angle: 360 * 2,
		})
	}

	update() {
		if (this.ball.x >= 300) this.ball.setVisible(true);
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("Home");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
