/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template'],function($,nprogress,template){
    //�����ǽ������Ľ���
    nprogress.done();

    //��̬��Ⱦ��ʦ�б�

        $.get('/v6/teacher',function(data){
            if(data.code==200){
                var html = template('teacher-list-tpl',{list:data.result});
                $('#teacher-list-tbody').html(html);
            }
        });


    //�鿴��ʦ���幦��
    //ͨ���¼�ί�еķ�ʽ��a��ǩע�����¼�����Ϊ��a��ǩ�󶨲��ܻ�ȡ�������ݿ��ܻ�û��ˢ�µ�

     $('#teacher-list-tbody').on('click','.teacher-view',function(){
         $.get('/v6/teacher/view',{ tc_id:$(this).parent().attr('data-id')},function(data){
             if(data.code == 200){
                 var html = template('teacherModer-Tpl',data.result);
                 $('#teacherModal').html(html);
             }
         });
     });
});