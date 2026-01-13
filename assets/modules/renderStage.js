export class Stage {
    constructor(screen){
        this.screen = screen;
        this.sheme = {
            "morning" : {
                "sky" : "linear-gradient(#60A5CE, #DBD3A5 )",
                "earht" : "#0A2B00"
            },
            "day" : {
                "sky" : "linear-gradient(#4AC3DE, #B6FEFF )",
                "earht" : "#91CD49"
            },
            "evening" : {
                "sky" : "linear-gradient(#262768, #CB668C )",
                "earht" : "#1F1F62"
            },
            "night" : {
                "sky" : "linear-gradient(#0D173A, #203061 )",
                "earht" : "#2D4577"
            }
        }
    }

    paint_scene(time="morning"){
        this.screen.renderContainer.style.setProperty('--sky-color', this.sheme[`${time}`].sky);
        this.screen.renderContainer.style.setProperty('--earth-color', this.sheme[`${time}`].earht);
    }
    create_green() {
        this.earth =  this.screen.renderContainer.querySelector('.earth');
    }
    init_Render(time) {

    }
}