/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template'],function($,nprogress,template){
    //这里是进度条的结束
    nprogress.done();
    //有教师列表数据就缓存,没有就发起ajax请求数据
    //var teacherListCasche;//先本地化声明
    ////容错
    //try{
    //    //teacherListCasche = JSON.parse(localStorage.getItem('teacherListCasche'));//这是永久存储方法，除非浏览器关掉loaclStorage.getItem();这是获取缓存的方法
    //}catch(e){}//不需要补救，么有缓存就发起ajax请求数据
    //
    //if(teacherListCasche) {//如果有缓存
    //// 就渲染数据
    ////可以给模板直接凭借字符串了，因为teacherListCasche已经被转化为可以被js 解析的字符串了
    //  var html = template('template-list-tpl',{list:teacherListCasche});
    //    //可以渲染数据
    //  //$('#teacher-list-tbody').html(html);
    ////}else{
        $.get('/v6/teacher',function(data){
            if(data.code==200){
                var html = template('teacher-list-tpl',{list:data.result});
                //localStorage.setItem('treacherListCache',  JSON.stringify(data.result));
                $('#teacher-list-tbody').html(html);
            }
        });
    //}

    //注册编辑按钮注册事件，一点按钮跳到addlist页面，并且在url传递当前a标签的tc_id
    //也是事件委托给按钮注册事件

    //动态渲染教师列表
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

     //注销讲师功能，原来是0就改为开启，原来是1就注销 也是事件委托
    $('#teacher-list-tbody').on('click','.teacher-status',function(){
          //把指向按钮的this存储起来
         $self = $(this);
        $.post('/v6/teacher/handle',{
            tc_id:$(this).parent().attr('data-id'),
            tc_status:$(this).parent().attr('data-status')
        },function(data){
            if(data.code == 200){
               //把status对应的文字渲染到按钮上去 数据里面有对应的status
                $self.html(data.result.tc_status == '0'?'开启':'注销');
                //父元素的data-status也要修改
                $self.parent().attr('data-status',data.result.tc_status);//两个参数代表修改
            }
        });
    });
});