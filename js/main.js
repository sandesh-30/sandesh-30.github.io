$(document).ready(function() {
    // Set initial active tab
    $('.tab').click(function(e) {
        e.preventDefault();
        
        // Remove active class from all tabs
        $('.tab').removeClass('active');
        
        // Add active class to clicked tab
        $(this).addClass('active');
        
        // Load content in iframe
        $('#content-frame').attr('src', $(this).attr('href'));
    });
});