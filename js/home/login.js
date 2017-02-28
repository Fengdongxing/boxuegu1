/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','jqueryCookie','nprogress'],function($,undefined,nprogress){

     //在首页显示用户的头像，有就显示没有就默认
    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'));
    } catch(e){
        userInfo = {};
    }
    //渲染到页面
   $('.login .avatar img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');


    //登录页面的跳转
    $('#form_login').on('submit',function(){
        $.ajax({
            url:'/v6/login',
            type: 'post',
            data:$(this).serialize(),//这里的this是form表单
            success:function(data){
                //如果登录成功，使用cookie的方式保存用户信息，
                //注意：cookie值必须为字符串，我们得到的是js对象，需要JSON.stringify进行转换
                if(data.code === 200){//如果数据的状态===200
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});//这里获取到了，但是'/'根目录页面没有获取到，要设置路径为path:'/';
                    location.href = '/';
                }
            }
        });
        return false;
    });
    nprogress.done();
});