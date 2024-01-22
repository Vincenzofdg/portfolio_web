const connection = require('./connection');

module.exports = {
     getAll: async () => {
          const query = 'SELECT * FROM clients;';
          const [result] = await connection.execute(query);
          return result;
     },
     clientAcess: async (data) => {
          const { username, password } = data;
          const query = 'SELECT * FROM clients WHERE name = ? AND password = ?;';
          const [result] = await connection.execute(query, [username, password]);
          return result[0];
     },
     clientInfo: async (name) => {
          const query = 'SELECT * FROM client_info WHERE name = ?;';
          const [result] = await connection.execute(query, [name]);
          return result[0];
     }
};