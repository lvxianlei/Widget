var $$ = {
    createElement: function (type, props, children) {
        var scope = this;
        var elment = document.createElement(type);
        if (props !== null) {
            for (var key in props) {
                if (key === 'style') {
                    scope.styleFormat(elment, props[key])
                } else {
                    elment[key] = props[key];
                }
            }
        }
        if (children && children.length && children instanceof Array) {
            children.forEach(function (item) {
                elment.appendChild(scope.createElement(item.type, item.props, item.children));
            });
        } else if (children instanceof Object) {
            elment.appendChild(scope.createElement(children.type, children.props, children.children));
        } else {
            elment.innerHTML = children ? children : '';
        }
        return elment;
    },
    createStyle:function(data) {
        var frage = document.createDocumentFragment();
        if (data && data.length && data instanceof Array) {
            data.forEach(function (item) {
                var ele = document.createElement('link');
                ele.rel = item;
                frage.append(ele);
            })
        } else if (data && data.length && !data instanceof Array) {
            var ele = document.createElement('link');
            ele.rel = data;
            frage.append(ele);
        } else if (data instanceof Object) {

            var styleEle = document.createElement('style');
            styleEle.innerHTML += data.content;
            frage.append(styleEle);
        }
        return frage;
    },
    styleFormat: function (elment, option) {
        for (var key in option) {
            elment.style[key] = option[key];
        }
    },
    addToHtml: function (id, data) {
        var scope = this;
        var div = this.createStyle(data.style);
        console.log(div);
        if (data.style && data.style !== null) document.getElementsByTagName('head')[0].appendChild(this.createStyle(data.style));
        if (data.component) {
            var elment = scope.createElement(data.component.type, data.component.props, data.component.children);
            document.getElementById(id).appendChild(elment);
        }
    }
};