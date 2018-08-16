!function(){
    let view = document.querySelectorAll('.menuTigger > ul > li')
    let controller = {
        view:null,
        init:function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents:function(){
            for(let i = 0; i < view.length; i++){
                view[i].addEventListener('mouseenter',function(e){
                    e.currentTarget.classList.add('active')
                })
                view[i].addEventListener('mouseleave',function(e){
                    e.currentTarget.classList.remove('active')
                })
            }
        }
    }
    controller.init(view)
}.call()

