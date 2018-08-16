!function(){
    let view = document.getElementById('sticky')
    let controller = {
        view:null,
        specialTags:document.querySelectorAll('[data-x]'),
        minIndex:0,
        init:function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents:function(){
            window.addEventListener('scroll',()=>{
                if(window.scrollY > 0){
                    view.classList.add('sticky')
                }else{
                    view.classList.remove('sticky')
                }
                this.scrollingPageEffect()
            })
        },
        scrollingPageEffect:function(){
            for(let i = 1; i < this.specialTags.length; i++){
                if(Math.abs(this.specialTags[i].offsetTop - window.scrollY) < Math.abs(this.specialTags[this.minIndex].offsetTop - window.scrollY)){
                    this.minIndex = i
                }
            }
            let id = this.specialTags[this.minIndex].id
            let aTag = document.querySelector('a[href="#' + id +'"]')
            let liTag = aTag.parentNode
            let liTags = liTag.parentNode.children
            for(let i = 0; i < liTags.length; i++){
                liTags[i].classList.remove('heightLight')
            }
            liTag.classList.add('heightLight')
            if(liTags[1].className === 'heightLight'){
                this.specialTags[1].classList.add('animate')
            }else{
                this.specialTags[1].classList.remove('animate')
            }
        },
    }
controller.init(view)

}.call()

