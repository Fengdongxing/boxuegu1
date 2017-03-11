/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','common',],function($,nprogress,undefined){
    //这里是进度条的结束
    nprogress.done();

    //密码修改
   $('#repass-form').on('submit',function(){
        console.log(1);
       $.ajax({
           url:'/v6/teacher/repass',
           type:'post',
           data:$(this).serialize(),
           success:function(data){
               if(data.code == 200) {
                   console.log(124);
                   $('#loginout').trigger('click');
               }
           }
       });
      return false;
   });
});