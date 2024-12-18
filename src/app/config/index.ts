import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.DEFAULT_PASS,
  default_pass: process.env.DEFAULT_PASS,
  node_env:process.env.NODE_ENV,
  secret_access_token:process.env.SECRET_ACCESS_TOKEN

};
