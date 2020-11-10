
// Add your javascript here
$(function(){
 $("#filt").chained("#instrum");
});

$(function(){
 $("#spslit").chained("#spinstrum");
});

$(function(){
 $("#sparm").chained("#spinstrum");
});


$(function()
{
   $('#plotMode').change(function(){
      showHideTextSlider($(this).val());
   });
   var defaultValue = $('#plotMode').val();
   showHideTextSlider(defaultValue);
}
);


$(function()
{
   $('#spplotMode').change(function(){
      showHideSpTextSlider($(this).val());
   });
   var defaultValue = $('#spplotMode').val();
   showHideSpTextSlider(defaultValue);
}
);


var hideSlider = function(id){
   var $slider = $(id).siblings('.slider');
   $slider.hide();
   $(id).hide();
};

var showHideTextSlider = function(plotMode){
   //Show all elements
   $('.slider#imSlider').show();
   $('.constraintTextInput').show();
   //Then Hide the unrequired required inputs
   if (plotMode == 'snrMode') {
      console.log("HERE")
      hideSlider('#snrSlid');
      $('#seeText').hide();
      $('#apeText').hide();
  }
   if (plotMode == 'seeMode') {
      $('#snrText').hide();
      hideSlider('#seeSlid');
      $('#apeText').hide();
  }
   if (plotMode == 'apeMode') {
      $('#snrText').hide();
      $('#seeText').hide();
      hideSlider('#apeSlid');
  }

};


var showHideSpTextSlider = function(plotMode){
   //Show all elements
   $('.slider#spSlider').show();
   $('.spconstraintTextInput').show();
   //Then Hide the unrequired required inputs
   if (plotMode == 'spsnrMode') {
      hideSlider('#spsnrSlid');
      $('#spseeText').hide();
      $('#spapeText').hide();
      $('#spresText').hide();

  }
   if (plotMode == 'spseeMode') {
      $('#spsnrText').hide();
      hideSlider('#spseeSlid');
      $('#spapeText').hide();
      $('#spresText').hide();
  }
   if (plotMode == 'spapeMode') {
      $('#spsnrText').hide();
      $('#spseeText').hide();
      hideSlider('#spapeSlid');
      $('#spresText').hide();
  }

  if (plotMode == 'spresMode') {
     $('#spsnrText').hide();
     $('#spseeText').hide();
     $('#spapeText').hide();
     hideSlider('#spresSlid');
 }


};
