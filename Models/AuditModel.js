
$(function(){
    app.Models.AuditModel = Backbone.Model.extend({
        defaults: {
            audit_id: 0, audit_event: "service enabled", audit_date: new Date().toDateString(), audit_description: "audit comment",audit_user:"audit user",
            timeline_dot_color:"#3f51b5", timeline_icon_class:"",timeline_class:"",
        },
        initialize: function(item){
            this.setTimelineClass();
        },
        setTimelineClass:function(){
            var current_timeline_class="";
            if(app.Variables.prev_timeline_class==="timeline-reverse")
            {
                current_timeline_class="";
            }
            else{
                current_timeline_class="timeline-reverse";
            }
            this.set("timeline_class",current_timeline_class);
            app.Variables.prev_timeline_class=current_timeline_class;  
        }
    });
});