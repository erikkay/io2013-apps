(function(window) {
  var document = window.document;
  var buttonId = 'display-ad';
  var containerId = 'display-ad-container';
  var adviewDemoSdkUrl = 'https://googledrive.com/host/0Bz2lWoAuh61VNERFdjV3YlZWRk0/adview-demo-sdk.html';

  function displayAd(adviewId, adviewOptions) {
    console.log('displayAd: ' + adviewId);
    var adview = document.createElement('adview');
    adview.setAttribute('id', adviewId);
    adview.setAttribute('class', 'adview-element');
    adview.setAttribute('ad-network', 'adview-demo');
    adview.setAttribute('src', adviewDemoSdkUrl);
    adview.style.width = adviewOptions.width;
    adview.style.height = adviewOptions.height;
    var loaded = 0;
    adview.addEventListener('loadcommit', function(e) {
      console.log('loadcommit: isTopLevel:' + e.isTopLevel + ', url:' + e.url);
      //if (!e.isTopLevel)
      //  return;
      if (loaded++ >= 5)
        return;
      // adview demo sdk guest page is loaded. Post message to start session.
      adview.contentWindow.postMessage({
        'message': 'display-ad',
        'publisher_data': adviewOptions
      }, '*')
    });
    window.addEventListener('message', onPostMessage, false);

    var container = document.getElementById(containerId);
    container.appendChild(adview);
  }

  function adDisplayed(source, appMessage) {
    var adview = document.getElementById('my-adview');
    adview.style.height = appMessage.data.ad_size.height;

    console.log('adDisplayed: height=' + appMessage.data.ad_size.height);
    //displayStatus('Ad displayed( ' + appMessage.sequence_number + '): ' +
    //              'height=' + appMessage.data.ad_size.height);
  }

  function adClicked(source, appMessage) {
    //displayStatus('Ad clicked(' + appMessage.sequence_number + '): ' +
    //              'publisher id=' + appMessage.publisher_data.id);
  }

  function processAppMessage(source, appMessage) {
    console.log('processAppMessages: ' + appMessage.message);
    if (appMessage.message == 'ad-displayed') {
      adDisplayed(source, appMessage);
    }
    if (appMessage.message == 'ad-clicked') {
      adClicked(source, appMessage);
    }
  }

  function onPostMessage(event) {
    processAppMessage(event.source, event.data);
  }

  function onDocumentReady() {
    var button = document.getElementById(buttonId);
    button.addEventListener('click', function() {
      displayAd('my-adview', {
        width: '100%',
        height: '200px',
        unitid: 123456
      });
    });
  }

  document.addEventListener('DOMContentLoaded', onDocumentReady, false);
})(window);
