/**
 * Created by ASUS on 2017/2/28.
 */

define(['jquery','nprogress'],function($,nprogress){
    //这里是进度条的结束
    nprogress.done();

    //$.post('/v6/uploader/avatar',{tc_avatar:'/img/hometown.webp'},function(data){
    //    if(data.code == 200){
    //        ////把status对应的文字渲染到按钮上去 数据里面有对应的status
    //        //$self.html(data.result.tc_status == '0'?'开启':'注销');
    //        ////父元素的data-status也要修改
    //        //$self.parent().attr('data-status',data.result.tc_status);//两个参数代表修改
    //        $('.aside .profile img').attr('src','/img/hometown.webp')
    //    }
    //});
})