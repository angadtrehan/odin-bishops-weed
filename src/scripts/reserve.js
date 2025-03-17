export function loadReservePage(content,reserveBtn) {
    const form = document.createElement("form");
    form.setAttribute('method', 'get');
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute('for', 'name');
    nameLabel.appendChild(document.createTextNode('NAME'));
    const nameInput = document.createElement("input");
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('placeholder', 'Ninki');
    nameInput.required = true;
    const phoneLabel = document.createElement("label");
    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.appendChild(document.createTextNode('PHONE NUMBER'));
    const phoneInput = document.createElement("input");
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('name', 'phone');
    phoneInput.setAttribute('id', 'phone');
    phoneInput.setAttribute('placeholder', '9000990009');
    phoneInput.setAttribute('pattern','[0-9]{10}');
    phoneInput.required = true;
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.appendChild(document.createTextNode('Book a Table'));

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(phoneLabel);
    form.appendChild(phoneInput);
    form.appendChild(submitBtn);

    content.appendChild(form);
    reserveBtn.classList.add('active');
}
