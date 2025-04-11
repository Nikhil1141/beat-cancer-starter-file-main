import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { nodePolyfills } from 'vite-plugin-node-polyfills';
// import path from 'path';

// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         presets: [
//           ['@babel/preset-react', {
//             runtime: 'automatic',
//             importSource: '@emotion/react' // Remove if not using Emotion
//           }]
//         ],
//         plugins: ['@babel/plugin-transform-runtime']
//       }
//     }),
//     nodePolyfills({
//       include: ['buffer', 'process'],
//       globals: { Buffer: true }
//     })
//   ],

//   // Proxy configuration for API calls
//   server: {
//     proxy: {
//       '/privy-api': {
//         target: 'https://auth.privy.io',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/privy-api/, ''),
//         secure: false, // Only for development
//         headers: {
//           // Add any required headers here
//           'Origin': 'http://localhost:3000'
//         }
//       }
//     }
//   },

//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       buffer: 'buffer/',
//       process: 'process/browser'
//     }
//   },

//   define: {
//     global: 'globalThis',
//     'process.env': {}
//   },

//   optimizeDeps: {
//     include: [
//       'react/jsx-runtime',
//       'buffer',
//       'process'
//     ],
//     esbuildOptions: {
//       define: {
//         global: 'globalThis'
//       }
//     }
//   },

//   build: {
//     commonjsOptions: {
//       transformMixedEsModules: true
//     },
//     rollupOptions: {
//       external: ['react/jsx-runtime']
//     }
//   }
// });