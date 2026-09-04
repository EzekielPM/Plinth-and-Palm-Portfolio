import './globals.css';

export const metadata = {
  title: {
    default: 'PLINTH & PALM | Lifestyle & Property',
    template: '%s | PLINTH & PALM',
  },
  description: 'A Lagos-based lifestyle and property brand offering Airbnb services, interior design and artisan sourcing.',
  keywords: ['PLINTH & PALM', 'interior design Lagos', 'Airbnb design Lagos', 'artisan sourcing', 'shortlet interior design'],
  openGraph: {
    title: 'PLINTH & PALM | Lifestyle & Property',
    description: 'Beautiful spaces, intentional details and experiences that feel like home.',
    type: 'website',
    locale: 'en_NG',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f4ed' },
    { media: '(prefers-color-scheme: dark)', color: '#1d2420' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
