import '../style.css'
import './style.scss'
import {StarterExample} from "./js/components/HTMLRenderer.js";
import {setupCounter} from './js/components/counter.js'
import {onMounted} from "./js/utils/Hooks.js";
import Router from "./js/utils/Router.js";


onMounted(() => {
    StarterExample(Router.BASE.routeId);
    setupCounter(document.querySelector('#counter'))
})
