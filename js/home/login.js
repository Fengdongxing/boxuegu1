/**
 * Created by ASUS on 2017/2/25.
 */
define(['jquery'],function($){
    console.log('888');



    $.ajax({
        url: '/v6/login',
        type: 'post',
        data: {
            tc_name: 123456,
            tc_pass: 123456
        },
        success: function() {
            console.log('����')
        },
        error: function() {
            console.log('����')
        }
    });
})