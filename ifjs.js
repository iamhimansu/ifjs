function plus1() {
    document.getElementById("incrementText").value = Number(document.getElementById("incrementText").value) + 1;
}
const allImages = document.querySelectorAll("img");

function imageAlert(k) {
    console.log(k);
}
if (!Array.prototype.includes) {
    Array.prototype.includes = function(search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    }
    ;
}
function click() {
    var thisE = document.querySelector("[with-id='suc']");
    thisE.addEventListener("mouseleave", function(e) {
        e.target.classList.remove("shadow-lg");
    });
    thisE.addEventListener("click", function(e) {

        document.write(JSON.stringify(document.querySelector("form")));
    })
}

function success() {
    document.write(JSON.stringify(document.querySelector("form")));
    // document.write("Account created succesfully!")+
}

const IFJS = function() {
    const ifjs = {
        configs: {
            hasSrc: {
                altText: true,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAgAElEQVR4nOzda3cTV7ao4VmSLN/NxeALyT7//1/t0312rLsMGN9VVecDyJtOSDBguSTN5xkjo3t003hBJ0brXbNWFYPphzoAAACAtdZqegEAAADA4gkAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgA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AJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAAAAAJCAAAAAAAAJCAAAAACQgAAAAAAACQgAAAAAkIAAAAAAAAkIAMD/b8cOBAAAAAAE+VsPcmEEAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAACAAQEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAAAgAEBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAgAAAAAGBAAAAAAMCAAAAAAIABAQAAAAADAgAAAAAGBAAAAAAMCAAAAAAYEAAAAAAwIAAAAABgQAAAAADAQCI8VkCAK/hVAAAAAElFTkSuQmCC",
                fade: true,
            }
        },
        utils: {
            //IFJS Container
            container: document.querySelectorAll(".ifjs"),
            //IFJS Reserved Attributes
            reservedAttributes: ["listen", "emit", "data", "id"]
        },
        handlers: {
            EventListener: function handleEventListener(element, listener, callback) {
                // console.log(element.getAttribute("then-emit"));
                if (listener.indexOf("key") != -1) {
                    var KeyBinding = listener.split("-");
                    var BindedOn = KeyBinding[0];
                    // keypress, keyup, keydown
                    var onKey = KeyBinding[1];
                    var keyCombos = [];
                    //
                    var event = window.addEventListener(BindedOn, function(e) {
                        var pressedKey = String.fromCharCode(e.which || e.keyCode);
                        //Check if multiple keys are present
                        if (onKey.indexOf("+") != -1) {
                            keyCombos.push(pressedKey);
                            if (keyCombos.join("+").indexOf(onKey) != -1) {
                                keyCombos = [];
                                return callback();
                            }
                        }
                        if (pressedKey === onKey) {
                            return callback();
                        }
                    });
                    return;
                }
                if (listener.indexOf("drag") != -1) {
                    var direction = (listener.indexOf("drag-") != -1) ? listener.split("-")[1] : "all";
                    return ifjs.handlers.DragEvent(element, direction, callback);
                }
                return element.addEventListener(listener, callback);
            },
            DragEvent: function(object, direction, callback) {

                if (direction != null) {
                    var axis = direction;
                }
                console.log("dragging...", axis);

                var initX, initY, firstX, firstY;
                object.addEventListener('mousedown', function(e) {

                    e.preventDefault();

                    initX = object.offsetLeft;
                    initY = object.offsetTop;
                    //
                    firstX = e.pageX;
                    firstY = e.pageY;

                    object.style["left"] = initX + "px";
                    object.style["top"] = initY + "px";

                    object.addEventListener('mousemove', dragIt, false);
                    callback();

                    window.addEventListener('mouseup', function() {
                        // object.style["position"] = null;
                        object.removeEventListener('mousemove', dragIt, false);
                    }, false);

                }, false);

                object.addEventListener('touchstart', function(e) {

                    e.preventDefault();
                    initX = object.offsetLeft;
                    initY = object.offsetTop;
                    var touch = e.touches;
                    firstX = touch[0].pageX;
                    firstY = touch[0].pageY;

                    object.addEventListener('touchmove', swipeIt, false);
                    callback();

                    window.addEventListener('touchend', function(e) {
                        e.preventDefault();
                        object.removeEventListener('touchmove', swipeIt, false);
                    }, false);

                }, false);

                function dragIt(e) {
                    if (direction === "x" || direction === "X") {
                        object.style["transform"] = "translate3d(" + Number(initX + e.pageX - firstX) + "px, 0px, 0px)";
                    } else if (direction === "y" || direction === "Y") {
                        object.style["transform"] = "translate3d(0px, " + Number(initY + e.pageY - firstY) + "px, 0px)";
                    } else {
                        object.style["transform"] = "translate3d(" + Number(initX + e.pageX - firstX) + "px, " + Number(initY + e.pageY - firstY) + "px, 0px)";
                    }
                }

                function swipeIt(e) {
                    var contact = e.touches;
                    if (direction === "x" || direction === "X") {
                        object.style.left = initX + contact[0].pageX - firstX + 'px';
                    } else if (direction === "y" || direction === "Y") {
                        object.style.top = initY + contact[0].pageY - firstY + 'px';
                    } else {
                        object.style.left = initX + contact[0].pageX - firstX + 'px';
                        object.style.top = initY + contact[0].pageY - firstY + 'px';
                    }
                }
            }
        },
        hassrc: {
            load: function(element, source) {
                function hasSrcImg() {
                    var img = document.querySelectorAll("img[has-src]");
                    var src = null;
                    if (element != null) {
                        //Transform sing image in array
                        img = [element];
                    }
                    if (source != null) {
                        src = source;
                    }
                    //Select each image
                    Array.prototype.forEach.call(img, function(i) {
                        //If is-loaded is set to true
                        //Do nothing

                        if (i.getAttribute("is-loaded") === true) {
                            return;
                        }

                        i.parentNode.insertBefore(castSkeleton(i), i.nextSibling);

                        //Hide original image
                        if (ifjs.configs.hasSrc.fade === true) {
                            i.style.filter = 'alpha(opacity=0)';
                        }

                        i.classList.add("hide-skeleton");

                        var fetchSource = i.getAttribute("has-src") || src;
                        //
                        //Load the image in background
                        var imgElement = new Image();
                        imgElement.setAttribute("src", fetchSource);
                        i.setAttribute("is-loaded", "loading");
                        //IF IMAGE IS LOADED 
                        //Check for errors
                        imgElement.onload = function() {
                            //If image loading is complete
                            if (imgElement.complete && imgElement.naturalHeight !== 0) {
                                //Dispose image
                                imgElement = null;

                                //Set is-loaded attribute to check if image is loaded already
                                i.setAttribute("is-loaded", true);
                                //Set cached src and remove skeleton
                                i.setAttribute("src", fetchSource);

                                if (ifjs.configs.hasSrc.fade === true) {
                                    ifjs.css.animations.unfade(i);
                                }
                                //
                                i.style.filter = null;
                                i.style.opacity = null;

                                i.removeAttribute("has-src");
                                i.classList.remove("hide-skeleton");

                                //Remove skeleton
                                i.parentNode.removeChild(i.nextElementSibling);
                                // console.log(imgElement);
                            }
                        }
                    })
                }
                function castSkeleton(el) {
                    var AltText = (ifjs.configs.hasSrc.altText === true) ? "<div>" + el.getAttribute("alt") + "</div>" : "";
                    var skeleton = document.createElement("div");
                    var skeletonData = document.createElement("div");
                    skeletonData.classList.add("data");
                    skeletonData.innerHTML = "<div style='position:absolute;top:50%;left:20px;right:20px; transform: translateY(-50%);'><img src='" + ifjs.configs.hasSrc.placeholder + "'/>" + AltText;

                    skeleton.classList.add("cast-skeleton", "hold-skeleton");
                    skeleton.style["width"] = el.offsetWidth + 'px';
                    skeleton.style["height"] = el.offsetHeight + 'px';
                    skeleton.style["top"] = el.offsetTop + 'px';
                    skeleton.style["left"] = el.offsetLeft + 'px';

                    //TODO: Fix border
                    skeleton.appendChild(skeletonData);
                    return skeleton;
                }
                hasSrcImg();
            },
        },
        css: {
            animations: {
                fade: function fade(element) {
                    var op = 1;
                    // initial opacity
                    var timer = setInterval(function() {
                        if (op <= 0.1) {
                            clearInterval(timer);
                            element.style.display = 'none';
                        }
                        element.style.opacity = op;
                        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                        op -= op * 0.1;
                    }, 50);
                },
                unfade: function unfade(element) {
                    var op = 0.1;
                    // initial opacity
                    // element.style.display = 'block';
                    var timer = setInterval(function() {
                        if (op >= 1) {
                            clearInterval(timer);
                        }
                        element.style.opacity = op;
                        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                        op += op * 0.1;
                    }, 20);
                }
            }
        },

    }
    //  PLUGINS
    //
    console.log("IFJS started...");
    return ifjs;
}//Auto run function
();
IFJS.configs.hasSrc["fade"] = false;
IFJS.hassrc.load();

//IFJS Pre-defined attributes
var ifjsAttributes = Array("data", "emit", "listen", "id");

/**
    Select all ifjs containers
**/
var ifjs_containers = document.querySelectorAll(".ifjs");

/**
TODOS: FIX EVT LISTENRS FOR ALL
    Listen for event types (if-evt-_____) all ifjs containers
**/
var containers_evt_click = Array.prototype.forEach.call(ifjs_containers, function(eventElements) {
    //Select all binded element
    var bindedElements = eventElements.querySelectorAll("[if-data]");
    //
    var eventElements = eventElements.querySelectorAll("[listen-to]");
    //Elements to be controlled
    /**
     
        Bind click events
    **/
    Array.prototype.forEach.call(eventElements, function(child_evt_click) {

        //Set default click count
        var current_count = child_evt_click.dataset.count = 0;
        //Get emitted data
        var emitted_data = 0;
        if (child_evt_click.getAttribute("then-emit")) {
            emitted_data = child_evt_click.getAttribute("then-emit").split("|");
        }
        //
        var current_emitted_count = 0;
        //Conditional html
        var cond_data = child_evt_click.innerHTML.toString();

        if (innerConditionSetOn(cond_data) === true) {
            child_evt_click.innerHTML = innerConditionalData(cond_data)[0];
        }
        IFJS.handlers.EventListener(child_evt_click, child_evt_click.getAttribute("listen-to"), function() {
            //Check if key binding is set
            (child_evt_click.getAttribute("listen-to"));
            //Get id of conditional data if any
            var cond_id;
            if (child_evt_click.getAttribute("with-id")) {
                cond_id = child_evt_click.getAttribute("with-id");
            } else {
                cond_id = child_evt_click.getAttribute("id");
            }

            // console.log(clicked_element.innerHTML);
            //Check if condition {|} is present in innerhtml
            if (innerConditionSetOn(cond_data) === true) {

                //Separate conditions
                var clicked_inner_data = innerConditionalData(cond_data);

                //Update clicked innerHTML per click
                // console.log(current_count, clicked_inner_data.length);
                if (current_count > clicked_inner_data.length - 2) {
                    current_count = child_evt_click.dataset.count = 0;
                } else {
                    current_count = child_evt_click.dataset.count = Number(child_evt_click.dataset.count) + 1;
                }
                //
                var currentHTML = child_evt_click.innerHTML = clicked_inner_data[current_count].trim();
            }
            //Check for emitted data
            /**
                 * 
                 * Check for total emitted data
                 * Add +1 in emit count
                 */
            if (current_emitted_count > emitted_data.length - 2) {
                current_emitted_count = 0;
            } else {
                current_emitted_count = current_emitted_count + 1;
            }

            // var ifAttributesObj = ifAttributes(bindedElements, cond_id);
            //
            var currentEmittedData;
            //
            if (emitted_data.length > 1) {
                currentEmittedData = emitted_data[current_emitted_count];
            } else {
                currentEmittedData = emitted_data[0];
            }
            //Check if data exists in object
            // if (currentEmittedData in ifAttributesObj) {
            // TODO: Find the conditional element
            Array.prototype.forEach.call(bindedElements, function(ele) {

                var dynamicFunctionAttr = ele.outerHTML.substr(ele.outerHTML.indexOf("use-function"));
                if (dynamicFunctionAttr.indexOf("use-function") !== -1) {
                    var functionBinded = dynamicFunctionAttr.split("use-function=")[1].split("\"")[1];
                    //Check if multiple function exists
                    if (functionBinded.indexOf("|") !== -1) {
                        functionBinded.split("|").forEach(function(func) {
                            if (func.indexOf(currentEmittedData + ":") != -1) {
                                if (currentEmittedData === func.split(":")[0]) {
                                    dynamicFunction(func.split(":")[1]);
                                }
                            }
                        });
                    } else {
                        if (functionBinded.indexOf(currentEmittedData + ":") != -1) {
                            // console.log(functionBinded);
                            if (currentEmittedData === functionBinded.split(":")[0]) {
                                dynamicFunction(functionBinded.split(":")[1]);
                            }
                        }
                        if (functionBinded.indexOf(":") == -1) {
                            dynamicFunction(functionBinded);
                        }
                    }
                }

                /**
                     * DYNAMIC ATTRIBUTE
                     */
                var dynamicAttributes = ele.outerHTML.substr(ele.outerHTML.indexOf("if-")).split("if-") || 0;
                // console.log(ele.outerHTML.substr(ele.outerHTML
                // .indexOf("if-")).split(" if-"));
                //
                dynamicAttributes.forEach(function(attribute) {
                    if (attribute.split("=")[0] != "") {
                        var elementAttr = "if-" + attribute.split("=")[0];
                        // console.log(elementAttr);

                        if (!ifjsAttributes.includes(elementAttr.split("-")[1]) && elementAttr.indexOf("if-") !== -1) {
                            var nAttrData = attribute.split("\"")[1].split("|");
                            if (nAttrData.length > 0) {
                                nAttrData.forEach(function(cond) {
                                    if (cond.indexOf(currentEmittedData + ":") != -1) {
                                        //Check if if-class exists
                                        var attributeValue = cond.split(":")[1];
                                        var attributeName = attribute.split("=")[0];

                                        if (cond.indexOf("(") != -1 && cond.indexOf(")") != -1) {
                                            attributeValue = cond.split("(")[1].split(")")[0];
                                            attributeName = attribute.split("=")[0];
                                        }
                                        if (typeof attributeName != "undefined") {
                                            switch (attributeName) {
                                            case "class":
                                                cond.split(":")[1].split(" ").forEach(function(classes) {
                                                    if (ele.classList.contains(classes)) {
                                                        ele.classList.remove(classes);
                                                    } else {
                                                        ele.classList.add(classes);
                                                    }
                                                });
                                                break;
                                            case "src":
                                                IFJS.hassrc.load(ele, attributeValue);
                                                break;
                                            default:
                                                ele.setAttribute(attributeName, attributeValue);
                                                break;
                                            }

                                        }

                                    }
                                    /**
                                         *  TODOS: Fix sequencing of if attributes
                                         */
                                    //     else {
                                    //         ele.setAttribute(attribute
                                    //         .split("=")[0]
                                    //         .split("-")[1],
                                    //         nAttrData[current_emitted_count]);
                                    //         console.log(nAttrData[current_emitted_count]);
                                    // }
                                });

                            } else {
                                if (typeof attribute.split("=")[0] != "undefined") {
                                    ele.setAttribute(attribute.split("=")[0].split("-")[1], nAttrData[0].split(":")[1]);
                                }
                            }
                            return;
                        }
                    }
                })
            });
            // }
        });
    });
});

// Check if condition exists
function innerConditionSetOn(element) {
    if (element.indexOf("{") != -1 && element.indexOf("}") != -1) {
        // if (innerConditionalData(element).length>1) {
        return true;
        // }
    }
}

function innerConditionalData(element) {
    return element.split("{")[1].split("}")[0].split("|");
}
//Dynamic Attribute
function dynamicAttributes(element) {
    var dynamicAttributes = element.outerHTML.substr(ele.outerHTML.indexOf("if-")).split(" ");
}
//Handle Dynamic Funtion
function dynamicFunction(callback) {
    return Function('"use strict";return (' + callback + ')')();
}
