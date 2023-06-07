let carte = [["image/lunette vert retrecie.png","titre de l'article 1","Lorem ipsum article 1 consectetur, adipisicing elit. Dolorem quo, numquam velit expedita...","categorie de l'article 1", "date de l'article 1"],
["image/lunette vert retrecie.png","titre de l'article 2","Lorem ipsum article 2 consectetur, adipisicing elit. Dolorem quo, numquam velit expedita...","categorie de l'article 2", "date de l'article 2"],
["image/lunette vert retrecie.png","titre de l'article 3","Lorem ipsum article 3 consectetur, adipisicing elit. Dolorem quo, numquam velit expedita...","categorie de l'article 3", "date de l'article 3"],
["image/lunette vert retrecie.png","titre de l'article 4","Lorem ipsum article 4 consectetur, adipisicing elit. Dolorem quo, numquam velit expedita...","categorie de l'article 4", "date de l'article 4"],
["image/lunette vert retrecie.png","titre de l'article 5","Lorem ipsum article 5 consectetur, adipisicing elit. Dolorem quo, numquam velit expedita...","categorie de l'article 5", "date de l'article 5"]];

function creerarticle() {
    for (x = 0 ; x < carte.length; x++){

let container = document.querySelector(".container");

let Div = document.createElement('div');

Div.className = "box";

container.appendChild(Div);

let Div2 = document.createElement('div');
Div2.className = "article";
Div.appendChild(Div2);

let Image = document.createElement("img");
Image.src = carte[x][0];
Image.alt = "oiseau lunette vert";

Div2.appendChild(Image); 

let Div3 = document.createElement('div')
Div3.className = "infos";
Div2.appendChild(Div3);


let titrearticle = document.createElement("h3");
titrearticle.textContent = carte[x][1];
Div3.appendChild(titrearticle);


let corparticle = document.createElement("p");
corparticle.textContent = carte[x][2];
Div3.appendChild(corparticle);


let span = document.createElement("span");
span.className = "italic";
corparticle.appendChild(span);

let lienarticle = document.createElement("a");
lienarticle.textContent = "lire article";
span.appendChild(lienarticle);


let categorie = document.createElement("p");
categorie.textContent = carte[x][3];
Div3.appendChild(categorie);

let date = document.createElement("p");
date.className = "italic"
date.textContent = carte[x][4];
Div3.appendChild(date);
    };
};
;

creerarticle(20);

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let array = [];


array = ["pomme", 18, 20, 'banane'];

array[1] = 19;

let tomate = 5;

let toto = [{ samoussa: "0.40e", tomate: "3e kilo" }]; //tableau associatif

let boisson = [["café", "thé", "tisane", "soupe"], ["coca", "fanta", "sprite", "orangina"], ["oasis", "arizona", "caprisone"], ["cilaos", "edena", "cristaline", "bagatelle"]];

console.log(boisson);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let tableauPrincipal = [
    [1, 2, 3,"bonjour"],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  
  for (i = 0 ; i < tableauPrincipal.length; i++){
    console.log(tableauPrincipal[i]);
    for (j = 0; j < tableauPrincipal[i].length;j++)
    console.log(tableauPrincipal[i][j])
  };
  */