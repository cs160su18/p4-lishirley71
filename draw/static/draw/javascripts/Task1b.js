window.onload = function() {

    // setting up the canvas and one paper tool
    var canvas = document.getElementById('myCanvas');
    paper.setup(canvas);
    var tool = new paper.Tool();

    // getting the URL (you may want to use for Exercise 3)
    var url = window.location.href;
    var socket = new WebSocket('ws://' + window.location.hostname + ':8765/');
    socket.id = Math.floor(100000*Math.random());
    var userPaths = {};
    var path = new paper.Path();
    var point;

    //https://www.paulirish.com/2009/random-hex-color-code-snippets/
    var colorStroke = '#' + (function co(lor){   return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]) && (lor.length == 6) ?  lor : co(lor); })('');
  
    socket.onopen = function (event) {
      socket.send(JSON.stringify({id: socket.id, "open": true}));
    }
    
    
   tool.onMouseMove = function (event) {
      point = {x: event.point.x, y: event.point.y};
      var message = JSON.stringify({id: socket.id, color: colorStroke, point: point});
     
      socket.send(message); 
      path.strokeColor = colorStroke;
      path.add(new paper.Point(event.point.x, event.point.y));
    }
    
    socket.onmessage = function(received) {
      var data = JSON.parse(received.data);
  
      var point = data.point;
      var color = data.color;
      
      
      if (!(data.id in userPaths)) {
        userPaths[data.id] = new paper.Path();
      }
      
      if (data.id !== socket.id) {
        var newPoint = new paper.Point(point.x, point.y);
        userPaths[data.id].strokeColor = color;
        userPaths[data.id].add(newPoint);
      }
      
    };
  
  
    socket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
    };
}