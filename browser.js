function request(path, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    callback(this.responseText);
  }
  xhr.onerror = callback();
  xhr.open('GET', path, true);
  xhr.send();
}
