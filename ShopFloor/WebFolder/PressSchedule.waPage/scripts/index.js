
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var textField8 = {};	// @textField
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		//		var costCtrId = '417';
//		alert(costCtrId.getValue());
//		alert(jobFormId.getValue());
		sources.productionSchedules.query('CostCenter == :1 AND JobSequence == :2', costCtrId, jobFormId,
//		sources.productionSchedules.query('JobSequence == :1', jobFormId,
		{
			orderBy: "Priority",
			
			onSuccess: function(event) {
//				var machCollection = event.entityCollection;
//				machCollection.orderBy('Priority');
//			 	if(jobFormId.length()>0) {
//					alert("hey");
//				
//				}
			},
			
			onError: function(event) {
			
			alert("hey2");
			
			},
		
		
		
		
		
		
		}
		);
	};// @lock

	textField8.keyup = function textField8_keyup (event)// @startlock
	{// @endlock
//		waf.sources.productionSchedules.query('CostCenter == event.getvalue+"*"');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock



	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("textField8", "keyup", textField8.keyup, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
