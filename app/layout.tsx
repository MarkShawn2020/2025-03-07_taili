import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "手工川 2025 开年分享交流会",
  description: "记录南川手工川 2025 年开年分享交流会的精彩瞬间，探索手工川的匠心精神",
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
          <div className="fixed inset-0 bg-craft-pattern opacity-5 pointer-events-none z-[-1]"></div>
          <main className="min-h-screen flex flex-col">
            <nav className="fixed top-0 w-full backdrop-blur-sm bg-background/70 z-10 flex justify-between items-center border-b border-b-foreground/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="font-bold text-xl tracking-tight">
                  <span className="text-primary">手工川</span> | 2025
                </div>
              </div>
              <ThemeSwitcher />
            </nav>
            <div className="w-full mt-16">
              {children}
            </div>
            <footer className="w-full border-t border-t-foreground/10 py-10 px-6 bg-background/80 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                  <div className="text-center md:text-left">
                    <div className="font-bold text-xl mb-2">
                      <span className="text-primary">手工川</span> | 2025
                    </div>
                    <p className="text-muted-foreground max-w-md">传承匠心精神，探索创新未来</p>
                  </div>
                  <div className="flex space-x-8">
                    <a href="#" className="hover:text-primary transition-colors">关于我们</a>
                    <a href="#" className="hover:text-primary transition-colors">联系方式</a>
                    <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
                  </div>
                </div>
                <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
                  <p>© 2025 手工川开年分享交流会</p>
                </div>
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
