const connection = require('./connection');

module.exports = {
     getAll: async () => {
          const query = 'SELECT * FROM products;';
          const [result] = await connection.execute(query);
          return result;
     },
     updatePublish: async (value, id) => {
          const query = 'UPDATE products SET online = ? WHERE id = ?;';
          await connection.execute(query, [value, id]);
          return { value, id };
     }
};