/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template'],function($,nprogress,template){
    //这里是进度条的结束
    nprogress.done();
    $.get('/v6/course',function(data){
         console.log(data);
        if(data.code == 200) {
            var html = template('course-list-tpl',{list:data.result});
            $('#course-list-tpl').append(html);
        }
    })
})