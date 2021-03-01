class DOMNodeCollection {
    constructor(arr) {
        this.nodes = arr;
    }

    html(string) {
        if (string !== undefined) {
            this.nodes.forEach( (el) => el.innerHTML = string);
            return this;
        }
        else
            return this.nodes[0].innerHTML;
    }

    empty() {
        this.nodes.forEach((el) => el.innerHTML = "");
    }

    append (...content) {
        this.nodes.forEach (node => {
            content.forEach((el) => {
                if (el instanceof HTMLElement){
                    node.insertAdjacentHTML('beforeend',el.outerHTML);
                } else if (el instanceof DOMNodeCollection){
                    el.nodes.forEach(function(el2){
                        node.insertAdjacentHTML('beforeend', el2.outerHTML);
                    })
                }
                else {
                    node.insertAdjacentHTML('beforeend', el);
                }
            });
        });
    }

    addClass (...classes) {
        this.nodes.forEach(function(node){
                node.classList.add(...classes);   
        })
    }

    removeClass (...classes) {
        this.nodes.forEach(function(node){
                node.classList.remove(...classes);   
        })
    }

    attr (name, value){
        if (value === undefined) {
            return this.nodes.map(function(el){
                el.getAttribute(name);
            })
        }
        this.nodes.forEach(function(node){
            node.setAttribute(name, value);
        })
    }

    children (){
        let arr = [];
        this.nodes.forEach(function(node){
            arr = arr.concat(Array.from(node.children));
        })
        return new DOMNodeCollection(arr);
    }

    parent() {
        let arr = [];
        this.nodes.forEach(function (node) {
            if (node.parentNode && !arr.includes(node.parentNode))
                arr.push(node.parentNode);
        })
        return new DOMNodeCollection(arr);
    }

    //Still to do: Need to only push unique elements, as in parent
    find(selectors) {
        let arr = [];
        this.nodes.forEach(function (node) {
            arr = arr.concat(Array.from(node.querySelectorAll(selectors)));
        })
        return new DOMNodeCollection(arr);
    }
}



module.exports = DOMNodeCollection;