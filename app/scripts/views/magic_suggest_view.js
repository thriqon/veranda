Veranda.MagicSuggestView = Ember.View.extend({
	attributeBindings : ['data', 'value', 'name'],

data : null,
value : null,
name : null,

didInsertElement : function () {
	this._super();
	this.$().magicSuggest({
	});
}
});

