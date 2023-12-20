// Ralph Godkin
// Lesson 07 - Meme Generator

const body = document.querySelector('body');
body.addEventListener('click', deleteParentElement);  

// Get the form content, and send them to emptyField function
const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const picture = document.querySelector('#pic').value;
    const topText = document.querySelector('#Top_Text').value;
    const bottomText = document.querySelector('#Bottom_Text').value;
    // Call function to check for empty fields in the form
    emptyField(picture, topText, bottomText);
})  // END addEventListener


// function to check for empty fields on the form
function emptyField(pic, top, btm) {
    if (pic === '' || top === '' || btm === '') {
        window.alert("Please complete all fields.")
        }   // END if...
    else {
        // Clear the form
        form.reset();
        // Call the memeMaker function
        memeMaker(pic, top, btm);
        } // END else
}   // END emptyField


// function to create a meme image
function memeMaker(picture, topText, bottomText) {
    const memeContainer = document.createElement('div');
    memeContainer.innerHTML= `
    <div id="parent">
        <div class="container">
            <img src="${picture}" width="400" class="image" alt="Meme Image">
            <div class="top_text_overlay">${topText}</div>
            <div class="bottom_text_overlay">${bottomText}</div>
        </div>
        <div align="center">
            <button class="delete-button">Delete Meme</button>
            <hr>
        </div>
  </div>`;
    document.body.appendChild(memeContainer);
    }   // END memeMaker()


// function to delete the meme & associated delete button
function deleteParentElement(event) {
    const clickedElement = event.target;
    // Check if the clicked element has the "delete-button" class
     if (clickedElement.classList.contains('delete-button')) {
        const grandParentElement = clickedElement.parentNode.parentNode;
        // Remove the grandParent element
        grandParentElement.remove();
     }   // END if...
    }   // END deleteParentElement()