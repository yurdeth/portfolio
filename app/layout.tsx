import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portafolio de Angel Gabriel',
  description: 'Portafolio de diseño UI/UX de Angel Gabriel',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
