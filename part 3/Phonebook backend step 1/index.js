const http = require('http')
const express = require('express')



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
  }
]

app.use(express.json())

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
    response.status(404).send("<h1> phoneBook id not found </h1>")  
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  phoneBooks = phoneBooks.filter(phoneBook => phoneBook.id !== id)
  
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {  
  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  const phoneBook = request.body  
  const maxId = phoneBooks.length > 0
    ? Math.max(...phoneBooks.map(n => n.id)) 
    : 0
  phoneBook.id = maxId+1
  phoneBooks = phoneBooks.concat(phoneBook)
  response.json(phoneBook)
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
