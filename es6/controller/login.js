/**
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2014 (original work) Open Assessment Technologies SA (under the project TAO-PRODUCT);
 */

/**
 * The controller dedicated to the login page.
 * @author Bertrand Chevrier <bertrand@taotesting.com>
 */
import $ from 'jquery';
import _ from 'lodash';
import __ from 'i18n';
import module from 'module';
import loadingBar from 'layout/loading-bar';
import versionWarning from 'layout/version-warning';
import loginComponent from 'ui/login/login';
    

    var _defaults = {
        disableAutocomplete: false,
        enablePasswordReveal: false,
        message: {
            error: ''
        }
    };

    /**
     * The login controller
     */
    export default {

        /**
         * Controller entry point
         */
        start: function start(){

            var conf = _.defaults({}, module.config(), _defaults);
            var login = loginComponent($('#login-box-inner-container'), conf);

            login.on('init', function() {
                loadingBar.start();
            }).after('render', function() {
                versionWarning.init();

                loadingBar.stop();
            }).on('submit.login', function() {
                loadingBar.start();
            });
        }
    };

