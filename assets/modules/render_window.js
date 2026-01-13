export class ScreenRender {
    constructor() {
        this.screenWidth = 0,
        this.screenHeight = 0,
        this.app = document.getElementById('app');;
    }

    _getScreenSize() {
        this.screenHeight = document.documentElement.clientHeight; 
        this.screenWidth = document.documentElement.clientWidth;
    }

    _checkScreen() {
        this.screenWidth >= this.screenHeight ? this._render() : this._renderError()
    }

    _render() {
        this.app.innerHTML = `<div class="render_container">
                                <div class="sky"></div>
                                <div class="horizon"></div>
                                <div class="earth"></div>
                            </div>`;
        
        this.horizon = document.querySelector('.horizon');
        this.renderContainer = document.querySelector('.render_container');
    
        if(!this.renderContainer) return;
        
        this.renderContainer.style.setProperty('--sky-height', `${this.screenHeight / 3 * 2}px`);
        this.renderContainer.style.setProperty('--earth-height', `${this.screenHeight / 3}px`);

    }
    _renderError(){
        app.innerHTML = `<p>высота больше ширины => экран вертикальный</p>`
    }
    initRender(){
        this._getScreenSize();
        this._checkScreen();
    }
    getHorison() {
        return this.horizon;
    }

}
