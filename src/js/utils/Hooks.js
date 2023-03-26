import Router from "./Router.js";

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
