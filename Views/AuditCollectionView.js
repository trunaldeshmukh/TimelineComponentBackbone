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
            audit.set('audit_short_date',moment(audit.toJSON().audit_date).format("DD MMM YYYY"));
            audit.set('audit_long_date',moment(audit.toJSON().audit_date).format("DD MMM YYYY hh:mm A"));
            this.setTimelineClass(audit);

            if (app.Variables.current_month_year !== date) {
                app.Variables.current_month_year = date;
                this.$el.append('<li class="timeline-period">' + app.Variables.current_month_year + '</li>')
            }
            var auditview = new app.Views.AuditModelView({ model: audit });
            this.$el.append(auditview.el);
        },
        setTimelineClass:function(item){
            var current_timeline_class="";
            if(app.Variables.prev_timeline_class==="timeline-reverse")
            {
                current_timeline_class="";
            }
            else{
                current_timeline_class="timeline-reverse";
            }
            item.set("timeline_class",current_timeline_class);
            app.Variables.prev_timeline_class=current_timeline_class;  
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
            this.setTimelineClass(audit);
            var date = moment(audit.toJSON().audit_date).format("MMM YYYY");
            if (app.Variables.current_month_year !== date) {
                app.Variables.current_month_year = date;
                this.$el.append('<li class="timeline-period">' + app.Variables.current_month_year + '</li>')
            }
            var auditview = new app.Views.AuditModelFullView({ model: audit });
            this.$el.append(auditview.el);
        },
        setTimelineClass:function(item){
            var current_timeline_class="";
            if(app.Variables.prev_timeline_class==="timeline-reverse")
            {
                current_timeline_class="";
            }
            else{
                current_timeline_class="timeline-reverse";
            }
            item.set("timeline_class",current_timeline_class);
            app.Variables.prev_timeline_class=current_timeline_class;  
        }
    });
});