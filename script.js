// ======================================================
// MY PERSONAL CORNER
// Script Principal
// ======================================================

"use strict";

// ======================================================
// CONFIGURAÇÕES
// ======================================================

const APP = {

    name: "My Personal Corner",

    version: "1.0.0"

};

// ======================================================
// BANCO DE DADOS
// ======================================================

let libraryData = {

    user: {

        name: "",

        avatar: "",

        logged: false

    },

    books: [],

    settings: {

        darkMode: false,

        readingGoal: 12

    }

};

// ======================================================
// ELEMENTOS HTML
// ======================================================

const elements = {};

// ======================================================
// FUNÇÕES AUXILIARES
// ======================================================

function $(id){

    return document.getElementById(id);

}

function saveLibrary(){

    localStorage.setItem(

        "myPersonalCorner",

        JSON.stringify(libraryData)

    );

}

function loadLibrary(){

    const saved = localStorage.getItem("myPersonalCorner");

    if(saved){

        libraryData = JSON.parse(saved);

    }

}

function showToast(message){

    console.log(message);

}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        loadLibrary();

        console.log(

            APP.name,

            APP.version,

            "iniciado."

        );

    }

);
// ======================================================
// MY PERSONAL CORNER
// Script Principal
// Etapa 4.2
// ======================================================

"use strict";

// ======================================================
// CONFIGURAÇÕES
// ======================================================

const APP = {

    name: "My Personal Corner",

    version: "1.0.0",

    storageKey: "myPersonalCorner"

};

// ======================================================
// BANCO DE DADOS PADRÃO
// ======================================================

const defaultLibrary = {

    user: {

        name: "",

        avatar: "",

        logged: false

    },

    books: [],

    settings: {

        darkMode: false,

        readingGoal: 12

    }

};

let libraryData = structuredClone(defaultLibrary);

// ======================================================
// FUNÇÕES AUXILIARES
// ======================================================

function $(id){

    return document.getElementById(id);

}

function saveLibrary(){

    localStorage.setItem(

        APP.storageKey,

        JSON.stringify(libraryData)

    );

}

function loadLibrary(){

    const saved = localStorage.getItem(APP.storageKey);

    if(!saved){

        saveLibrary();

        return;

    }

    try{

        libraryData = JSON.parse(saved);

    }

    catch(error){

        console.error("Erro ao carregar biblioteca.", error);

        libraryData = structuredClone(defaultLibrary);

        saveLibrary();

    }

    migrateData();

}

// ======================================================
// MIGRAÇÃO DOS DADOS
// ======================================================

function migrateData(){

    if(!libraryData.user){

        libraryData.user = structuredClone(defaultLibrary.user);

    }

    if(!libraryData.books){

        libraryData.books = [];

    }

    if(!libraryData.settings){

        libraryData.settings = structuredClone(defaultLibrary.settings);

    }

    libraryData.books.forEach(book=>{

        if(!book.id){

            book.id = Date.now() + Math.random();

        }

        if(!book.title){

            book.title = "";

        }

        if(!book.author){

            book.author = "";

        }

        if(!book.publisher){

            book.publisher = "";

        }

        if(!book.isbn){

            book.isbn = "";

        }

        if(!book.cover){

            book.cover = "";

        }

        if(!book.genre){

            book.genre = "";

        }

        if(!book.pages){

            book.pages = 0;

        }

        if(!book.currentPage){

            book.currentPage = 0;

        }

        if(!book.status){

            book.status = "quero ler";

        }

        if(!book.rating){

            book.rating = 0;

        }

        if(!book.description){

            book.description = "";

        }

        if(!book.tags){

            book.tags = [];

        }

        if(!book.startDate){

            book.startDate = "";

        }

        if(!book.endDate){

            book.endDate = "";

        }

        if(!book.createdAt){

            book.createdAt = new Date().toISOString();

        }

    });

    saveLibrary();

}

// ======================================================
// CONSULTAS
// ======================================================

function getBooks(){

    return libraryData.books;

}

function getBook(id){

    return libraryData.books.find(

        book => book.id === id

    );

}

// ======================================================
// DEBUG
// ======================================================

function printLibrary(){

    console.table(

        libraryData.books

    );

}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        loadLibrary();

        console.log(

            APP.name,

            "carregado com sucesso."

        );

        console.log(

            libraryData

        );

    }

);
