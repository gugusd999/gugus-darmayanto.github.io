// jika halaman tidak ada
// membuat login system

const dataCssAdmin = [
  'font/css/all',
  'bootstrap4/bootstrap.min',
  'css/custome/1'
];

const dataJsAdmin = [
  'bootstrap4/popper.min',
  'bootstrap4/bootstrap.min',
  'firebase/firebase-app',
  'firebase/firebase-analytics'
]

root.err = function () {
  var arg = [];
  loadCss(dataCssAdmin, function () {
    loadPage([
      'page/404/a',
    ], function () {
      rootCall('page/404/a', arg);
    })
  })
}

root.verify = function (a) {

  // make verify
  if (localStorage.getItem('login') === null) {
    location.href = "#/wp-login"
  } else {
    return false;
  }

}

root.get('/', function () {
  var arg = arguments;
  loadCss(dataCssAdmin, function () {
    loadPage([
      'page/portofolio/port1/a',
    ], function () {
      loadJs(dataJsAdmin, function () {
        rootCall('page/portofolio/port1/a', arg);
      })
    })
  })
})

// halaman pertama kali di load
root.start('/');

// realtime set update

// set for logout 

$('body').on('click', '[logout-wp]', function (event) {
  event.preventDefault();
  localStorage.removeItem('login');
  location.href = '#/wp-login';
})