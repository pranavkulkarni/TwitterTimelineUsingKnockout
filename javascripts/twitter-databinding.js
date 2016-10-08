//var someJSON = "mock.json"
//var parsed = JSON.parse(someJSON);
//console.log(parsed);


var json = require('mock.json'); //with path
console.log(json);
/*
var myViewModel = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123),
    children: ko.observableArray([]),
    itemToAdd: ko.observable(""),
    addChild: function()
    {
        if( this.itemToAdd() != "" )
        {
            this.children.push(this.itemToAdd());
            // Clear input box
            this.itemToAdd("");
        }
    }
};

ko.applyBindings(myViewModel); */
