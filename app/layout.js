// app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'My Product — Landing',
  description: 'Responsive landing page built with Next.js + Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  )
}
