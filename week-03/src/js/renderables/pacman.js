import { Renderable } from "melonjs";

class Pacman extends Renderable {
    constructor(x, y) {
        super(x, y, 50, 50);

        this.pos.x = x;
        this.pos.y = y;

        this.speed = 2;
        this.direction = 1;
    }

    update() {
        this.pos.x += this.speed * this.direction;

        if (this.pos.x > 900) {
            this.direction = -1;
        }

        if (this.pos.x < 100) {
            this.direction = 1;
        }

        return true;
    }

    draw(renderer) {
        renderer.setColor("#FFD700");

        renderer.fillArc(
            this.pos.x,
            this.pos.y,
            25,
            0.25 * Math.PI,
            1.75 * Math.PI
        );
    }
}

export default Pacman;