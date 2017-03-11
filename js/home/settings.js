/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template','datepicker','datepickerLanguage','region','uploadify','ckeditor'],
    function($,nprogress,template,datepicker,undefined,undefined,undefined,ckeditor){
    //这里是进度条的结束
    nprogress.done();
    //修改个人资料 发起ajax
    $.get('/v6/teacher/profile',function(data){
            if(data.code == 200){
                var html = template('teachersettingstpl',data.result);
                //渲染数据
                $('.teachersettingstpl').html(html);
                //引用日期插件
                $('.datepicker').datepicker({
                    language:'zh-CN',
                    endDate: new Date(),
                    format:'yyyy-mm-dd'
                });
                //配置三级联动
                $('#region').region({
                    url:'/lib/region/region.json'
                });
                //location.reload;//重新加载页面
                //引用模板引擎
                //配置头像上传插件
                $('#upfile').uploadify({
                    swf:'/lib/uploadify/uploadify.swf',//配置
                    uploader:'/v6/uploader/avatar',//接口
                    fileObjName:'tc_avatar',//名字
                    fileTypeExts: '*.gif; *.jpg; *.png',//文件格式
                    height: $('.preview').height(),//高度
                    //buttonText: '',//文本提示

                    //文件上传成功后，解析字符串数据，然后把上传的地址设置到表单中，供提交；同时更新用户头像的预览
                    onUploadSuccess:function(file,data) {//flie:文件 data路径
                        var data = JSON.parse(data);//将字符串转化为js对象

                        $('.preview img').attr('src',data.result.path);
                    }
                });

                // 配置富文本编辑器
                var edit = ckeditor.replace('ckeditor');

                $('.form-horizontal').on('submit',function(){

                    var hometown = $('.hometown select').map(function(){
                        return $(this).find('option:selected').text();
                    }).toArray().join('|');
                    // 比较挫的办法
//				var p = $('#p').find('option:selected').text();
//				var c = $('#c').find('option:selected').text();
//				var d = $('#d').find('option:selected').text();
//				var hometown = p + '|' + c + '|' + d;


                    // 设置文本框的内容为富文本编辑器内容
                    edit.updateElement();
                    console.log($('#ckeditor').val());

                    $.ajax({
                        url:'/v6/teacher/modify',
                        type:'post',
                        data:$(this).serialize()+'&tc_hometown='+hometown,
                        success:function (data) {
                            if(data.code == 200) {

                                location.reload();
                            }
                        }
                    });
                    return false;
                })
            }
        }
    )
});