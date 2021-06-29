import express from 'express';
// import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extendedt:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/dubaiApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Now we are using Mango db so no need of this static data.

// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find((X) => X._id=== req.params.id);
//     if(product) {
//         res.send(product);

//     }else {
//         res.status(404).send({message: 'product not found'});
//     }
// });

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// })

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});