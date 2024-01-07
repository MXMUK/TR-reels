import './globals.css';
import MainLayout from '@/components/Layout/MainLayout';
import { ThemeProvider } from './theme-provider';
import { Roboto } from 'next/font/google'

export const metadata = {
  title: 'Reels',
  description: 'The website should be the full copy of instagram reels'
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  overflow-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
