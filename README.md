# Ting AI — Official Landing Page (`tingsai.my.id`)

> **Official Landing & Marketing Website for Ting AI**  
> AI-Powered Macro & Wealth Intelligence Platform.

🌐 **Live Website**: [https://tingsai.my.id](https://tingsai.my.id)  
🚀 **Ting AI App Platform**: [https://app.tingsai.my.id](https://app.tingsai.my.id)  
👤 **Author**: Faturachman Alkahfi ([@Vinzz2303](https://github.com/Vinzz2303))

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router, Turbopack, Static Export)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Icons**: Lucide React
- **Language**: TypeScript

---

## 🛠️ Project Structure

```
ting-landing-page/
├── public/                 # Static branding assets, icons, SVGs
├── src/
│   ├── app/                # Next.js App Router (page.tsx, layout.tsx)
│   └── components/         # Landing UI sections & components
├── next.config.ts          # Static export configuration
├── package.json
└── tsconfig.json
```

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static output (exports to out/)
npm run build
```

---

## 🌐 IIS Deployment
Production output (`out/`) is served on Windows Server IIS Site `ting-landing-page` at `C:\inetpub\wwwroot\ting-landing-page`.
