import { Hono } from 'hono'

export const Home = new Hono()

export const Meteors = ({ number }: { number: number }) => {
  return (
    <>
      {Array.from({ length: number || 20 }, (_, idx) => (
        <span
          key={idx}
          class="meteor animate-[meteorAnimation_3s_linear_infinite] absolute h-1 w-1 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`
          }}
        />
      ))}
    </>
  )
}

Home.get('/', (c) => {
  const title = 'Vortex Music Database'
  const description =
    'Vortex is a powerful music database API providing seamless access to songs, albums, artists, playlists, and more. Built for developers who need reliable music data.'

  return c.html(
    <html>
      <head>
        <title>Vortex Music Database</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { font-family: 'Inter', sans-serif; } 
            @keyframes borderAnimation {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes meteorAnimation {
              0% { transform: rotate(215deg) translateX(0); opacity: 1; }
              70% { opacity: 1; }
              100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
            }
            .meteor::before {
              content: '';
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 50px;
              height: 1px;
              background: linear-gradient(90deg, #8b5cf6, transparent);
            }`
          }}
        />
      </head>
      <body class="bg-black min-h-screen flex flex-col">
        {/* Navigation */}
        <nav class="border-b border-gray-800 bg-black bg-opacity-50 backdrop-blur-sm sticky top-0 z-50">
          <div class="max-w-screen-lg mx-auto px-4 py-4 flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#8b5cf6"
                  d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.93-7-5.17-7-9V8.3l7-3.5 7 3.5V11c0 3.83-3.14 8.07-7 9z"
                />
                <circle cx="12" cy="12" r="3" fill="#8b5cf6"/>
              </svg>
              <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Vortex
              </span>
            </div>
            <div class="flex items-center space-x-6">
              <a href="/docs" class="text-gray-300 hover:text-white transition-colors text-sm">Docs</a>
              <a href="#features" class="text-gray-300 hover:text-white transition-colors text-sm">Features</a>
              <a href="https://github.com" target="_blank" class="text-gray-300 hover:text-white transition-colors text-sm">GitHub</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main class="flex-1 max-w-screen-lg mx-auto px-4 py-16 relative overflow-hidden">
          <Meteors number={15} />

          {/* Hero Section */}
          <div class="text-center mb-16 relative z-10">
            <div class="inline-block mb-4">
              <span class="animate-[borderAnimation_3s_linear_infinite] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:400%_400%] p-1">
                <span class="block rounded-full px-4 py-1.5 text-xs text-white uppercase tracking-wider bg-black">
                  Music Database API
                </span>
              </span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-6">
              Vortex Music
            </h1>
            <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              A comprehensive music database API providing instant access to millions of songs, albums, artists, and playlists. 
              Built for developers, powered by speed.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/docs"
                class="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Get Started
              </a>
              <a
                href="https://github.com"
                target="_blank"
                class="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-900 transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div id="features" class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div class="p-6 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-all bg-gray-900 bg-opacity-50">
              <div class="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p class="text-gray-400">Optimized API endpoints delivering music data at incredible speeds.</p>
            </div>

            <div class="p-6 border border-gray-800 rounded-lg hover:border-pink-500/50 transition-all bg-gray-900 bg-opacity-50">
              <div class="w-12 h-12 bg-pink-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Comprehensive Data</h3>
              <p class="text-gray-400">Access songs, albums, artists, playlists, lyrics, and more.</p>
            </div>

            <div class="p-6 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-all bg-gray-900 bg-opacity-50">
              <div class="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Easy Integration</h3>
              <p class="text-gray-400">RESTful API with simple endpoints and clear documentation.</p>
            </div>

            <div class="p-6 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all bg-gray-900 bg-opacity-50">
              <div class="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Open Source</h3>
              <p class="text-gray-400">Fully open-source and community-driven. Contribute on GitHub.</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer class="border-t border-gray-800 py-8 mt-16">
          <div class="max-w-screen-lg mx-auto px-4 text-center">
            <p class="text-gray-500 text-sm mb-2">
              © 2024 Vortex Music Database. Open Source Project.
            </p>
            <p class="text-gray-600 text-xs">
              Not affiliated with JioSaavn, Spotify, YouTube, SoundCloud, Gaana, Apple Music, or any other music streaming service.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
})
