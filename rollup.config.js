import vue from 'rollup-plugin-vue'; // Handle .vue files
import babel from 'rollup-plugin-babel'; // Transpile/polyfill with reasonable browser support
import resolve from '@rollup/plugin-node-resolve'; // Tells Rollup how to find external modules
import commonjs from '@rollup/plugin-commonjs'; // Converts CommonJS modules to ES6

export default {
    input: 'src/main.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      terser(),
      babel({
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**',
      }),
    ],
};
