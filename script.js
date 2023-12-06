function calculate() {
    var x1Input = document.getElementById('x1').value;
    var y1Input = document.getElementById('y1').value;
    var x2Input = document.getElementById('x2').value;
    var y2Input = document.getElementById('y2').value;

    // Convert input values to numbers
    var x1 = parseFloat(x1Input);
    var y1 = parseFloat(y1Input);
    var x2 = parseFloat(x2Input);
    var y2 = parseFloat(y2Input);

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        alert('Invalid input. Please enter valid numerical values for all coordinates.');
        return;
    }

    if (x1 === x2 && y1 === y2) {
        alert('The points cannot be the same. Please enter different points.');
        return;
    }

    var m = (y2 - y1) / (x2 - x1);

    if (!isFinite(m)) {
        alert('The slope is undefined. Please enter different points.');
        return;
    }

    var b = y1 - m * x1;

    if (m === 0) {
        alert('The slope is 0, meaning it\'s a horizontal line. Please change the input points so that this isn\'t the case.');
        return;
    }

    var slopeText;
    if (m === 1) {
        slopeText = 'Slope: x';
    } else if (m === -1) {
        slopeText = 'Slope: -x';
    } else {
        slopeText = m > 0 ? `Slope: ${m.toFixed(2)}` : `Slope: -${Math.abs(m).toFixed(2)}`;
    }

    var equation = `${slopeText} + ${b.toFixed(2)}`;
    document.getElementById('result').innerText = equation + `\nSlope (m): ${m.toFixed(2)}`;

    drawLine([x1, y1], [x2, y2], m, b);
}

function drawLine(point1, point2, m, b) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw x-axis
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    // Draw y-axis
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    // Draw the line
    ctx.beginPath();

    // Determine the intersection points of the line with the canvas edges
    var xMin = -canvas.width / 2;
    var xMax = canvas.width / 2;
    var yMin = m * xMin + b;
    var yMax = m * xMax + b;

    // Adjust the coordinates to fit within the canvas
    xMin += canvas.width / 2;
    xMax += canvas.width / 2;
    yMin = canvas.height / 2 - yMin * 10; // Scale factor (10) is for better visualization
    yMax = canvas.height / 2 - yMax * 10;

    ctx.moveTo(xMin, yMin);
    ctx.lineTo(xMax, yMax);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

    // Draw slope text
    var slopeText = `Slope: ${m.toFixed(2)}`;
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(slopeText, 10, 20);

    // Draw y-intercept text
    var yInterceptText = `y-Intercept: ${b.toFixed(2)}`;
    ctx.fillText(yInterceptText, 10, 40);
}