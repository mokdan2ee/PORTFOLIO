$("document").ready(function(){

    function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
        let paths = document.querySelectorAll("path");
        let mode=repeat?'infinite':'forwards'
        for (let i = 0; i < paths.length; i++) {
            const path = paths[i];
            const length = path.getTotalLength();
            path.style["stroke-dashoffset"] = `${length}px`;
            path.style["stroke-dasharray"] = `${length}px`;
            path.style["stroke-width"] = `${strokeWidth}px`;
            path.style["stroke"] = `${strokeColor}`;
            path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
            path.style["animation-delay"] = `${i * delay}s`;
        }
    }
setTextAnimation(0.13,3.3,2,'linear','#ffffff',true);



$("#wave-1").wavify({
    height: 800,
    bones:4,
    amplitude:40,
    color: "#9a48fa",
    speed: .15
})
$("#wave-2").wavify({
    height: 800,
    bones:4,
    amplitude:40,
    color: "#140a42",
    speed: .25
})
let typed = new Typed("#typed1", {
    stringsElement : "#typed",
    typeSpeed:100
})



})



