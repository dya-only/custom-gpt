document.querySelector('.switch').addEventListener('click', () => {
  chrome.storage.local.set({ switch: document.querySelector('.switch > input').checked }, function () {
    console.log('디자인 변경 상태가 저장되었습니다:', document.querySelector('.switch > input').checked)
  })

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor", value: document.querySelector('.switch > input').checked })
  })
})

chrome.storage.local.get(['switch'], function(result) {
  if (result.switch !== undefined) {
    document.querySelector('.switch > input').checked = result.switch;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "changeColor", value: document.querySelector('.switch > input').checked});
    })
  }
})