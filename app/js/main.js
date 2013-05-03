var PRESENTATION_WIDTH = 400;
var PRESENTATION_HEIGHT = screen.availHeight;

var presentationWindow;

var createPresentationWindow = function() {
  if (presentationWindow && !presentationWindow.closed) {
    presentationWindow.chrome.app.window.focus();
    return;
  }

  // stick to the upper right corner
  var left = Math.max((screen.width - PRESENTATION_WIDTH), 0);
  var top = -20;

  chrome.app.window.create('presentation.html?presentme=true', {
      //id: "sidebar",
      //singleton: true,
      frame: 'none',
      bounds: {
        left: left, top: top,
        width: PRESENTATION_WIDTH, height: PRESENTATION_HEIGHT
      },
      minWidth: PRESENTATION_WIDTH, minHeight: PRESENTATION_HEIGHT,
      maxWidth: PRESENTATION_WIDTH * 2, maxHeight: PRESENTATION_HEIGHT
  }, function(w) {
    presentationWindow = w;
  });
};

console.log("hello world");

chrome.app.runtime.onRestarted.addListener(function() {
  createPresentationWindow();
});

chrome.app.runtime.onLaunched.addListener(function() {
  createPresentationWindow();
});



