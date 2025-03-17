export function loadMenuPage(content, menuBtn) {
    const header = document.createElement("h1");
    header.appendChild(document.createTextNode("JUST SHOW UP, WE'LL TAKE CARE OF THE REST"));
    content.appendChild(header);
    menuBtn.classList.add('active');
}