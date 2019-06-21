const  fs = require('fs');
const files = [];
function walk(path){
    fs
        .readdirSync(path)
        .forEach(file => {
            const newPath = path + '/' + file;
            const stat = fs.statSync(newPath);
            // console.log(file,'++++++');
            if(stat.isFile()){
                // 是js文件吗？
                // console.log('isFile');
                if(/\.js$/.test(file)){
                    files.push(file);
                }
            }else if(stat.isDirectory()){
                console.log('isDirectory');
                walk(newPath);
            }
        })

    // fs
    //     .readdir(path,function(error,files){
    //         if(error){
    //             console.log(error);
    //             return;
    //         }
    //         console.log(files);
    //     })
}
walk('./src');
console.log(files,'------');