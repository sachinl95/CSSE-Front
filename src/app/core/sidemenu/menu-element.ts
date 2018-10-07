export const menus = [
    {
        'name': 'Dashboard',
        'link': '/auth/dashboard',
        'icon': 'dashboard',
        'chip': false,
        'open': true
    },
    {
        'name': 'Constructor',
        'icon': 'widgets',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Search Order',
                'link': 'constructor/searchOrder',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Add Order',
                'link': 'material-widgets/list',
                'icon': 'list',
                'chip': false,
                'open': false,
            },
            {

                'name': 'View My Previous Orders',
                'link': 'material-widgets/stepper',
                'icon': 'view_week',
                'chip': false,
                'open': false,

            },
        ]
    },
    {
        'name': 'Payment',
        'icon': 'money',
        'link': false,
        'open': false,
        'chip': false,
        'sub': [
            // {
            //     'name': 'Manage Approval',
            //     'icon': 'work',
            //     'link': 'payment/manageApproval',
            //     'open': false,
            // },
            // {
            //     'name': 'Suppliers',
            //     'icon': 'filter_center_focus',
            //     'link': 'payment/payPending',
            //     'open': false,
            // },
            {
                'name': 'Pending Payments',
                'icon': 'payment',
                'link': 'payment/pendingPayments',
                'open': false,
            },
            {
                'name': 'Successfull Payments',
                'icon': 'beenhere',
                'link': 'payment/sucessfullPayments',
                'open': false,
            },


        ]

    },
    {
        'name': 'Site Manager',
        'icon': 'view_module',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Order',
                'icon': 'chat',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'View My Previous Orders',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
            {
                'name': 'My Notifications',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            },
            {
                'name': 'Approved Orders',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            },
            {
                'name': 'Rejected Orders',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            },
            {
                'name': 'Pending Orders',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            },

        ]
    }
    , {
        'name': 'Supplier',
        'icon': 'content_copy',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'View Pending Orders',
                'icon': 'work',
                'open': false,
                'link': '../login',
            }, {
                'name': 'View Previous Orders',
                'icon': 'local_laundry_service',
                'open': false,
                'link': 'pages/services',
            }, {
                'name': 'View Rejected Orders',
                'icon': 'directions',
                'open': false,
                'link': 'pages/contact'
            }
        ]
    },
    {
        name: 'Management',
        icon: 'supervisor_account',
        open: false,
        link: false,
        sub: [
            { name: 'Employee Management', icon: 'work', open: false, link: 'management/employees' },
            { name: 'Supplier Management', icon: 'work', open: false, link: 'management/suppliers' },
            {
                name: 'Materials Requests', icon: 'work', open: false, link: false, sub: [
                    { name: 'Approve Requests', icon: 'work', open: false, link: 'management/approve-requests' },
                    { name: 'Create Order', icon: 'work', open: false, link: 'management/create-order' },
                ]
            },
            { name: 'Business Policies', icon: 'work', open: false, link: 'management/policies' },
        ]
    }

];
