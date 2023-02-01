$(document).ready(function(){
    $("#selectsubject").change(function() {
        if ($(this).val() == "talent") {
          $('#talentpickerDiv').show();
          $('#talentpicker').attr('required', '');
          $('#talentpicker').attr('data-error', 'This field is required.');
        } else {
          $('#talentpickerDiv').hide();
          $('#talentpicker').removeAttr('required');
          $('#talentpicker').removeAttr('data-error');
        }
      });
    $("#selectsubject").trigger("change");
 }); 