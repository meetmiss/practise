var that;
class Tab{
    constructor(id) {
        that = this;
        this.tab = document.getElementById('tab');
        this.ul = this.tab.querySelector('ul');
        this.add = this.tab.querySelector('.tabadd');
        this.tabscon = this.tab.querySelector('.tabscon');
        this.init();
    }
    // 加载所有
    updateNode() {
        this.lis = this.tab.querySelectorAll('li');
        this.section = this.tab.querySelectorAll('section');
        this.spans = this.tab.querySelectorAll('.fisrstnav li span:first-child');
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.spans[i].ondblclick = this.ediTab;
            this.section[i].ondblclick = this.ediTab;
        }
        this.add.onclick = this.addTab;
    }
    // 切换
    toggleTab() {
        // that.updateNode();
        that.cleanTab();
        this.className = 'liactive';
        that.section[this.index].className = 'conactive';
    }
    // 清除
    cleanTab() {
        for (var i = 0; i < this.lis.length; i++){
            this.lis[i].className = '';
            this.section[i].className = '';
        }
    }
    // 添加按钮
    addTab() {
        that.cleanTab();
        var random = Math.random();
        var li = '<li class="liactive"><span>测试2</span><span class="iconfont icon-guanbi"></span></li>';
        that.ul.insertAdjacentHTML("beforeend", li);
        var section = '<section class="conactive">' + random + '</section>';
        that.tabscon.insertAdjacentHTML('beforeend', section);
        // that.updateNode();
        that.init();
    }
    ediTab() {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        var str = this.innerHTML;
        this.innerHTML = '<input type="text" value=' + str + '>';
        var input = this.children[0];
        input.select();
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeydown = function (e) {
            if (e.keyCode == 13) {
                input.blur();
            }
        }

    }



}
new Tab('#tab')