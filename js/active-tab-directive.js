productPage.controller('ngActivetab', function() {
	return {
		link: function(scope, element, attrs) {
      scope.$watch(attrs.el, function(value) {
        if(value !== undefined) {
          console.log('element=',value);
        }
      }
    }
	}
});