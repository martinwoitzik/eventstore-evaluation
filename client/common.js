// common js helpers

window.log = function() {
    if(!window.console) return;

    console.log.apply(console, arguments)

    var $console = $('#console')

    // also log to dom console if possible
    if($console.length > 0)
        $('#console').append(arguments[0] + '\n')
}


// AJAX AUTH helper against the ES http api
window.beforeSend = function(xhr) {
    xhr.setRequestHeader("Authorization", "Basic " + window.btoa('admin:changeit'));
}
