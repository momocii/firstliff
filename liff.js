window.onload = function() {
  liff
    .init({
      liffId: "1654285523-4EB1Y6X0" // use own liffId
    })
    .then(() => {
      document.getElementById('deviceOS').textContent = liff.getOS();
      document.getElementById('sdkVersion').textContent = liff.getVersion();
      document.getElementById('lineVersion').textContent = liff.getLineVersion();
    })
    .catch((err) => {
      // Error happens during initialization
      console.log(err.code, err.message);
  });

  document.getElementById('openwindowbutton').addEventListener('click', function() {
    liff.openWindow({url: 'https://google.com/'});
    liff.closeWindow();
  });

  document.getElementById('openwindowbutton2').addEventListener('click', function() {
    window.open('https://google.com/');
    liff.closeWindow();
  });

  document.getElementById('openwindowbutton3').addEventListener('click', function() {
    liff.openWindow({url: 'https://google.com/'});
  });

  document.getElementById('openwindowbutton4').addEventListener('click', function() {
    liff.closeWindow();
  });

  document.getElementById('openwindowbutton5').addEventListener('click', function() {
    //liff.closeWindow();
    //liff.openWindow({url: 'https://google.com/'});
    
    //window.close();
    //liff.openWindow({url: 'https://google.com/'});
    
    window.unload = function() {
      liff.openWindow({url: 'https://google.com/'});
      return;
    }
    window.close();
  });
  
}
