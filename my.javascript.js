$(document).ready(function(){
	$("#example-basic").steps({
		headerTag: "h3",
		bodyTag: "section",		
		autoFocus: true,
		onFinishing: function (event, currentIndex)
        {
            var form = $(this);
			
			alert("Finisg");

            // Disable validation on fields that are disabled.
            // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
            //form.validate().settings.ignore = ":disabled";

            // Start validation; Prevent form submission if false
            //return form.valid();
        }
		
	});
	
	
//var $items = $("#group").children("div"),
var index = 0;




function updateItems(delta) {
	
	var $items = $("#group").children("div");

    $items.eq(index).removeClass("current").hide();
	
	index += delta;
	
    index = (index < 0) ? 0 : ((index > $items.length) ? $items.length : index);
    $items.eq(index).addClass("current").show();

    //$("#next").toggle(index !== $items.length - 1);
    //$("#prev").toggle(index !== 0);
	
	index == $items.length - 1 ? $("#next").prop( "disabled",true) : $("#next").prop( "disabled",false);
	index == 0 ? $("#prev").prop( "disabled",true) : $("#prev").prop( "disabled",false);
	index == $items.length - 1 ? $("#finish").prop( "disabled",false) : $("#finish").prop( "disabled",true);
	

}

$("#next").click(function () {
    updateItems(1);
});

$("#prev").click(function () {
    updateItems(-1);
});

updateItems(0);
})