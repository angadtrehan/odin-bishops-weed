import { loadHomePage } from "./homepage.js";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

export function registerMouseStuff() {
    MouseFollower.registerGSAP(gsap);
    const mouse = document.querySelector("#cursor");
    const mouseTwo = document.querySelector("#cursor-two");
    const homeBtn = document.querySelector("#home");

    const cursor = new MouseFollower({
        el: mouse,
        visible: true,
        speed: 0.3,
        skewing: 3,
    });
    const cursorTwo = new MouseFollower({
        el: mouseTwo,
        visible: true,
        speed: 0.5,
    });
    cursor.show();
    cursorTwo.show();

    const loader = document.querySelector(".loader");
    const leftLetter = document.querySelector("#b");
    const rightLetter = document.querySelector(".loader > div + div > svg");
    const header = document.querySelector("header");
    const content = document.querySelector("#content");

    leftLetter.addEventListener('mouseenter', () => {
        rightLetter.style.transform = 'translateX(-21%) translateY(-5.5%) rotate(-11.5deg)';
    });

    leftLetter.addEventListener('mouseleave', () => {
        rightLetter.style.transform = 'translateX(-21.5%) translateY(-5.5%) rotate(-11.5deg)';
    });

    leftLetter.addEventListener('mousedown', () => {
        rightLetter.style.transform = 'translateX(-21.5%) translateY(-5.5%) rotate(-11.5deg)';
    });

    leftLetter.addEventListener('mouseup', () => {
        rightLetter.style.transform = 'translateX(-21%) translateY(-5.5%) rotate(-11.5deg)';
    });

    leftLetter.addEventListener('click', () => {
        rightLetter.style.transition = 'transform 0.4s ease-in-out';
        rightLetter.style.transform = 'translateX(100%) translateY(-5.5%) rotate(-11.5deg)';
        leftLetter.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            leftLetter.style.display = 'none';
            rightLetter.style.display = 'none';
            loader.style.display = 'none';
            header.style.display = 'flex';
            content.style.display = 'block';
            setTimeout(() => {
                loadHomePage(content, homeBtn);
                header.style.opacity = '1';
                content.style.opacity = '1';
            }, 50);
        }, 400);
    });
}