let imgHeight = window.innerHeight;
document.querySelector('div.login_form_img').style.cssText = 'height: ' + imgHeight + 'px;';

//image height normalizer
function windowHeight() {
    imgHeight = window.innerHeight;

    console.log(imgHeight);
    document.querySelector('div.login_form_img').style.cssText = 'height: ' + imgHeight + 'px;';
}
//adding floating hint
function addHint(clicked) {
    let clickedField = clicked.target;
    let inputSections = document.querySelector('form.form_content').children;
    let fields = [...inputSections];
    if (clickedField.classList.contains('username') && !clickedField.classList.contains('active')) {
        let createHintElement = document.createElement('div');
        let hintText = document.createTextNode('Enter Username');
        let getParentNode = clickedField.parentElement;

        createHintElement.appendChild(hintText);
        getParentNode.insertBefore(createHintElement, getParentNode.firstChild);
        clickedField.removeAttribute('placeholder');
        if (!clickedField.classList.contains('active')) {
            clickedField.classList.add('active');
        }
    }
    if (!clickedField.classList.contains('username') && fields.includes(clickedField.parentElement)) {
        let removeHint = document.querySelector('#_username > div');
        let prevSelect = clickedField.parentElement.previousElementSibling;

        removeHint.parentNode.removeChild(removeHint);
        prevSelect.firstElementChild.classList.remove('active');
        prevSelect.firstElementChild.setAttribute('placeholder', 'Username');
    }
    if(!clickedField.classList.contains('username') && !fields.includes(clickedField.parentElement)) {
        document.removeEventListener('click', addHint, false);
    }
}

//event handling

document.addEventListener('click', addHint, false);

window.addEventListener('resize', windowHeight);
