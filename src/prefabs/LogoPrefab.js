
// You can write more code here

/* START OF COMPILED CODE */

class LogoPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// logo
		const logo = scene.add.image(0, 0, "logo");
		this.add(logo);

		this.logo = logo;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene;

		this.scene.tweens.add({
			targets: this.logo,
			scaleX: 1.1,
			scaleY: 1.1,
			duration: 800,
			ease: 'Cubic.easeInOut',
			yoyo: true,
			loop: -1
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	logo;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
