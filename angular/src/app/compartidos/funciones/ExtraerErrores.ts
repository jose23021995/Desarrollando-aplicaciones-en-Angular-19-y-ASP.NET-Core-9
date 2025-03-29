export function exportarErrores(obj:any):string[]{
    const err = obj.error.errors;
    console.log("ERROR",err);
    let mensajeDeError:string[]=[];
    for(let llave in err){
        let campo=llave;
        const mensajesConCampos= err[llave].map((mensaje:string)=> `${campo}: ${mensaje}`);
        mensajeDeError = mensajeDeError.concat(mensajesConCampos);
    }
    return mensajeDeError;
}