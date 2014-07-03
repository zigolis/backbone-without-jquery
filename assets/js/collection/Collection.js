var app = app || {};

app.Collection = Backbone.Collection.extend({
    url  : "http://demo2177885.mockable.io/users",
    model: app.Model
});
