/**
 * Created by ASUS on 2017/2/26.
 */
define(['jquery','jqueryCookie'],function($,undefined){
    //
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });

    //退出到登录页功能
    $('#loginout').on('click',function(){
         console.log(1);
        $.ajax({
            url:'/v6/logout',
            success: function (data) {
                if(data.code === '200' ){
                    location.href = '/html/home/login.html'
                }
            }
        })
    });
//### 上传头像
//
//    > 用户上传自定义头像
//
//#### 地址
//
//    http://api.botue.com/uploader/avatar
//
//        #### 请求
//
//    * 请求方式 POST
//    * 支持格式 multipart/form-data
//    * 请求参数
//
//    | 名称      | 必填 | 类型     | 说明   |
//    |:--------|:---|:-------|:-----|
//    | tc_avatar | 是  | stream | 图片格式 |
//
//#### 响应
//
//    * 数据格式 JSON
//    * 数据示例
//
//```json
//    {
//        "code": 200,
//        "msg": "OK",
//        "result": {
//        "path": "http://static.botue.com/images/avatar/58613cba34760.jpg"
//    }
//        "time": 1482767547
//    }
//```

    //在页面中不能用变量存储数据，因为换个页面就刷新，数据就没有了，
    //所以在页面中要存储数据就必须要用cookie或者session就，但session有兼容问题所以用session来存储
//    上传用户的名字和图片功能
//    获取本地cookie用户信息，同时做容错处理
    var userInfo = null;
    try {
        userInfo = JSON.parse($.cookie('userInfo'))
    }catch (e) {
        userInfo = {};
    }

    //然后展示到左侧栏
    $('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name:'dagenimeiminga');
    $('.aside .profile img').attr('src',userInfo.tc_avatar? userInfo.tc_avatar:'/img/default.png');

    //不同的页面侧面栏背景高亮显示
    var pathname = window.location.pathname
    $('.navs a').removeClass('active').filter('[href="'+pathname+'"]').addClass('active').parents('ul').show();
    //在登录页面，有PHPSESSID的就跳转到首页，没有就不管
    //if(location.href == '/html/home/login.html'){
    //    //先获取当前的cookie
    //    var session = $.cookie('PHPSESSID');
    //   //if($.cookie == 'PHPSESSID'){
    //    //    //发起ajax请求跳转
    //    //    $.ajax({
    //    //        url:'http://www.boxuegu.com/',
    //    //        type:'post',
    //    //
    //    //    })
    //   }
    //};
});