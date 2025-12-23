import { foxSVG } from "./foxSprite";

export class FOX {
    constructor(){
        this.x = 50;
        this.speed = 5;
        this.leftStateFlag = false;
        this.rightStateFlag = false;
    }
    init_self_render(){
        const horizon = document.querySelector('.horizon');
        if (!horizon) return;

        horizon.innerHTML = foxSVG;

        this.domElement = horizon.querySelector('#fox-character');
        this.domElement.style.setProperty('--fox-pos-x', `${this.x}px`);
    }

    rerender() {
        this.domElement.style.setProperty('--fox-pos-x', `${this.x}px`);
    }

    moveLeft(sp){
        this.x -= sp; 
        this.rerender()
    }

    moveRight(sp) {
        this.x += sp;
        this.rerender();
    }

    update(){
        if(this.leftStateFlag) {
            this.moveLeft(this.speed);
        }
        if(this.rightStateFlag) {
            this.moveRight(this.speed);
        }
    }

    event_Listener(){
        if(!this.domElement) return;
        document.addEventListener('keydown', (e) => {
            if(e.code === 'ArrowLeft') {
                this.leftStateFlag = true;
            }
            if(e.code === "ArrowRight") {
                this.rightStateFlag = true;
            }

        });
        document.addEventListener('keyup', (e) => {
            if(e.code === 'ArrowLeft') {
                this.leftStateFlag = false;
            }
            if(e.code === 'ArrowRight') {
                this.rightStateFlag = false;
            }
        })
    }
}