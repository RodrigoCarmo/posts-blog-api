require('dotenv').config()

const tokenConfig = {
  secret_token: `${process.env.USER_SECRET_TOKEN}`,
  expires_in: process.env.USER_EXPIRES_IN
}

export { tokenConfig }
