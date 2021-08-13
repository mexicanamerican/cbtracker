const env = process.env.NODE_ENV || 'production';

const config = {
  production: {
    server: {
      port: process.env.PORT || 443,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: 'mongodb://mongo:27017/express-production',
    },
  },
};

config[env].isProd = env === 'production';

module.exports = config[env];
