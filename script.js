// Calculator 1 - Two Points
function calculate() {
    var x1Input = document.getElementById('x1').value;
    var y1Input = document.getElementById('y1').value;
    var x2Input = document.getElementById('x2').value;
    var y2Input = document.getElementById('y2').value;

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
    document.getElementById('result').innerText = equation;

    drawLine([x1, y1], [x2, y2], m, b, 'canvas1');
}

// Calculator 2 - Point and Slope
function calculateWithSlope() {
    var xInput = document.getElementById('x').value;
    var yInput = document.getElementById('y').value;
    var slopeInput = document.getElementById('slope').value;

    var x = parseFloat(xInput);
    var y = parseFloat(yInput);
    var slope = parseFloat(slopeInput);

    if (isNaN(x) || isNaN(y) || isNaN(slope)) {
        alert('Invalid input. Please enter valid numerical values for the coordinates and slope.');
        return;
    }

    var b = y - slope * x;

    var slopeText;
    if (slope === 1) {
        slopeText = 'Slope: x';
    } else if (slope === -1) {
        slopeText = 'Slope: -x';
    } else {
        slopeText = slope > 0 ? `Slope: ${slope.toFixed(2)}` : `Slope: -${Math.abs(slope).toFixed(2)}`;
    }

    var equation = `${slopeText} + ${b.toFixed(2)}`;
    document.getElementById('result2').innerText = equation;

    drawLine([x, y], [x + 1, y + slope], slope, b, 'canvas2');
}

// Calculator 3 - Slope and Y-Intercept
function calculateWithSlopeAndYIntercept() {
    var slopeInput = document.getElementById('slope3').value;
    var yInterceptInput = document.getElementById('yIntercept').value;

    var slope = parseFloat(slopeInput);
    var yIntercept = parseFloat(yInterceptInput);

    if (isNaN(slope) || isNaN(yIntercept)) {
        alert('Invalid input. Please enter valid numerical values for slope and y-intercept.');
        return;
    }

    var equation = `y = ${slope.toFixed(2)}x + ${yIntercept.toFixed(2)}`;
    document.getElementById('result3').innerText = equation;

    drawLineWithEquation(slope, yIntercept, 'canvas3');
}

// Calculator 4 - Parallel Line and Point
function calculateParallelLine() {
    var parallelSlopeInput = document.getElementById('parallelSlope').value;
    var parallelPointInput = document.getElementById('parallelPoint').value;

    var parallelSlope = parseFloat(parallelSlopeInput);

    if (isNaN(parallelSlope)) {
        alert('Invalid input. Please enter a valid numerical value for the parallel line slope.');
        return;
    }

    var parallelPointCoordinates = parallelPointInput.split(',').map(coord => parseFloat(coord.trim()));

    if (parallelPointCoordinates.length !== 2 || isNaN(parallelPointCoordinates[0]) || isNaN(parallelPointCoordinates[1])) {
        alert('Invalid input. Please enter valid numerical values for the point coordinates in the format "x, y".');
        return;
    }

    var xParallel = parallelPointCoordinates[0];
    var yParallel = parallelPointCoordinates[1];

    var perpendicularSlope = -1 / parallelSlope;

    var equation = `y = ${perpendicularSlope.toFixed(2)}x + ${yParallel - perpendicularSlope * xParallel}`;
    document.getElementById('result4').innerText = equation;

    drawLineWithEquation(perpendicularSlope, yParallel - perpendicularSlope * xParallel, 'canvas4');
}

// Function to draw a line based on slope and y-intercept
function drawLineWithEquation(slope, yIntercept, canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(-canvas.width / 2, canvas.height / 2 - slope * (-canvas.width / 2) - yIntercept);

    var xMin = -canvas.width / 2;
    var xMax = canvas.width / 2;
    var yMin = slope * xMin + yIntercept;
    var yMax = slope * xMax + yIntercept;

    xMin += canvas.width / 2;
    xMax += canvas.width / 2;
    yMin = canvas.height / 2 - yMin * 10;
    yMax = canvas.height / 2 - yMax * 10;

    ctx.moveTo(xMin, yMin);
    ctx.lineTo(xMax, yMax);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

    var slopeText;
    if (slope === 1) {
        slopeText = 'Slope: x';
    } else if (slope === -1) {
        slopeText = 'Slope: -x';
    } else {
        slopeText = slope > 0 ? `Slope: ${slope.toFixed(2)}` : `Slope: -${Math.abs(slope).toFixed(2)}`;
    }

    var yInterceptText = `y-Intercept: ${yIntercept.toFixed(2)}`;
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(slopeText, 10, 20);
    ctx.fillText(yInterceptText, 10, 40);
}

// Example usage with dummy data
calculate();
calculateWithSlope();
calculateWithSlopeAndYIntercept();
calculateParallelLine();
