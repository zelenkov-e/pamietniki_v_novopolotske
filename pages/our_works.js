const imgs = [
  "/assets/our_work/2.jpg",
  "/assets/our_work/3.jpg",
  "/assets/our_work/4.jpg",
  "/assets/our_work/5.jpg",
  "/assets/our_work/6.jpg",
  "/assets/our_work/7.jpg",
];

const setImg = (img) => {
  return `
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <img class="card-img-top" src=${img} title="Памятник из гранита" alt="Памятник из гранита"/>
        <div class="card-body">
          <h4 class="card-title">Памятник из гранита</h4>
          <p class="card-text">
            Более подробную информацию вы можете уточнить у нашего консультанта
          </p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-dark"  onclick="onNavigate('/contact'); return false;">подробнее >></a>
        </div>
      </div>
    </div>
       `;
};

let our_works = `
<section class="col-md-8 mb-5">
<h1>Наши работы</h1>
<hr />
<p>Выполнение работ любой категории сложности,возможность изготовления по эскизам и размерам заказчика.</p>
<a class="btn btn-dark btn-lg" href="#" onclick="onNavigate('/contact'); return false;">Написать нам &raquo;</a>
</section>
<section class="row">
 ${imgs.map((img) => setImg(img)).join("")} 
</section>
`;
