export const menus = [
    { 'name': 'Dashboard',
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
            // {
            //     'name': 'My Notifications',
            //     'link': 'material-widgets/expansion',
            //     'icon': 'web_aaset',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Progress Spinner',
            //     'link': 'material-widgets/spinner',
            //     'icon': 'cached',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Cards',
            //     'link': 'material-widgets/cards',
            //     'icon': 'crop_16_9',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Icons',
            //     'link': 'material-widgets/icons',
            //     'icon': 'gif',
            //     'chip': false,
            //     'open': false,
            // },
            // {

            //     'name': 'AutoComplete',
            //     'link': 'material-widgets/autocomplete',
            //     'icon': 'get_app',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'CheckBox',
            //     'link': 'material-widgets/checkbox',
            //     'icon': 'check_box',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'DatePicker',
            //     'link': 'material-widgets/datepicker',
            //     'icon': 'date_range',
            //     'chip': false,
            //     'open': false,
            // },

            // {
            //     'name': 'Slider',
            //     'link': 'material-widgets/slider',
            //     'icon': 'keyboard_tab',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Slide Toggle',
            //     'link': 'material-widgets/slide-toggle',
            //     'icon': 'album',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Menu',
            //     'icon': 'menu',
            //     'link': 'material-widgets/menu',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Progress Bar',
            //     'link': 'material-widgets/progress-bar',
            //     'icon': 'trending_flat',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Input',
            //     'icon': 'input',
            //     'link': 'material-widgets/input',
            //     'open': false,
            // },
            // {
            //     'name': 'Radio',
            //     'icon': 'radio_button_checked',
            //     'link': 'material-widgets/radio',
            //     'chip': false,
            //     'open': false,
            // },
            // {
            //     'name': 'Select',
            //     'icon': 'select_all',
            //     'link': 'material-widgets/select',
            //     'open': false,
            // },
        ]
    },
    // {
    //     'name'   : 'Forms',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },
    {
        'name': 'Payment',
        'icon': 'money',
        'link': false,
        'open': false,
        'chip': false,
        'sub': [
            {
                'name': 'Manage Approval',
                'icon': 'work',
                'link': 'payment/manageApproval',
                'open': false,
            },
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
            // {
            //     'name': 'Employees',
            //     'icon': 'filter_center_focus',
            //     'link': 'payment/viewOrders',
            //     'open': false,
            // },

            
        ]

    },
    // {
    //     'name': 'Guarded Routes',
    //     'icon': 'mode_edit',
    //     'link': '/auth/guarded-routes',
    //     'open': false,
    // },
    //  {
    //     'name': 'Scrumboard',
    //     'open': false,
    //     'link': '/auth/scrumboard',
    //     'icon': 'grade',
    // },
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
    }
    // , {

    //     'name': 'Charts',
    //     'icon': 'pie_chart_outlined',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'chartjs',
    //             'icon': 'view_list',
    //             'link': 'charts/chartjs',
    //             'open': false,

    //         },
    //         {
    //             'name': 'ngx-chart',
    //             'icon': 'show_chart',
    //             'open': false,
    //             'link': 'charts/ngx-charts',
    //         },
    //         {
    //             'name': 'nvd3',
    //             'icon': 'pie_chart',
    //             'open': false,
    //             'link': 'charts/nvd3-charts',
    //         }
    //     ]
    // }, {
    //     'name': 'maps',
    //     'icon': 'map',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'google-map',
    //             'icon': 'directions',
    //             'link': 'maps/googlemap',
    //             'open': false,
    //         },
    //         {
    //             'name': 'leaflet-map',
    //             'icon': 'directions',
    //             'link': 'maps/leafletmap',
    //             'open': false,
    //         }
    //     ]
    // }
];
