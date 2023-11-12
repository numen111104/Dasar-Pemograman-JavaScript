/**
 * Retrieves a user object based on the provided ID.
 *
 * @param {string} id - The ID of the user to retrieve.
 * @param {function} callback - The callback function to be called with the retrieved user object.
 *   - The callback function should accept two parameters: an error object (if any) and the user object.
 *   - If an error occurs during the retrieval process, the error object will be populated with the details of the error.
 *   - If the retrieval process is successful, the user object will contain the ID, name, and location of the user.
 * @return {void}
 */

function getUser(id, callback) {
    setTimeout(() => {
      if (!id) {
        callback(new Error("User ID is required"), null);
      }
  
      callback(null, { id, name: 'John Doe', location: "Jakarta" });
    }, 1000);
  }
  
  function getWeather(location, callback) {
    setTimeout(() => {
      if (!location) {
        callback(new Error("Location is required"), null);
      }
  
      callback(null, { weather: "Sunny", temperature: 30 });
    }, 1000);
  }
  
  module.exports = { getUser, getWeather };
  