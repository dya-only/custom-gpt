document.querySelector('.switch').addEventListener('click', () => {
  chrome.storage.local.set({ switch: document.querySelector('.switch > input').checked }, () => {
    console.log('Design Changed: ', document.querySelector('.switch > input').checked)
  })

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor", value: document.querySelector('.switch > input').checked })
  })
})

document.querySelector('.uploader').addEventListener('change', () => {
  const file = document.querySelector('.uploader').files[0]

  if (file) {
    let reader = new FileReader()
    reader.onloadend = () => {
      chrome.storage.local.set({ img: reader.result }, () => {
        console.log('Image Changed: ', reader.result)

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor", value: document.querySelector('.switch > input').checked })
        })
      })
    }

    reader.readAsDataURL(file)
  }
})

chrome.storage.local.get(['switch', 'img'], (result) => {
  if (result.switch !== undefined) {
    document.querySelector('.switch > input').checked = result.switch;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor", value: document.querySelector('.switch > input').checked });
    })
  }
})