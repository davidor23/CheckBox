const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;


function handleCheck(e){
    //Check if shift key was down
    //And check if they are checking
    let inBetween = false;
    if(e.shiftKey && this.checked){
        // loops over checkbox

        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            if (inBetween){
                checkbox.checked = true;
            }
        });

    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck))