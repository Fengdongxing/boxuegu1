requirejs.config({
    baseUrl: '/',
    paths: {

        // ���������·������
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        common:'js/common/common',

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
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});
// ���е�ҳ�涼��Ҫ������js���ȼ������ǡ�
require(['jquery', 'bootstrap','common']);

/*
 *�����ȡҳ���pathname��Ȼ���Ӧ�ļ���js��
 * */
(function(window) {

    var pathname = window.location.pathname;
    switch(pathname) {
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
            break;add_step1
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
})(window);
