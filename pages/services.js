const our_servises = [
  "Полное благоустройство",
  "Реконструкция и реставрация захоронений",
  "Скамейки, вазы, столешницы из природного камня",
  "Сезонные скидки, рассрочка",
  "Бесплатное хранение",
];

const setServise = (service) => {
  return `
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <div class="card-body">
         <h3>${service}</h3>
          <p class="card-text">
            Более подробную информацию вы можете уточнить у нашего консультанта
          </p>
        </div>
        <div class="card-footer">
          <a href="#" onclick="onNavigate('/contact'); return false;" class="btn btn-dark">
            Задать вопрос >>
          </a>
        </div>
      </div>
    </div>
      `;
};

let services = `
<div class="col-md-8 mb-5">
  <h1>Наши Услуги</h1>
  <hr />
</div>
<section class="row">
  ${our_servises.map((service) => setServise(service)).join("")}
</section>
`;
