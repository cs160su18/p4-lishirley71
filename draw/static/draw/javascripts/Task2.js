window.onload = function() {

    // setting up the canvas and one paper tool
    var canvas = document.getElementById('myCanvas');
    paper.setup(canvas);
    var tool = new paper.Tool();
    
//     window.addEventListener()
//     paper.project.activeLayer.removeChildren();
    // getting the URL (you may want to use for Exercise 3)
    var url = window.location.href;

    var userPaths = {};
    var path = new paper.Path();
    var point;
    var acceleration = [];
    var movingAvgLen = 10;
  
    var average = function (items) {
      var sum = 0;
      for (var i = 0; i < items.length; i++) {
         sum += items[i];
      }
      return sum / items.length;
    }
  
  
    window.addEventListener('devicemotion', function(event) {
      $("#acc").text(event.acceleration.x + ' m/s2');
    });

  
    //https://www.paulirish.com/2009/random-hex-color-code-snippets/
    var colorStroke = '#' + (function co(lor){   return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]) && (lor.length == 6) ?  lor : co(lor); })('');
    
   tool.onMouseMove = function (event) {
    point = {x: event.point.x, y: event.point.y};
    path.strokeColor = colorStroke;
    path.add(new paper.Point(event.point.x, event.point.y));       
   }

}