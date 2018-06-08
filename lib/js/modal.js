$(function(){
    $('#audit_Modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var auditid = button.data('auditid');// Extract info from data-* attributes
        var auditdate = button.data('auditdate');
        var audittype = button.data('audittype');
        var auditcomment = button.data('auditcomment');



        var modal = $(this)
        modal.find('.modal-title').text('Id: ' + auditid + ' Date:' + auditdate);
        modal.find('.modal-body #modal-audit-type').html(audittype);
        modal.find('.modal-body #modal-audit-comment').html(auditcomment);
    });

    $('#audit_FullModal').on('show.bs.modal', function (event) {
        var html=$('<div>').append($('#container_id_full').clone()).html();

        var modal = $(this)
        modal.find('.modal-title').text('Audit Trail');
        modal.find('.modal-body').append('<ul class="timeline timeline-icon">').append(html);
    });

    $('#audit_FullModal').on('hidden.bs.modal', function () {
        $(this).find('.modal-body').html('');
      })


});