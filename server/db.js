import pg from "pg"


const db=new pg.Pool({
 user: "postgres",
  host: "localhost",
  database: "Farmson",
  password: "21082002",
  port: 5432,
});
export default db;



