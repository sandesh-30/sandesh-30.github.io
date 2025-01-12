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

    // Disable right-click in production
    if (window.location.hostname !== 'localhost' && 
        window.location.hostname !== '127.0.0.1') {
        document.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    // Disable copy-paste on sensitive elements
    document.querySelectorAll('.sensitive-info').forEach(element => {
        element.addEventListener('copy', (e) => e.preventDefault());
        element.addEventListener('cut', (e) => e.preventDefault());
    });
});