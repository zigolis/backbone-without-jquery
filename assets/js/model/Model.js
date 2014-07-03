var app = app || {};

app.Model = Backbone.Model.extend({
    url: function() {
        return "http://demo2177885.mockable.io/users";
    }
});
