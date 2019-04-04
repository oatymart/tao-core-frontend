/**
 * @author Bertrand Chevrier <bertrand@taotesting.com>
 */
import section from 'layout/section';
    
       
    /**
     * Ensure edit section is disabled
     * @exports controller/users/disable-edit
     */    
    export default {
        start : function(){
            section.get('edit_user').disable();
        }
    };

