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
      {/* 视差滚动封面部分 - 增强版 */}
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
          {/* 添加高级光效滤镜 */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent mix-blend-overlay opacity-60"></div>
        </div>
        
        {/* 增强背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        
        {/* 添加动态粒子效果 */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="particles-container"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white p-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 添加装饰性元素 */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tighter">
              太理 2025 
              <span className="block mt-2">开年分享交流会</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              记录精彩瞬间，分享交流的力量
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.button 
                className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                查看精彩回顾
              </motion.button>
              <motion.button 
                className="px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white hover:bg-white/10 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                了解更多
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* 改进滚动指示器 */}
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

      {/* 内容区域 - 升级版 */}
      <section className="relative max-w-7xl mx-auto py-32 px-6">
        {/* 添加背景装饰 */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"></div>
        
        <motion.div 
          className="mb-24 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">关于会议</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">会议介绍</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            2025年开年分享交流会在南川太理顺利举行，来自各个领域的优秀代表分享了他们的经验与见解，共同探讨未来发展方向。
          </p>
        </motion.div>

        {/* 改进卡片网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "精彩分享",
              description: "多位分享者带来了他们在各自领域的独到见解和实践经验。",
              icon: "🎤",
              color: "from-blue-500/20 to-purple-500/20"
            },
            {
              title: "思想碰撞",
              description: "不同背景的参与者进行深入交流，产生创新思想和合作机会。",
              icon: "💡",
              color: "from-amber-500/20 to-red-500/20"
            },
            {
              title: "未来展望",
              description: "共同探讨2025年的发展趋势和机遇，规划未来方向。",
              icon: "🔭",
              color: "from-emerald-500/20 to-cyan-500/20"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative p-10 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group"
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
              
              {/* 添加互动指示器 */}
              <div className="absolute bottom-5 right-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 增强语音资料区域 */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 p-12 border border-border/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 增强装饰性光效 */}
          <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-secondary/20 blur-3xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:max-w-2xl">
              <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">即将推出</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">语音资料</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                我们正在整理会议的语音资料和精彩片段，包括主题演讲、专家讨论和互动问答环节，敬请期待...
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  预约提醒
                </motion.button>
                <motion.button 
                  className="px-8 py-4 bg-background/80 backdrop-blur-sm text-foreground font-medium rounded-full border border-border hover:bg-background transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  了解详情
                </motion.button>
              </div>
            </div>
            
            {/* 增强音频视觉元素 */}
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-background/90 backdrop-blur flex items-center justify-center shadow-xl">
                <svg className="w-20 h-20 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 3.536a3 3 0 00-4.243-4.243m-1.414 4.243a1 1 0 01-1.414 0m0 0a1 1 0 010-1.414m1.414 1.414L9 9" />
                </svg>
              </div>
              
              {/* 添加音频波形动画 */}
              <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-1">
                {[...Array(9)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-1 bg-primary rounded-full"
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
