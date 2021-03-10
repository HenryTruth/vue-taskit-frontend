//Create function to select elements
const selectElement = (element) => document.querySelector(element);
//Open and close nav on click

selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
    selectElement('.nav-list2').classList.toggle('active');
    console.log('it worked')
})