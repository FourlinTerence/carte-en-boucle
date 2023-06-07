function creerarticle(y) {
    for (x = 1 ; x <= y; x++){

let container = document.querySelector(".container");

let Div = document.createElement('div');

Div.className = "box";

container.appendChild(Div);

let Div2 = document.createElement('div');
Div2.className = "article";
Div.appendChild(Div2);

let Image = document.createElement("img");
Image.src = "image/lunette vert retrecie.png";
Image.alt = "oiseau lunette vert";

Div2.appendChild(Image); 

let Div3 = document.createElement('div')
Div3.className = "infos";
Div2.appendChild(Div3);


let titrearticle = document.createElement("h3");
titrearticle.textContent = "Titre de l'article";
Div3.appendChild(titrearticle);

let corparticle = document.createElement("p");
corparticle.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quo, numquam velit expedita...";
Div3.appendChild(corparticle);


let span = document.createElement("span");
span.className = "italic";
corparticle.appendChild(span);

let lienarticle = document.createElement("a");
lienarticle.textContent = "lire article";
span.appendChild(lienarticle);


let categorie = document.createElement("p");
categorie.textContent = "categorie de l'article";
Div3.appendChild(categorie);

let date = document.createElement("p");
date.className = "italic"
date.textContent = "09/06/2023";
Div3.appendChild(date);
    };
};

creerarticle(20);
