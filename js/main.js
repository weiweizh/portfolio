/* intercom scripts
*/  window.intercomSettings = {
    app_id: "fex7h07a"
  };

(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/fex7h07a';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()


jQuery(document).ready(function($){
	//open/close lateral filter

//$("#aboutMe").on('click',function(){

  //  $(".overlay").attr('style',"visibility: hidden");



    //$("#aboutMe").attr('style',"visi")

  //});

  //$("#More").on('click',function(){
//  $(".overlay").attr('style',"visibility: visible");
//  });




	$('.index-filter-trigger').on('click', function(){
		triggerFilter(true);
	});
	$('.index-filter .index-close').on('click', function(){
		triggerFilter(false);
	});

	function triggerFilter($bool) {
		var elementsToTrigger = $([$('.index-filter-trigger'), $('.index-filter'), $('.index-tab-filter'), $('.index-gallery')]);
		elementsToTrigger.each(function(){
			$(this).toggleClass('filter-is-visible', $bool);
		});
	}

	//mobile version - detect click event on filters tab
	var filter_tab_placeholder = $('.index-tab-filter .placeholder a'),
		filter_tab_placeholder_default_value = 'Select',
		filter_tab_placeholder_text = filter_tab_placeholder.text();

	$('.index-tab-filter li').on('click', function(event){
		//detect which tab filter item was selected
		var selected_filter = $(event.target).data('type');

		//check if user has clicked the placeholder item
		if( $(event.target).is(filter_tab_placeholder) ) {
			(filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
			$('.index-tab-filter').toggleClass('is-open');

		//check if user has clicked a filter already selected
		} else if( filter_tab_placeholder.data('type') == selected_filter ) {
			filter_tab_placeholder.text($(event.target).text());
			$('.index-tab-filter').removeClass('is-open');

		} else {
			//close the dropdown and change placeholder text/data-type value
			$('.index-tab-filter').removeClass('is-open');
			filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
			filter_tab_placeholder_text = $(event.target).text();

			//add class selected to the selected filter item
			$('.index-tab-filter .selected').removeClass('selected');
			$(event.target).addClass('selected');
		}
	});

	//close filter dropdown inside lateral .cd-filter
	$('.index-filter-block h4').on('click', function(){
		$(this).toggleClass('closed').siblings('.index-filter-content').slideToggle(300);
	})

	//fix lateral filter and gallery on scrolling
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
	});

	function fixGallery() {
		var offsetTop = $('.index-main-content').offset().top,
			scrollTop = $(window).scrollTop();
		if( scrollTop >= offsetTop ){
		$('.index-main-content').addClass('is-fixed');
		$('.upButton').addClass('visible')}
		else{
		$('.index-main-content').removeClass('is-fixed');
		$('.upButton').removeClass('visible');}
	}

	/************************************
		MitItUp filter settings
		More details:
		https://mixitup.kunkalabs.com/
		or:
		http://codepen.io/patrickkunka/
	*************************************/

	buttonFilter.init();
	$('.index-gallery ul').mixItUp({
	    controls: {
	    	enable: false
	    },
	    callbacks: {
	    	onMixStart: function(){
	    		$('.index-fail-message').fadeOut(200);
	    	},
	      	onMixFail: function(){
	      		$('.index-fail-message').fadeIn(200);
	    	}
	    }
	});


	//search filtering
	//credits http://codepen.io/edprats/pen/pzAdg
	var inputText;
	var $matching = $();

	var delay = (function(){
		var timer = 0;
		return function(callback, ms){
			clearTimeout (timer);
		    timer = setTimeout(callback, ms);
		};
	})();

	$(".index-filter-content input[type='search']").keyup(function(){
	  	// Delay function invoked to make sure user stopped typing
	  	delay(function(){
	    	inputText = $(".index-filter-content input[type='search']").val().toLowerCase();
	   		// Check to see if input field is empty
	    	if ((inputText.length) > 0) {
	      		$('.mix').each(function() {
		        	var $this = $(this);

		        	// add item to be filtered out if input text matches items inside the title
		        	if($this.attr('class').toLowerCase().match(inputText)) {
		          		$matching = $matching.add(this);
		        	} else {
		          		// removes any previously matched item
		          		$matching = $matching.not(this);
		        	}
	      		});
	      		$('.index-gallery ul').mixItUp('filter', $matching);
	    	} else {
	      		// resets the filter to show all item if input is empty
	      		$('.index-gallery ul').mixItUp('filter', 'all');
	    	}
	  	}, 200 );
	});
});


/*****************************************************
	MixItUp - Define a single object literal
	to contain all filter custom functionality
*****************************************************/
var buttonFilter = {
  	// Declare any variables we will need as properties of the object
  	$filters: null,
  	groups: [],
  	outputArray: [],
  	outputString: '',

  	// The "init" method will run on document ready and cache any jQuery objects we will need.
  	init: function(){
    	var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.

    	self.$filters = $('.index-main-content');
    	self.$container = $('.index-gallery ul');

	    self.$filters.find('.index-filters').each(function(){
	      	var $this = $(this);

		    self.groups.push({
		        $inputs: $this.find('.filter'),
		        active: '',
		        tracker: false
		    });
	    });

	    self.bindHandlers();
  	},

  	// The "bindHandlers" method will listen for whenever a button is clicked.
  	bindHandlers: function(){
    	var self = this;

    	self.$filters.on('click', 'a', function(e){
	      	self.parseFilters();
    	});
	    self.$filters.on('change', function(){
	      self.parseFilters();
	    });
  	},

  	parseFilters: function(){
	    var self = this;

	    // loop through each filter group and grap the active filter from each one.
	    for(var i = 0, group; group = self.groups[i]; i++){
	    	group.active = [];
	    	group.$inputs.each(function(){
	    		var $this = $(this);
	    		if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
	    			if($this.is(':checked') ) {
	    				group.active.push($this.attr('data-filter'));
	    			}
	    		} else if($this.is('select')){
	    			group.active.push($this.val());
	    		} else if( $this.find('.selected').length > 0 ) {
	    			group.active.push($this.attr('data-filter'));
	    		}
	    	});
	    }
	    self.concatenate();
  	},

  	concatenate: function(){
    	var self = this;

    	self.outputString = ''; // Reset output string

	    for(var i = 0, group; group = self.groups[i]; i++){
	      	self.outputString += group.active;
	    }

	    // If the output string is empty, show all rather than none:
	    !self.outputString.length && (self.outputString = 'all');

    	// Send the output string to MixItUp via the 'filter' method:
		if(self.$container.mixItUp('isLoaded')){
	    	self.$container.mixItUp('filter', self.outputString);
		}
  	}
};
