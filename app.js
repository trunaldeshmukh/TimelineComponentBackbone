var app = app || {};
app.Models = app.Models || {};
app.Views = app.Views || {};
app.Collections = app.Collections || {};
app.Variables=app.Variables||{};

$(function () {
  //  audit_model=new app.Models.AuditModel({});
   // audit_view=new app.Views.AuditModelView({model:audit_model});
    //audit_view.render();


    audit_collection_view = new app.Views.AuditCollectionView({ collection: app.Collections.audit_collection });
     $(document.body).append(audit_collection_view.render().el);

     audit_collection_fullview = new app.Views.AuditCollectionFullView({ collection: app.Collections.audit_collection });
     $(document.body).append(audit_collection_fullview.render().el);
});