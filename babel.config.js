module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
  };
};
