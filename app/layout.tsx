import { Navigation } from "./components"
import "./globals.css"

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
      <body className="flex">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
