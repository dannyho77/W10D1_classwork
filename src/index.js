// import DOMNodeCollection;
const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(arg) {
    if (arg instanceof HTMLElement){
        return new DOMNodeCollection([arg]);
    }
    else {
        let obj = Array.from(document.querySelectorAll(arg));
        return new DOMNodeCollection(obj);
    }
};
