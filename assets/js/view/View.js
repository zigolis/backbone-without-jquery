Backbone.View = Backbone.View.extend(Backbone.NativeViewMixin);

var app = app || {};

app.View = Backbone.View.extend({
    template: _.template( document.querySelector("#tmp").innerHTML ),

    el: "#person",

    initialize: function() {
        this.model = new app.Model();

        this.collection = new app.Collection();
        this.collection.fetch();

        this.listenTo(this.collection, "sync", this.render);
    },

    render: function() {
        this.el.innerHTML = this.template({
            "collection": this.collection,
            "view"      : this,
            "model"     : this.model
        });
    }
});
