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
    'Vortex connects you to millions of songs, albums, artists, and playlists. A unified music database API for developers.'

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { font-family: 'Inter', sans-serif; } 
            @keyframes meteorAnimation {
              0% { transform: rotate(215deg) translateX(0); opacity: 1; }
              70% { opacity: 1; }
              100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            .meteor::before {
              content: '';
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 50px;
              height: 1px;
              background: linear-gradient(90deg, #8b5cf6, transparent);
            }
            .glass-nav {
              background: rgba(0, 0, 0, 0.5);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
            }`
          }}
        />
      </head>
      <body class="bg-black min-h-screen text-white overflow-x-hidden">
        {/* Navigation */}
        <nav class="sticky top-4 z-50 px-6">
          <div class="max-w-5xl mx-auto glass-nav rounded-full border border-white border-opacity-10 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                <circle cx="12" cy="12" r="6" fill="none" stroke="#a78bfa" stroke-width="2"/>
                <circle cx="12" cy="12" r="2" fill="#8b5cf6"/>
              </svg>
              <span class="text-2xl font-bold tracking-tight">Vortex</span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="/docs" class="text-white text-opacity-70 hover:text-opacity-100 transition-all">Documentation</a>
              <a href="https://github.com" target="_blank" class="text-white text-opacity-70 hover:text-opacity-100 transition-all">GitHub</a>
              <a href="/docs" class="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section class="relative min-h-screen flex items-center justify-center px-6">
          <Meteors number={20} />
          
          <div class="max-w-6xl mx-auto text-center relative z-10">
            <div class="mb-8">
              <span class="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-white bg-opacity-5 border border-white border-opacity-20 text-white text-opacity-80">
                Music Database
              </span>
            </div>
            
            <h1 class="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span class="block text-white">Connect to</span>
              <span class="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                Millions of Songs
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl text-white text-opacity-60 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Vortex connects developers to a vast music database with instant access to songs, albums, artists, playlists, and more. 
              One API, endless possibilities.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a
                href="/docs"
                class="px-10 py-4 bg-white text-black rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-xl shadow-white/10"
              >
                Explore API
              </a>
              <a
                href="https://github.com"
                target="_blank"
                class="px-10 py-4 border-2 border-white border-opacity-20 text-white rounded-full text-lg font-semibold hover:border-opacity-40 transition-all"
              >
                View on GitHub
              </a>
            </div>

            {/* Connection Visual */}
            <div class="flex items-center justify-center gap-8 flex-wrap mt-16">
              <div class="text-center animate-[float_3s_ease-in-out_infinite]">
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p class="text-white text-opacity-50 text-sm font-medium">Connected</p>
              </div>

              <div class="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[pulse_2s_ease-in-out_infinite]"></div>

              <div class="text-center animate-[float_3s_ease-in-out_infinite_0.5s]">
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-white bg-opacity-5 border-2 border-white border-opacity-20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-white text-opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                  </svg>
                </div>
                <p class="text-white text-opacity-50 text-sm font-medium">Songs</p>
              </div>

              <div class="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>

              <div class="text-center animate-[float_3s_ease-in-out_infinite_1s]">
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-white bg-opacity-5 border-2 border-white border-opacity-20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-white text-opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <p class="text-white text-opacity-50 text-sm font-medium">Artists</p>
              </div>

              <div class="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[pulse_2s_ease-in-out_infinite_1s]"></div>

              <div class="text-center animate-[float_3s_ease-in-out_infinite_1.5s]">
                <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-white bg-opacity-5 border-2 border-white border-opacity-20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-white text-opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <p class="text-white text-opacity-50 text-sm font-medium">Albums</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section class="py-20 px-6 border-t border-white border-opacity-5">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div class="text-center">
                <p class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">10M+</p>
                <p class="text-white text-opacity-50 text-sm uppercase tracking-wide">Songs</p>
              </div>
              <div class="text-center">
                <p class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text mb-2">500K+</p>
                <p class="text-white text-opacity-50 text-sm uppercase tracking-wide">Artists</p>
              </div>
              <div class="text-center">
                <p class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">1M+</p>
                <p class="text-white text-opacity-50 text-sm uppercase tracking-wide">Albums</p>
              </div>
              <div class="text-center">
                <p class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text mb-2">24/7</p>
                <p class="text-white text-opacity-50 text-sm uppercase tracking-wide">Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer class="border-t border-white border-opacity-5 py-12 px-6 mt-20">
          <div class="max-w-6xl mx-auto text-center">
            <div class="flex items-center justify-center space-x-3 mb-4">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                <circle cx="12" cy="12" r="6" fill="none" stroke="#a78bfa" stroke-width="2"/>
                <circle cx="12" cy="12" r="2" fill="#8b5cf6"/>
              </svg>
              <span class="text-lg font-bold">Vortex</span>
            </div>
            <p class="text-white text-opacity-40 text-sm mb-2">
              © 2024 Vortex Music Database. Open Source Project.
            </p>
            <p class="text-white text-opacity-30 text-xs max-w-2xl mx-auto">
              Not affiliated with JioSaavn, Spotify, YouTube, SoundCloud, Gaana, Apple Music, or any other music streaming service.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
})
