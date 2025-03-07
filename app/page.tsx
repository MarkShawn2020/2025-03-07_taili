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
      {/* 视差滚动封面部分 - 创新科技风格 */}
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
            alt="手工川 2025 开年分享交流会"
            fill
            className="object-cover"
            priority
          />
          {/* 添加科技风格滤镜 */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700/20 to-transparent mix-blend-overlay opacity-70"></div>
          <div className="absolute inset-0 bg-tech-texture mix-blend-soft-light opacity-20"></div>
        </div>
        
        {/* 渐变背景 - 使用更符合科技风格的色调 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white p-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 手工川品牌元素 */}
            <motion.div 
              className="flex justify-center mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="px-4 py-2 border-2 border-primary/70 rounded-md">
                <span className="text-lg md:text-xl font-medium tracking-wider text-primary-foreground">手工川</span>
              </div>
            </motion.div>
            
            {/* 装饰性元素 - 科技风格分隔线 */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/80"></div>
              <div className="w-4 h-4 rounded-full border border-primary/80 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary/80"></div>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/80"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tighter">
              手工川 2025 
              <span className="block mt-2">开年分享交流会</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              AI 创新，DIY 精神，探索无限可能
            </motion.p>
            
            {/* 按钮样式调整为更符合科技风格 */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.button 
                className="px-8 py-4 bg-blue-50 text-blue-900 font-medium rounded-lg hover:bg-opacity-95 transition-all shadow-lg hover:shadow-xl border border-blue-200/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                查看精彩回顾
              </motion.button>
              <motion.button 
                className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white/70 hover:bg-white/10 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                了解更多
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* 滚动指示器 */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="p-3 rounded-full border border-white/30 backdrop-blur-sm animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* 内容区域 - 创新科技风格 */}
      <section className="relative max-w-7xl mx-auto py-32 px-6">
        {/* 添加背景装饰 - 科技风格元素 */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-purple-700/5 blur-3xl"></div>
        
        <motion.div 
          className="mb-24 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">创新精神</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">手工川 · 会议介绍</h2>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600/80 dark:to-blue-400/80"></div>
            <div className="w-3 h-3 rounded-full border border-blue-600/80 dark:border-blue-400/80"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600/80 dark:to-blue-400/80"></div>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            2025年开年分享交流会在南川手工川顺利举行，创新者们分享了AI技术与DIY精神的结合经验，探索如何用技术实现有趣且实用的创意。
          </p>
        </motion.div>

        {/* 卡片网格布局 - 创新科技风格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "AI创新",
              description: "探索人工智能如何赋能DIY创作，打造属于自己的智能创意作品。",
              icon: "🤖",
              color: "from-blue-500/20 to-purple-500/20"
            },
            {
              title: "创意实验",
              description: "分享各种有趣的技术实验和创意项目，激发更多可能性。",
              icon: "💡",
              color: "from-cyan-600/20 to-blue-500/20"
            },
            {
              title: "开源精神",
              description: "倡导开放分享，共同进步，让创意和技术惠及更多人。",
              icon: "🔄",
              color: "from-green-500/20 to-blue-500/20"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative p-10 rounded-lg border border-blue-200/30 dark:border-blue-800/30 shadow-sm hover:shadow-md transition-all overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* 背景渐变效果 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              
              {/* 科技风格指示器 */}
              <div className="absolute bottom-5 right-5 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 语音资料区域 - 创新科技风格 */}
        <motion.div 
          className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-100/10 to-blue-500/5 p-12 border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 装饰性光效 */}
          <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-purple-700/10 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:max-w-2xl">
              <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">手工川·创意分享</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">创新对话</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                我们正在整理与创新者的深度对话、技术分享和创意灵感的音频内容，让您能够聆听更多有趣的想法和实践经验...
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  className="px-8 py-4 bg-blue-600 text-white dark:bg-blue-700 font-medium rounded-lg hover:opacity-90 transition shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  预约提醒
                </motion.button>
                <motion.button 
                  className="px-8 py-4 bg-background/80 backdrop-blur-sm text-foreground font-medium rounded-lg border border-blue-200/30 dark:border-blue-800/30 hover:bg-background transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  了解详情
                </motion.button>
              </div>
            </div>
            
            {/* 音频视觉元素 - 科技风格 */}
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-background/90 backdrop-blur border border-blue-200/30 dark:border-blue-800/30 flex items-center justify-center shadow-xl">
                <svg className="w-20 h-20 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 3.536a3 3 0 00-4.243-4.243m-1.414 4.243a1 1 0 01-1.414 0m0 0a1 1 0 010-1.414m1.414 1.414L9 9" />
                </svg>
              </div>
              
              {/* 音频波形动画 */}
              <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-1">
                {[...Array(9)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                    initial={{ height: 4 }}
                    animate={{ height: [4, 12, 4, 16, 4, 8, 4] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
