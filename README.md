# Vite Tauri Template

This is a starter template for those who want to make a desktop application with web technologies. This template uses the below stack.

## Vite.js

[Vite.js](https://vitejs.dev/) is a new modern bundler for javascript which is blazing fast and includes many sensible defaults.

## Tauri

[Tauri](https://tauri.studio/) is a new modern technology to turn your web apps into a desktop app for multiple platforms (Windows, MacOS, Linux, android and ios soon). Tauri apps have very small file size and tiny memory consumption.

## Vue 3

[Vue.js](https://vuejs.org/) is an incremental frontend framework which is an absolute joy to work with. It has seen very impressive improvements in version 3 including Composition Api, script setup, dynamic css binding and ... .

### Bonus: Vue Global Api

[Vue Global Api](https://github.com/antfu/vue-global-api) globally registers commonly used composition api functions such as `ref`, `reactive` and ... . makes your `script setup` sections cleaner.

## Installation

- Ready your workspace according to tauri. [Tauri Getting Started](https://tauri.studio/en/docs/getting-started/intro/)

  - **Note:** You only need to install global things such as rust and other os level packages. Any thing related to application itself is already installed and ready for you.

- Clone repository `git clone https://github.com/yooneskh/vite-tauri-template app-name`

- `pnpm` or `npm i`

- Modify these files according to your app.
  - `index.html`
  - `package.json`
  - `public/favicon.ico`
  - `src/assets/logo.*`
  - `src-tauri/tauri.conf.json`

## Usage

- `pnpm serve` launches vite and you can test and develop your app in the browser at `http://localhost:8080`.

- `pnpm serve:native` launches vite and configures ynetwork to use tauri for api calls. Use this if you want to test your app in tauri dev mode.

- `pnpm serve:tauri` launches tauri in dev mode and you can see your app in tauri window.

- `pnpm build` builds web application and packages them with tauri in `src-tauri/target`

- `pnpm build:web` only builds the web application and puts it in `./dist` directory. You should not normally want this. Difference of this web app with the one build with normal `pnpm build` is that this one uses axios for network calls.

## License

Do whatever you want with it!
