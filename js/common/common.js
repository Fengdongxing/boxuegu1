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

    //发起ajax时显示图片，完成后就没有的功能
    $(document).on('ajaxStart', function () {
        $('.overlay').show();
    }).on('ajaxStop',function(){
        $('.overlay').hide();
    });



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
    $('.aside .profile img').attr('src',userInfo.tc_avatar? userInfo.tc_avatar:'/img/hometown.webp');
    //$('.aside .profile img');attr('src','/img/hometown.webp')

    //不同的页面侧面栏背景高亮显示
    var a = {
        '/html/course/add_step1.html':'/html/course/add.html',
        '/html/course/add_step2.html':'/html/course/add.html',
        '/html/course/add_step3.html':'/html/course/add.html',
    }
    var pathname = window.location.pathname;
    pathname = a[pathname]?a[pathname] : pathname;
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