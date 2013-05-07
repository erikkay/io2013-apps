(function(window) {

var buttonId = 'buy-star';
var resultId = 'payment-result';

function logResult(result) {
  console.log('Payment result: ' + result);
  document.getElementById(resultId).textContent = result;
}

function onPaymentSuccess() {
  logResult('Success!');
}

function onPaymentFailure() {
  logResult('Failure!');
}

function makePurchase() {
  google.payments.inapp.buy({
    parameters: {},
    jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxNDIwNDk' +
         '1MzA5NDM1MjE2ODU3MSIsImF1ZCI6Ikdvb2dsZSI' +
         'sInR5cCI6Imdvb2dsZS9wYXltZW50cy9pbmFwcC9' +
         'pdGVtL3YxIiwiaWF0IjoxMzY3OTQ2NDQ4LCJleHA' +
         'iOjIzNjc5NDY0NDgsInJlcXVlc3QiOnsibmFtZSI' +
         '6IkdvbGQgU3RhciIsImRlc2NyaXB0aW9uIjoiQSB' +
         'zaGluaW5nIGJhZGdlIG9mIGRpc3RpbmN0aW9uIiw' +
         'icHJpY2UiOiIzIiwiY3VycmVuY3lDb2RlIjoiVVN' +
         'EIiwic2VsbGVyRGF0YSI6IllvdXIgRGF0YSBIZXJ' +
         'lIn19.cUiM1SYgsjlZm4jyvjZ4MDWlvbiW9MefMS' +
         'At3QbNKwg',
    success: onPaymentSuccess,
    failure: onPaymentFailure
  });
}

function onDocumentReady() {
  var button = document.getElementById(buttonId);
  button.addEventListener('click', makePurchase);
}

document.addEventListener('DOMContentLoaded', onDocumentReady, false);

})(window);