module.exports = {
    apps: [
      {
        name: '新川醫療',
        port: '3000',
        exec_mode: 'cluster',
        instances: '1',
        script: './.output/server/index.mjs'
      }
    ]
  }
  