import i18nTr from 'json!i18ntr/messages.json';
import format from 'core/format';
    

    var translations = i18nTr.translations;

    /**
     * Common translation method.
     * @see /locales/#lang#/messages_po.js
     *
     * @param {String} message should be the string in the default language (usually english) used as the key in the gettext translations
     * @returns {String} translated message
     */
    export default function __(message){
        var localized =  translations[message] || message;

        if(arguments.length > 1){
            localized = format.apply(null, [localized].concat([].slice.call(arguments, 1)));
        }

        return localized;
    };

