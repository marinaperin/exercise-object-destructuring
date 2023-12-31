// Exercise 1
/*
    Dato il seguente oggetto in JavaScript, convertilo 
    in una stringa JSON.
*/

const utente1 = {
  nome: "Alice",
  eta: 25,
  hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
  indirizzo: {
    via: "123 Via degli Aceri",
    citta: "Paese delle Meraviglie",
  },
};

const JSONString = JSON.stringify(utente1);


// Exercise 2
/*
    Converti la seguente stringa JSON in un oggetto JavaScript 
    e registra l'`email` e l'`id` nella console.
*/

const string = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';

const obj = JSON.parse(string);

console.log(obj.id, obj.email);


// Exercise 3
/*
    Utilizza la distrutturazione degli oggetti per estrarre
    il `titolo` e l'`anno` dal seguente oggetto e registrarli
    nella console.
*/

const film = {
  titolo: "Inception",
  regista: "Christopher Nolan",
  anno: 2010,
  valutazione: 8.8,
};

const { titolo, anno } = film;

console.log(titolo, anno);


// Exercise 4
/*
    Utilizza la distrutturazione degli oggetti per estrarre
    la `via` e la `citta` dall'oggetto `indirizzo` all'interno
    dell'oggetto `utente`.
*/

const utente2 = {
  nome: "Alice",
  indirizzo: {
    via: "123 Via degli Aceri",
    citta: "Paese delle Meraviglie",
  },
};

const {
  indirizzo: { via, citta },
} = utente2;


// Exercise 5
/*
    Utilizza la distrutturazione degli oggetti per estrarre
    il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta`
    non è fornita, dovrebbe avere un valore predefinito di `30`.
*/

const persona = {
  nome: "Bob",
};

const defaultAge = 30;

const { nome, eta = defaultAge } = persona;



// Exercise 6
/*
    Scrivi una funzione `presentati` che prende un oggetto
    con le proprietà `nome` e `occupazione` e registra un
    messaggio nella console.
*/

const person = {
  nome: "Jane",
  occupazione: "sviluppatrice",
};

const presentati = ({ nome, occupazione }) => {
  console.log(`Mi chiamo ${nome} e sono una ${occupazione}`);
};

presentati(person);


// Bonus Exercise 1
/*
    Hai ricevuto una risposta JSON da un database contenente 
    informazioni su libri e loro autori. Analizza il JSON e 
    usa la distrutturazione degli oggetti per estrarre e 
    registrare le seguenti informazioni per ogni libro: 
    titolo, nome e cognome dell'autore, e il numero di 
    pagine se il libro ne ha più di 300.
*/

const books = [
  {
    title: "Il Grande Gatsby",
    author: {
      firstName: "F. Scott",
      lastName: "Fitzgerald",
    },
    details: {
      pages: 180,
      language: "Inglese",
    },
  },
  {
    title: "Guerra e Pace",
    author: {
      firstName: "Lev",
      lastName: "Tolstoj",
    },
    details: {
      pages: 1225,
      language: "Russo",
    },
  },
  {
    title: "1984",
    author: {
      firstName: "George",
      lastName: "Orwell",
    },
    details: {
      pages: 328,
      language: "Inglese",
    },
  },
];


for (let i = 0; i < books.length; i++) {
  const {
    title,
    author: { firstName, lastName },
    details: { pages },
  } = books[i];
  let registerBooks = `Title: ${title}, author: ${firstName} ${lastName}${pages > 300 ? ", pages: " + pages : ""} `;
  console.log(registerBooks);
}


// Bonus Exercise 2
/*
    Dato il JSON degli utentis, scrivi una funzione che 
    distruttura ogni oggetto utente per estrarre il nome, 
    l'email e l'indirizzo dell'utente. Se l'indirizzo non 
    è fornito, la funzione dovrebbe assegnare un valore 
    predefinito di "Indirizzo non fornito". Registra le 
    informazioni estratte per ogni utente.
*/

const usersString = `[
    {
        "name": "Alice",
        "email": "alice@example.com",
        "address": "123 Via Acero, Meraviglia"
    },
    {
        "name": "Bob",
        "email": "bob@example.com"
    },
    {
        "name": "Charlie",
        "email": "charlie@example.com",
        "address": "456 Via Olmo, Sognilandia"
    }
]`;

const users = JSON.parse(usersString);

const destructurer = (array) => {
  const defaultAddress = "Address not inserted";
  let info = "";
  for (let i = 0; i < array.length; i++) {
    const { name, email, address = defaultAddress } = users[i];
    info += `Name: ${name}, Email: ${email}, Address: ${address} `;
  }
  return info;
};

console.log(destructurer(users));


// Bonus Exercise 3
/*
    Hai ricevuto una stringa JSON contenente un array
    di prodotti con i loro prezzi e quantità. Scrivi
    una funzione che analizza il JSON e calcola il 
    valore totale di ogni prodotto (prezzo moltiplicato 
    per la quantità). Utilizza la distrutturazione 
    degli oggetti per estrarre le proprietà necessarie. 
    Quindi, registra il nome del prodotto e il suo 
    valore totale.
*/

const productsString = `
[
    {
        "product": "Laptop",
        "price": 1200,
        "quantity": 5
    },
    {
        "product": "Telefono",
        "price": 500,
        "quantity": 10
    },
    {
        "product": "Tablet",
        "price": 750,
        "quantity": 3
    }
]`;

const totalValue = (json) => {
  const products = JSON.parse(json);
  for (let i = 0; i < products.length; i++) {
    const { product, price, quantity } = products[i];
    const value = price * quantity;
    const prod = `${product} is worth ${value}€ `;
    console.log(prod);
  }
};

totalValue(productsString);

