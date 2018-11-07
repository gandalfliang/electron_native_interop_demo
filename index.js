const {app,BrowserWindow}=require('electron')
const ffi = require('ffi')

function createWindow(){
    win =new BrowserWindow({width:800,height:600})
    win.loadFile('index.html')
}

app.on('ready',createWindow)

var nativelib=ffi.Library('Electron_native',{
    'add':['int',['int','int']],
    'setCallback':['bool',['pointer']],
    'fireCallback':['void',['int','int']]
});

var callback=ffi.Callback('void',['int','int'],
function(a,b){
    console.log("callback result:",a);
});

var result=nativelib.setCallback(callback);
console.log('set callback result:',result);

nativelib.fireCallback(666,555);

var sum=nativelib.add(100,1)
console.log(sum)

process.on('exit',function(){
    callback
});

