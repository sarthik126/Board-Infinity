const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Cart = require('./Schema/Cart')
const data = require('./data')

const port =  process.env.PORT || 5500;

async function main() {
  await mongoose.connect('mongodb://localhost:27017/cart');
}

main().catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Server is running...");
})

app.get("/foods",async (req,res)=>{
    res.json(data)
})

app.get('/cart/allFood', async (req, res) => {
  let data = await Cart.find();
  res.json(data);
})

app.post('/cart/addFood', async (req, res) => {
  let name = req.body.name;
  let imageURL = req.body.imageURL;
  let price = req.body.price;
  let description = req.body.description;
    
  let data = await createData(name,imageURL,price,description)
  res.json({'result': 'success','data': data});
})

app.delete('/cart/deleteFood', async (req, res) => {
    let id = req.body.id;
      
    let data = await deleteData(id)
    res.json({'result': 'success'});
})

app.delete('/cart/deleteAllFood', async (req, res) => {
    
  let data = await Cart.deleteMany()
  res.json({'result': 'success'});
})


app.listen(port, () => {
  console.log(`Server listening at PORT : ${port}`)
})

async function createData(name,imageURL,price,description) {
  const data = await Cart.create({ name: name, imageURL: imageURL, price: price, description: description })
  return data
}

async function deleteData(id) {
    let data = await Cart.deleteOne({_id:id})
    return data
}