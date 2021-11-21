import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { tokenConfig } from '../config/tokenConfig'

function ensureAuthenticated (request: Request, response: Response, next: NextFunction): any {
  const auth =
    request.headers.authorization ||
    request.body.token ||
    request.query.token ||
    request.headers['x-access-token']

  let token

  if (!auth) {
    return response.status(400).json({ error: 'JWT token is missing!' })
  }

  if (request.headers.authorization) {
    [, token] = auth.split(' ')
  }

  if (request.body.token) {
    token = request.body.token
  }

  if (request.query.token) {
    token = request.query.token
  }

  if (request.headers['x-access-token']) {
    token = request.headers['x-access-token']
  }

  try {
    verify(token, tokenConfig.secret_token)

    next()
  } catch (error) {
    return response.status(400).json(error)
  }
}

export { ensureAuthenticated }
