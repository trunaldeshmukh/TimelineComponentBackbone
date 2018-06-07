$(function () {
    app.Variables.current_month_year = '';
    app.Views.AuditCollectionView = Backbone.View.extend({
        el: "#container_id",
        initialize: function () {
            this.collection.on('add', this.addOne, this);  // listeners/anouncers for the collection on add..
        },
        render: function () {

            var date = moment(this.collection.first().toJSON().audit_date).format("MMM YYYY");
            app.Variables.current_month_year = date;
            this.$el.append('<li class="timeline-period">' + app.Variables.current_month_year + '</li>')

            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function (audit) {
            var date = moment(audit.toJSON().audit_date).format("MMM YYYY");
            if (app.Variables.current_month_year !== date) {
                app.Variables.current_month_year = date;
                this.$el.append('<li class="timeline-period">' + app.Variables.current_month_year + '</li>')
            }
            var auditview = new app.Views.AuditModelView({ model: audit });
            this.$el.append(auditview.el);
        }
    });


    app.Views.AuditCollectionFullView = Backbone.View.extend({
        el: "#container_id_full",
        initialize: function () {
            this.collection.on('add', this.addOne, this);  // listeners/anouncers for the collection on add..
        },
        render: function () {

            var date = moment(this.collection.first().toJSON().audit_date).format("MMM YYYY");
            app.Variables.current_month_year = date;
            this.$el.append('<li class="timeline-period">' + app.Variables.current_month_year + '</li>')

            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function (audit) {
            var date = moment(audit.toJSON().audit_date).format("MMM YYYY");
            if (app.Variables.current_month_year !== date) {
                app.Variables.current_month_year = date;
                this.$el.append('<li class="timeline-period">' + app.Variables.current_month_year + '</li>')
            }
            var auditview = new app.Views.AuditModelFullView({ model: audit });
            this.$el.append(auditview.el);
        }
    });
});