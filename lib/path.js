var { Opt, OptError } = require('stdopt')
var { existsSync } = require('fs')

class Path extends Opt {
  static parse (path) {
    if (!existsSync(path)) {
      return new OptError('No such file or directory: ' + path)
    }
    return path.replace(/\/$/, '')
  }
}

module.exports = Path
