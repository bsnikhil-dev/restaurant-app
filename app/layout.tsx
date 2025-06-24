
import { Header } from '@/components/Header/Header';
import './globals.css';

export const metadata = {
  title: "Restaurant App"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
