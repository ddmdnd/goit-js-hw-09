  // Описаний в документації
  import SimpleLightbox from "simplelightbox";
  // Додатковий імпорт стилів
  import "simplelightbox/dist/simple-lightbox.min.css";
    
const images = [
    {
      preview:
        "../img/teamWork.jpeg",
      original:
      "../img/teamWork.jpeg",
      description: "Team Work",
    },
    {
      preview:
        "../img/lamp.jpeg",
      original:
      "../img/lamp.jpeg",
      description: "A lamp",
    },
    {
      preview:
        "../img/phone.jpeg",
      original:
      "../img/phone.jpeg",
      description: "A phone",
    },
    {
      preview:
        "../img/meetingRoom.jpeg",
      original:
        "../img/meetingRoom.jpeg",
      description: "A meeting room",
    },
    {
      preview:
        "../img/relaxZone.jpeg",
      original:
        "../img/relaxZone.jpeg",
      description: "Relax Zone",
    },
    {
      preview:
        "../img/office.jpeg",
      original:
      "../img/office.jpeg",
      description: "Office",
    },
    {
      preview:
        "../img/desk.jpeg",
      original:
      "../img/desk.jpeg",
      description: "A desk",
    },
    {
      preview:
        "../img/girlAndLaptop.jpeg",
      original:
      "../img/girlAndLaptop.jpeg",
      description: "A girl and a laptop",
    },
    {
      preview:
        "../img/meeting.jpeg",
      original:
      "../img/meeting.jpeg",
      description: "Meeting",
    },
  ];
  // preventDefault();
  const gallery = document.querySelector(".gallery")
  const imageGallery = images.reduce((html, image) => {
  return html + `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
  <img class="gallery-image" src="${image.preview}" alt="${image.description}" />
  </a></li>`;
  },"");
  gallery.innerHTML = imageGallery;
  const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

  

  
  