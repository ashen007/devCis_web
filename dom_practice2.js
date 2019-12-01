let i = 0;
let parentClass;
let clickedPrev = [];
let imgHeight = window.innerHeight;
document.querySelector('div.login_form_img').style.cssText = 'height: ' + imgHeight + 'px;';

//image height normalizer
function windowHeight() {
    imgHeight = window.innerHeight;

    console.log(imgHeight);
    document.querySelector('div.login_form_img').style.cssText = 'height: ' + imgHeight + 'px;';
}
// find clicked input method
function searchClickedElemnt(target, clickArray) {
    if (target.classList.contains('form_inputs')) {
        parentClass = target.parentElement.getAttribute('id');
        if (i < 1) {
            clickArray[0] = target;
        }
    }
}

// adding active class and create floating hint
function addFloatingHint(target) {
    target.parentElement.insertAdjacentHTML('afterbegin', '<div></div>');
    target.parentElement.firstElementChild.insertAdjacentHTML('afterbegin', 'Enter ' + parentClass);
    target.removeAttribute('placeholder');
    target.classList.add('active');
}

// remove active class and floating hint
function removeFloatingHint(target) {
    let hint = target.parentElement.querySelector('div');

    target.parentElement.removeChild(hint);
    target.classList.remove('active');
    target.setAttribute('placeholder', clickedPrev[0].parentElement.getAttribute('id'));

}

//getting targeted element
function addHint(clicked) {
    let inputValue;
    let getClickedElement = clicked.target;
    let isActive = getClickedElement.classList.contains('active');

//click on input method
    if (getClickedElement.classList.contains('form_inputs')) {
        searchClickedElemnt(getClickedElement, clickedPrev);
        inputValue = clickedPrev[0].value;
//firstly click on one input metode and then click on another
        if (!isActive && !(clickedPrev[0].parentElement.getAttribute('id') == parentClass) && i > 0 && !(inputValue != '')) {
            removeFloatingHint(clickedPrev[0]);
            clickedPrev[0] = getClickedElement;
            i = 0;
        }
//first time click on input methode 
        if (!isActive && getClickedElement.classList.contains(parentClass)) {
            addFloatingHint(getClickedElement);
        }
        i++;
    }

//click outside from input method
    if (!getClickedElement.classList.contains('form_inputs')) {
        inputValue = clickedPrev[0].value;
//click on input method first and then click outside from input methode 
        if (i != 0 && clickedPrev[0].classList.contains('active') && !(inputValue != '')) {
            console.log(inputValue);
            removeFloatingHint(clickedPrev[0]);
            i = 0;
        }
    }
}
/*//adding floating hint
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
}*/

//event handling

document.addEventListener('click', addHint, false);

window.addEventListener('resize', windowHeight);
