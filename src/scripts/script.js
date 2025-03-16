import "../styles/style.css"

import MouseFollower from "mouse-follower";
import gsap from "gsap";

console.log("Ninki");

MouseFollower.registerGSAP(gsap);
const mouse = document.querySelector("#cursor");
const bText = document.querySelector("#b");
const wText = document.querySelector("#W");

const cursor = new MouseFollower({
    el: mouse,
    visible: true,
    speed: 0.5,

});
cursor.show();