import $ from 'jquery';
import __ from 'i18n';
import helpers from 'helpers';
import Lock from 'lock';
import sectionApi from 'layout/section';
import feedback from 'ui/feedback';
    
	
    export default {
        start : function(){

		    $(".forcerelease").click(function(e) {
		    	
		        e.preventDefault();
		        
		        $.ajax({
                    url: helpers._url('forceRelease', 'Lock', 'tao'),
                    type: "POST",
                    data : {uri : $(this).data('id')},
                    dataType: 'json',
                    success : function(response){
                        if(response.success){
        		            feedback().success(__('The lock has been released'));
                            $('.tree').trigger('refresh.taotree'); 
                        }
                        else{
        		            feedback().error(__('Unable to release the lock'));
                        }
                    },
                    error : function(){
    		            feedback().error(__('Unable to release the lock'));
                    }
                });
		        
		    });
        }
    }
