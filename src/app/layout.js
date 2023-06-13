'use client'
import { ThemeProvider } from 'next-themes';
import './globals.css'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} >
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
