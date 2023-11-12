
/**
 * Retrieves the weather information for a given user.
 *
 * @param {string} userId - The ID of the user.
 * @param {function} callback - The callback function to be called with the weather information.
 * @return {void} No return value.
 */

/*
const { getUser, getWeather } = require('./utils');

function getUserWeather(userId, callback) {
  getUser(userId, (error, user) => {
    if (error) {
      callback(error, null);
    }

    getWeather(user.location, (error, weather) => {
      if (error) {
        callback(error, null);
      }

      callback(null, { ...user, ...weather });
    });
  });
}

getUserWeather(1, (error, userWeather) => {
  if (error) {
    console.log(error);
  }

  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
}); */

const { getUser, getWeather } = require('./utils');

function getUserWeather(userId) {
  let user;
  
  return getUser(userId)
    .then((_user) => { 
      user = _user;
      return getWeather(user.location)
    })
    .then((weather) => ({ ...user, ...weather }))
}

getUserWeather(1)
  .then(console.log)
  .catch(console.log);

