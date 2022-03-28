const https=require('https');
const PORT=8080;
const axios=require("axios");
const cheerio=require("cheerio");
const express=require("express");
const {response}=require("express");
const app=express();
const url="https://randomtextgenerator.com/";
const cors=require('cors')
let newArticle1
app.use(cors())
axios(url)
    .then(response=>{
        const html=response.data
        const $=cheerio.load(html);
        const articles=[];
        $("#randomtext_box", html).each(function () {
            const title=$(this).text()
            articles.push(
                title
            )
        })
        let articles1=articles.join();
        let y;
        for (let i=0; i < articles1.length; i++) {
            if (articles1[i] == ".") {
                if (articles1[i + 1] == " ") {
                    if (articles1[i + 2] == "\n") {
                        y=i;
                        break;
                    }
                }
            }
        }

        let newArticles=articles1.substring(0, y + 1);
        console.log(newArticles);
        newArticle1=newArticles
    }).catch(err=>console.log(err));
app.get("/data", (req, res)=>{
    return res.json(newArticle1);
})
app.listen(PORT, ()=>console.log(`server runing on ${PORT}`));



