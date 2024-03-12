// class SayHello {
//   getName() {
//     return `Hello Dafa`;
//   }
// }

// console.log(SayHello);

// const data = new SayHello();

// console.log(data.getName());

class Testimonial {
  #quote = ""; // property privat
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }
  get image() {
    return this.#image;
  }

  get ShowTestimonials() {
    return `<div class="testimonial">
    <img
      class="profile-testimonial"
      src="${this.image}"
      alt="profile"
    />
    <p class="quote">${this.quote}</p>
    <p class="author">${this.author}</p>
  </div>`;
  }
}

class Author extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

const user1 = new Author(
  "Muhamad Dafa Adly",
  "Bismillah Cepat Bisa",
  "https://i.pinimg.com/originals/87/6e/b8/876eb805bf4e7d2f6bdb396193f6873c.jpg"
);

const user2 = new Author(
  "Muhamad Dafa",
  "Bismillah Cepat",
  "https://asset-apac.unileversolutions.com/content/dam/unilever/axe/indonesia/general_image/model_rambut_pria_untuk_wajah_bulat_side_part_hair-2195972-jpg.jpg.ulenscale.687x687.jpg"
);

const user3 = new Author(
  "Dafa Adly",
  "Cepat Bisa",
  "https://www.dailysia.com/wp-content/uploads/2020/04/amanda-rawles.jpg?x99839"
);


let data = [user1, user2, user3];
let dataForHTML = "";

for (let i = 0; i < data.length; i++) {
  dataForHTML += data[i].ShowTestimonials;
}

document.getElementById("testimonials").innerHTML = dataForHTML;
