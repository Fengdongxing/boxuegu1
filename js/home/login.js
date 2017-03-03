/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','jqueryCookie','nprogress'],function($,undefined,nprogress){

     //����ҳ��ʾ�û���ͷ���о���ʾû�о�Ĭ��
    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'));//ת��Ϊһ��js����
         console.log(userInfo);
    } catch(e){
        userInfo = {};
    }
    //��Ⱦ��ҳ��
   $('.login .avatar img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/hometown.webp');


    //��¼ҳ�����ת
    $('#form_login').on('submit',function(){
        $.ajax({
            url:'/v6/login',
            type: 'post',
            data:$(this).serialize(),
            //���ﴫ����������JSON��ʽ,Ҫת��Ϊ���л����ַ���
            //�����this��form��
            success:function(data){
                //�����¼�ɹ���ʹ��cookie�ķ�ʽ�����û���Ϣ��
                //ע�⣺cookieֵ����Ϊ�ַ��������ǵõ�����js������ҪJSON.stringify����ת��
                if(data.code === 200){//������ݵ�״̬===200
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});//�����ȡ���ˣ�����'/'��Ŀ¼ҳ��û�л�ȡ����Ҫ����·��Ϊpath:'/';
                    location.href = '/';
                }
            }
        });
        return false;
    });
    nprogress.done();
});