(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var gr = new GlideRecord('incident');
	gr.addQuery('parent_incident',current.sys_id);
	gr.query();
	while(gr.next())
	{
		gr.description = current.description;
		gr.update();
	}
	gs.addInfoMessage("We Updated the Child Inc Desc From Parent Incident!!!!");

})(current, previous);