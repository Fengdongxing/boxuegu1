/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','common','nprogress','template','util','datepicker','datepickerLanguage'],function($,undefined,nprogress,template,util,datepicker,undefined){
    //这里是进度条的结束
    nprogress.done();

    /*
    * 获取tc_id查询字符串，如果有则认为当前是讲师编辑页面，没有则认为是新讲师添加页面。
    * 编辑讲师：
    * 1、先获取讲师信息，展示到表单中
    * 2、监听提交表单事件，转为ajax方式提交到讲师修改接口。
    *
    * 添加讲师：
    * 1、监听提交表单事件，转为ajax提交到讲师添加接口。
    * */

    //根据编辑和对应的渲染表单
    var tcId = util.getQueryString('tc_id');//先利用封装好的函数获取在list.html传经来的tc_id的值，在这里只有一个值就是返回对应的tc_id值

    if(tcId){//如果有tcId
        //获取该讲师之前的信息，填充到表单中
        $.get('/v6/teacher/edit',{ tc_id: tcId},function(data){
            if(data.code == 200) {
                //启用模板引擎，拼接成成可以渲染的字符串
                var html = template('teacher-form-tpl',data.result);
                //渲染到容器中
                $('.teacher-add').html(html);
                $('#datepicker').datepicker({
                       language:'zh-CN',
                       endDate:new Date(),
                       format:'yyyy-mm-dd',
               })
            }
        })
        //给表单注册表单提交事件但是现在表单都是动态生成的，只有给他的父元素注册委托事件
        //$('.teacher-add').on('submit','#teacher-add-form',function(){
        //    $.ajax({
        //        url:'/v6/teacher/update',
        //        type:'post',
        //        data:$(this).serialize()+"&tc_id="+tcId,
        //        success:function(data) {
        //            console.log(1);
        //            if(data.code == 200){
        //                location.href = '/html/teacher/list.html'
        //            }
        //        }
        //    });
        //    //阻止表单的跳转功能
        //    return false;
        //});
    }else {//没有tcId就渲染{}，让默认的面板渲染上去
        var html = template('teacher-form-tpl',{});
        //渲染到容器中
        $('.teacher-add').html(html);
        //添加讲师功能
        //给表单注册表单提交事件但是现在表单都是动态生成的，只有给他的父元素注册委托事件
        //$('.teacher-add').on('submit','#teacher-add-form',function(){
        //    $.ajax({
        //        url:'/v6/teacher/add',
        //        type:'post',
        //        data:$(this).serialize(),
        //        success:function(data) {
        //            console.log(1);
        //            if(data.code == 200){
        //                location.href = '/html/teacher/list.html'
        //            }
        //        }
        //    });
        //    //阻止表单的跳转功能
        //    return false;
        //});
        //这两个功能要和在一起
    }

     //两个功能合在一起，有id路径就是update,另外的是add,数据就是有id就要加上"&tc_id"+tcId，没有就不用

    $('.teacher-add').on('submit','#teacher-add-form',function(){
        $.ajax({
            url:'/v6/teacher/'+(tcId?'update':'add'),
            type:'post',
            data:$(this).serialize()+(tcId?"&tc_id="+tcId:''),
            success:function(data) {
                if(data.code == 200){
                    location.href = '/html/teacher/list.html'
                }
            }
        });
        //阻止表单的跳转功能
        return false;
    });































    





    /*
    * 获取tc_id查询字符串，如果有则认为当前是讲师编辑页面，没有则认为是新讲师添加页面
    *编辑讲师:
    * 1、先获取讲师信息，展示到表单
    * 2、监听提交表单事件，转为ajax方式提交到讲师修改接口。
    *
    * 添加讲师:
    * 1、监听提交表单提交事件，转为ajax方式提交到讲师添加接口
    *
    *
    * */
    //教师添加功能
    //给表单注册表单提交事件
    //var tcId= util.getQueryString('tc_id');
    //
    //if(tcId){
    //    //就发起ajax请求数据  获取讲师
    //    //获取该讲师之前的信息，填充到表单中
    //    $.get('/v6/teacher/edit',{tc_id:tcId},function(data) {
    //        if (data.code == 200) {
    //            var html = template('teacher-form-tpl', data.result);
    //            //渲染数据
    //            $('.teacher-add').html(html);
    //            //加入日期插件调方法
    //            $('#datepicker').datepicker({
    //                language:'zh-CN',
    //                endDate:new Date(),
    //                format:'yyyy-mm-dd',
    //            })
    //
    //        }
    //    })
    //}else{
    //    var html = template('teacher-form-tpl', {});
    //    //渲染数据
    //    $('.teacher-add').html(html);
    //}
    //
    //$('.teacher-add').on('submit','#teacher-add-form',function(){
    //     //发起ajax请求书局跳转页面
    //    $.ajax({
    //        url:'/v6/teacher/'+ ( tcId? 'update': 'add' ),
    //        type:'post',
    //        data:$(this).serialize()+ ( tcId? '&tc_id=' + tcId : '' ),//将表单的数据都转换为
    //        success:function(data){
    //            if(data.code == 200){
    //                location.href='/html/teacher/list.html';
    //            }
    //        }
    //    })
    //    //阻止默认的表单提交行为
    //    return false;
    //});
})