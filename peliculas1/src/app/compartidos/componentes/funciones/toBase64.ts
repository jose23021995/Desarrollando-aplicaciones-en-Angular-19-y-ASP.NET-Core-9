export function toBase64(file:File):Promise<string>{
    console.log("funcion imagen 1",file);

    return new Promise((resolve,reject)=>{
        const lector = new FileReader();
        lector.readAsDataURL(file);
        lector.onload=() => resolve(lector.result as string);
        lector.onerror = (error)=> reject(error);
    })
}