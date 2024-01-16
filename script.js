// Function to draw a line based on given points
function drawLine(point1, point2, slope, yIntercept, canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(point1[0], point1[1]);
    ctx.lineTo(point2[0], point2[1]);
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

// Function to draw a line based on slope and y-intercept
function drawLineWithEquation(slope, yIntercept, canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
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

// Calculator 1 - Two Points
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

    if (x1 === x2 && y1 === y2) {
        alert('The points cannot be the same. Please enter different points');
    }

    var m = (y2 - y1) / (x2 - x1);

    if (!isFinite(m)) {
        alert('The slope is undefined. Please enter different points.');
    }

    var b = y1 - m * x1;

    var equation = `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`;
    document.getElementById('result').innerText = equation;

    drawLine([x1, y1], [x2, y2], m, b, 'canvas1');
}

// Calculator 2 - Point and Slope
function calculateWithSlope() {
    var xInput = document.getElementById('x').value;
    var yInput = document.getElementById('y').value;
    var slopeInput = document.getElementById('slope2').value;

    if (!isValidInput(xInput, yInput, slopeInput)) {
        alert('Invalid input. Please enter valid numerical values for coordinates and slope.');
    }

    var x = parseFloat(xInput);
    var y = parseFloat(yInput);
    var slope = parseFloat(slopeInput);

    var b = y - slope * x;

    var equation = `y = ${slope.toFixed(2)}x + ${b.toFixed(2)}`;
    document.getElementById('result2').innerText = equation;

    drawLineWithEquation(slope, b, 'canvas2');
}

// Calculator 3 - Slope and Y-Intercept
function calculateWithSlopeAndYIntercept() {
    var slopeInput = document.getElementById('slope3').value;
    var yInterceptInput = document.getElementById('yIntercept').value;

    if (!isValidInput(slopeInput, yInterceptInput)) {
        alert('Invalid input. Please enter valid numerical values for slope and y-intercept.');
    }

    var slope = parseFloat(slopeInput);
    var yIntercept = parseFloat(yInterceptInput);

    var equation = `y = ${slope.toFixed(2)}x + ${yIntercept.toFixed(2)}`;
    document.getElementById('result3').innerText = equation;

    drawLineWithEquation(slope, yIntercept, 'canvas3');
}

// Calculator 4 - Parallel Line and Point
function calculateParallelLine() {
    var xInput = document.getElementById('xParallel').value;
    var yInput = document.getElementById('yParallel').value;
    var slopeInput = document.getElementById('slopeParallel').value;

    if (!isValidInput(xInput, yInput, slopeInput)) {
        alert('Invalid input. Please enter valid numerical values for coordinates and slope.');
    }

    var x = parseFloat(xInput);
    var y = parseFloat(yInput);
    var slope = parseFloat(slopeInput);

    // Calculate perpendicular slope
    var perpendicularSlope = -1 / slope;

    var equation = `Perpendicular Line: y = ${perpendicularSlope.toFixed(2)}x + ${y - perpendicularSlope * x.toFixed(2)}`;
    document.getElementById('result4').innerText = equation;

    drawLineWithEquation(perpendicularSlope, y - perpendicularSlope * x, 'canvas4');
}

// Calculator 5 - Perpendicular Line and Point
function calculatePerpendicularLine() {
    var xInput = document.getElementById('xPerpendicular').value;
    var yInput = document.getElementById('yPerpendicular').value;
    var slopeInput = document.getElementById('slopePerpendicular').value;

    if (!isValidInput(xInput, yInput, slopeInput)) {
        alert('Invalid input. Please enter valid numerical values for coordinates and slope.');
    }

    var x = parseFloat(xInput);
    var y = parseFloat(yInput);
    var slope = parseFloat(slopeInput);

    // Calculate parallel slope
    var parallelSlope = -1 / slope;

    var equation = `Parallel Line: y = ${parallelSlope.toFixed(2)}x + ${y - parallelSlope * x.toFixed(2)}`;
    document.getElementById('result5').innerText = equation;

    drawLineWithEquation(parallelSlope, y - parallelSlope * x, 'canvas5');
}

// Other functions...

// Example usage without dummy data
// calculate();
// calculateWithSlope();
// calculateWithSlopeAndYIntercept();
// calculateParallelLine();
// calculatePerpendicularLine();
