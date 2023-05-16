import { Navigation } from "./components"
import "./globals.css"
import { Poppins, Montserrat } from "next/font/google"

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  fallback: ["system-ui", "arial"],
})

export const metadata = {
  title: "Smart Hard Hat System",
  description: "Web application for administrator usage",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`flex ${poppins.variable} font-poppins`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
