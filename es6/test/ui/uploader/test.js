import $ from 'jquery';
import 'ui/uploader';
    

    QUnit.test('plugin', function(assert){
       QUnit.expect(1);
       assert.ok(typeof $.fn.uploader === 'function', 'The uploader plugin is registered');
    });


