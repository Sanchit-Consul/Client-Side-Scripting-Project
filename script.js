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

    var m = (y2 - y1) / (x2 - x1)

    if (!isFinite(m)) {
        alert('The slope is undefined. PLease enter different ports.')
    }

    var b = y1 - m * x1;

    var equation = `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`;
    document.getElementById('result').innerText = equation;

    drawLine([x1, y1], [x2, y2], m, b);
}

function isValidInput(x1, y1, x2, y2) {
    return !isNaN(parseFloat(x1)) && !isNaN(parseFloat(y1)) && !isNaN(parseFloat(x2)) && !isNaN(parseFloat(y2));
}

function drawLine(point1, point2, m, b) {
    var canvas = document.getElementById('canvas');
    var ctx = vanvas = vancas.getContext('2d');

    ctx.clearRect (0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(point1[0], point1[1])
    ctx.moveTo(point2[0], point2[1]);
    ctx.strokeStyle = '#FF0000';
    ctx.stoke();

    var slopeText = `Slope: ${m.toFixed(2)}`;
    
}