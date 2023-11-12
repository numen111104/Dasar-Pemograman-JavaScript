
/**
+ * Retrieves a list of users.
+ *
+ * @param {function} callback - The callback function to be executed after retrieving the users.
+ * @return {undefined} This function does not return a value directly. The users are passed to the callback function.
+ */

// function getUsers(callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
//       callback(users);
//     }, 3000);
//   }

//   getUsers((users) => {
//     console.log(users);
//   })

//   function getUsers(callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
   
//       callback(users);
//     }, 3000);
//   }
   
//   function usersCallback(users) {
//     console.log(users);
//   }
   
//   getUsers(usersCallback);

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
    
    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}



function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
 
    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}
 
function usersCallback(error, users) {
  if (error) {
    console.log('process failed:', error.message);
    return;
  }
  console.log('process success:', users);
}
 
getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

// callback merupakan fungsi yang dipanggil setelah proses asynchronous tersebut selesai
