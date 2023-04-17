import Router from "./Router.js";
class HookResponse {
    constructor(args) {
        this.element = args.element;
        this.status = args.status;
    }
}

export function onMounted(callback) {
    if (typeof window !== 'undefined') {
        window.addEventListener('DOMContentLoaded', () => {
            const appElement = document.getElementById(Router.BASE.routeId);
            callback(appElement);
        })
    }
}

export function onLoaded(callback) {
    if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
            const appElement = document.getElementById(Router.BASE.routeId);
            callback(appElement);
        });
    }
}

export function onPageMounted(id, callback) {
    document.addEventListener('DOMContentLoaded', (event) => {
        const containerDiv = document.getElementById(id);
        if (containerDiv === null) return;
        callback(new HookResponse({element: containerDiv, status: event.type}))
    });
}

