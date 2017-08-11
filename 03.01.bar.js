function singleData(label,value,style) {
    return {
        label: label,
        value: value,
        style: style
    };
}

var data = [
    singleData('David', 3, 'rgba(241,178,255,0.5'),
    singleData('Ben', 2, '#b1ddf3'),
    singleData('Oren', 9, '#ffde89'),
    singleData('Barbara', 6, '#e3675c'),
    singleData('Belann', 10, '#c2d985')
];

var chartYData = [
    singleData('10 cats', 1),
    singleData('5 cats', 0.5),
    singleData('3 cats', 0.3)
];

var range = {
    min: 0,
    max: 10
};

var chartPadding = 20,
    width,
    height,
    context;

function init() {
    var canvas = document.getElementById('bar');
    width = canvas.width;
    height = canvas.height;
    context = canvas.getContext('2d');

    context.fillStyle = '#eeeeee';
    context.strokeStyle = '#999999';
    context.fillRect(0,0,width,height);

    context.font = '12pt Verdana, sans-serif';
    context.fillStyle = '#999999';

    context.moveTo(chartPadding, chartPadding);
    context.lineTo(chartPadding, height - chartPadding);
    context.lineTo(width - chartPadding, height - chartPadding);

    fillChart(context, chartYData);
    createBars(context, data);
}

function fillChart(context, stepsData) {
    var steps = stepsData.length,
        startY = chartPadding,
        endY = height-chartPadding,
        chartHeight = endY-startY,
        currentY;
    
    for (var i=0; i<steps; ++i) {
        currentY = startY + (1 - stepsData[i].value) * chartHeight;
        context.moveTo(chartPadding, currentY);
        context.lineTo(chartPadding*1.3, currentY);
        context.fillText(stepsData[i].label, chartPadding*1.5, currentY + 6);
    }
    context.stroke();
}

function createBars(context, data) {
    var elementWidth = (width-chartPadding*2)/data.length,
        startY = chartPadding,
        endY = height-chartPadding,
        chartHeight = endY-startY,
        rangeLength = range.max-range.min,
        stepSize = chartHeight/rangeLength;

    context.textAlign = 'center';
    for (var i=0; i < data.length; ++i) {
        context.fillStyle = data[i].style;
        context.fillRect(chartPadding + elementWidth*i, height-chartPadding-data[i].value*stepSize,
                        elementWidth, data[i].value*stepSize);
        context.fillStyle = 'rgba(255,255,255,0.8)';
        context.fillText(data[i].label, chartPadding+elementWidth*(i+0.5), height-chartPadding*1.5);
    }
}