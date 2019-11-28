let documentDtl = document;
let dtlList = [documentDtl.doctype,
               documentDtl.documentElement,
               documentDtl.implementation,
               documentDtl.activeElement,
               documentDtl.body,
               documentDtl.head,
               documentDtl.title,
               documentDtl.lastModified,
               documentDtl.referrer,
               documentDtl.URL,
               documentDtl.defaultview,
               documentDtl.compatMode,
               documentDtl.ownerDocument,
               documentDtl.hasFocus()];

for (let i = 0; i < dtlList.length; i++) {
    console.log(dtlList[i]);
}

document.querySelector('section').focus();

let hint = document.querySelector('input');
let inputAttribute = document.querySelector('input').attributes;
let placeholder = document.querySelector('input').getAttribute('placeholder');

hint.addEventListener('click', function() {
    hint.removeAttribute('placeholder');
}, false);

document.addEventListener('click', function(clicked) {
    let targetElement = clicked.target;
    
    let upperHint = document.createElement('div');
    console.log(targetElement);
}, false);
