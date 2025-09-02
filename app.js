((self) => {
    "use strict";

    const config = {};

    const storageConfig = {};

    const eventConfig = {};

    const classes = {
        style: 'ins-custom-style',
    };

    const selectors = Object.keys(classes).reduce((createdSelector, key) => (
        createdSelector[key] = `.${classes[key]}`, createdSelector
    ), {})

    self.init = () => {
        if (typeof window.jQuery === 'undefined') {
            self.loadJQuery();
        } else {
            self.reset();
            self.buildCSS();
            self.buildHTML();
            self.setEvents();
        }
    };

    self.loadJQuery = () => {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
        script.onload = () => {
            self.init();
        };
        document.head.appendChild(script);
    };

    self.reset = () => {

    };

    self.buildCSS = () => {
        const { style } = classes;
        const customStyle = `
            <style class="${style}">

            </style>
        `;
        $('head').append(customStyle);
    };

    self.buildHTML = () => {
        const outerHTML = ``;
        $(outerHTML).prepend('main');
    };

    self.setEvents = () => {
    };

    self.init();
})({});