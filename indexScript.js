



function createModal(mainModal, openElements, closeModal, closeOnClick=false)
{
    for (var idx = 0; idx < openElements.length; idx++) {
        openElements[idx].addEventListener("click", ()=> {mainModal.style.display = "block";})
    }
    closeModal.onclick = function() {
        mainModal.style.display = "none";
    };
    if (closeOnClick) {
        mainModal.onclick = function() {
            mainModal.style.display = "none";
        };
    }
}

function updateValues()
{
    var currValue;

    currValue = document.getElementById("textarea-data-entry-level-name").value;
    document.getElementById("level-name").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-level-description").value;
    document.getElementById("level-description").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-level-goal").value;
    document.getElementById("level-goal").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-step-name").value;
    document.getElementById("step-name").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-step-description").value;
    document.getElementById("step-description").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-step-description").value;
    document.getElementById("step-description").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-scenario-name").value;
    document.getElementById("scenario-name").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-scenario-description").value;
    document.getElementById("scenario-description").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-yay-name").value;
    document.getElementById("yay-name").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-nay-name").value;
    document.getElementById("nay-name").innerText = currValue;
    
    currValue = document.getElementById("textarea-data-entry-advice-description").value;
    document.getElementById("advice-description").innerText = currValue;

    currValue = document.getElementById("checkbox-data-entry-scenario-visibility");
    if (currValue.checked) {
        document.getElementById("advice-description").style.display = "block";
    }
    else {
        document.getElementById("advice-description").style.display = "none";
    }






    

    document.getElementById("div-top-modal").style.display = "none";
}

function onStart() {
    createModal(document.getElementById("div-top-modal"), [document.getElementById("game-title")], document.getElementById("span-modal-close"));

    document.getElementById("btn-close").addEventListener("click", ()=> {document.getElementById("div-top-modal").style.display = "none";})
    document.getElementById("btn-update").addEventListener("click", ()=> {updateValues();})

}



document.addEventListener('DOMContentLoaded', onStart);