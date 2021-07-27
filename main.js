const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x) //字符串变对象
const removehttp = (url) => {
  return url.replace('https://', '') //将字符串替换成空字符串
    .replace('http://', '')
    .replace('www.', '')
}

function hideImg1() {
  document.querySelector(".imgicon").style.display = "none";
}
const render = () => {
  a = $siteList.find('li:not(.last)').remove()
  hashMap.forEach(

    node => {
      const $li = $(`<li>
      <a href="${node.url}" >
        <div class="site">
          <div class="logo">${removehttp(node.url)[0].toUpperCase()}</div>
        
         <span class="imgcontainer"><img src=${node.logo} class='imgicon' width='25px' height='25px'  ></span> <div class="link">${ removehttp(node.url) }</div>
        </div>
      </a>
    
    </li>`).insertBefore($lastLi)
    }

  )
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


]

render()

$(".addButton").on('click', () => {
  let url = window.prompt('请问你要添加的网址是啥?')
  if (url.indexOf('http') !== 0) {
    url = 'https://' + url
  }
  hashMap.push({

    logoType: 'text',
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