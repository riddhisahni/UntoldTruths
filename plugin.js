var field = document.querySelector('textarea');
var other = field.getAttribute('placeholder');
var button = document.querySelector('.btn');
var empty = document.getElementById('empty')

field.onfocus = function() {

    this.setAttribute('placeholder', '');
    this.style.borderColor = '#b19cd9';
    button.style.display = "block";
}

field.onblur = function() {

    this.setAttribute('placeholder', other);
    this.style.borderColor = '#b19cd9';
}

empty.onClick = function() {

    button.style.display = 'none';
    field.value = '';

}
