import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tings AI â€” Intelligent Market Copilot & Analisis Portofolio",
  description: "Tings AI adalah platform inteligensi pasar independen untuk investor ritel Indonesia. Membedah konteks makro IHSG & Kripto serta risiko portofolio secara objektif.",
  keywords: [
    "Tings AI",
    "Tings AI",
    "AI Financial Intelligence",
    "Analisis Portofolio Saham",
    "Risiko IHSG Kripto",
    "Copilot Investor Indonesia",
    "Faturachman Alkahfi"
  ],
  authors: [{ name: "Faturachman Alkahfi", url: "https://faturachman.my.id" }],
  creator: "Faturachman Alkahfi",
  publisher: "Tings AI",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tings AI â€” Intelligent Market Copilot",
    description: "Bukan memberi sinyal beli/jual, tapi menyadarkan realita & risiko portofolio sebelum Anda bertindak.",
    url: "https://tingsai.my.id",
    siteName: "Tings AI",
    images: [
      {
        url: "https://tingsai.my.id/ting-ai-og-image.png",
        width: 1200,
        height: 630,
        alt: "Tings AI Platform Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tings AI â€” Intelligent Market Copilot",
    description: "Analisis portofolio, konsentrasi saham, dan konteks pasar dengan bantuan AI secara objektif.",
    images: ["https://tingsai.my.id/ting-ai-og-image.png"],
  },
  alternates: {
    canonical: "https://tingsai.my.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tings AI",
    "operatingSystem": "Web",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IDR",
    },
    "description": "Intelligent Market Copilot providing objective market context and portfolio risk analytics for Indonesian investors.",
    "author": {
      "@type": "Person",
      "name": "Faturachman Alkahfi",
      "url": "https://faturachman.my.id"
    }
  };

  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="author" href="https://tingsai.my.id/llms.txt" />
      </head>
      <body className="min-h-screen bg-[#08090d] text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}


