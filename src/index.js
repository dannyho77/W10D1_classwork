// import DOMNodeCollection;
const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(arg) {
    let obj = Array.from(document.querySelectorAll(arg));
    let collection = new DOMNodeCollection(obj);
    return collection;
};
