

class Main extends Phaser.Scene {
    constructor() {
        super({ key: "Main" })
    }
    preload() {
        this.load.image('box', 'assets/box.png')
    }
    create() {
        this.matter.world.setBounds() // 월드 끝 충돌시 튕김
        var base = Phaser.Physics.Matter.Matter.Bodies.rectangle(200, 50, 180, 60, {
            chamfer: { radius: [30, 30, 0, 0] },
            frictionAir: 0.005
        })
        var frontW = Phaser.Physics.Matter.Matter.Bodies.circle(200, 100, 20, {
            //collisionFilter: { group: group },
            density: 0.005,
            frictionAir: 0.005
        })
        var backW = Phaser.Physics.Matter.Matter.Bodies.circle(150, 100, 20, {
            //collisionFilter: { group: group },
            density: 0.005,
            frictionAir: 0.005
        })
        this.matter.world.add(base)
        this.matter.world.add(frontW)
        this.matter.world.add(backW)
        // this.base = this.matter.add.rectangle(200, 50, 180, 60, {
        //     chamfer: { radius: [30, 30, 0, 0] }
        // })
        // this.frontW = this.matter.add.image(250, 100, 'box').setScale(0.1)
        // this.backW = this.matter.add.image(150, 100, 'box').setScale(0.1)

        var c1 = Phaser.Physics.Matter.Matter.Constraint.create({
            bodyA: base,
            bodyB: backW,
            length: 130,
            stiffness: 0.02,
            damping: 1,
            pointA: { x: -70, y: -50 },
            pointB: { x: 0, y: 0 },
            render: {
                type: 'line'
            }
        });
        var c2 = Phaser.Physics.Matter.Matter.Constraint.create({
            bodyA: base,
            bodyB: frontW,
            length: 130,
            stiffness: 0.02,
            damping: 1,
            pointA: { x: 70, y: -50 },
            pointB: { x: 0, y: 0 },
            render: {
                type: 'line'
            }
        });
        var c3 = Phaser.Physics.Matter.Matter.Constraint.create({
            bodyA: base,
            bodyB: backW,
            length: 100,
            stiffness: 0.1,
            pointA: { x: -10, y: 0 },
            pointB: { x: 0, y: 0 },
            render: {
                type: 'line'
            }
        });
        var c4 = Phaser.Physics.Matter.Matter.Constraint.create({
            bodyA: base,
            bodyB: frontW,
            length: 100,
            stiffness: 0.1,
            pointA: { x: 10, y: 0 },
            pointB: { x: 0, y: 0 },
            render: {
                type: 'line'
            }
        });
        this.matter.world.add(c1);
        this.matter.world.add(c2);
        this.matter.world.add(c3);
        this.matter.world.add(c4);


        //this.cameras.main.startFollow(this.base)

        this.cursors = this.input.keyboard.createCursorKeys();

        this.matter.add.mouseSpring(); // 마우스로 당기면 움직임
    }
    update() {
        if (this.cursors.up.isDown) {
            
        }
        else if (this.cursors.down.isDown) {
            
        }

        if (this.cursors.left.isDown) {
        }
        else if (this.cursors.right.isDown) {
        }
    }
}

var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {
                y: 0.9
            },
            //debug: true,
            debugBodyColor: 0xffffff
        }
    },
    scene: [Main],
};
let game = new Phaser.Game(config);
