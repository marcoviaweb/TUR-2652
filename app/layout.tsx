import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TUR-2652 | Prácticas Ágiles para el Turismo",
  description: "Asignatura de la Carrera de Turismo UMSA para diseñar productos sostenibles y transformar organizaciones mediante metodologías ágiles.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
