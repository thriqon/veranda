var Veranda = window.Veranda = Ember.Application.create({
});

/* Order and include as you please. */
require('scripts/store');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

/* global $ */

$(document).foundation();
