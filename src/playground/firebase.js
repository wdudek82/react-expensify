import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyACgCaSjEJeF9pQDxN6dtKI8p-uijV8MHY",
  authDomain: "expensify-b2882.firebaseapp.com",
  databaseURL: "https://expensify-b2882.firebaseio.com",
  projectId: "expensify-b2882",
  storageBucket: "expensify-b2882.appspot.com",
  messagingSenderId: "915990714023"
};

firebase.initializeApp(config);

const database = firebase.database();

const expenses = [
  {
    descritpion: 'Gas bill',
    note: '',
    amount: '125.43',
    createdAt: 1000
  },
  {
    descritpion: 'Rent',
    note: '',
    amount: '1500.76',
    createdAt: 1500
  },
  {
    descritpion: 'Food',
    note: 'For one month',
    amount: '700.99',
    createdAt: 2000
  }
];

// subscribe to child_removed:
database.ref('expenses')
  .on('child_changed', (childSnapshot, prevChildKey) => {
    console.log(childSnapshot.val());
    console.log(prevChildKey);
  });

database.ref('expenses')
  .push(expenses[0]);

database.ref('expenses')
  .push(expenses[1]);

database.ref('expenses')
  .push(expenses[2]);

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch(err => {
//     console.log('Error: ', err);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   })
//   .catch(err => console.log('Error: ', err));

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   }, (err) => {
//     console.log('Error with expenses fetching', e);
//   });

// // Get data once (snapshot)
// database.ref('users/0')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log('Error: ', err);
//   });

// // Get data, and subscribe
// const onValueChange = database.ref('users/0')
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }, (err) => {
//     console.log('Error with data fetching', e);
//   });

// setTimeout(() => {
//   database.ref('users/0')
//     .update({ age: 12 });
// }, 4000);

// setTimeout(() => {
//   database.ref('users/0').off('value', onValueChange);
// }, 8000);

// setTimeout(() => {
//   database.ref('users/0')
//     .update({ age: 25 });
// }, 12000);

// const onUser1ValueChange = database.ref('users/1')
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }, (err) => {
//     console.log('Error: ', err);
//   });

// setTimeout(() => {
//   database.ref('users/1')
//     .update({ name: 'Paulina Pacura' });
// }, 10000);

// database.ref('users').set([
//   {
//     name: 'Wojtek Dudek',
//     age: 32,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Kraków',
//       country: 'Poland'
//     }
//   },
//   {
//     name: 'Paulina Pacura',
//     age: 28,
//     isSingle: false,
//     location: {
//       city: 'Kraków',
//       country: 'Poland'
//     }
//   }
// ]).then(() => {
//   console.log('"users" data is saved');
// }).catch((err) => {
//   console.log('This failed.', err);
// });

// database.ref('sweets').set([
//   {
//     name: 'ice cream',
//     flavor: 'cream'
//   },
//   {
//     name: 'candy',
//     flavor: 'cherry'
//   }
// ]).then((data) => {
//   console.log('"sweets" data is saved');
// });

// database.ref('sweets/0/flavor').set('chocolate');

// database.ref('users/0/attrs').set({
//   height: 182
// });

// database.ref('users/1/attrs').set({
//   height: 167
// });

// database.ref('sweets/1')
//   .remove()
//   .then(() => {
//     console.log('Data removed!')
//   })
//   .catch((err) => {
//     console.log('Did not remove data', err);
//   });

// database.ref('users/0')
//   .update({
//     name: 'Wojciech Dudek',
//     age: 36,
//     stressLevel: 9,
//     'job/title': 'Software Developer',
//     'job/company': 'Amazon',
//     isSingle: null,
//     'location/city': 'Barcelona',
//     'location/country': 'Spain'
//   })
//   .then((data) => {
//     console.log('user 0 updated successfully!');
//   })
//   .catch((err) => {
//     console.log('Something went wrong: ', err);
//   });

// database.ref('users/1').once('value')
//   .then((data) => console.log(data));

console.log('I made a request to change the data.');