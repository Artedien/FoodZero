import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        Hash: false,
        Thumbs: false,

        compact: false,

        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ['close']
            }
        },
        Carousel: {
            Navigation: {
                prevTpl: `<svg width="76" height="52" viewBox="0 0 76 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="-0.5" width="75" height="51" rx="25.5" transform="matrix(1 0 0 -1 0 51)" stroke="white"/>
                <path d="M52 26L28 26" stroke="white"/>
                <path d="M28 29.5L24 26L28 22.5L28 29.5Z" fill="white"/>
                </svg>
                `,
                nextTpl: `<svg width="76" height="52" viewBox="0 0 76 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="75" height="51" rx="25.5" stroke="white"/>
                <path d="M48 22.5L52 26L48 29.5L48 22.5Z" fill="white"/>
                <path d="M48 26L24 26" stroke="white"/>
                </svg>`
            }
        }
    });
}


export default fancybox