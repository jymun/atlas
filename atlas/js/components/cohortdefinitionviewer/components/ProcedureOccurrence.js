define(['knockout','components/cohortbuilder/options','components/cohortbuilder/InputTypes/Range','components/cohortbuilder/InputTypes/Text', 'text!./ProcedureOccurrenceTemplate.html'], function (ko, options, Range, Text, template) {

	function ProcedureOccurrenceViewModel(params) {
		var self = this;

		self.expression = ko.utils.unwrapObservable(params.expression);
		self.Criteria = params.criteria.ProcedureOccurrence;
		self.options = options;

		self.getCodesetName = function(codesetId, defaultName) {
			if (codesetId != null)
			{
				var selectedConceptSet = self.expression.ConceptSets().filter(function (item) { return item.id == codesetId })[0];
				return ko.utils.unwrapObservable(selectedConceptSet.name);
			}
			else
				return defaultName;
		};
		
	}

	// return compoonent definition
	return {
		viewModel: ProcedureOccurrenceViewModel,
		template: template
	};
});