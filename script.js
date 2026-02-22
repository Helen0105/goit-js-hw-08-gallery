const galleryItems = [
  { preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg', description: 'Himilayan Blue Poppy' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg', description: 'Container' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg', description: 'Beach' },
  { preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg', description: 'Flowers' },
  { preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg', description: 'Mountains' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg', description: 'Landscape' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg', description: 'The Alps' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg', description: 'Nature Landscape' },
  { preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg', description: 'Lighthouse' },
];

const listEl = document.querySelector(".js-list");
const btnEl = document.querySelector(".modal-close");
const backdropEl = document.querySelector(".js-backdrop");
const modalImgEl = document.querySelector(".modal-img");

function createItems(arr) {
  const items = arr
    .map(
      ({ preview, description }) =>
        `<li class="js-item">
            <img src="${preview}" alt="${description}">
         </li>`
    )
    .join("");

  listEl.innerHTML = items;
}

createItems(galleryItems);

listEl.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") return;

  const imgSource = event.target.src;

  backdropEl.classList.add("is-open");
  modalImgEl.src = imgSource; 
});

// Закриття
btnEl.addEventListener("click", () => {
  backdropEl.classList.remove("is-open");
  modalImgEl.src = "";
});

backdropEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    backdropEl.classList.remove("is-open");
  }
});