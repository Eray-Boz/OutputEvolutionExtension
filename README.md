<p align="center">
  <img src="public/icons/icon128.png" alt="OutputEvolution Logo" width="128" height="128">
</p>

<h1 align="center">Output Evolution</h1>

<p align="center">
  <strong>Transform boring ChatGPT and Gemini outputs into beautifully styled, premium-looking content.</strong>
</p>

<p align="center">
  <a href="https://chromewebstore.google.com/detail/maeeijbcnhibkajeeopcipkaflhejajk"><img src="https://img.shields.io/badge/Chrome%20Web%20Store-Install-green?logo=googlechrome" alt="Chrome Web Store"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/version-1.1.0-orange.svg" alt="Version">
</p>

---

## ✨ Features

OutputEvolution enhances ChatGPT and Gemini responses with beautiful, modern styling:

| Feature | Description |
|---------|-------------|
| 📋 **Lists** | Gradient bullets, hover animations, and elegant borders |
| 📊 **Tables** | Gradient headers, row highlighting, and smooth transitions |
| 💻 **Code Blocks** | Terminal-style with gradient header |
| 💬 **Blockquotes** | Italic styling with colored borders |
| 🔗 **Links** | Animated underlines on hover |
| 📝 **Headings** | Glowing gradient underlines |
| 🧮 **Formulas** | Beautiful math formula styling (KaTeX, MathJax) |

---

## 🎨 Themes

Choose from 10 vibrant color themes:

| Theme | Description |
|-------|-------------|
| 🔵 **Blue** | Classic vibrant blue |
| 🟡 **Yellow** | Bright energetic yellow |
| 🔴 **Red** | Bold passionate red |
| 🟢 **Green** | Fresh natural green |
| 🟠 **Orange** | Warm vibrant orange |
| 🟣 **Purple** | Rich royal purple |
| 🪿 **Turquoise** | Modern cyan-teal |
| 🔷 **Navy** | Deep professional blue |
| 🌸 **Pink** | Elegant rose pink |
| 🟤 **Brown** | Warm earthy brown |

---

## 🌐 Supported Platforms

- ✅ [ChatGPT](https://chatgpt.com) / [chat.openai.com](https://chat.openai.com)
- ✅ [Google Gemini](https://gemini.google.com)

---

## 📦 Installation

### Option 1: Chrome Web Store (Recommended)
1. Visit the [Chrome Web Store page](https://chromewebstore.google.com/detail/maeeijbcnhibkajeeopcipkaflhejajk)
2. Click **"Add to Chrome"**
3. Done! Visit ChatGPT or Gemini to see the magic ✨

### Option 2: Developer Mode (Manual Installation)
1. Download or clone this repository
2. Run `npm install` and `npm run build` to generate the production-ready build
3. Open Chrome and go to `chrome://extensions/`
4. Enable **"Developer mode"** (top-right toggle)
5. Click **"Load unpacked"**
6. Select the `dist` folder generated inside `OutputEvolutionExtension`
7. Done! The extension icon will appear in your toolbar

---

## 🎛️ Usage

1. Click the **OutputEvolution** icon in your browser toolbar
2. **Enable/Disable** the extension with the toggle switch
3. **Choose a theme** from the 10 available color options
4. **Adjust intensity** from Subtle to Bold
5. Visit ChatGPT or Gemini and enjoy! 🎉

---

## 📝 Changelog

### v1.1.0 (2026-07-02)
- ⚛️ Complete project rewrite using **React 18** and **TypeScript** for robust type safety and clean architecture.
- 🎨 Modernized extension popup layout using **Tailwind CSS**, adding beautiful micro-animations and active states.
- ⚙️ Switched build pipeline to **Vite** and **esbuild** for compilation, minification, and packaging.
- 📦 Standardized build scripts and direct packaging of `OutputEvolution.zip` using Node.js.

### v1.0.1 (2026-02-08)
- 🔧 Fixed CSP error caused by external Google Fonts import on ChatGPT.
- 🔧 Fixed formula text color now properly inherits from page theme.
- 🧹 Removed unused code (dead CSS class, obsolete message handler).
- 💅 Cleaned up and standardized code formatting across all files.
- 📝 Updated documentation and file headers.

### v1.0.0 (2026-01-30)
- 🎉 Initial release.
- 10 vibrant color themes.
- ChatGPT and Gemini support.
- 7 styled elements (Lists, Tables, Code, Quotes, Links, Headings, Formulas).
- 3 intensity levels (Subtle, Balanced, Bold).
- Quicksand font for modern typography.
- Math formula styling with dual borders.
- Premium code block styling.

---

## 🛠️ Development

### Prerequisites
- Node.js (v18+)
- Google Chrome or any Chromium-based browser

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Eray-Boz/OutputEvolutionExtension.git
   cd OutputEvolutionExtension
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server or build the files:
   ```bash
   # Build once for popup, content, and background scripts
   npm run build
   
   # Clean build artifacts
   npm run clean
   ```
4. Load the `dist` folder into Chrome via `chrome://extensions/` (Load Unpacked).
5. Reload the extension whenever you make edits and rebuild the project.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 👨‍💻 Author

**Eray Boz**

---

## ☕ Support

If you like this extension, feel free to support it with a donation:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/erayboz)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
