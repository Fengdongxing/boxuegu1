/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery','nprogress'],function($,nprogress){
    //�����ǽ������Ľ���
    nprogress.done();

    //��ӿγ�
    $('#add-form').on('submit', function () {
        $.ajax({
            url: '/v6/course/create',
            type: 'post',
            data:$(this).serialize(),
            success: function (data) {
                if (data.code == 200) {
                    location.href = '/html/course/add_step1.html?cs_id=' + data.result.cs_id;
                }
            }
        });
      return false;
    })
});