$(function () {

    app.Variables.prev_timeline_class = "timeline-reverse";

    app.Collections.AuditCollection = Backbone.Collection.extend({
        model: app.Models.AuditModel
    });

    app.Collections.audit_collection = new app.Collections.AuditCollection();
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 1, audit_event: "service enabled", audit_date: new Date().toDateString(), audit_comment: "1: audit added" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 2, audit_event: "service disabled", audit_date: new Date().toDateString(), audit_comment: "2: audit removed", timeline_dot_color:"#4caf50",timeline_icon_class:"icon md-image" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 3, audit_event: "service modified", audit_date: new Date().toDateString(), audit_comment: "3: audit modified" , timeline_dot_color:"#ff9800",timeline_icon_class:"icon md-file"}));

    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 1, audit_event: "service enabled", audit_date: new Date("2018-05-01").toDateString(), audit_comment: "1: audit added" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 2, audit_event: "service disabled", audit_date: new Date("2018-05-01").toDateString(), audit_comment: "2: audit removed", timeline_dot_color:"#4caf50",timeline_icon_class:"icon md-image" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 3, audit_event: "service modified", audit_date: new Date("2018-05-01").toDateString(), audit_comment: "3: audit modified" , timeline_dot_color:"#ff9800",timeline_icon_class:"icon md-file"}));

    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 1, audit_event: "service enabled", audit_date: new Date("2018-04-01").toDateString(), audit_comment: "1: audit added" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 2, audit_event: "service disabled", audit_date: new Date("2018-04-01").toDateString(), audit_comment: "2: audit removed", timeline_dot_color:"#4caf50",timeline_icon_class:"icon md-image" }));
    app.Collections.audit_collection.add(new app.Models.AuditModel({ audit_id: 3, audit_event: "service modified", audit_date: new Date("2018-04-01").toDateString(), audit_comment: "3: audit modified" , timeline_dot_color:"#ff9800",timeline_icon_class:"icon md-file"}));



});
