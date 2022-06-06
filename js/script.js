feather.replace();
$(function() {
  // city api list call
  $("#stateList").attr("disabled", true);
  $("#cityList").attr("disabled", true);
  stateList();
});

cityList = () => {
    $.get('https://demo7389246.mockable.io/cities/list', function(response){
        if(response.length) {
            response.forEach((city) => {
                $("#cityList").append("<option>"+city.name+"</option>");
            });
            $("#cityList").attr("disabled", false);
        }
    });
}

stateList = () => {
    $.get('https://demo7389246.mockable.io/state/list', function(response){
        if(response.length) {
            response.forEach((state) => {
                $("#stateList").append("<option>"+state.name+"</option>");
            });
            $("#stateList").attr("disabled", false);
            cityList();
        }
    });
}