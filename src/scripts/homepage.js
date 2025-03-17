export function loadHomePage(content, homeBtn) {
    const header = document.createElement("h1");
    header.appendChild(document.createTextNode('WELCOME TO THE BEST FUCKING MEAL OF YOUR LIVES'));
    content.appendChild(header);
    homeBtn.classList.add('active');
}