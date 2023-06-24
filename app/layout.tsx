import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Navigation } from "./components";
import { DataContextProvider } from "@/utils/context";
import QueryWrapper from "./components/QueryWrapper";

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
          <QueryWrapper>
            <Navigation />
            {children}
          </QueryWrapper>
        </DataContextProvider>
      </body>
    </html>
  );
}
