export function animate_sprite(sprite) {
    let animateID;

    function loop () {
        sprite.update();
        animateID = window.requestAnimationFrame(loop);
    }
    
    function stop() {
        if (animateID) {
            window.cancelAnimationFrame(animateID);
        }
    }

    loop();

    return stop;

}