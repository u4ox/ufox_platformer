import { initRender } from "./modules/render_window";
import {FOX} from './modules/sprite';
import { animate_sprite } from "./modules/animation";

export function start() {
    document.addEventListener('DOMContentLoaded', () => {
        initRender();
        const fox = new FOX();
        fox.init_self_render();
        let animation = animate_sprite(fox);
        fox.event_Listener();
    });
}
