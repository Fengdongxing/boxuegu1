requirejs.config({
    baseUrl: '/',
    paths: {
        // ���������·������
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        common:'js/common/common',
        //����jquerycookie��·��
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',//
        //���ý��������
        nprogress:'lib/nprogress/nprogress',



        // �Լ�д��·������
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        teacherAdd: 'js/teacher/add',
        teacherList: 'js/teacher/list',
        homeLogin: 'js/home/login',
        homeRepass: 'js/home/repass',
        homeSettings: 'js/home/settings',
        courseAdd: 'js/course/add',
        courseAdd_step1: 'js/course/add_step1',
        courseAdd_step2: 'js/course/add_step2',
        courseAdd_step3: 'js/course/add_step3',
        courseCategory: 'js/course/category',
        courseCategory_add: 'js/course/category_add',
        courseList: 'js/course/list',
        courseOpic: 'js/course/opic',
        index:'js/index',
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});




/*
 * ��¼״̬��
 *
 * 1����¼ҳ
 * 1.1��û��SESSID�����ù�
 * 1.2����SESSID,��ת����¼ҳ
 *
 * 2������ҳ
 * 2.1��û��SESSID,��ת����¼ҳ
 * 2��2�� ��SESSID�����ù�
 *
 * */
require(['nprogress'],function(nprogress){
    nprogress.start();
});
// ���е�ҳ�涼��Ҫ������js���ȼ������ǡ�
require(['jquery', 'bootstrap','common']);//

/*
 *�����ȡҳ���pathname��Ȼ���Ӧ�ļ���js��
 * */
(function(window) {
    //��ȡ·��
    var pathname = window.location.pathname;

    require(['jquery','jqueryCookie'],function($,undefined){
        //������cookie
        var sessID = $.cookie('PHPSESSID');

        //��¼״̬ǰ��Ч��
        if(pathname === '/html/home/login.html' && sessID){
            location.href = '/';
        }else if(pathname !== '/html/home/login.html' && !sessID){
            location.href = '/html/home/login.html'
        }
        //�����첽���ص�

        //���û�з���ҳ����ת���ͼ��ض�Ӧ��jsģ��
        switch(pathname) {
            case '/':
                require(['index']);
                break;
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
            case '/html/home/login.html':
                require(['homeLogin']);
                break;
            case '/html/home/repass.html':
                require(['homeRepass']);
                break;
            case '/html/home/settings.html':
                require(['homeSettings']);
                break;
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAdd_step1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAdd_step2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAdd_step3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategory_add']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/opic.html':
                require(['courseOpic']);
                break;
        }
    });
})(window);
