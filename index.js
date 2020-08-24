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

const handleInputChange = (value) => {
  const inputValue = document.getElementById(value).value;
  // handleValiadationForm();
  if (inputValue.length > 0) {
    $("#btn_send").removeAttr("disabled");
  } else {
    $("#btn_send").prop("disabled", true);
  }
};

document.addEventListener("submit", (e) => {
  // e.preventDefault();
  toastr.success("сообщение успешно отпрвлено");
  // onNavigate("/home");
});
