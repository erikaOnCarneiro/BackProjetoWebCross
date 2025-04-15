import mysql from 'mysql2'

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD
})

connection.connect((err) => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
  } else {
      console.log('Conexão estabelecida com o banco de dados com sucesso.');
  }
});

export default connection;