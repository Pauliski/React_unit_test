const isTest = String(process.env.NODE_ENV) === 'test'
module.exports = {
  presets: ['react', ['env', {modules: isTest ? 'commonjs' : false}]],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
    isTest ? 'dynamic-import-node' : null,
  ].filter(Boolean),
}
