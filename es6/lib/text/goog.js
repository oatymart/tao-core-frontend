/** @license
 * RequireJS plugin for loading Google Ajax API modules thru `google.load`
 * Author: Miller Medeiros
 * Version: 0.2.0 (2011/12/06)
 * Released under the MIT license
 */
import async from 'async';
import propertyParser from 'propertyParser';

    var rParts = /^([^,]+)(?:,([^,]+))?(?:,(.+))?/;

    function parseName(name){
        var match = rParts.exec(name),
            data = {
                moduleName : match[1],
                version : match[2] || '1'
            };
        data.settings = propertyParser.parseProperties(match[3]);
        return data;
    }

    export default {
        load : function(name, req, onLoad, config){
            if (config.isBuild) {
                onLoad(null); //avoid errors on the optimizer
            } else {
                var data = parseName(name),
                    settings = data.settings;

                settings.callback = onLoad;

                req(['async!'+ (document.location.protocol === 'https:'? 'https' : 'http') +'://www.google.com/jsapi'], function(){
                    google.load(data.moduleName, data.version, settings);
                });
            }
        }
    };


