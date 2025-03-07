"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex-1 w-full">
      {/* 视差滚动封面部分 */}
      <section className="relative w-full h-screen overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src="/cover.jpg"
            alt="太理 2025 开年分享交流会"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background flex items-center justify-center">
          <motion.div 
            className="text-center text-white p-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">太理 2025 开年分享交流会</h1>
            <p className="text-xl md:text-2xl mb-8">记录精彩瞬间，分享交流的力量</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-opacity-90 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                查看精彩回顾
              </motion.button>
              <motion.button 
                className="px-6 py-3 bg-transparent text-white font-medium rounded-full border border-white hover:bg-white/10 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                了解更多
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 内容区域 */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">会议介绍</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            2025年开年分享交流会在南川太理顺利举行，来自各个领域的优秀代表分享了他们的经验与见解，共同探讨未来发展方向。
          </p>
        </motion.div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "精彩分享",
              description: "多位分享者带来了他们在各自领域的独到见解和实践经验。",
              icon: "🎤"
            },
            {
              title: "思想碰撞",
              description: "不同背景的参与者进行深入交流，产生创新思想和合作机会。",
              icon: "💡"
            },
            {
              title: "未来展望",
              description: "共同探讨2025年的发展趋势和机遇，规划未来方向。",
              icon: "🔭"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 语音资料预告 */}
        <motion.div 
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/20 p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-secondary/20 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">语音资料</h3>
              <p className="text-lg text-muted-foreground mb-6">
                我们正在整理会议的语音资料和精彩片段，即将推出，敬请期待...
              </p>
              <motion.button 
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                预约提醒
              </motion.button>
            </div>
            <div className="w-32 h-32 rounded-full bg-background/80 backdrop-blur flex items-center justify-center">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 3.536a3 3 0 00-4.243-4.243m-1.414 4.243a1 1 0 01-1.414 0m0 0a1 1 0 010-1.414m1.414 1.414L9 9" />
              </svg>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
