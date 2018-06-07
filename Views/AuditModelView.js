$(function () {
    app.Views.AuditModelView = Backbone.View.extend({
        el:null,
        template: _.template($("#audit_template").html()),
        events: {
        },
        initialize: function () {
            this.render();
        },
        render: function () {
          // this.$el.append(this.template(this.model.toJSON()));
            this.setElement(this.template(this.model.toJSON()));
            return this;
        }
    });

    app.Views.AuditModelFullView = Backbone.View.extend({
        el:null,
        template: _.template($("#audit_fulltemplate").html()),
        events: {
        },
        initialize: function () {
            this.render();
        },
        render: function () {
          // this.$el.append(this.template(this.model.toJSON()));
            this.setElement(this.template(this.model.toJSON()));
            return this;
        }
    });

});