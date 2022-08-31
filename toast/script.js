let addButton = document.querySelector('#add-button');
let clearButton = document.querySelector('#clear-button');
let duration = document.querySelector('#duration');
let textArea = document.querySelector('#message-content');
let canselable = document.querySelector('#cancelable');
let toastPopUp = document.querySelector('#toasts');
let successCheck = document.querySelector('#success');

let autoClear = null;

addButton.addEventListener('click', () => {

    let status = successCheck.checked ? 'success' : 'error';
    let text = textArea.value;

    const toastObject = {
        id: Date.now(),
        status,
        text: handleToastText(text, status),
        isCancel: canselable.checked,
        duration: duration.value
    }

    autoClear = setTimeout(() => {
        removeToast(toastObject.id)
    }, toastObject.duration)

    toastPopUp.innerHTML += `
        <div class="toast ${toastObject.status}-toast" data-id="${toastObject.id}">
          <p class="message">${toastObject.text}</p>
          ${ toastObject.isCancel ? `<button class="cancel-button" onclick="this.parentElement.remove()">x</button>` : '' }
        </div>
    `
})


clearButton.addEventListener('click', function () {
    document.querySelector("#toasts").innerHTML = '';
})

function removeToast(id){
    const currentToast = document.querySelector(`.toast[data-id="${id}"]`)
    currentToast.remove();

    if (autoClear && toastPopUp.children.length === 0) {
        clearTimeout(autoClear)
    }
}

function handleToastText(text, status){
    if(!text){
        if(status==='success'){
            return "Success!";
        }
        if(status==='error'){
            return "Error!";
        }
    }
    else{
        return text;
    }
}