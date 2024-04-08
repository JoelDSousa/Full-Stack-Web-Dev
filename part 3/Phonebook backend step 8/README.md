# Creating new tokens for morgan

Configure morgan so that it also shows the data sent in HTTP POST requests:

POST api/persons 200 61 - 4.896 ms {"name": "Liisa Marttinen", "number":"040-243563"}


### _**Note**_ that logging data even in the console can be dangerous since it can contain sensitive data and may violate local privacy law (e.g. GDPR in EU) or business-standard. In this exercise, you don't have to worry about privacy issues, but in practice, try not to log any sensitive data.
