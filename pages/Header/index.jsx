
  import { useEffect } from 'react';
  import axios from 'axios';
  
  export default function Header() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/b30c892b-c73b-4efd-881e-df7cf3140cdb/DemoTry/Header/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HeaderID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/b30c892b-c73b-4efd-881e-df7cf3140cdb/DemoTry/Header/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HeaderID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/b30c892b-c73b-4efd-881e-df7cf3140cdb/DemoTry/Header/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='HeaderID'>
      </div>
    )
  }