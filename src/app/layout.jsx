import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <header className="flex items-center justify-between w-[90%] px-8">
          <Link href={"./"} className="text-[2rem]">
            NEXTEVENTS
          </Link>
          <div>
            <Link href={"./events"}>Browse Events</Link>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
