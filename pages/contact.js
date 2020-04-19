let contact = `
<div class="col-md-6 mb-5">
<form id="target" method="POST" action="/">
  <div class="form-group">
    <label class = 'form_label' htmlFor = 'name'>*Для отправки Вашего сообщения обязательно введите имя и имейл</label>
    <input
      type="text"
      name="name"
      class="form-control"
      id="name"
      aria-describedby="emailHelp"
      placeholder="Ваше имя"
    />
  </div>
  <div class="form-group">
    <input
      type="email"
      name="email"
      class="form-control"
      id="email"
      aria-describedby="emailHelp"
      placeholder="Ваша почта"
    />
  </div>
  <div class="form-group">
    <input
      type="text"
      name="phone"
      class="form-control"
      id="phone"
      aria-describedby="emailHelp"
      placeholder="Ваш телефон"
      onchange="handleChange()"
      />
  </div>
  <div class="form-group">
    <input
      type="text"
      name="message"
      class="form-control"
      id="message"
      aria-describedby="emailHelp"
      placeholder="Ваше сообщение"
    />
  </div>
  <div class="form-group form-check">
  </div>
  <button id='btn_send' disabled class="btn btn-dark" onclick="showNoticeMessage()">отправить</button>
</form>
</div>
<div class="col-md-5 mb-5">
  <h2>Наши контакты</h2>
  <hr />
  <address>
    <br />г. Новополоцк, <br />ул. Молодёжная, д.45, корп. 2, офис 1.
    <br />
  </address>
  <address>
    8 (0214) 52 99 91, 8 (029) 353 85 00, 8 (029) 714 59 99.
    <a href="mailto:#">krupenko_lena@mail.ru</a>
  </address>
</div>
<div class="col-md-12 mb-5">
  <div class="alert alert-success alert-dismissable">
    <strong>Info!</strong> сообщение успешно отпрвлено
    <a href="#" class="btn btn-dark"  data-dismiss="alert" onclick="onNavigate('/home'); return false;">на главную >></a>
  </div>
</div>
`;
