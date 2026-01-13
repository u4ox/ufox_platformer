import { foxSVG } from "./foxSprite";

export class FOX {
    
    constructor(screen){
        this.screen = screen;
        this.x = 50;
        this.speed = screen.screenWidth / 100 * 0.2;
        this.leftStateFlag = false;
        this.rightStateFlag = false;
    }

    init_self_render(){
        const horizon = this.screen.getHorison();
        if (!horizon)  return;

        horizon.innerHTML = foxSVG;
        const size = this.screen.screenHeight / 100 * 10;

        this.domElement = horizon.querySelector('#fox-character');
        this.domElement.style.setProperty('--fox-pos-x', `${this.x}px`);
        this.domElement.style.setProperty('--fox-size', `${size}px`);
        
        this.sprites = {
            sit: this.domElement.querySelector('#state-sit'),
            walk1: this.domElement.querySelector('#state-walk-1'),
            walk2: this.domElement.querySelector('#state-walk-2')
        }

        this.state = 'sit';

        this.walkFrame = 0;
        this.walkInterval = null;
    }

    _showSprite(spriteName) {

        Object.values(this.sprites).forEach(el => el.classList.remove('active'));

        if (this.sprites[spriteName]) {
            this.sprites[spriteName].classList.add('active');
        }
    }

    _rerender() {
        this.domElement.style.setProperty('--fox-pos-x', `${this.x}px`);
    }

    _moveLeft(sp){
        if ((this.x - sp) <= 0) {
            this.x = 0; 
            this.leftStateFlag = false;
            this.setSit();
            return;
        }
        this.x -= sp; 
        this._rerender()
    }

    _moveRight(sp) {
        this.x += sp;
        this._rerender();
    }

    update(){
        if(this.leftStateFlag) {
            this._moveLeft(this.speed);
        }
        if(this.rightStateFlag) {
            this._moveRight(this.speed);
        }
    }

    _walkingAnimation() {
        this._showSprite('walk1');

        this.walkInterval = setInterval( () => {

            this.walkFrame = this.walkFrame === 0 ? 1 : 0;
            this._showSprite(this.walkFrame === 0 ? 'walk1' : 'walk2');
        }, 150);
    }

    _stopWalkingAnimation() {
        if (this.walkInterval) {
            clearInterval(this.walkInterval);
            this.walkInterval = null;
        }
    }

    setSit() {
        if (this.state === 'sit') return;

        this.state = 'sit';
        this._stopWalkingAnimation();
        this._showSprite('sit');
    }

    setWalk() {
        if (this.state === 'walk') return;

        this.state = 'walk';
        this._walkingAnimation();
    }

    event_Listener(){
        if(!this.domElement) return;

        document.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            if(e.code === 'ArrowLeft') {
                this.domElement.style.setProperty('--fox-scale', '-1');
                this.leftStateFlag = true;
                this.setWalk();
                
            }
            if(e.code === "ArrowRight") {
                this.rightStateFlag = true;
                this.setWalk();
                this.domElement.style.setProperty('--fox-scale', '1');
            }

        });
        document.addEventListener('keyup', (e) => {
            if(e.code === 'ArrowLeft') {
                this.leftStateFlag = false;
            }
            if(e.code === 'ArrowRight') {
                this.rightStateFlag = false;
            }
            if(!this.leftStateFlag && !this.rightStateFlag) {
                this.setSit();
            }
        })
    }
}