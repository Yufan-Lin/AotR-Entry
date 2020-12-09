window.onload = function() {
    setupMarker('#marker');
    showAlertView();

    var input = document.querySelector('input');
    input.value = document.URL;
}

window.addEventListener('arjs-nft-loaded', function(ev){
    let loadingIndicator = document.querySelector('#loading-indicator');
    loadingIndicator.style.display = "none";
    console.log("Loading finished!!");
})

let link = 'https://yufan-lin.github.io/AotR/#/';
// function

function setupMarker(markerSelector) {
    var marker = document.querySelector(markerSelector);

    marker.addEventListener("markerFound", (e) => {
        window.open(link, '_self');
    });
}

function showAlertView() {
    setTimeout(() => {
        var alert = document.querySelector('#alert-popover');
        alert.style.display = 'inline-block';
    }, 1000);
}

function hideAlertView() {
    var alert = document.querySelector('#alert-popover');
    alert.style.display = 'none';
    isStarted = true;
}

function copyLink() {
    var input = document.querySelector('input');
        input.value = document.URL;

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        // for ios
    
        var oldContentEditable = input.contentEditable
        var oldReadOnly = input.readOnly;
    
        input.contentEditable = true;
        input.readOnly = false;
    
        var range = document.createRange();
        range.selectNodeContents(input);
    
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    
        input.setSelectionRange(0, 999999);
    
        input.contentEditable = oldContentEditable
        input.readOnly = oldReadOnly;

    } else {
        // for other os

        input.select();

    }

    document.execCommand('copy');

    input.blur();

    var copyButton = document.querySelector('#button-copy-link');
    copyButton.className = "btn btn-success";
    copyButton.textContent = "已複製";
}
