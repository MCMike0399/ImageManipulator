const saveBtn = document.getElementById("save1");
saveBtn.addEventListener('click',function() {
    const {PythonShell} = require('python-shell');
    let pyshell = new PythonShell('script.py');
    pyshell.on('message', function(message) {
    console.log(message);
    })
    pyshell.end(function (err) {
    if (err){
        throw err;
    };
    console.log('finished');
    });
});