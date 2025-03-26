const parole = [
    "abaco", "abbaglio", "abbaino", "abbasso", "abbattere", "abbondanza", "abbraccio", "abdicare", "abile", "accadere",
    "bacio", "bagaglio", "bagnato", "balcone", "bambino", "banale", "barca", "baritono", "basilico", "battaglia",
    "calamaro", "campagna", "candela", "capolavoro", "carattere", "cascata", "castello", "cavallo", "celebrare", "cellulare",
    "danza", "debole", "delizioso", "dentista", "deserto", "dialogo", "difficile", "dinamico", "disegno", "divertente",
    "eccellente", "economico", "educato", "effetto", "elegante", "elemento", "energia", "entusiasta", "epoca", "eroe",
    "facile", "famoso", "fantastico", "felicità", "ferrovia", "festival", "figura", "filosofia", "finale", "fiore",
    "generoso", "gigante", "giornale", "giovane", "globo", "grande", "guida", "gusto", "grazia", "genuino",
    "hotel", "hobby", "hacker", "harem", "harakiri", "hidalgo", "hippy", "holding", "horror", "humus",
    "idea", "illuminato", "importante", "inizio", "intelligente", "inverno", "isola", "italiano", "identico", "idolo",
    "lago", "lampada", "libero", "limite", "logico", "luna", "luogo", "luminare", "largo", "leone",
    "magico", "mare", "melodia", "memoria", "meraviglia", "metodo", "moderno", "museo", "musica", "mistero",
    "natura", "necessario", "neve", "nobile", "notizia", "numero", "nascita", "noioso", "normale", "nuvola",
    "obiettivo", "occasione", "oceano", "offerta", "ombra", "opportuno", "orchestra", "orizzonte", "ottimista", "ovunque",
    "palazzo", "paradiso", "passione", "pensiero", "perfetto", "pianeta", "poesia", "positivo", "potente", "prezioso",
    "qualità", "quadro", "quiete", "quintale", "quadro", "quota", "quoziente", "questione", "quotidiano", "quercia",
    "radioso", "ragione", "rapido", "realizzare", "ricchezza", "rispetto", "romantico", "ridente", "rigido", "ruota",
    "saggio", "scienza", "speranza", "spettacolo", "spirito", "splendido", "stimolo", "successo", "sensibile", "sereno",
    "talento", "tenace", "tesoro", "tradizione", "tranquillo", "tattico", "turista", "torrente", "tigre", "tempesta",
    "universo", "utile", "umile", "ufficiale", "ulivo", "umanità", "umorismo", "ubriaco", "ultimo", "uranio",
    "valore", "verde", "vero", "viaggio", "vittoria", "vivace", "volontà", "vortice", "vacanza", "veloce",
    "zelo", "zucchero", "zaino", "zampillo", "zebra", "zenit", "zigzag", "zitto", "zona", "zuppa"
];
const immagini = [
    "./immagini/HangMan_02.gif",
    "./immagini/HangMan_03.gif",
    "./immagini/HangMan_04.gif",
    "./immagini/HangMan_05.gif",
    "./immagini/HangMan_06.gif",
    "./immagini/HangMan_07.gif",
    "./immagini/HangMan_08.gif",
    "./immagini/HangMan_09.gif",
    "./immagini/HangMan_10.gif",
    "./immagini/HangMan_LOSE.gif"
]

var listaCaratteri;
var undescoreList;
var tentativi = 10;
var indiceImg = 0;
const lettereIndovinate = [];
var indexParolaRandom = Math.floor(Math.random() * parole.length);
var parolaRandom = parole[indexParolaRandom];

function sceltaParola(){
    listaCaratteri = parolaRandom.split("");

    undescoreList = new Array(parolaRandom.length).fill("_");

    document.getElementById("parola").innerHTML = undescoreList.join(" ");
}
function riempiSpazi(){
    lettera = document.getElementById("lettera").value;
    var letteraCorretta = false;

    listaCaratteri.forEach((carattere, i) => {
        if(carattere == lettera){
            undescoreList[i] = lettera;
            letteraCorretta = true;
            lettereIndovinate.push(lettera);
        }
    });

    if(letteraCorretta == false){
        tentativi--;
       const img = document.getElementById("img");
       img.src = immagini[indiceImg];
       indiceImg++;
    }

    if(undescoreList.join("") == parolaRandom){
        const img = document.getElementById("img");
        img.src = "./immagini/HangMan_WIN.gif";
        document.getElementById("parola").innerHTML = "Hai vinto!";
        document.getElementById("tentativiRimasti").innerHTML = 0;
    }

    if(tentativi > 0){
        document.getElementById("parola").innerHTML = undescoreList.join(" ");
        document.getElementById("tentativiRimasti").innerHTML = tentativi;
    }
    else{
        document.getElementById("parola").innerHTML = "Tentativi terminati";
        document.getElementById("tentativiRimasti").innerHTML = 0;
    }
}
function reload(){
    location.reload();
}