// Update with your config settings.


module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgress://postgres:postgres@localhost:5432/test'
  },


  production: {
      client: "postgresql",
      connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
