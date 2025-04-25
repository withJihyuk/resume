import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {mdx} from "@cyco130/vite-plugin-mdx";
// @ts-ignore

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx(),],
})
