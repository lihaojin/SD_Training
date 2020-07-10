define(['jquery'], function($) {
    'use strict';
  
    return function() {
      $.validator.addMethod(
        'validate-no-alex',
        function(value, element) {
          return !value.toLowerCase().split(" ").join("").includes('alex');
        },
        $.mage.__('Alex string is not allowed!!')
      )
    }
  });
