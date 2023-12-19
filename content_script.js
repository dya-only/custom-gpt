chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "changeColor") {
    if (request.value) {
      const nav = document.querySelector('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div.absolute.left-0.right-0 > div')
      const nav2 = document.querySelector('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div.absolute.left-0.right-0 > div')
      const main = document.querySelector('main')
      if (main) {
        const bg = new Image()
        bg.src = 'https://chatgpt-custom.s3.ap-northeast-2.amazonaws.com/ash_4k.png'
        bg.style.width = '100%'
        bg.style.height = '100%'
        bg.style.position = 'absolute'
        bg.style.filter = 'brightness(50%)'
        bg.style.objectFit = 'cover'
        main.prepend(bg)

        nav.style.backgroundColor = 'transparent'
        nav.style.backdropFilter = 'blur(10px)'
        nav2.style.backgroundColor = 'transparent'
        nav2.style.backdropFilter = 'blur(10px)'
      }
    } else {
      const main = document.querySelector('main')
      if (main) {
        document.querySelector('main > img').style.display = none
      }
    }
  }
})

chrome.storage.local.get(['switch'], function (result) {
  if (result.switch !== undefined) {
    if (result.switch) {
      const nav = document.querySelector('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div.absolute.left-0.right-0 > div')
      const nav2 = document.querySelector('#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div.absolute.left-0.right-0 > div')
      const main = document.querySelector('main')
      if (main) {
        const bg = new Image()
        bg.src = 'https://chatgpt-custom.s3.ap-northeast-2.amazonaws.com/ash_4k.png'
        bg.style.width = '100%'
        bg.style.height = '100%'
        bg.style.position = 'absolute'
        bg.style.filter = 'brightness(50%)'
        bg.style.objectFit = 'cover'
        main.prepend(bg)

        nav.style.backgroundColor = 'transparent'
        nav.style.backdropFilter = 'blur(10px)'
        nav2.style.backgroundColor = 'transparent'
        nav2.style.backdropFilter = 'blur(10px)'
      }
    } else {
      const main = document.querySelector('main')
      if (main) {
        document.querySelector('main > img').style.display = none
      }
    }
  }
})