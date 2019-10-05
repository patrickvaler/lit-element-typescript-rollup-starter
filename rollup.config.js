import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import {terser} from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.mjs'];
const outputDir = './dist/';

export default {
  input: './src/index.ts',
  treeshake: !!production,
  output: {
    dir: outputDir,
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    resolve({ extensions }),
    commonjs({ include: /node_modules/ }),
    babel({
      extensions: extensions,
      exclude: ['./node_modules/@babel/**/*', './node_modules/core-js/**/*']
    }),
    copy({
      targets: [
        { src: './src/index.html', dest: outputDir },
        { src: './node_modules/@webcomponents/webcomponentsjs/bundles/', dest: outputDir },
        {
          src: './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
          dest: outputDir
        }
      ]
    }),
    filesize(),
    !production && serve({
      contentBase: [outputDir],
      open: true,
      host: 'localhost',
      port: 10000
    }),

    production && terser()
  ]
};
