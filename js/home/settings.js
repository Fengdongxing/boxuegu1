/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress','template'],function($,nprogress,template){
    //�����ǽ������Ľ���
    nprogress.done();

    //�޸ĸ������� ����ajax
    $.ajax({
        url:'/v6/teacher/profile',
        type:'post',
        data:{},
        success:function(data){
            if(data.code == 200){

                var html = template('')
                location.load;//���¼���ҳ��
            }
        }
    })
})