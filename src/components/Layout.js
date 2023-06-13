'use client'
import { ThemeProvider } from 'next-themes';

const Layout = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="className">
        { children }
    </ThemeProvider>
  )
}

export default Layout