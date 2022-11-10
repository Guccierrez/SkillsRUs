const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Tech' },
    { name: 'Lawn' },
    { name: 'Party' },
    { name: 'Healthcare' },
    { name: 'Construction' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Fabians Concrete',
      description:
        'A small concrete service',
      image: 'concrete.jpeg',
      category: categories[4]._id,
      price: 800.00,
    },
    {
      name: 'Sid Bartending Service',
      description:
        'Best bartending service in the whole DFW Metroplex',
      image: 'bartending.png',
      category: categories[2]._id,
      price: 500.00,
    },
    {
      name: 'Austins Video Editing',
      category: categories[0]._id,
      description:
        'Best video editing service in the whole DFW Metroplex',
      image: 'betterVideoEdit.jpeg',
      price: 500.00,
    },
    {
      name: 'Fabians Lawn Management',
      category: categories[1]._id,
      description:
        'Any lawn big or small, call me',
      image: 'betterLawncare.png',
      price: 40.00,
    },
    {
      name: 'Austins Videography',
      category: categories[0]._id,
      description:
        'Any event big or small',
      image: 'videographer.jpeg',
      price: 999.00,
    },
    {
      name: 'Sids Care',
      category: categories[3]._id,
      description:
        'Any injury big or small',
      image: 'healthcare.jpeg',
      price: 100000.00,
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Austin',
    lastName: 'Post',
    email: 'posty65841@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[2]._id, products[4]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Sid',
    lastName: 'Muratee',
    email: 'muratees@yahoo.com',
    password: 'password12345',
    orders: [
      {
        products: [products[1]._id, products[5]._id]
      }
    ]
  });
  await User.create({
    firstName: 'Fabian',
    lastName: 'Gutierrez',
    email: 'fabiangutierrez580@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[3]._id]
      }
    ]
  });
  await User.create({
    firstName: 'Test',
    lastName: 'McTest',
    email: 'test@test.com',
    password: 'password12345',
  });



  console.log('users seeded');

  process.exit();
});
