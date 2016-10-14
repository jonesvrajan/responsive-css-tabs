$(document).ready(function(){

	var checkedId;

	addClass();

	// Setting the .tab-content data value to false to execute load function only once;

	$('#ajax-tabs .tab-content').attr('data-value', false);

	// When the DOM is ready calling function loadContent() so that the first tab will be activated;
	loadContent();

	// On change of radio button calling function loadContent();
	$('.tabs-container input[name=sections]').on('change', function() {
		addClass();
		loadContent();
	}); 

	// Function defined to load content from external source;

	function loadContent() {
		
		//Grabbing the ID of checked radio button;
		checkedId = $('input[name=sections]:checked').attr('id');

		var tabContent = $('input[name=sections]:checked').siblings('.tab-content');

		//Checking the attribute value of .tab-content;
		if ($(tabContent).attr('data-value') === 'false') {
			// Loading content if the condition is true;
			$(tabContent).load("tab-content/"+checkedId+".html");
			//Setting the data-value attribute to true;
			$(tabContent).attr('data-value', true);
		}
	}

	function addClass () {
		//Grabbing the ID of checked radio button;
		checkedId = $('input[name=sections]:checked').attr('id');
		$('label').removeClass('active');
		$('label[for='+checkedId+']').addClass('active');
	}
});


