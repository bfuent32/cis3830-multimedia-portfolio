import { Stage, game, ColorLayer, BitmapText } from "melonjs";
import Pacman from "../renderables/pacman.js";

class PlayScreen extends Stage {
    onResetEvent() {
        // Black background
        game.world.addChild(
            new ColorLayer("background", "#000000")
        );

        // Title
        game.world.addChild(
            new BitmapText(
                game.viewport.width / 2,
                80,
                {
                    font: "PressStart2P",
                    size: 3.0,
                    textBaseline: "middle",
                    textAlign: "center",
                    text: "PAC-MAN CANVAS"
                }
            )
        );

        // Create Pac-Man
        const pacman = new Pacman(100, 280);
        game.world.addChild(pacman);

        // Coordinate text
        const coordinates = new BitmapText(
            game.viewport.width / 2,
            400,
            {
                font: "PressStart2P",
                size: 2.0,
                textBaseline: "middle",
                textAlign: "center",
                text: "X: 100   Y: 280"
            }
        );

        game.world.addChild(coordinates);

        // Update the coordinates while Pac-Man moves
        coordinates.update = function () {
            this.setText(
                "X: " +
                Math.round(pacman.pos.x) +
                "   Y: " +
                Math.round(pacman.pos.y)
            );

            return true;
        };
    }
}

export default PlayScreen;