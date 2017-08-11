function init02() {
    initPacman();
    initEye();
    initCanadaFlag();
    initHaitiFlag();
    initHaitiFilledStar();
    initTextCanvas();
}

function initPacman() {
    var canvas = document.getElementById('pacman'),
        width = canvas.width,
        height = canvas.height,
        radian = Math.PI/180,
        context = canvas.getContext('2d');

    context.fillStyle = '#000000';
    context.fillRect(0,0,width,height);

    context.fillStyle = '#f3f100';
    context.beginPath();
    context.moveTo(width/2, height/2);
    context.arc(width/2, height/2, 40, 40*radian, 320*radian, false);
    context.lineTo(width/2, height/2);
    context.closePath();
    context.fill();
}

function initEye() {
    var canvas = document.getElementById('eye'),
        width = canvas.width,
        height = canvas.height,
        radian = Math.PI/180,
        context = canvas.getContext('2d');

    context.fillStyle = '#dfdfdf';
    context.fillRect(0,0,width,height);

    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = '#000000';
    context.fillStyle = '#ffffff';
    context.moveTo(0,height/2);
    context.quadraticCurveTo(width/2,0,width,height/2);
    context.quadraticCurveTo(width/2,height,0,height/2);
    context.closePath();
    context.stroke();
    context.fill();
}

function initCanadaFlag() {
    var canvas = document.getElementById('canada'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');

    context.fillStyle = '#ff0000';
    context.fillRect(0,0,width/5,height);
    context.fillRect(width-width/5,0,width/5,height);

    context.beginPath();
    context.moveTo(width*0.42,height*0.19);
    context.bezierCurveTo(width*0.45,height*0.24,width*0.46,height*0.24,
                            width*0.495,height*0.08);
    context.bezierCurveTo(width*0.53,height*0.23,width*0.535,height*0.23,
                            width*0.565,height*0.19);
    context.bezierCurveTo(width*0.54,height*0.43,width*0.55,height*0.44,
                            width*0.605,height*0.31);
    context.bezierCurveTo(width*0.61,height*0.37,width*0.62,height*0.38,
                            width*0.675,height*0.35);
    context.bezierCurveTo(width*0.65,height*0.48,width*0.655,height*0.5,
                            width*0.6775,height*0.51);
    context.bezierCurveTo(width*0.585,height*0.66,width*0.58,height*0.67,
                            width*0.59,height*0.73);
    context.bezierCurveTo(width*0.5,height*0.71,width*0.495,height*0.72,
                            width*0.5,height*0.93);
    context.lineTo(width*0.485,height*0.93);
    context.bezierCurveTo(width*0.485,height*0.72,width*0.485,height*0.71,
                            width*0.395,height*0.74);
    context.bezierCurveTo(width*0.405,height*0.67,width*0.4,height*0.66,
                            width*0.31,height*0.51);
    context.bezierCurveTo(width*0.335,height*0.49,width*0.335,height*0.48,
                            width*0.315,height*0.35);
    context.bezierCurveTo(width*0.37,height*0.38,width*0.375,height*0.37,
                            width*0.385,height*0.31);
    context.bezierCurveTo(width*0.44,height*0.44,width*0.445,height*0.43,
                            width*0.42,height*0.19);

    context.closePath();
    context.fill();
}

function initHaitiFlag() {
    var canvas = document.getElementById('haiti'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');

    context.fillStyle = '#00209f';
    context.fillRect(0,0,width,height/2);
    context.fillStyle = '#d21034';
    context.fillRect(0,height/2,width,height/2);

    var oIMG = new Image();
    oIMG.onload = function() {
        context.drawImage(this, (width-this.width)/2, (height-this.height)/2);
    };
    oIMG.src = 'img/haiti.png';
}

function initHaitiFilledStar() {
    var canvas = document.getElementById('haitiFilledStar'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');
    
    context.fillStyle = 'black';
    context.fillRect(0,0,width,height);

    var oIMG = new Image();
    oIMG.onload = function() {
        var pattern = context.createPattern(this, "repeat");
        createStar(context, width/2, height/2, 45,50,20,pattern,'#ffffff',20);
    };
    oIMG.src = 'img/haiti.png';
}

function initTextCanvas() {
    var canvas = document.getElementById('textCanvas'),
        width = canvas.width,
        height = canvas.height,
        context = canvas.getContext('2d');
    
    var grd = context.createLinearGradient(width/2,height/2,width,height);
    grd.addColorStop(0, '#8ed6ff');
    grd.addColorStop(1, '#004cb3');
    context.fillStyle = grd;
    context.fillRect(0,0,width,height);

    grd = context.createLinearGradient(100, height/2, 200, height/2+110);
    grd.addColorStop(0, '#ffff00');
    grd.addColorStop(1, '#aaaa44');

    context.font = '50pt Verdana, sans-serif';
    context.fillStyle = grd;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = 'rgba(255,255,255,0.5)';
    context.fillText('Hello World!', 100, height/2);
    context.strokeStyle = '#ffffff';
    context.strokeText('Hello World!', 100, height/2);
}