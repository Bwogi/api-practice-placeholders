// fake store API
// get all products

const getAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  console.log(data);
};
getAllProducts();

// get a single product
const getSingleProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products/3');
  const data = await res.json();
  console.log(data);
};
getSingleProducts();

// limit results to 50
const limitProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const data = await res.json();
  console.log(data);
};
limitProducts();

// sort products in descending order
const sortProducts = async () => {
  const res = await fetch(
    'https://fakestoreapi.com/products?sort=desc&limit=7'
  );
  const data = await res.json();
  console.log(data);
};
sortProducts();

// get all categories
const getAllCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const data = await res.json();
  console.log(data);
};
getAllCategories();

// create fake profile data api
const fakeProfile = async () => {
  const res = await fetch('http://fakeapi.jsonparseronline.com/profile');
  const data = await res.json();
  console.log(data);
};

fakeProfile();

// placeholder users
const placeholderUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
};

placeholderUsers();

// placeholder photos

const placeholderPhotos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = res.json();
  console.log(data);
};
placeholderPhotos();

// find placeholder posts
const placeholderPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
};
placeholderPosts();

// find placeholder todos

const placeholderTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
};
placeholderTodos();

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
