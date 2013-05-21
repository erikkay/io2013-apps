(function(window) {
var document = window.document;
var buttonId = 'buy-star';
var buttonIdProd = 'buy-prod-star';
var resultId = 'payment-result';

function logResult(result) {
  console.log('Payment result: ' + result);
  document.getElementById(buttonId).className = result;
}

function onPaymentSuccess() {
  logResult('success');
}

function onPaymentFailure() {
  logResult('failure');
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

function makeProdPurchase() {
  google.payments.inapp.buy({
    parameters: {env: 'prod'},
    jwt: 'eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9' +
         '.eyJhdWQiOiAiR29vZ2xlIiwgImlzcyI6ICIwMjA' +
         '1NTA5MDM4OTY2NTMxMzk3MSIsICJyZXF1ZXN0Ijo' +
         'geyJwcmljZSI6ICIzLjAwIiwgImN1cnJlbmN5Q29' +
         'kZSI6ICJVU0QiLCAic2VsbGVyRGF0YSI6ICJfc2V' +
         'sbGVyX2RhdGFfIiwgIm5hbWUiOiAiR29sZCBTdGF' +
         'yIiwgImRlc2NyaXB0aW9uIjogIkEgc2hpbmluZyB' +
         'iYWRnZSBvZiBkaXN0aW5jdGlvbiJ9LCAiZXhwIjo' +
         'gMjM2ODIwNzc1NCwgImlhdCI6IDEzNjgyMDc3NTQ' +
         'sICJ0eXAiOiAiZ29vZ2xlL3BheW1lbnRzL2luYXB' +
         'wL2l0ZW0vdjEifQ.c69xrbdfiG5pUdkckft0GrOG' +
         'qt32Xfu1ywS4Wi85uGE',
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