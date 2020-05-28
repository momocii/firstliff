window.onload = function() {
  liff
    .init({
      liffId: "1654285523-4EB1Y6X0" // use own liffId
    })
    .then(() => {
      // Start to use liff's api
    })
    .catch((err) => {
      // Error happens during initialization
      console.log(err.code, err.message);
  });

  document.getElementById('openwindowbutton').addEventListener('click', function() {
    //liff.openWindow({url: 'https://google.com/'});
    window.open('https://google.com/');
    liff.closeWindow();
  });
}
