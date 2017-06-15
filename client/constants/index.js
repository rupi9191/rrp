/**
*  API URL's
*/
export const URLS = {
    'merchant': {
        'search': '/merchant/search',
        'subscription': '/merchant/subscribe'
    },
    'publisher':  {
        'search': '/publisher/search',
        'updateType': '/publisher/type',
        'blacklist': '/publisher/blacklist'
    },
    'dailyFlashReport': {
        'view': '/daily/report',
        'download': '/daily/report/download',
        'email': '/daily/report/mail'
    },
    'monthlyFlashReport': {
        'view': '/monthly/report',
        'download': '/monthly/report/download',
        'email': '/monthly/report/mail'
    },
    'dailyMerchantKPIReport': {
        'view': '/merchant/kpi/daily/report',
        'download': '/merchant/kpi/daily/report/download',
        'email': '/merchant/kpi/daily/report/mail'
    },
    'monthlyMerchantKPIReport': {
        'view': '/merchant/kpi/monthly/report',
        'download': '/merchant/kpi/monthly/report/download',
        'email': '/merchant/kpi/monthly/report/mail'
    },
    'orderReport': {
        'view': '/order/report',
        'download': '/order/report/download',
        'email': '/order/report/mail'
    },
    'suzaku': 'https://collabo.rakuten.co.jp'

};
/**
 * Language configs
 */

// locale object
export const LOCALES = {
    'en-US': 'English',
    'zh-TW': '繁體中文'
};
// default locale
export const DEFAULT_LOCALE = 'en-US';
// key name for locale's local storage
export const LOCALE_STORAGE_KEY = 'gap-operator-locale';

/**
 * Nav configs
 */

//navigation object
export const NAV_LIST = [
    {
        'href': 'merchants',
        'label': 'nav.merchants',
        'eventKey': 1,
    },
    {
        'href': 'publishers',
        'label': 'nav.publishers',
        'eventKey': 2,
        'basePath': '/publishers',
        'dropdown': [
            {
                'href': 'publishers/management',
                'label': 'nav.publishersNav.management',
                'eventKey': 2.1,
                'icon': 'fa-users'
            },
            {
                'href': 'publishers/bankdetails',
                'label': 'nav.publishersNav.bankInfo',
                'eventKey': 2.2,
                'icon': 'fa-usd'
            }
        ]
    },
    {
        'href': '',
        'label': 'nav.reports',
        'eventKey': 3,
        'basePath': '/reports',
        'dropdown': [
            {
                'href': 'reports/flash/daily',
                'label': 'nav.report.flash.daily',
                'eventKey': 3.1,
                'icon': 'fa-file-text-o'
            },
            {
                'href': 'reports/flash/monthly',
                'label': 'nav.report.flash.montly',
                'eventKey': 3.2,
                'icon': 'fa-file-text-o'
            },
            {
                'href': 'reports/merchantKPI/daily',
                'label': 'nav.report.merchantKPI.daily',
                'eventKey': 3.3,
                'icon': 'fa-file-text-o'
            },
            {
                'href': 'reports/merchantKPI/monthly',
                'label': 'nav.report.merchantKPI.montly',
                'eventKey': 3.4,
                'icon': 'fa-file-text-o'
            },
            {
                'href': 'reports/order',
                'label': 'nav.report.order',
                'eventKey': 3.5,
                'icon': 'fa-file-text-o'
            }
        ]
    }
];

// breadcrumb object
export const BREADCRUMB_LIST = {
    '/': {
        'header': 'header.home'
    },
    '/merchants': {
        'header': 'header.merchants',
        'breadcrumbs': [
            {
                'href': '#/merchants',
                'text': 'nav.merchants'
            },
            {
                'href': undefined,
                'text': 'nav.list'
            }
        ]
    },
    '/publishers/management': {
        'header': 'header.publishers.management',
    },
    '/publishers/bankdetails': {
        'header': 'header.publishers.bankInfo',
    },
    '/reports/flash/daily': {
        'header': 'header.reports.flash.daily',
        'breadcrumbs': []
    },
    '/reports/flash/monthly': {
        'header': 'header.reports.flash.montly',
        'breadcrumbs': [
            {
                'href': '#/reports/flash/monthly',
                'text': 'nav.reports'
            },
            {
                'href': undefined,
                'text': 'nav.list'
            }
        ]
    },
    '/reports/merchantKPI/daily': {
        'header': 'header.reports.merchantKPI.daily',
        'breadcrumbs': [
            {
                'href': '#/reports/merchantKPI/daily',
                'text': 'nav.reports'
            },
            {
                'href': undefined,
                'text': 'nav.list'
            }
        ]
    },
    '/reports/merchantKPI/monthly': {
        'header': 'header.reports.merchantKPI.montly',
        'breadcrumbs': [
            {
                'href': '#/reports/merchantKPI/montly',
                'text': 'nav.reports'
            },
            {
                'href': undefined,
                'text': 'nav.list'
            }
        ]
    },
    '/reports/order': {
        'header': 'header.reports.order',
        'breadcrumbs': [
            {
                'href': '#/reports/order',
                'text': 'nav.reports'
            },
            {
                'href': undefined,
                'text': 'nav.list'
            }
        ]
    }
};
/**
*
*/
export const REPORTS = {
    'type': {
        'flash': 'flash',
        'merchant': 'merchantKPI',
        'order': 'order'
    },
    'frequency': {
        'daily': 'daily',
        'montly': 'monthly'
    }
};

export const UPPER_BOUND_ROWS = 15;

// sorting related
export const ASC = 'ASC';
export const DESC = 'DESC';
