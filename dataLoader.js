
  import fs from "fs";


  // this needs to be an async function, to be changed later
  
  export default function dataLoader(filename){
  
  
      let data = fs.readFileSync(filename)
      data=  JSON.parse(data)
      return ((data))
     
     
  
  };
  
//   export default async function dataLoader(filename) {

//     let g = get_node_global();
    
//     if(g) {
        
//         let fsPromises = await import('fs/promises');
//         return JSON.parse(await fsPromises.readFile(filename));
//     }

//     let w = get_browser_window();
//     if(w) { return await (await fetch(filename)).json(); }

//     throw new Error("Unable to determine node vs browser");
// }

// function get_node_global() {
//     try {
//         return eval("global");
//     } catch {
//         return undefined;
//     }
// }

// function get_browser_window() {
//     try {
//         return eval("window");
//     } catch {
//         return undefined;
//     }
// }
