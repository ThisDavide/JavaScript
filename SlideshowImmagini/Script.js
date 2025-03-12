class Slideshow {
    constructor(ArrImages, interval) {
      this.ArrImages = ArrImages;
      this.interval = interval; // Tempo di scorrimento automatico
      this.index = 0; //indice dell'immagine corrente
      this.timer = null; // Timer per il cambio automatico
      this.init();
    }
    
    init() { //istanza dell'oggetto
      this.aggiornaImmagine(); //aggiurna l'immagine iniziale
      this.scorrimentoAutomatico(); //avvia lo scorrimento automatico
    }
  
    aggiornaImmagine() {
      const imageElement = document.getElementById('image');
      imageElement.src = this.ArrImages[this.index]; //mette l'immagine dell'indice corrente
    }
  
    prossimaImmagine() {
      this.index = (this.index + 1) % this.ArrImages.length; //per far si che l'indice non superi il numero delle immagini
      this.aggiornaImmagine();
    }
  
    immaginePrecedente() {
      this.index = (this.index - 1 + this.ArrImages.length) % this.ArrImages.length;
      this.aggiornaImmagine();
    }
  
    scorrimentoAutomatico() {
        setInterval(() => { //esegue la funzione ripetutamente con un certo intervallo di tempo tra un'esecuzione ed un'altra
          this.prossimaImmagine();
        }, this.interval); //intervallo di 4 secondi
      }
}
  
const ArrImages = [
    'img1.jpeg',
    'img2.jpeg',
    'img3.jpeg',
    'img4.jpeg',
    'img5.jpeg',
    'img6.jpeg',
    'img7.jpeg',
    'img8.jpeg',
];
  
const slideshow = new Slideshow(ArrImages, 4000); //intervallo di 4 secondi tra un'immagine e un'altra
  