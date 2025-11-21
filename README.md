## ReactNative with ReactNative Elements (UI Components)

Starter Expo app using React Native Elements (RNE)

**Tech stack**
- Expo SDK 47 (managed workflow)
- React 17 (project starter version)
- React Native 0.64
- React Native Elements / RNEUI for component theming
- React Navigation (stack) for in-app navigation

**Directory structure**
- `App.jsx` — application entry. Wraps the theme provider and renders navigation.
- `assets/` — app assets (images, fonts) used by Expo.
- `components/` — reusable presentational components (e.g. `MyComponent.jsx`).
- `src/screens/` — page-level screens (scaffolded: `HomeScreen.jsx`, `DetailsScreen.jsx`).
- `src/navigation/` — navigation setup (scaffolded: `RootNavigator.jsx`).
- `.expo/` — local Expo state (ignored in Git).
- `.expo-shared/` — project-level Expo metadata (tracked in Git; contains `assets.json`).

Note: This project intentionally keeps a small `src/` area for app code and the original `components/` folder for quick starter components.

**Run the app in your web browser (development)**
1. Install dependencies:

```bash
npm install
```

2. If you encounter OpenSSL / webpack errors on Node 17+ (e.g. `ERR_OSSL_EVP_UNSUPPORTED`), start the web server using the legacy OpenSSL provider flag. The `web` script has been updated in `package.json` to set this flag automatically.

Start the dev server (web):

```bash
npm run web
```

Open `http://localhost:19006` in your browser (Expo will also print a QR code and local network URL).

**Notes & troubleshooting**
- Dependency versions: The starter uses React 17 and Expo SDK 47; Expo may show warnings suggesting newer versions (React 18, RN 0.70, etc.). Upgrading to the suggested versions is recommended for long-term maintenance but may require code adjustments.
- If `npm install` fails with peer dependency errors when adding new packages, try `--legacy-peer-deps` or install versions compatible with React 17 / Expo SDK 47.
- `.expo/` should remain ignored. `.expo-shared/` is safe and recommended to commit (it stores shared project metadata like `assets.json`).


**Helpful links**
- React Native Elements (RNE) docs: https://reactnativeelements.com/
- RNE Theming guide: https://reactnativeelements.com/docs/theme
- Expo docs: https://docs.expo.dev/
- Expo CLI & managed workflow: https://docs.expo.dev/workflow/expo-cli/
- React Navigation (v6) docs: https://reactnavigation.org/docs/getting-started
- React Native docs: https://reactnative.dev/docs/getting-started
- Expo Web & deployment: https://docs.expo.dev/workflow/web/
- Expo Router (file-based routing, optional): https://expo.github.io/router/docs
- Troubleshooting OpenSSL/Webpack errors: https://nodejs.org/en/blog/release/v17.0.0/#openssl-30
- Metro bundler doc: https://facebook.github.io/metro/docs/


