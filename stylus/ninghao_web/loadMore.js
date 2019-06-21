(function(){
    function list(){
        $.ajax({
            url:'./test.json',
            type:'GET',
            success:function(res){
                console.log(res);
                for(let n of res.data.lists){
                    $('#lesson').append(`
                    <li class="span4 mix">
                    <div class="thumbnail">
                        <a href="#" title="${n.title}">
                            <div class="p20" style="background: ${n.bgc};">
                                <img src="${n.imgUrl}" alt="">
                            </div>
                            <div>
                                <h3>${n.title}</h3>
                                <p>${n.desc}</p>
                            </div>
                        </a>
                        <div class="meta">
                            <span>${n.data}</span>
                            <span class="pull-right">${n.time}</span>
                        </div>
                    </div>
                </li>
                    `)
                }
            }
        })
    }
    list();

    $('#load-more').click(function(){
        list();
    })
})();