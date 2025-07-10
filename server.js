const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/admin',express.static('admin'))

let chekcutdata = []

app.post('/checkout',(req,res) => {
const {cart} = req.body;
chekcutdata.push(cart)
console.log("checkout diterima",cart)
res.json({message:"checkout berhasil", data : cart}) 
})
app.get('/admin/checkout/history', (req,res) => {
    res.json({data : chekcutdata})
})

app.listen(PORT,() => {
    console.log("server berhasil konek")
})