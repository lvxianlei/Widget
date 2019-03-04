var Header = {
    name: 'header',
    style: null,
    component: {
        type: "div",
        props: {
            className: "header",
            style: {
                display: 'flex',
                'justifyContent': 'space-between',
                'alignItems': 'center',
                ' borderBottom': '1px solid #666',
                '-moz-box-shadow': '0px 5px 5px #666',
                '-webkit-box-shadow': '0px 5px 5px #666',
                'boxShadow': '0px 5px 5px #666',
                'padding': ' 0 .4rem',
                'background': '#ffffff',
                'color': '#666666',
                'zIndex': '99999'
            }
        },
        children: [
            {
                type: "div",
                props: {
                    className: "fenzhan",
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '.36rem',
                        borderRadius: '.18rem',
                        padding: '0 .15rem',
                        background: '#dfa46e',
                        color: '#fff',
                        fontSize: '0.24rem',
                    }
                },
                children: [
                    {
                        type: "span",
                        prop: {
                            "data-tag": ""
                        },
                        children: "北京"
                    }, {
                        type: "img",
                        props: {
                            className: "xiala",
                            style: {
                                width: '.14rem',
                                height: '0.22rem',
                                margin: '0 0 0 .1rem',
                            },
                            src: "https://50jia-website.oss-cn-beijing.aliyuncs.com/mobile/images/iconMt_06.png"
                        }
                    }
                ]
            }, {
                type: "h1",
                props: {
                    style: {
                        height: '1rem',
                        lineHeight: '1rem',
                        fontSize: '.36rem',
                        fontWeight: '700'
                    }
                },
                children: '五十家全案家装'
            }, {
                type: "a",
                props: {
                    className: "menu",
                    href: "javascript: void(0);",
                    style: {
                        'width': '.52rem',
                        'height': '0.52rem',
                        'background': ' #fff url(https://50jia-website.oss-cn-beijing.aliyuncs.com/mobile/images/iconMenu_03.png) no-repeat center',
                        'backgroundSize': '100% auto',
                    }
                }
            }
        ]
    }
};
$$.addToHtml(Header);