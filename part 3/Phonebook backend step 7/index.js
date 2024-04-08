const http = require('http')
const express = require('express')
const morgan = require('morgan')


const app = express()


let phoneBooks = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  },
  {
    "id": 5,
    "name": "John Doe", 
    "number": "555-333-444"
  }
]

app.use(express.json())

app.use(morgan('tiny'))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  
  response.json(phoneBooks)
})

app.get('/api/persons/:id', (request, response) => {

  const id = Number(request.params.id)
  const phoneBook = phoneBooks.find(phoneBook => phoneBook.id === id)
  if (phoneBook) {    
    response.json(phoneBook)  
  } else {    
    response.statusMessage = "phoneBook id not found"
    response.status(404).send("<h1> Person id not found </h1>")  
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  phoneBooks = phoneBooks.filter(phoneBook => phoneBook.id !== id)
  
  response.status(204).end()
})



app.post('/api/persons', (request, response) => {  
  const body = request.body
  if (!body.name|| !body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }else if (phoneBooks.find(person=>person.name === body.name)){
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }
  const phoneBook = {
    name: body.name,
    number: body.number
  }  
  phoneBook.id = Math.round(Math.random()*1000)
  
  phoneBooks = phoneBooks.concat(phoneBook)
  response.json(phoneBook)
})
//------------------------------------------------------

app.get('/info', (request,response)=>{
  const num = phoneBooks.length;
  const date = new Date();
  const dayNames = ["Sun", 
  "Mon", 
  "Tue",
  "Wed",
  "Thu",
  "Fri", 
  "Sat"
];
  const monthNames = ["Jan", 
  "Feb",
  "Mar",
  "Apr" ,
  "May", 
  "Jun", 
  "Jul", 
  "Aug", 
  "Sep",
  "Oct",
  "Nov", 
  "Dec"
];

let offset = String(date.getTimezoneOffset()/60*100);
offset = offset.slice(0,1)+'0'+offset.slice(1);

  const dateTime = "<p>"+dayNames[date.getDay()] + ' ' +
                   monthNames[date.getMonth()] + ' ' +
                   date.getDate() + ' ' +
                   date.getFullYear()+ ' ' +
                   date.getHours() + ':' +
                   date.getMinutes() + ':' +
                   date.getSeconds() + ' UTC ' +                   
                   offset + ' '+
                   '(Western European Standard Time)' + "</p>"
  const firstLine = "<p> Phonebook has info for " + num + " people </p>"


  response.send(firstLine+dateTime)
})



const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
