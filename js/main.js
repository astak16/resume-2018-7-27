var portfolioWrap = document.getElementById('portfolioWrap')
var portfolioBar = document.getElementById('portfolioBar')
var children = portfolioWrap.children
var childrenArray = Array.prototype.slice.call(children)
var sticky = document.getElementById('sticky')
var menuTiggers = document.querySelectorAll('.menuTigger > ul > li')

childrenArray.forEach(function(e){
    e.addEventListener('click',function(){
        if(this === children[0]){
            portfolioBar.className = 'bar state-1'
        }else if(this === children[1]){
            portfolioBar.className = 'bar state-2'
        }else if(this === children[2]){
            portfolioBar.className = 'bar state-3'
        }
    })
})

window.addEventListener('scroll',function(){
    if(window.scrollY > 0){
        sticky.classList.add('sticky')
    }else{
        sticky.classList.remove('sticky')
    }
})

for(let i = 0; i < menuTiggers.length; i++){
    menuTiggers[i].addEventListener('mouseenter',function(e){
        e.currentTarget.classList.add('active')
    })
    menuTiggers[i].addEventListener('mouseleave',function(e){
        e.currentTarget.classList.remove('active')
    })
}

let aTags = document.querySelectorAll('.menuTigger > ul > li > a')
for(let i = 0; i < aTags.length; i++){
    aTags[i].addEventListener('click',function(e){
        e.preventDefault()
        let href = e.currentTarget.getAttribute('href') //直接用 id.href 得到的 href 是经过 Http 处理过的
        let idTag = document.querySelector(href)
        let top = idTag.offsetTop   //这里获取的高度是要不变的，getBoundingClientRect() 获取的 top 会变化


        //0.5s 运行 25 次
        let n = 25
        let duration = 500 / n
        let currentTop = window.scrollY //当距离
        let targetTop = top - 80    //目标距离
        let distance = (targetTop - currentTop) / n   //运动距离 / n = 每次运动距离
        let i = 0
        let timer = setInterval((e) => {
            if(i === n){
                clearInterval(timer)
                return
            }
            i += 1

            window.scrollTo(0,currentTop + distance * i) //滚动到文档中某个坐标
        },duration)
    })
}