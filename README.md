#electron_native_interop_demo
## install  
`https://github.com/nodejs/node-gyp#installation` is needed for ffi and ref rebuild, if you are using windows , you need to install the required tools as well. 


## bootstrap
```javascript
npm install

mkdir  native/build

cd native/build

cmake ../ -G "Visual Studio 15 2017 Win64"

cmake --build .

```