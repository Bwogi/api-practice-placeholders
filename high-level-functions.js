const randomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  console.log(data);
  console.log(data.results[0].name);
  console.log(data.results[0].dob.date);
  console.log(data.results[0].dob.age);
  console.log(data.results[0].location);
  console.log(data.results[0].login);
  console.log(data.results[0].picture.large);
  console.log(data.results[0].name.title);
  console.log(data.results[0].name.first);
  console.log(data.results[0].name.last);
};

randomUser();