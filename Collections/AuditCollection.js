$(function () {

    app.Variables.prev_timeline_class = "timeline-reverse";

    app.Collections.AuditCollection = Backbone.Collection.extend({
        model: app.Models.AuditModel,
        url: 'http://localhost:50475/api/audit',
        comparator: function (a) {        
            //To sort elements in collection in descending order of audit_date
            return -new Date(a.get('audit_date'));
        }
    });

    app.Collections.audit_collection = new app.Collections.AuditCollection();
    app.Collections.audit_collection.fetch({
        async: false,
        success: function (collection, response, options) {
            // this.addItems();
        },
        error: function (collection, response, options) {
            console.log('Error while fetching audit events from URL:' + this.url);
        }
    });


    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 2, audit_event: "Service Enabled", audit_date: new Date("2018-06-02").toDateString(), audit_comment: "1: audit added" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 1, audit_event: "Service Disabled", audit_date: new Date("2018-06-01").toDateString(), audit_comment: "2: audit removed", timeline_dot_color: "#4caf50", timeline_icon_class: "icon md-image" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 3, audit_event: "Service modified", audit_date: new Date("2018-06-03").toDateString(), audit_comment: "3: audit modified", timeline_dot_color: "#ff9800", timeline_icon_class: "icon md-file" }));

    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 2, audit_event: "service enabled", audit_date: new Date("2018-05-02").toDateString(), audit_comment: "1: audit added" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 1, audit_event: "service disabled", audit_date: new Date("2018-05-01").toDateString(), audit_comment: "2: audit removed", timeline_dot_color: "#4caf50", timeline_icon_class: "icon md-image" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 3, audit_event: "service modified", audit_date: new Date("2018-05-03").toDateString(), audit_comment: "3: audit modified", timeline_dot_color: "#ff9800", timeline_icon_class: "icon md-file" }));

    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 2, audit_event: "service enabled", audit_date: new Date("2018-04-02").toDateString(), audit_comment: "1: audit added" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 1, audit_event: "service disabled", audit_date: new Date("2018-04-01").toDateString(), audit_comment: "2: audit removed", timeline_dot_color: "#4caf50", timeline_icon_class: "icon md-image" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 3, audit_event: "service modified", audit_date: new Date("2018-04-03").toDateString(), audit_comment: "3: audit modified", timeline_dot_color: "#ff9800", timeline_icon_class: "icon md-file" }));





});
