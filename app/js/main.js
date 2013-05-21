var PRESENTATION_WIDTH = 400;

var presentationWindow;

var createPresentationWindow = function() {
  if (presentationWindow && !presentationWindow.closed) {
    presentationWindow.chrome.app.window.focus();
    return;
  }
  
  var getBounds = function() {
    // stick to the upper right corner
    //var left = Math.max((screen.width - PRESENTATION_WIDTH), 0);
    var left = 0;
    var top = -20;
    var bounds = {
      left: left, top: top,
      width: PRESENTATION_WIDTH, height: screen.availHeight
    };
    return bounds;
  }

  chrome.app.window.create('presentation.html', {
      frame: 'none',
      bounds: getBounds(),
      minWidth: PRESENTATION_WIDTH, minHeight: screen.availHeight,
      maxWidth: PRESENTATION_WIDTH, maxHeight: screen.availHeight
  }, function(w) {
    presentationWindow = w;
    w.onBoundsChanged.addListener(function() {
      //var b = getBounds();
      //w.setBounds(b);
      //console.log("bounds changed");
      //console.log(b);
    });
    w.onClosed.addListener(function() {
      presentationWindow = null;
    })
  });
};

chrome.app.runtime.onRestarted.addListener(function() {
  createPresentationWindow();
});

chrome.app.runtime.onLaunched.addListener(function() {
  createPresentationWindow();
});

