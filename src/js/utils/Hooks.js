import Router from "./Router.js";

export function onMounted(callback) {
    if (typeof window !== 'undefined') {
        window.addEventListener('DOMContentLoaded', () => {
            callback(document.getElementById(Router.BASE.routeId));
        })
    }
}

export function onLoaded(callback) {
    if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
            callback(document.getElementById(Router.BASE.routeId));
        });
    }
}
