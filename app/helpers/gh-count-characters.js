import {helper} from '@ember/component/helper';
import {htmlSafe} from '@ember/string';

export function countCharacters(params, options) {
    if (!params || !params.length) {
        return;
    }

    let el = document.createElement('span');
    let content = params[0] || '';
    // Change length to be moldable idiva
    let maxLength = options.id === 'user-bio' ? 600 : 200;

    // convert to array so that we get accurate symbol counts for multibyte chars
    // this will still count emoji+modifer as two chars
    let {length} = Array.from(content);

    el.className = 'word-count';

    if (length > maxLength - 20) {
        el.style.color = '#f05230';
    } else {
        el.style.color = '#738a94';
    }

    el.innerHTML = maxLength - length;

    return htmlSafe(el.outerHTML);
}

export default helper(function (params, options) {
    return countCharacters(params, options);
});
