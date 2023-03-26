import Router from "./Router.js";

export function onMounted(callback) {
    if (typeof window !== 'undefined') {
        window.addEventListener('DOMContentLoaded', () => {
            const appElement = document.getElementById(Router.BASE.routeId);
            console.log('APPPPP', appElement);
            callback(appElement);
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
