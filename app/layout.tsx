import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/theme-switcher";
import "./globals.css";

export const metadata = {
  title: "太理 2025 开年分享交流会",
  description: "记录南川太理 2025 年开年分享交流会的精彩瞬间",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full flex justify-end border-b border-b-foreground/10 p-4">
                <ThemeSwitcher />
              </nav>
              <div className="w-full">
                {children}
              </div>
              <footer className="w-full text-center text-xs py-8">
                <p>© 2025 太理开年分享交流会</p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
