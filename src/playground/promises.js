const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data')
  }, 4000);

  setTimeout(() => {
    reject('Oops! something went wrong!')
    resolve('Hello, World!');
  }, 2000);
});

promise
  .then((data) => {
  console.log(data);
  })
  .catch((err) => {
    console.log('Issue: ', err);
  });