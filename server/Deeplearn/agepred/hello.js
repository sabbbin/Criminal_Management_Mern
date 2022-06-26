

const PythonShell = require('python-shell').PythonShell;
let options={
    scriptPath:'C:/Users/sabin/OneDrive/Desktop/New folder (3)/',
    args:['17.jpg']
}

PythonShell.run('hello.py',options, function (err,res) {
  if (err) throw err;
  console.log('finished');
  if (res) {
      console.log(res)
  }
});

