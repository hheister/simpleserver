define(['jquery', 'knockout', 'koTemplateEngine', 'koBindings'],
function ($, ko, koTemplateEngine, koBindings) {

    var vm = (function () {
        "use strict";
        var self = this;
        var labelText = ko.observable("This text is coming from the viewmodel.js file!");

        var activate = function () {
            ko.applyBindings(vm);
        };

        return {
            labelText: labelText,
            activate: activate
        };
    })();

    $(document).ajaxError(function (event, response) {
        console.error(response);
        alert("Error in the communication. Check the console!");
    });

    // ko External Template Settings
    infuser.defaults.templateSuffix = ".html";
    //infuser.defaults.templateUrl = "http://localhost:8080/templates";
    infuser.defaults.templateUrl = "/templates";

//alert('infuser.defaults.templateUrl=' + infuser.defaults.templateUrl);
    vm.activate();

    return vm;

});