const randomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  // console.log(data);
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  console.log(newUser);

  // console.log(data);
  // console.log(data.results[0].name);
  // console.log(data.results[0].dob.date);
  // console.log(data.results[0].dob.age);
  // console.log(data.results[0].location);
  // console.log(data.results[0].login);
  // console.log(data.results[0].picture.large);
  // console.log(data.results[0].name.title);
  // console.log(data.results[0].name.first);
  // console.log(data.results[0].name.last);

  // const user = data.results[0];
  // const address = user.location;
  // const location = address.coordinates;

  // console.log(address);
  // console.log(address.city);
  // console.log(address.state);
  // console.log(location);
  // console.log(location.latitude);
  // console.log(location.longitude);
};

randomUser();
randomUser();
randomUser();
// randomUser();
// randomUser();
