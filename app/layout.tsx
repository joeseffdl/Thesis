import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Navigation } from "./components";
import { DataContextProvider } from "@/utils/context";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "Smart Hard Hat System",
  description: "Web application for administrator usage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`flex ${poppins.variable} font-poppins`}>
        <DataContextProvider>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                padding: "16px",
                fontWeight: "500",
              },
            }}
          />
          <Navigation />
          {children}
        </DataContextProvider>
      </body>
    </html>
  );
}
