function calculate() {
    var x1Input = document.getElementById('x1').value;
    var y1Input = document.getElementById('y1').value;
    var x2Input = document.getElementById('x2').value;
    var y2Input = document.getElementById('y2').value;

    if (!isValidInput(x1Input, y1Input, x2Input, y2Input)) {
        alert('Invalid input. Please enter valid numerical values for all coordinates.');
        return;
    }

    var x1 = parseFloat(x1Input);
    var y1 = parseFloat(y1Input);
    var x2 = parseFloat(x2Input);
    var y2 = parseFloat(y2Input);

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
    document.getElementById('result').innerText = equation;

    drawLine([x1, y1], [x2, y2], m, b);
}

function drawLine(point1, point2, m, b) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Calculate the scale based on canvas size
    var scale = canvas.width / 10; // Adjust this value to control the scale

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
    var xMin = Math.min(point1[0], point2[0]);
    var xMax = Math.max(point1[0], point2[0]);
    var yMin = Math.min(point1[1], point2[1]);
    var yMax = Math.max(point1[1], point2[1]);

    ctx.beginPath();
    ctx.moveTo((xMin + xMax) / 2 * scale + canvas.width / 2, -(m * (xMin + xMax) / 2 + b) * scale + canvas.height / 2);
    ctx.lineTo((xMax + xMin) / 2 * scale + canvas.width / 2, -(m * (xMax + xMin) / 2 + b) * scale + canvas.height / 2);
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

// Example usage with dummy data
calculate();
