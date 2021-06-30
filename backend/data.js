import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

    products : [
        {
            
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p11.jpg',
            price: 120,
            countInStock:10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
           
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p22.jpg',
            price: 100,
            countInStock:5,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p33.jpg',
            price: 220,
            countInStock:0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
          },
          {
          
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock:10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
          },
          {
           
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock:10,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            countInStock:10,
            price: 139,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
          },
        ],
      };
      export default data;