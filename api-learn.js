// fake store API
// update a product
// using PUT

fetch('https://fakestoreapi.com/products/7', {
  method: 'PUT',
  body: JSON.stringify({
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// update a product
// using PATCH
fetch('https://fakestoreapi.com/products/7', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// DELETE A product
fetch('https://fakestoreapi.com/products/6', {
  method: 'DELETE',
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// Add a new product in a cart
fetch('https://fakestoreapi.com/carts', {
  method: 'POST',
  body: JSON.stringify({
    userId: 5,
    date: 2020 - 02 - 03,
    products: [
      { productId: 5, quantity: 1 },
      { productId: 1, quantity: 5 },
    ],
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// update product in a cart
//PUT
fetch('https://fakestoreapi.com/carts/7', {
  method: 'PUT',
  body: JSON.stringify({
    userId: 3,
    date: 2019 - 12 - 10,
    products: [{ productId: 1, quantity: 3 }],
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

//PATCH
fetch('https://fakestoreapi.com/carts/7', {
  method: 'PATCH',
  body: JSON.stringify({
    userId: 3,
    date: 2019 - 12 - 10,
    products: [{ productId: 1, quantity: 3 }],
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// DELETE A CArt
fetch('https://fakestoreapi.com/carts/6', {
  method: 'DELETE',
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// Add a new user
fetch('https://fakestoreapi.com/users', {
  method: 'POST',
  body: JSON.stringify({
    email: 'John@gmail.com',
    username: 'johnd',
    password: 'm38rmF$',
    name: {
      firstname: 'John',
      lastname: 'Doe',
    },
    address: {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
    },
    phone: '1-570-236-7033',
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// Update users
fetch('https://fakestoreapi.com/users/7', {
  method: 'PUT',
  body: JSON.stringify({
    email: 'John@gmail.com',
    username: 'johnd',
    password: 'm38rmF$',
    name: {
      firstname: 'John',
      lastname: 'Doe',
    },
    address: {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
    },
    phone: '1-570-236-7033',
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// delete a user
fetch('https://fakestoreapi.com/users/6', {
  method: 'DELETE',
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// user login
fetch('https://fakestoreapi.com/auth/login', {
  method: 'POST',
  body: JSON.stringify({
    username: 'mor_2314',
    password: '83r5^_',
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// get all products

const getAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  console.log(data);
};
getAllProducts();
// --
// get a single product
const getSingleProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products/3');
  const data = await res.json();
  console.log(data);
};
getSingleProducts();
// --
// limit results to 50
const limitProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const data = await res.json();
  console.log(data);
};
limitProducts();
// --
// sort products in descending order
const sortProducts = async () => {
  const res = await fetch(
    'https://fakestoreapi.com/products?sort=desc&limit=7'
  );
  const data = await res.json();
  console.log(data);
};
sortProducts();
// --
// get all categories
const getAllCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const data = await res.json();
  console.log(data);
};
getAllCategories();
// --
// get a specific category
const getSpecificCategory = async () => {
  const res = await fetch(
    'https://fakestoreapi.com/products/category/jewelery'
  );
  const data = await res.json();
  console.log(data);
};
getSpecificCategory();
// --
// create fake profile data api
const fakeProfile = async () => {
  const res = await fetch('http://fakeapi.jsonparseronline.com/profile');
  const data = await res.json();
  console.log(data);
};
fakeProfile();
// --

// get all carts
const getAllCarts = async () => {
  const res = await fetch('https://fakestoreapi.com/carts');
  const data = await res.json();
  console.log(data);
};
getAllCarts();
// --
// placeholder users
const placeholderUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
};

placeholderUsers();
// --
// placeholder photos

const placeholderPhotos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = res.json();
  console.log(data);
};
placeholderPhotos();
// --
// find placeholder posts
const placeholderPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
};
placeholderPosts();
// --
// find placeholder todos

const placeholderTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
};
placeholderTodos();
// --

// find a random user
// you have that api('https://randomuser.me/api') fetch that data and console log it.
// RandomData();
// RandomData();
// RandomData();

// async function RandomData() {
//   const res = await fetch('https://randomuser.me/api');
//   const data = res.json();
//   console.log(data);
// }

const randomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  // console.log(res);
  const data = await res.json();
  console.log(data);
};
randomUser();
// --
