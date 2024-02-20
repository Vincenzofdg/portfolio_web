const connection = require('./connection');

module.exports = {
     getAll: async () => {
          const query = 'SELECT * FROM products;';
          const [result] = await connection.execute(query);
          return result;
     },
};