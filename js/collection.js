!function(){
    let view = document.getElementById('portfolioBar')
    let controller = {
        view:null,
        children:document.getElementById('portfolioWrap').children,
        array:[],
        init:function(view){
            this.view = view
            this.bindEvents(view)
        },
        bindEvents:function(view){
            console.log(this.children)
            for(let i = 0; i < this.children.length; i++){
                this.array.push(this.children[i])
            }
            this.array.forEach((e)=>{
                e.addEventListener('click',(e)=>{
                    if(e.currentTarget === this.children[0]){
                        view.className = 'bar state-1'
                    }else if(e.currentTarget === this.children[1]){
                        view.className = 'bar state-2'
                    }else if(e.currentTarget === this.children[2]){
                        view.className = 'bar state-3'
                    }
                })
            })
        }

    }
    controller.init(view)


}.call()

