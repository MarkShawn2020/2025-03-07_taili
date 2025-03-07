import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      {/* Cover Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/cover.jpg"
          alt="太理 2025 开年分享交流会"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">太理 2025 开年分享交流会</h1>
            <p className="text-xl md:text-2xl">记录精彩瞬间，分享交流的力量</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-12">
          {/* 会议介绍 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">会议介绍</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              2025年开年分享交流会在南川太理顺利举行，来自各个领域的优秀代表分享了他们的经验与见解。
            </p>
          </div>

          {/* 内容板块 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">精彩分享</h3>
              <p className="text-gray-600 dark:text-gray-300">
                多位分享者带来了他们在各自领域的独到见解和实践经验。
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">交流讨论</h3>
              <p className="text-gray-600 dark:text-gray-300">
                与会者展开了热烈的讨论，碰撞出了新的火花。
              </p>
            </div>
          </div>

          {/* 语音资料预告 */}
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">语音资料</h3>
            <p className="text-gray-600 dark:text-gray-300">即将推出，敬请期待...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
