/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template'],function($,nprogress,template){
    //这里是进度条的结束
    nprogress.done();

    //修改个人资料 发起ajax
    $.ajax({
        url:'/v6/teacher/profile',
        type:'post',
        data:{},
        success:function(data){
            if(data.code == 200){

                var html = template('')
                location.load;//重新加载页面
            }
        }
    })
})