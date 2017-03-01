/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template'],function($,nprogress,template){
    //这里是进度条的结束
    nprogress.done();

    //动态渲染教师列表

        $.get('/v6/teacher',function(data){
            if(data.code==200){
                var html = template('teacher-list-tpl',{list:data.result});
                $('#teacher-list-tbody').html(html);
            }
        });


    //查看讲师具体功能
    //通过事件委托的方式给a标签注册点击事件，因为给a标签绑定不能获取到，数据可能还没有刷新到

     $('#teacher-list-tbody').on('click','.teacher-view',function(){
         $.get('/v6/teacher/view',{ tc_id:$(this).parent().attr('data-id')},function(data){
             if(data.code == 200){
                 var html = template('teacherModer-Tpl',data.result);
                 $('#teacherModal').html(html);
             }
         });
     });
});