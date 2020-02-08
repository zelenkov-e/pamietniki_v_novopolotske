const routes = {
  '/': home,
  '/home': home,
  '/contact': contact,
  '/about': about,
  '/services': services,
};

const rootDiv = document.getElementById('content');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
