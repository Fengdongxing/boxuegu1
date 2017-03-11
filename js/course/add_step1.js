/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','util','template','ckeditor'],function($,nprogress,util,template,ckeditor){
    //这里是进度条的结束
    nprogress.done();

     var cs_id = util.getQueryString('cs_id');
        console.log(cs_id);
    //基本信息 渲染
        $.get('/v6/course/basic',{cs_id: cs_id},function (data) {
                (data.code == 200) &&($('.steps').html(template('steps-tpl',data.result)));
                    //location.href = '/html/course/add_step1.html?cs_id' + data.result.cs_id;
//配备富文本编辑器
            var  cke = CKEDITOR.replace('brief-textarea');
            // 选择顶级课程类
            $('#category-top-select').on('change',function(){
                var toId = $(this).val();//获取value里面的
                $.get('/v6/category/child',{ cg_id:toId},function(data){

                    //动态生成的option课程分类子集，添加到对应的select元素中
                    var optionHTML =
                        '{{ each list }}\
                        <option value="{{ $value.cg_id }}">{{ $value.cg name }}<option>\
                         {{ /each }}';
                    var render = template.compile(optionHTML);
                    $('#category-child-select').html(render({list:data.result}));
                });
            });
            //提交数据 成功之后跳转到第二步的课程编辑页面
            $('#add-basic').on('submit',function(){
                // 更新编辑器文本到textarea中.
                cke.updateElement();
                $.ajax({
                    url:'/v6/course/update/basic',
                    type:'post',
                    data:$(this).serialize()+'&cs_id='+cs_id,
                    success:function(data){
                        if(data.code == 200){
                            location.href ='/html/course/add_step2.html?cs_id=' + cs_id;
                        }
                    }
                })
                return false;
            });
        });
});