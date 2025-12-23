
function get_screen_size() {
    let w_width = document.documentElement.clientWidth;
    let w_height = document.documentElement.clientHeight;

    return {'w' : w_width, 'h' : w_height};
}

function check_screen(obj) {
    const app = document.getElementById('app');
    
    obj.w >= obj.h ? render(obj, app) : renderError();
}

function render(obj, app) {
    app.innerHTML = `<div class="render_container">
                        <div class="sky"></div>
                        <div class="horizon"></div>
                        <div class="earth"></div>
                    </div>`;

    const renderContainer = document.querySelector('.render_container');
    
    if(!renderContainer) return;

    renderContainer.style.setProperty('--sky-height', `${obj.h / 3 * 2}px`);
    renderContainer.style.setProperty('--earth-height', `${obj.h / 3}px`);
    
}

function renderError() {
    app.innerHTML = `<p>высота больше ширины => экран вертикальный</p>`
}

export function initRender() {
    const sizes = get_screen_size();
    check_screen(sizes);
}