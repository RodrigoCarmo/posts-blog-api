import { IHashProvider } from './IHashProvider'

const bcryptjs = require('bcryptjs')

class BCryptHashProvider implements IHashProvider {
  async generateHash (password: string): Promise<string> {
    const passwordHash = await bcryptjs.hash(password, 8)

    return passwordHash
  }

  async compare (password: string, passwordHash: string): Promise<boolean> {
    const compareHash = await bcryptjs.compare(password, passwordHash)

    return compareHash
  }
}

export { BCryptHashProvider }
