/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template'],function($,nprogress,template){
    //�����ǽ������Ľ���
    nprogress.done();
    $.get('/v6/course',function(data){
         console.log(data);
        if(data.code == 200) {
            var html = template('course-list-tpl',{list:data.result});
            $('#course-list-tpl').append(html);
        }
    })
})