const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const ShopList = require('./Schema/ShopList')

const port =  process.env.PORT || 5500;

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shoplist');
}

main().catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Server is running...");
})

app.get('/grocery/getAll', async (req, res) => {
  let data = await ShopList.find();
  res.json(data);
})

app.post('/grocery/add', async (req, res) => {
  let groceryItem = req.body.groceryItem;
  let isPurchased = req.body.isPurchased;
    
  let data = await createData(groceryItem,isPurchased)
  res.json({'result': 'success'});
})

app.post('/grocery/updatePurchaseStatus', async (req, res) => {
    let id = req.body.id;
    let isPurchased = req.body.isPurchased;
      
    let data = await updateData(id,isPurchased)
    res.json({'result': 'success'});
})

app.post('/grocery/deleteGroceryItem', async (req, res) => {
    let id = req.body.id;
      
    let data = await deleteData(id)
    res.json({'result': 'success'});
})


app.listen(port, () => {
  console.log(`Server listening at PORT : ${port}`)
})

async function createData(groceryItem,isPurchased) {
  const data = await ShopList.create({ groceryItem: groceryItem, isPurchased:isPurchased })
  return data
}

async function updateData(id,isPurchased) {
  let data = await ShopList.updateOne({_id:id}, {isPurchased:isPurchased})
  return data
}

async function deleteData(id) {
    let data = await ShopList.deleteOne({_id:id})
    return data
}