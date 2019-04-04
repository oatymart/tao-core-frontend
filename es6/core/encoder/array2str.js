import _ from 'lodash';
   export default {
       encode : function(modelValue, glue){
           glue = glue || ',';
           return  modelValue.split(glue);
       },
       
       decode : function(nodeValue, glue){
           glue = glue || ',';
           return _.isArray(nodeValue) ? nodeValue.join(glue) : nodeValue;
       }
   };

