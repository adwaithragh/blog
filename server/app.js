const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const cors = require('cors')

const app = express()
const PORT = 3020

app.use(cors())
app.use(express.json())

require('dotenv').config()
console.log(process.env.MONGODB_URL)

main()
    .then(() => {console.log('Connected to MongoDB')})
    .catch(err => {console.error(err)})

async function main() {
    await mongoose.connect(process.env.MONGODB_URL)
}

app.post('/addBlog',async (req, res) => {
    try {
        if(!req.body.title || !req.body.content || !req.body.author) {
            return res.status(400).json({ error: 'Title, content, and author are required' })
        }
        const { title, content, author } = req.body
        const blog = new Blog({ title, content, author })
        await blog.save()
        res.status(201).json({message: 'Blog created successfully', data:blog })
    } catch (error) {
        
        console.error("Error creating blog:", error)
        res.status(500).json({ error: 'Internal server error' })

    }
}) 

app.get('/', async (req, res) => {
    try {
        const blogs =  await Blog.find()
        res.status(200).json({message: 'Blogs fetched successfully', data: blogs })
    } catch (error) {
        console.error("Error fetching blogs:", error)
        res.status(500).json({ error: 'Internal server error' })
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})