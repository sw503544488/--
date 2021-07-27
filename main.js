const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x) //字符串变对象
const removehttp = (url) => {
  return url.replace('https://', '') //将字符串替换成空字符串
    .replace('http://', '')
    .replace('www.', '')
    .replace(/\/.*/, '') //杠后面有任何东西都删除掉
}

function hideImg1() {
  document.querySelector(".imgicon").style.display = "none";
}


const hashMap = xObject || [{
    logo: 'http://www.acfun.cn/favicon.ico',
    logoType: 'text',
    url: 'https://www.acfun.cn'
  }, {
    logo: 'https://bilibili.com/favicon.ico',
    logoType: 'img',
    url: 'https://bilibili.com'
  },

  {
    logo: 'https://developer.mozilla.org/favicon.ico',
    logoType: 'img',
    url: 'https://developer.mozilla.org/'
  },
  {
    logo: 'https://www.w3.org/favicon.ico',
    logoType: 'img',
    url: 'https://www.w3.org',
  }
]


const render = () => {
  a = $siteList.find('li:not(.last)').remove()
  hashMap.forEach((node, index) => {

    const $li = $(`<li>
    
        <div class="site">
          <div class="logo">${removehttp(node.url)[0].toUpperCase()}</div>
        
         <span class="imgcontainer"><img src=${node.logo} onerror="this.src='errorimg.jpg' " class='imgicon' width='25px' height='25px' alt="1" ></span>
          <div class="link">${ removehttp(node.url) }</div>
       <div class="close"><img src='close.png'  width='10px' height='10px' class='closeimg' ></div>
         </div>
      
    
    </li>`).insertBefore($lastLi)
    $li.on('click', () => {
      window.open(node.url)
    })

    $li.on('click', ".close", (e) => {
      e.stopPropagation()
      hashMap.splice(index, 1)
      render()
    })
  })
}


render()

$(".addButton").on('click', () => {
  let url = window.prompt('请问你要添加的网址是啥?')
  if (url.indexOf('http') !== 0) {
    url = 'https://' + url
  }
  hashMap.push({

    url: url,
    logo: url + '/favicon.ico',
  })
  console.log(hashMap.logo)
  render()
})

window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap) //将hashMap变成字符串
  localStorage.setItem('x', string)
}
$(document).on('keypress', (e) => { // 点击事件
  console.log(e.key)
  let n = []

  const {
    key
  } = e
  for (let i = 0; i < hashMap.length; i++) {
    if (removehttp(hashMap[i].url)[0].toLowerCase() === key) {
      // n.push(i)
      window.open(hashMap[i].url)


    }
  }

  // if (n.length === 1) {
  // window.open(hashMap[n[0]].url)
  // } else {
  //   window.open(hashMap[(n[0]].url)
  // }
})


$(document).on('keypress', (e) => {

  const {
    key
  } = e
  let a = {
    1: 1,
    2: 2,
    3: 3,
    4: 2,
    5: 2,
    6: 2,
    7: 2,
    8: 2,
    9: 2,
    0: 2
  }
  if (key in a) {
    let c = key - 1;
    if (c === -1) {
      window.open(hashMap[10].url)

    }
    window.open(hashMap[c].url)
  }

})