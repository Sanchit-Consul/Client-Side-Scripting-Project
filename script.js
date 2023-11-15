function calculate() {
    var x1Input = document.getElementById('x1').value;
    var y1Input = document.getElementById('y1').value;
    var x2Input = document.getElementById('x2').value;
    var y2Input = document.getElementById('y2').value;

    if (!isValidInput(x1Input, y1Input, x2Input, y2Input)) {
        alert('Invalid input. Please enter valid numerical values for all coordinates. ');
    }

    var x1 = parseFloat(x1Input);
    var y1 = parseFloat(y1Input);
    var x2 = parseFloat(x2Input);
    var y2 = parseFloat(y2Input);

    if (x1 === x2 && y1 === y2){
        alert('The points cannot be the same. Please enter different points')
    }

    var 
}
