var commands = [];
var minusReplacement = '_';
//var command = '';

function setup() {
  createCanvas(400, 400);
  commands[0] = '';
}

function draw() {
  background(220);
  noStroke();
  fill(200,50,100);
  textSize(32);
  for (var i = 0; i < commands.length; i++) {
    text('> ' + commands[i],25,(400+(i*30))-(commands.length*30));
  }
}

function button(b) {
  if (b == '=') {
    if (commands[commands.length-1] == '' && commands.length>2) {
      commands[commands.length-1] = commands[commands.length-3];
    }
    var peices = splitTokens(commands[commands.length-1], ['+',minusReplacement,'*','/']);
    var mafs = splitTokens(commands[commands.length-1], ['a','1','2','3','4','5','6','7','8','9','0']);
    //console.log(peices);
    //console.log(mafs);
    var total = peices[0];
    if (total == 'a') {
      if (commands.length>2) {
        total = commands[commands.length-2];
      }else{
        total = 0;
      }
    }
    for (var i = 0; i < mafs.length; i++) {
      if (mafs[i]=='+') {
        total = int(total) + int(peices[i+1]);
      }
      if (mafs[i]==minusReplacement) {
        total = int(total) - int(peices[i+1]);
      }
      if (mafs[i]=='*') {
        total = int(total) * int(peices[i+1]);
      }
      if (mafs[i]=='/') {
        total = int(total) / int(peices[i+1]);
      }
    }
    //console.log(total);
    commands[commands.length] = total;
    commands[commands.length] = '';
  }else if(b == 'cc') {
    commands = [];
    commands[0] = '';
  }else if(b == 'c') {
    commands[commands.length-1] = '';
  }/*else if(b == 'a' && commands.length > 1) {
    commands[commands.length-1] = str(commands[commands.length-1]) + str(commands[commands.length-2]);
  }else if(b == 'a') {
    commands[commands.length-1] = str(commands[commands.length-1]) + 0;
  }*/else if(b == '-') {
    commands[commands.length-1] = commands[commands.length-1] + minusReplacement;
  }else{
    commands[commands.length-1] = commands[commands.length-1] + b;
  }
}