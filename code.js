<script src="//code.jquery.com/jquery.min.js"></script>
<script>
$.get("navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
</script>