!function(){
    let view = document.querySelector('.messages')
    let model = {
        initAv:function(){
            let APP_ID = 'XHlpuHFPSe3iYezJHM6qiqj2-gzGzoHsz';
            let APP_KEY = 'jxN7WfGxa73gm4Nux5sRTBpe';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch:function(){
            let query = new AV.Query('Messages');
            return query.find()
        },
        save:function({userName,content}){
            let Messages = AV.Object.extend('Messages');
            let messages = new Messages();
            return messages.save({
                'name':userName,
                'content': content,
            })
        }
    }
    let controller = {
        view:null,
        model:null,
        newMessages:null,
        myForm:view.querySelector('Form'),
        olTag:view.querySelector('.ol'),
        n:0,
        init:function(view,model){
            this.view = view
            this.model = model
            this.model.initAv()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages:function(){
            this.model.fetch().then((e) =>{
                this.newMessages = this.view.querySelectorAll('.newMessages')
                this.newMessages.forEach((value)=>{value.textContent  = '(共'+e.length +'条)'})
                e.forEach((value)=>{
                    this.createElement(value)
                })
            })
        },
        bindEvents:function(){
            this.myForm.addEventListener('submit', (e) =>{
                e.preventDefault()
                this.saveMessage()
            })
            this.olTag.addEventListener('click',(e)=>{
                if(e.target.id === 'like'){
                    this.n+=1
                    e.target.textContent = '('+this.n+')'
                }
            })
        },
        saveMessage:function(){
            let userName = this.myForm.querySelector('input[name=userName]').value
            let content = this.myForm.querySelector('textarea[name=content]').value
            if(userName === '' && content === ''){
                alert('内容不可为空')
            }else{
                this.model.save({userName,content}).then((object) =>{
                    this.createElement(object)
                    this.newMessages.forEach((value)=>{
                        let xxx = value.textContent.match(/(\d+)/g)
                        xxx.forEach((e)=>{
                            value.textContent = '(共'+(parseInt(e)+1)+'条)'
                        })
                    })
                })
                this.myForm.querySelector('input[name=userName]').value =''
                this.myForm.querySelector('textarea[name=content]').value = ''
            }
        },
        createElement:function(value){
            let $olTag = $('.ol')
            let template = `
                <li>
                    <div class="userInformation">
                        <div class="userContentUp">
                            <span class="userName">${value.attributes.name}：</span>
                            <span class="leaveMessage">${value.attributes.content}</span>
                        </div>
                        <div class="userContentDown clearfix">
                            <div class="upData">${value.updatedAt.toDateString()}</div>
                            <div class="replyLike">
                                <i id="like" class="iconfont icon-zan2">(10)</i>
                                <span class="verticalLine">|</span>
                                <span class="reply">回复</span>
                            </div>
                        </div>
                    </div>
                </li>`
            let $node = $(template)
            $olTag.prepend($node)
        }
    }
    controller.init(view,model)
}.call()















