
function getENVConfig() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return './config_pro'
    default:
      return './config_dev'
  }
}

const { DATABASE_CONFIG, SERVER_PORT } = require(getENVConfig())

module.exports = { DATABASE_CONFIG, SERVER_PORT }
