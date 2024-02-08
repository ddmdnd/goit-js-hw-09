 import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


    
export const images = [
    // {
    //   preview:
    //   "../img/teamWork.png",
    //   original:
    //   "../img/teamWork4.png",
    //   description: "Team Work",
    // },
    // {
    //   preview:
    //    "img/lamp.png",
    //   original:
    //   "img/lamp4.png",
    //   description: "A lamp",
    // },
    // {
    //   preview:
    //   "/img/phone.png",
    //   original:
    //   "/img/phone4.png",
    //   description: "A phone",
    // },
    // {
    //   preview:
    //   "/img/meetingRoom.png",
    //   original:
    //   "/img/meetingRoom4.png",
    //   description: "A meeting room",
    // },
    // {
    //   preview:
    //   "/img/relaxZone.png",
    //   original:
    //   "/img/relaxZone4.png",
    //   description: "Relax Zone",
    // },
    // {
    //   preview:
    //   "/img/office.png",
    //   original:
    //   "/img/office4.png",
    //   description: "Office",
    // },
    // {
    //   preview:
    //     "/img/desk.png",
    //   original:
    //   "/img/desk4.png",
    //   description: "A desk",
    // },
    // {
    //   preview:
    //   "/img/girlAndLaptom.png",
    //   original:
    //   "/img/girlAndLaptom4.png",
    //   description: "A girl and a laptop",
    // },
    // {
    //   preview:
    //     "/img/meeting.png",
    //   original:
    //   "/img/meeting4.png",
    //   description: "Meeting",
    // },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
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
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
  });
 


  

  
  