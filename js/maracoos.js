/*
	//#mapTabPanel__observationsPanel,#mapTabPanel__weatherPanel,#mapTabPanel__forecastsPanel,#ext-gen94{
	$("#station").click(function() {
		$('#observationsPanel').removeClass("x-hide-display");
		$('#weatherPanel').addClass("x-hide-display");
		$('#forecastsPanel').addClass("x-hide-display");
	});
	$("#radar").click(function() {
		$('#observationsPanel').addClass("x-hide-display");
		$('#weatherPanel').removeClass("x-hide-display");
		$('#forecastsPanel').addClass("x-hide-display");
	});
	$("#model").click(function() {
	 	$('#observationsPanel').addClass("x-hide-display");
		$('#weatherPanel').addClass("x-hide-display");
		$('#forecastsPanel').removeClass("x-hide-display");
	});
*/