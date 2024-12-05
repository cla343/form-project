document.getElementById('myForm').addEventListener('submit', function(event){
    this.classList.add('form-submitted');

    if(!this.checkValidity()) {
        event.preventDefault();
    }
});