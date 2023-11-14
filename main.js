/*
    Dato il seguente oggetto in JavaScript, convertilo 
    in una stringa JSON.
*/

// Exercise 1

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

/*
    Converti la seguente stringa JSON in un oggetto JavaScript 
    e registra l'`email` e l'`id` nella console.
*/

// Exercise 2

const string = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';

const obj = JSON.parse(string);

console.log(obj.id, obj.email);

/*
    Utilizza la distrutturazione degli oggetti per estrarre
    il `titolo` e l'`anno` dal seguente oggetto e registrarli
    nella console.
*/

// Exercise 3

const film = {
  titolo: "Inception",
  regista: "Christopher Nolan",
  anno: 2010,
  valutazione: 8.8,
};

const { titolo, anno } = film;

console.log(titolo, anno);

/*
    Utilizza la distrutturazione degli oggetti per estrarre
    la `via` e la `citta` dall'oggetto `indirizzo` all'interno
    dell'oggetto `utente`.
*/

// Exercise 4

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

/*
    Utilizza la distrutturazione degli oggetti per estrarre
    il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta`
    non è fornita, dovrebbe avere un valore predefinito di `30`.
*/

// Exercise 5

const persona = {
  nome: "Bob",
};

const defaultAge = 30;

const { nome, eta: eta = defaultAge } = persona;

/*
    Scrivi una funzione `presentati` che prende un oggetto
    con le proprietà `nome` e `occupazione` e registra un
    messaggio nella console.
*/

// Exercise 6

const person = {
  nome: "Jane",
  occupazione: "sviluppatrice",
};

const presentati = ({ nome, occupazione }) => {
  console.log(`Mi chiamo ${nome} e sono una ${occupazione}`);
};

/*
    Hai ricevuto una risposta JSON da un database contenente 
    informazioni su libri e loro autori. Analizza il JSON e 
    usa la distrutturazione degli oggetti per estrarre e 
    registrare le seguenti informazioni per ogni libro: 
    titolo, nome e cognome dell'autore, e il numero di 
    pagine se il libro ne ha più di 300.
*/

// Bonus Exercise 1

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

let registerBooks = '';
for (let i = 0; i < books.length; i++) {
  const {
    title,
    author: { firstName, lastName },
    details: { pages },
  } = books[i];
  registerBooks += `Title: ${title}, author: ${firstName} ${lastName}, 
    ${pages > 300 ? 'pages: ' + pages : ""} `;
};

console.log(registerBooks);

/*
    Dato il JSON degli utentis, scrivi una funzione che 
    distruttura ogni oggetto utente per estrarre il nome, 
    l'email e l'indirizzo dell'utente. Se l'indirizzo non 
    è fornito, la funzione dovrebbe assegnare un valore 
    predefinito di "Indirizzo non fornito". Registra le 
    informazioni estratte per ogni utente.
*/

// Bonus Exercise 2

const users = [
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
];

const destructurer = (array)=> {
    const defaultAddress = 'Address not inserted';
    let info = '';
    for (let i = 0; i < array.length; i++){
        const {name, email, address: address = defaultAddress} = users[i];
        info += `Name: ${name}, Email: ${email}, Address: ${address} `;
    };
    return info;
}

console.log(destructurer(users));

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

// Bonus Exercise 3

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

const products = JSON.parse(productsString);

const totalValue = (array) =>{
  let prod = '';
  let value = 0;
  for (let i = 0; i < array.length; i++){
    const {product, price, quantity} = array[i];
    value = price * quantity;
    prod += `${product} is worth ${value}€ `;
  }
  return prod;
};

console.log(totalValue(products));