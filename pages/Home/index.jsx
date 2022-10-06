
  import { useEffect } from 'react';
  import axios from 'axios';
  import Header from "../Header/index";
  import Footer from "../Footer/index";
  import Script from 'next/script';
  
  export default function Home() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/b30c892b-c73b-4efd-881e-df7cf3140cdb/DemoTry/Home/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HomeID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/b30c892b-c73b-4efd-881e-df7cf3140cdb/DemoTry/Home/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HomeID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/b30c892b-c73b-4efd-881e-df7cf3140cdb/DemoTry/Home/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div>
        <>
          <Header />
        </>
        
        <div id='HomeID'></div>

        <>
          <Footer />
        </>
        <Script src="https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/scripts/FormScripts/formScript.js" />
      </div>
    )
  }