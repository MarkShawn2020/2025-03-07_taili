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
    <html lang="zh-CN" className={geistSans.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none z-[-1]"></div>
          <main className="min-h-screen flex flex-col">
            <nav className="fixed top-0 w-full backdrop-blur-sm bg-background/70 z-10 flex justify-between items-center border-b border-b-foreground/10 px-6 py-4">
              <div className="font-bold text-lg tracking-tight">太理 2025</div>
              <ThemeSwitcher />
            </nav>
            <div className="w-full mt-16">
              {children}
            </div>
            <footer className="w-full border-t border-t-foreground/10 py-10 px-6">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-medium">© 2025 太理开年分享交流会</p>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-primary transition-colors">关于我们</a>
                  <a href="#" className="hover:text-primary transition-colors">联系方式</a>
                  <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
                </div>
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
