const spawm= require('child-process');
const process=spawm('python',['./add.py'])

process.stdout.on('datas', data=>{
    console.log(data.toString());
});