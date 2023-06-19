console.log('Vue OK', Vue);

//# Creo l'app di Vue
const app = Vue.createApp({
  //# Nome dell'app
  name: 'Carousel',

  //# Dati
  data() {
    return {
      //* Array con le immagini
      pictures: [
        {
          image: 'img/01.webp',
          title: "Marvel's Spiderman Miles Morale",
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      currentIndex: 0,
    };
  },

  //# Funzioni collegate ai dati
  computed: {},

  //# Funzioni
  methods: {
    //* Passa all'indice successivo
    goToNext() {
      this.currentIndex++;
    },

    //* Passa all'indice precedente
    goToPrev() {
      this.currentIndex--;
    },
  },
});

app.mount('#root');

// //# Variabili
// let imgElement;

// // //# Creo il ciclo per inserire le immagini
// for (let i = 0; i < images.length; i++) {
//   imgElement = document.createElement('img');
//   imgElement.src = images[i];
//   imgElement.alt = 'Landscape ' + (i + 1);
//   galleryElement.appendChild(imgElement);

//   const thumbnails = imgElement.cloneNode();
//   thumbnailGallery.appendChild(thumbnails);
// }

// //# LOGICA
// const mainImages = document.querySelectorAll('#carousel img');
// const imagesAside = document.querySelectorAll('#thumbnails img');
// let currentIndex = 0;

// //* Inserisco nella prima immagina la classe active e layer
// mainImages[currentIndex].classList.add('active');
// imagesAside[currentIndex].classList.add('layer');

// //# Tenere in ascolto i bottoni
// //! PREV
// btnPrev.addEventListener('click', function () {
//   mainImages[currentIndex].classList.remove('active');
//   imagesAside[currentIndex].classList.remove('layer');
//   if (currentIndex === 0) {
//     currentIndex = mainImages.length - 1;
//   } else {
//     currentIndex--;
//   }
//   mainImages[currentIndex].classList.add('active');
//   imagesAside[currentIndex].classList.add('layer');
//   console.log(currentIndex);
// });

// //! NEXT
// btnNext.addEventListener('click', function () {
//   mainImages[currentIndex].classList.remove('active');
//   imagesAside[currentIndex].classList.remove('layer');
//   if (currentIndex === mainImages.length - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }
//   mainImages[currentIndex].classList.add('active');
//   imagesAside[currentIndex].classList.add('layer');

//   console.log(currentIndex);
// });
