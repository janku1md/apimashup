//*********************************//
//********Application State********//
//*********************************//

var $appContainer = $('.app-container'),
    $defaultState = $('[data-template-name="user-input"]').text(),
    $loadedState = $('[data-template-name="display-results"]').text();

var appRoutes = Backbone.Router.extend({
    routes: {
      '':'index',
      'brewery/:zip':'brewery'
    },

    index: function() {
        $appContainer.html(_.template($defaultState)({'zip':'zipcode'}));
    },

    brewery: function(zip) {
      $appContainer.html(_.template($loadedState)({'brewery': {'state':'South Carolina', 'zipcode':'29108' }}));
    }
});

$(document).ready(function() {
var myRouter = new appRoutes();
Backbone.history.start();
});













// var brews = [
//   {brewery: "Does it work?", website: "`.length`"},
//   {brewery: "Most likely not", website: "section"}
// ];
//
// var MyRouter = Backbone.Router.extend({
//   routes: {
//     "": "index",
//     "results/:id": "results",
//     "barcrawl/:id": "barcrawl"
//   },
//
//   index: function(){
//     var template = _.template( $('#brewery-list-template').text() );
//         var renderedTemplate = template({breweries: brewery});
//         $('.app-container').html(renderedTemplate);
//   },
//
//   results: function(id){
//     var resultsIndex = Number(id);
//     var results = brewery[resultsIndex];
//
//     var resultstemplate = _.template( $('#brewery-template').text() );
//     var renderedTemplate = resultstemplate(results);
//     $('.app-container').html(renderedTemplate);}
//   },
//
//
//   barcrawl: function(id){
//     var barcrawlIndex = Number(id);
//     var barcrawl = brews[resultsIndex];
//
//     var crawltemplate = _.template( $('#barcrawl-template').text() );
//     var renderedTemplate = crawltemplate(barcrawl);
//     $('.app-container').html(renderedTemplate);}
//   });
//
// $(document).ready(function(){
//   var router = new MyRouter();
//   Backbone.history.start();
// });
//
//
// transition: function(route) {
//   $('body').remove().addClass(route);
//
// }
