import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js on Flight Control',
  description: 'Deploy your Next.js application to Flight Control',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
