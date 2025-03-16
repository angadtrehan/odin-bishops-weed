import "../styles/style.css"

import MouseFollower from "mouse-follower";
import gsap from "gsap";

console.log("Ninki");

MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower();
cursor.show();