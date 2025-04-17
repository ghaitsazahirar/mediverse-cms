# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## THIS IS UPDATE README IN FEATURE/ WANNA PR TO BRANCH DEVELOP

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

# 🖥️ Mediverse CMS

**Mediverse CMS** adalah aplikasi frontend berbasis **React + TypeScript** yang digunakan untuk mengelola data dan konten dalam platform Mediverse — sistem reservasi medis online.

---

## 🚀 Teknologi yang Digunakan

- ⚛️ **React.js** – Library UI modern
- 🟦 **TypeScript** – Superset JavaScript dengan type-safety
- 🛠️ **Create React App (CRA)** – Tool untuk bootstrap proyek React
- 🧪 **Jest & React Testing Library** – Untuk unit testing

---

## 📁 Struktur Folder

```bash
mediverse-cms/
├── public/               # File statis (favicon, HTML, manifest, dsb)
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/                  # Source code utama
│   ├── App.tsx           # Komponen utama aplikasi
│   ├── App.test.tsx      # Unit test untuk App
│   ├── index.tsx         # Entry point React
│   ├── reportWebVitals.ts# Performance analytics (optional)
│   ├── setupTests.ts     # Setup untuk testing
│   └── ...               # File CSS & SVG
├── package.json          # Dependencies & script
├── tsconfig.json         # Konfigurasi TypeScript
├── .gitignore            # File yang diabaikan Git
└── README.md             # Dokumentasi proyek
```

---

## ▶️ Cara Menjalankan Project

1. **Clone repository:**
   ```bash
   git clone https://github.com/ghaitsazahirar/mediverse-cms.git
   cd mediverse-cms
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan secara lokal:**
   ```bash
   npm start
   # atau
   yarn start
   ```

4. **Akses di browser:**
   ```
   http://localhost:3000
   ```

---

## 🌀 Git Flow

Proyek ini menggunakan **Git Flow** sebagai strategi branching untuk pengembangan yang terstruktur dan kolaboratif.

### Alur Awal

1. **Inisialisasi Git (jika belum):**
   ```bash
   git init
   ```

2. **Menambahkan remote origin:**
   ```bash
   git remote add origin https://github.com/ghaitsazahirar/mediverse-cms.git
   ```

3. **Membuat dan checkout ke branch `develop`:**
   ```bash
   git checkout -b develop
   ```

4. **Commit awal:**
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

5. **Push ke GitHub:**
   ```bash
   git push -u origin develop
   ```

---

### 📌 Struktur Branch

- `main` → versi produksi (_production-ready_)
- `develop` → pengembangan aktif
- `feature/*` → penambahan fitur baru
- `release/*` → persiapan rilis ke `main`
- `hotfix/*` → perbaikan cepat pada `main`

> Semua perubahan akan di-*merge* ke `develop`, dan saat rilis, akan di-*merge* ke `main` serta diberi **Git Tag** versi menggunakan [Semantic Versioning](https://semver.org/).

---

## 🏷️ Semantic Versioning (Git Tag)

Versi release mengikuti format:

```
MAJOR.MINOR.PATCH
```

Contoh implementasi tag saat rilis:
```bash
git tag v1.0.0
git push origin v1.0.0
```
---
