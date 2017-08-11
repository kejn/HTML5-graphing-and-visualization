function init() {
    updateCanvas();
    initPalauFlag();
    initGreeceFlag();
    initPolandFlag();
    initGuyanaFlag();
    initBahrainFlag();
    initIsraelFlag();
    initSomaliaFlag();
    initTurkeyFlag();
}

function updateCanvas() {
    var width = window.innerWidth;
    var height = 100;
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = width;
    myCanvas.height = height;

    var context = myCanvas.getContext("2d");
    context.clearRect(0,0,width,height);
    context.fillStyle = "#fceab8";
    context.fillRect(0,0,width,height);
    
    var circleSize = 10;
    var gaps = circleSize + 10;
    var widthCount = parseInt(width/gaps);
    var heightCount = parseInt(height/gaps);
    var aColors = ["#43a9d1", "#efa63b", "#ef7625", "#5e4130"];
    var aColorsLength = aColors.length;

    for (var x=0; x < widthCount; ++x) {
        for (var y=0; y < heightCount; ++y) {
            context.fillStyle = aColors[parseInt(Math.random() * aColorsLength)];
            context.beginPath();
            context.arc(circleSize + gaps * x, circleSize + gaps * y, circleSize, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
    }
}

function initPalauFlag() {
    var cnvPalau = document.getElementById("palau");
    var width = cnvPalau.width;
    var height = cnvPalau.height;

    var context = cnvPalau.getContext("2d");
    context.fillStyle = "#4aadd6";
    context.fillRect(0,0,width,height);

    context.fillStyle = '#ffde00';
    context.arc(width/2, height/2, height/5, 0, 2*Math.PI, false);
    context.fill();
}

function initGreeceFlag() {
    var canvas = document.getElementById('greece'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');

    context.fillStyle = '#000080';
    context.fillRect(0,0,width,height);

    var lineHeight = height/9;

    context.lineWidth = lineHeight;
    context.strokeStyle = '#ffffff';

    var offset = lineHeight / 2;
    for (var i=1; i < 8; i+=2) {
        context.moveTo(0, i*lineHeight + offset);
        context.lineTo(width, i*lineHeight + offset);
    }
    context.stroke();

    context.fillRect(0,0,lineHeight*5,lineHeight*5);
    context.beginPath();
    context.moveTo(0, lineHeight*2.5);
    context.lineTo(lineHeight*5,lineHeight*2.5);
    context.moveTo(lineHeight*2.5,0);
    context.lineTo(lineHeight*2.5,lineHeight*5+1);

    context.stroke();
}

function initPolandFlag() {
    var canvas = document.getElementById("poland"),
        width = canvas.width;
        height = canvas.height,
        context = canvas.getContext('2d');
    
    context.fillStyle = "#ffffff";
    context.fillRect(0,0,width,height/2);
    context.fillStyle = "#ff0000";
    context.fillRect(0,height/2,width,height);
}

function initGuyanaFlag() {
    var canvas = document.getElementById('guyana'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');

    context.fillStyle = '#009e49';
    context.fillRect(0,0,width,height);

    createTriangle(context,0,0,width,height/2,0,height, '#ffffff');
    createTriangle(context,0,10,width-25,height/2,0,height-10, '#fcd116');
    createTriangle(context,0,0,width/2,height/2,0,height, '#000000');
    createTriangle(context,0,10,width/2-16,height/2,0,height-10, '#ce1126');
}

function initBahrainFlag() {
    var canvas = document.getElementById('bahrain'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');

    context.fillStyle = '#ce1126';
    context.fillRect(0,0,width,height);

    var baseX = width*0.25;
    context.fillStyle = '#ffffff';
    context.beginPath();
    context.lineTo(baseX,0);

    var zagHeight = height/5;
    for (var i=0; i<5; ++i) {
        context.lineTo(baseX*1.75,(i+0.5)*zagHeight);
        context.lineTo(baseX,(i+1)*zagHeight);
    }
    context.lineTo(0,height);
    context.lineTo(0,0);
    context.closePath();
    context.fill();
}

function initIsraelFlag() {
    var canvas = document.getElementById('israel'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');
    
    context.fillStyle = "#ffffff";
    context.fillRect(0,0,width,height/2);

    var radian = Math.PI/180
        tilt = Math.PI,
        baseX = width / 2,
        baseY = height / 2,
        radius = 24,
        stripHeight = 14;
    
    context.lineWidth = 5;

    createTriangle(context,
        baseX + Math.sin(0) * radius, baseY + Math.cos(0) * radius,
        baseX + Math.sin(radian*120) * radius, baseY + Math.cos(radian*120) * radius,
        baseX + Math.sin(radian*240) * radius, baseY + Math.cos(radian*240) * radius,
        null, '#0040c0');
    
    createTriangle(context,
        baseX + Math.sin(tilt) * radius, baseY + Math.cos(tilt) * radius,
        baseX + Math.sin(radian*120+tilt) * radius, baseY + Math.cos(radian*120+tilt) * radius,
        baseX + Math.sin(radian*240+tilt) * radius, baseY + Math.cos(radian*240+tilt) * radius,
        null, '#0040c0');

    context.lineWidth = stripHeight;
    context.beginPath();
    context.moveTo(0,stripHeight);
    context.lineTo(width,stripHeight);
    context.moveTo(0,height-stripHeight);
    context.lineTo(width,height-stripHeight);
    context.closePath();
    context.stroke();
}

function createTriangle(context, x1,y1,x2,y2,x3,y3,fillColor,strokeColor) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.lineTo(x3,y3);
    context.lineTo(x1,y1);
    context.closePath();
    if (fillColor) {
        context.fillStyle = fillColor;
        context.fill();
    }
    if (strokeColor) {
        context.strokeStyle = strokeColor;
        context.stroke();
    }
}

function initSomaliaFlag() {
    var canvas = document.getElementById('somalia'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');
    
    context.fillStyle = '#4189dd';
    context.fillRect(0,0,width,height);
    
    createStar(context,width/2,height/2,height/15,height/6,5,"#ffffff",null,0);
}

function createStar(context, baseX, baseY, innerRadius, outerRadius, points, fillColor, strokeColor, tilt) {
    var radian = Math.PI/180,
        radianStepper = radian * (360/points) / 2,
        currentRadian = 0,
        radianTilt = tilt*radian;

    context.beginPath();
    context.moveTo(baseX + Math.sin(currentRadian + radianTilt) * innerRadius,
                    baseY + Math.cos(currentRadian + radianTilt) * innerRadius);
    
    for (var i=0; i < points; ++i) {
        currentRadian += radianStepper;
        context.lineTo(baseX + Math.sin(currentRadian + radianTilt) * outerRadius,
                    baseY + Math.cos(currentRadian + radianTilt) * outerRadius);
        currentRadian += radianStepper;
        context.lineTo(baseX + Math.sin(currentRadian + radianTilt) * innerRadius,
                    baseY + Math.cos(currentRadian + radianTilt) * innerRadius);
    }
    context.closePath();
    
    if (fillColor) {
        context.fillStyle = fillColor;
        context.fill();
    }

    if (strokeColor) {
        context.strokeStyle = strokeColor;
        context.stroke();
    }
}

function initTurkeyFlag() {
    var canvas = document.getElementById('turkey'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');

    context.fillStyle = '#e30a17';
    context.fillRect(0,0,width,height);

    context.fillStyle = '#ffffff';
    context.beginPath();
    context.arc(width/2-height/4, height/2, height/4, 0, 2*Math.PI, false);
    context.closePath();
    context.fill();
    
    context.fillStyle = '#e30a17';
    context.beginPath();
    context.arc(width/2-height/5.5, height/2, height/5.5+1, 0, 2*Math.PI, false);
    context.closePath();
    context.fill();

    createStar(context,width/2+height/9,height/2,height/23,height/9,5,'#ffffff',null,15);
}