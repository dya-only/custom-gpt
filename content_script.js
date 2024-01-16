chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "changeColor") {
    if (request.value) {
      const main = document.querySelector('main')

      if (main) {
        chrome.storage.local.get(['switch', 'img'], (result) => {
          const bg = new Image()
          bg.className = 'bg'
          bg.src = result.img
          bg.style.width = '100%'
          bg.style.height = '100%'
          bg.style.position = 'absolute'
          bg.style.filter = 'brightness(50%)'
          bg.style.objectFit = 'cover'
          main.prepend(bg)

          window.location.reload()
        })
      }
    } else {
      document.querySelector('main > img').remove()
      window.location.reload()
    }
  }
})

chrome.storage.local.get(['switch', 'img'], (result) => {
  if (result.switch !== undefined) {
    if (result.switch) {
      const main = document.querySelector('main')
      if (main) {
        const bg = new Image()
        bg.className = 'bg'
        bg.src = result.img
        bg.style.width = '100%'
        bg.style.height = '100%'
        bg.style.position = 'absolute'
        bg.style.filter = 'brightness(50%)'
        bg.style.objectFit = 'cover'
        main.prepend(bg)
      }

      setInterval(() => {
        const navContainer = document.querySelector('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div > div')
        const nav = document.querySelector('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div > div > div')
        const nav2 = document.querySelector('main > div[role="presentation"] > div > div > div > div')
        const textarea = document.querySelector('main > div[role="presentation"] > .w-full > form > div > div.flex.w-full.items-center > div')
        const spans = document.querySelectorAll('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.w-full.pt-2 > form > div > div > div > div > div > div > div > span > button')
        // const logo = document.querySelector('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div.flex.h-full.flex-col.items-center.justify-center > div.relative > div > div')
        // const text = document.querySelector('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div.flex.h-full.flex-col.items-center.justify-center > div.mb-5.text-2xl.font-medium')

        nav.style.transition = 'all .5s'
        nav.style.backgroundColor = 'transparent'
        nav.style.backdropFilter = 'blur(5px)'

        nav2.style.transition = 'all .5s'
        nav2.style.transition = 'all .5s'
        nav2.style.backgroundColor = 'transparent'
        nav2.style.backdropFilter = 'blur(5px)'

        textarea.style.transition = 'all .5s'
        textarea.style.backgroundColor = 'rgb(52, 53, 65, .6)'
        textarea.style.border = 'none'
        textarea.style.backdropFilter = 'blur(5px)'

        spans.forEach(el => {
          el.style.transition = 'all .5s'
          el.style.backgroundColor = 'rgb(52, 53, 65, .6)'
          el.style.border = 'none'
          el.style.backdropFilter = 'blur(5px)'
        })

        navContainer.style.backdropFilter = 'none'

        // logo.style.backgroundColor = 'rgb(255, 255, 255, .4)'
        // logo.style.backdropFilter = 'blur(5px)'
      }, 1000)

    } else {
      document.querySelector('main > img').remove()
    }
  }
})