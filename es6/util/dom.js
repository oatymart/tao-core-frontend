import $ from 'jquery';
    
    export default {
        contains : function(elt){
            if(elt instanceof $){
                elt = elt[0];
            }
            return $.contains(document, elt);
        }
    }
    
