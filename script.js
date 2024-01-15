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
    var parallelPointXInput = document.getElementById('parallelPointX').value;
    var parallelPointYInput = document.getElementById('parallelPointY').value;

    var parallelSlope = parseFloat(parallelSlopeInput);

    if (isNaN(parallelSlope)) {
        alert('Invalid input. Please enter a valid numerical value for the parallel line slope.');
        return;
    }

    var xParallel = parseFloat(parallelPointXInput);
    var yParallel = parseFloat(parallelPointYInput);

    if (isNaN(xParallel) || isNaN(yParallel)) {
        alert('Invalid input. Please enter valid numerical values for the point coordinates.');
        return;
    }

    var perpendicularSlope = -1 / parallelSlope;

    var equation = `y = ${perpendicularSlope.toFixed(2)}x + ${yParallel - perpendicularSlope * xParallel}`;
    document.getElementById('result4').innerText = equation;

    drawLineWithEquation(perpendicularSlope, yParallel - perpendicularSlope * xParallel, 'canvas4');
}

// Calculator 5 - Perpendicular Line and Point
function calculatePerpendicularLine() {
    var perpendicularSlopeInput = document.getElementById('perpendicularSlope').value;
    var perpendicularPointXInput = document.getElementById('perpendicularPointX').value;
    var perpendicularPointYInput = document.getElementById('perpendicularPointY').value;

    var perpendicularSlope = parseFloat(perpendicularSlopeInput);

    if (isNaN(perpendicularSlope)) {
        alert('Invalid input. Please enter a valid numerical value for the perpendicular line slope.');
        return;
    }

    var xPerpendicular = parseFloat(perpendicularPointXInput);
    var yPerpendicular = parseFloat(perpendicularPointYInput);

    if (isNaN(xPerpendicular) || isNaN(yPerpendicular)) {
        alert('Invalid input. Please enter valid numerical values for the point coordinates.');
        return;
    }

    // Calculate the slope of the line perpendicular to the given line
    var parallelSlope = -1 / perpendicularSlope;

    var equation = `y = ${parallelSlope.toFixed(2)}x + ${yPerpendicular - parallelSlope * xPerpendicular}`;
    document.getElementById('result5').innerText = equation;

    drawLineWithEquation(parallelSlope, yPerpendicular - parallelSlope * xPerpendicular, 'canvas5');
}

// Other functions...

// Example usage without dummy data
// calculate();
// calculateWithSlope();
// calculateWithSlopeAndYIntercept();
// calculateParallelLine();
// calculatePerpendicularLine();
