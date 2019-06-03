const isProductionEnvironment = process.env.NODE_ENV === 'production'

exports.isProductionEnvironment = isProductionEnvironment

exports.apolloEngineConfiguration = isProductionEnvironment
  ? { apiKey: process.env.ENGINE_API_KEY }
  : false
