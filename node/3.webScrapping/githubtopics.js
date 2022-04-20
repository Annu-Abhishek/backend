let url = "https://github.com/topics";

const request = require("request");
const cheerio= require("cheerio");
const fs= require("fs");
const path = require("path");

request(url, cb);

function cb(err,res,body) {
     if(err) {
        console.error("error",err);
     }else{
     handleHTML(body);
  }
}

function handleHTML (html){
    let selecTool = cheerio.load(html);
    let firstTopicLink = selecTool('a[href="/topics/3d"]');
    
    // console.log(firstTopicLink);
    let threeD = path.join(__dirname,"threeD");
    if(!fs.existsSync(threeD)){
        fs.mkdirSync(threeD);
    }
    for(let i=5;i<=12;i++){
        let threeDProjectsArr = selecTool(".d-flex.flex-auto");
            
        
        // threeDProjectsArr[i] = path.join(__dirname,"threeD","");
        // if(!fs.existsSync()){
        //          fs.mkdirSync();
        //       }
    }
    //  let secondTopicLink = selecTool('a[href="/topics/ajax"]');
    //  let ajax = path.join(__dirname,"ajax");
    //  if(!fs.existsSync(ajax)){
    //      fs.mkdirSync(ajax);
    //  }
    // let thirdTopicLink = selecTool('a[href="/topics/algorithm"]');
    // let algorithm = path.join(__dirname,"algorithm")
    // if(!fs.existsSync(algorithm)){
    //     fs.mkdirSync(algorithm);
    // }


}




