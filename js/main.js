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