import { Pool, Client } from 'pg';

let getResources = (req, res) => {
  let pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: true });
  pool.query('SELECT * FROM resource', (err, data) => {
    if (err)
      res.status(500).send(err);
    else
      res.send(data.rows);

    pool.end();
  });
}

export {
  getResources
}
