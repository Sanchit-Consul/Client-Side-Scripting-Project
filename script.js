function calculate1() {
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
        alert('The points cannot be the same. Please enter different points');
        return;
    }

    var m = (y2 - y1) / (x2 - x1);

    if (!isFinite(m)) {
        alert('The slope is undefined. Please enter different points.');
        return;
    }

    var b = y1 - m * x1;

    var equation = `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`;
    document.getElementById('result1').innerText = equation;

    drawLine1([x1, y1], [x2, y2], m, b);
}

function calculate2() {
    var xInput = document.getElementById('x').value;
    var yInput = document.getElementById('y').value;
    var slope2Input = document.getElementById('slope2').value;

    if (!isValidInput(xInput, yInput, slope2Input)) {
        alert('Invalid input. Please enter valid numerical values for the coordinates and slope.');
        return;
    }

    var x = parseFloat(xInput);
    var y = parseFloat(yInput);
    var slope2 = parseFloat(slope2Input);

    if (!isFinite(slope2)) {
        alert('The slope is undefined. Please enter a valid slope.');
        return;
    }

    var b = y - slope2 * x;

    var equation = `y = ${slope2.toFixed(2)}x + ${b.toFixed(2)}`;
    document.getElementById('result2').innerText = equation;

    drawLine2([x, y], slope2, b);
}

function calculate3() {
    var slope3Input = document.getElementById('slope3').value;
    var yInterceptInput = document.getElementById('yIntercept').value;

    if (!isValidInput(slope3Input, yInterceptInput)) {
        alert('Invalid input. Please enter valid numerical values for slope and y-intercept.');
        return;
    }

    var slope3 = parseFloat(slope3Input);
    var yIntercept = parseFloat(yInterceptInput);

    if (!isFinite(slope3)) {
        alert('The slope is undefined. Please enter a valid slope.');
        return;
    }

    var equation = `y = ${slope3.toFixed(2)}x + ${yIntercept.toFixed(2)}`;
    document.getElementById('result3').innerText = equation;

    drawLine3(slope3, yIntercept);
}

function calculate4() {
    var xParallelInput = document.getElementById('xParallel').value;
    var yParallelInput = document.getElementById('yParallel').value;
    var parallelSlopeInput = document.getElementById('parallelSlope').value;

    if (!isValidInput(xParallelInput, yParallelInput, parallelSlopeInput)) {
        alert('Invalid input. Please enter valid numerical values for the coordinates and slope.');
        return;
    }

    var xParallel = parseFloat(xParallelInput);
    var yParallel = parseFloat(yParallelInput);
    var parallelSlope = parseFloat(parallelSlopeInput);

    if (!isFinite(parallelSlope)) {
        alert('The slope is undefined. Please enter a valid slope.');
        return;
    }

    var bParallel = yParallel - parallelSlope * xParallel;

    var equation = `y = ${parallelSlope.toFixed(2)}x + ${bParallel.toFixed(2)}`;
    document.getElementById('result4').innerText = equation;

    drawLine4([xParallel, yParallel], parallelSlope, bParallel);
}

function calculate5() {
    var xPerpendicularInput = document.getElementById('xPerpendicular').value;
    var yPerpendicularInput = document.getElementById('yPerpendicular').value;
    var perpendicularSlopeInput = document.getElementById('perpendicularSlope').value;

    if (!isValidInput(xPerpendicularInput, yPerpendicularInput, perpendicularSlopeInput)) {
        alert('Invalid input. Please enter valid numerical values for the coordinates and slope.');
        return;
    }

    var xPerpendicular = parseFloat(xPerpendicularInput);
    var yPerpendicular = parseFloat(yPerpendicularInput);
    var perpendicularSlope = parseFloat(perpendicularSlopeInput);

    if (!isFinite(perpendicularSlope)) {
        alert('The slope is undefined. Please enter a valid slope.');
        return;
    }

    var bPerpendicular = yPerpendicular - perpendicularSlope * xPerpendicular;

    var equation = `y = ${perpendicularSlope.toFixed(2)}x + ${bPerpendicular.toFixed(2)}`;
    document.getElementById('result5').innerText = equation;

    drawLine5([xPerpendicular, yPerpendicular], perpendicularSlope, bPerpendicular);
}

function drawLine1(point1, point2, m, b) {
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(point1[0], point1[1]);
    ctx.lineTo(point2[0], point2[1]);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

    var slopeText = `Slope: ${m.toFixed(2)}`;
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(slopeText, 10, 20);

    var yInterceptText = `y-Intercept: ${b.toFixed(2)}`;
    ctx.fillText(yInterceptText, 10, 40);
}

function drawLine2(point, m, b) {
    var canvas = document.getElementById('canvas2');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(point[0] - 50, m * (point[0] - 50) + b);
    ctx.lineTo(point[0] + 50, m * (point[0] + 50) + b);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

    var slopeText = `Slope: ${m.toFixed(2)}`;
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(slopeText, 10, 20);

    var yInterceptText = `y-Intercept: ${b.toFixed(2)}`;
    ctx.fillText(yInterceptText, 10, 40);
}

function drawLine3(m, b) {
    var canvas = document.getElementById('canvas3');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(50, m * 50 + b);
    ctx.lineTo(canvas.width - 50, m * (canvas.width - 50) + b);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

    var slopeText = `Slope: ${m.toFixed(2)}`;
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(slopeText, 10, 20);

    var yInterceptText = `y-Intercept: ${b.toFixed(2)}`;
    ctx.fillText(yInterceptText, 10, 40);
}

function drawLine4(point, m, b) {
    var canvas = document.getElementById('canvas4');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(point[0] - 50, m * (point[0] - 50) + b);
    ctx.lineTo(point[0] + 50, m * (point[0] + 50) + b);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

    var slopeText = `Slope: ${m.toFixed(2)}`;
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(slopeText, 10, 20);

    var yInterceptText = `y-Intercept: ${b.toFixed(2)}`;
    ctx.fillText(yInterceptText, 10, 40);
}

function drawLine5(point, m, b) {
    var canvas = document.getElementById('canvas5');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(point[0] - 50, m * (point[0] - 50) + b);
    ctx.lineTo(point[0] + 50, m * (point[0] + 50) + b);
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

    var slopeText = `Slope: ${m.toFixed(2)}`;
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(slopeText, 10, 20);

    var yInterceptText = `y-Intercept: ${b.toFixed(2)}`;
    ctx.fillText(yInterceptText, 10, 40);
}

function isValidInput(...values) {
    return values.every(value => !isNaN(parseFloat(value)));
}
