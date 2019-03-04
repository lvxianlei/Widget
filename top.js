var topData = {
    name: 'top',
    style: null,
    component: {
        type: "div",
        props: {
            className: "header", style: {
                width: '100%',
                height: '50px'
            }
        },
        children: [
            {
                type: "div",
                props: {
                    className: "fenzhan"
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
                        props: { "class": "xiala", src: "https://50jia-website.oss-cn-beijing.aliyuncs.com/mobile/images/iconMt_06.png" }
                    }
                ]
            }, {
                type: "h1",
                props: null,
                children: '五十家全案家装'
            }, {
                type: "a",
                props: {
                    className: "menu",
                    href: "javascript: void(0);"
                }
            }
        ]
    }
}