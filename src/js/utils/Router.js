export default class Router {
    #id;

    static BASE = new Router('app');

    constructor(id) {
        this.#id = id;
    }

    get routeId() {
        return this.#id;
    }
}
