// function creerCarte(lat, lon, zoom) {
//     // Créer une carte Leaflet avec des coordonnées initiales et un niveau de zoom
//     var maCarte = L.map('maCarte').setView([lat, lon], zoom);
  
//     // Ajouter une couche de tuiles de carte (par exemple, OpenStreetMap)
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '© OpenStreetMap contributors'
//     }).addTo(maCarte);
  
//     // Ajouter un marqueur à la position donnée
//     L.marker([lat, lon]).addTo(maCarte);
  
//     // Ajouter d'autres éléments à la carte, tels que des polygones, des lignes, etc.
  
//     // Retourner la référence à la carte
//     return maCarte;
//   }
  


//   var maCarte = creerCarte(48.8566, 2.3522, 1
  

// alert('tropdelaballe');
// console.log

// document.write('<p> jkdsnhkjsqbkjvdnsnjfb');
// window.log

//Selecte l'element appelé ListeArticle
let ArticlesSection = document.getElementById("ListeArticle");

//Créer un <div></div>
let Div = document.createElement('div');
//Rajoute la classe du div avec "articles"
Div.className = "articles";

ArticlesSection.appendChild(Div);


let Image = document.createElement("img");
Image.className = "imgsize";
Image.src = "img/cbd_chien.jpg";
Image.alt = "chien qui prend cbd";

Div.appendChild(Image);
