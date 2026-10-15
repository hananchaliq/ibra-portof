import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#F4F1EA',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Ibrahimmovic Hasan | Software Developer Portfolio',
  description: 'Portofolio Ibrahimmovic Hasan, siswa kelas XII PPLG 1 di MAKN Ende yang berfokus pada pengembangan website berbasis WordPress serta HTML, CSS, dan JavaScript.',
  authors: [{ name: 'Ibrahimmovic Hasan' }],
  keywords: [
    'Ibrahimmovic Hasan',
    'Software Developer',
    'Web Developer',
    'WordPress Developer',
    'MAKN Ende',
    'PPLG',
    'Kalabahi Alor',
  ],
  openGraph: {
    title: 'Ibrahimmovic Hasan | Software Developer Portfolio',
    description: 'Portofolio Ibrahimmovic Hasan, siswa PPLG di MAKN Ende berfokus pada pengembangan website dan WordPress.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary',
    title: 'Ibrahimmovic Hasan | Software Developer Portfolio',
    description: 'Portofolio Ibrahimmovic Hasan, siswa PPLG di MAKN Ende berfokus pada pengembangan website dan WordPress.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-body antialiased bg-[#F4F1EA] text-[#171717] dark:bg-[#111113] dark:text-[#EDEDEC] transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
