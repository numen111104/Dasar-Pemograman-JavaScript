/*
** Pending merupakan keadaan Promise sedang berjalan.
** Fulfilled merupakan keadaan Promise yang terpenuhi.
** Rejected merupakan keadaan Promise yang gagal terpenuhi.
*/

// function getUsers(isOffline) {
//     //return a promise object
//     return new Promise((resolve, reject) => {
//         // Your code here
    
//         setTimeout(() => {
//             const users = ['John', 'Jack', 'Abigail'];
//             if (isOffline) {
//                 reject(new Error('cannot retrieve users due offline'));
//                 return;
//             }

//             resolve(users);
//         }, 3000);
//         })
// }




/**
 * Retrieves a list of users.
 *
 * @param {boolean} isOffline - Indicates if the function should simulate an offline mode.
 * @return {Promise<Array<string>>} - A promise that resolves to an array of user names.
 */

function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {
  
      // simulate network delay
      setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
      
        if (isOffline) {
          reject(new Error('cannot retrieve users due offline'));
          return;
        }
  
        resolve(users);
      }, 3000);
    });
  }
  
  getUsers(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));
    
  getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));