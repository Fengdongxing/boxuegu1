/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template'],function($,nprogress,template){
    //这里是进度条的结束
    nprogress.done();

    $.ajax({
        url:'/v6/category',
        type:'get',
        data:{},
        success:function(data){
            if(data.code == 200){
                var html =template('categoryTpl',{list:data.result})
                $('#category-list-Tpl').append(html);
            }
        }
    })
})