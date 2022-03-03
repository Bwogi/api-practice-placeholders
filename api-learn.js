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
