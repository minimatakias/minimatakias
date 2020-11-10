$(document).ready(function(){
  var $name = $('#name'),
    $address = $('#address'),
    $number = $('#number'),
    $formData = $('form#data'),
    $conversation = $('#conversation');

  if (localStorage.getItem('name'))
    $name.val(localStorage.getItem('name'))

  if (localStorage.getItem('address'))
    $address.val(localStorage.getItem('address'))

  if (localStorage.getItem('number'))
    $number.val(localStorage.getItem('number'))

  $formData.submit(function(e) {
    e.preventDefault();

    localStorage.setItem('name', $name.val());
    localStorage.setItem('address', $address.val());
    localStorage.setItem('number', $number.val());

    var message = $number.val() + ' ' + $name.val() + ' ' + $address.val(),
        $yourMessage = $('#yourMessage'),
      $yourDate = $('#yourDate'),
      $theirMessage = $('#theirMessage');
    $yourDate.text(getDate());
    $yourMessage.text(message);
    $theirMessage.text('ΜΕΤΑΚΙΝΙΣΗ ' + normalizeGreek(message));
    $conversation.show();

  });

  function getDate() {
    var d = new Date();

    d.setMinutes(d.getMinutes() - 15); // timestamp
    d = new Date(d);

    minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();

    var clock = d.getHours() + ":" + minutes;
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var currentDate =
        (("" + day).length < 2 ? "0" : "") +
        day +
        "." +
        (("" + month).length < 2 ? "0" : "") +
        month +
        "." +
        d.getFullYear() +
        "  " +
        clock;

    return currentDate;
  }

  function normalizeGreek(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }
});
var elem = document.getElementById("body");

elem.onclick = function() {
  req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
  req.call(elem);
}
