!function(){

    let view = document.querySelector('.menuTigger ')

    let controller = {
        view:null,
        aTags:null,
        init:function(view){
            this.view = view
            this.initAnimate()
            this.bindEvents()
        },
        bindEvents:function(){
            this.aTags = this.view.querySelectorAll('ul > li > a')
            for(let i = 0; i < this.aTags.length; i++){
                this.aTags[i].addEventListener('click',(e)=>{
                    e.preventDefault()
                    let href = e.currentTarget.getAttribute('href') //直接用 id.href 得到的 href 是经过 Http 处理过的
                    let element = document.querySelector(href)
                        this.scrollToElement(element)
                })
            }

        },
        initAnimate:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement:function(element){
            let top = element.offsetTop   //这里获取的高度是要不变的，getBoundingClientRect() 获取的 top 会变化

            let currentTop = window.scrollY //当距离
            let targetTop = top - 80    //目标距离
            let t = Math.abs(currentTop - targetTop) / 100 * 300
            if(t>1000){
                t = 1000
            }
            let coords = { y: currentTop };
            let tween = new TWEEN.Tween(coords)
                .to({  y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function() {
                    console.log(0,coords.y)
                    window.scrollTo(0,coords.y)
                })
                .start();
        }
    }


    controller.init(view)

}.call()


