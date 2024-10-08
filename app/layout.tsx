import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vercel.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>GDG site</title>
    </head>
    <body className={inter.className}>
      
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
    
        </ThemeProvider>
   
    </body>
  </html>
  );
}
