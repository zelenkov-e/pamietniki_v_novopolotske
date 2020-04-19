const routes = {
  "/": home,
  "/home": home,
  "/contact": contact,
  "/about": our_works,
  "/services": services,
};

const rootDiv = document.getElementById("content");
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

const handleChange = () => {
  const phoneValue = document.getElementById("phone").value;
  const emailValue = document.getElementById("email").value;

  phoneValue.length > 0 &&
    emailValue.length > 0 &&
    $("#btn_send").removeAttr("disabled");
};

const showNoticeMessage = () => {
  $(".alert").show();
  <!-- onNavigate("/home"); -->
};

$("#target").submit(function (event) {
  onNavigate("/home");
  event.preventDefault();
});
