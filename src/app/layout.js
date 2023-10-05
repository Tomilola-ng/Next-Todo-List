import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const classes =
  "border transition-colors bg-gray-100 border-neutral-700 bg-neutral-800/30 h-full mx-auto px-2 py-4";

export const metadata = {
  title: 'Todo List',
  description: 'A NextJS Todo List',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-lg py-12 px-4 h-screen mx-auto bg-black text-white ${inter.className}`}>
        <div className={`${classes} w-2/3 rounded-lg`}>{children}

          <footer className="mt-4 w-full flex place-items-center justify-center italic place-self-end self-end justify-self-end">
            Simple Todo List by
            <a
              href="https://tomilola-ng.vercel.app/"
              className="text-primary underline underline-offset-4 tracking-tight pl-1"
              blank
            >
              Tomilola-ng
            </a>
          </footer>
        </div>
      </body>
    </html>
  )
}
