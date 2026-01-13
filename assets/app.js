import {ScreenRender} from "./modules/render_window";
import {FOX} from './modules/sprite';
import { Stage } from "./modules/renderStage";
import { animate_sprite } from "./modules/animation";

export function start() {
    document.addEventListener('DOMContentLoaded', () => {
        const screen = new ScreenRender();
        screen.initRender();
        const stageBuilder = new Stage(screen);
        stageBuilder.paint_scene();
        stageBuilder.create_green();
        const fox = new FOX(screen);
        fox.init_self_render();
        let animation = animate_sprite(fox);
        fox.event_Listener();
    });
}
