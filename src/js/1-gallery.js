  // Описаний в документації
  import SimpleLightbox from "simplelightbox";
  // Додатковий імпорт стилів
  import "simplelightbox/dist/simple-lightbox.min.css";
    
const images = [
    {
      preview:
        "./img/teamWork.png",
      original:
      "./img/teamWork4.png",
      description: "Team Work",
    },
    {
      preview:
        "./img/lamp.png",
      original:
      "./img/lamp4.png",
      description: "A lamp",
    },
    {
      preview:
        "../img/phone.png",
      original:
      "../img/phone4.png",
      description: "A phone",
    },
    {
      preview:
        "../img/meetingRoom.png",
      original:
        "../img/meetingRoom4.png",
      description: "A meeting room",
    },
    {
      preview:
        "../img/relaxZone.png",
      original:
        "../img/relaxZone4.png",
      description: "Relax Zone",
    },
    {
      preview:
        "../img/office.png",
      original:
      "../img/office4.png",
      description: "Office",
    },
    {
      preview:
        "../img/desk.png",
      original:
      "../img/desk4.png",
      description: "A desk",
    },
    {
      preview:
        "../img/girlAndLaptom.png",
      original:
      "../img/girlAndLaptom4.png",
      description: "A girl and a laptop",
    },
    {
      preview:
        "../img/meeting.png",
      original:
      "../img/meeting4.png",
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
  // const lightbox = new SimpleLightbox('.gallery a', { /*  */ });


  

  
  