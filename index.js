const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')



const category = require('./data/categories.json');
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('server is Running')
});

app.get('/categories', (req, res) => {
    res.send(category);
})

app.get('/category/8', (req, res) => {
    res.send(news)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const slectedCategory = news.filter(n => n.category_id === id)
    res.send(slectedCategory);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);

    res.send(selectedNews)

})

app.listen(port, () => {
    console.log('server is running on port:', port)
})