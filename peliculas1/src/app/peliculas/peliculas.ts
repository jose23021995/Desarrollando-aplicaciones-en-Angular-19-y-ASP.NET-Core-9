export interface peliculaDTO{
    id:number;
    titulo?:string;
    fechaLanzamiento?:Date;
    trailer?:string;
    poster?:string;
}
export interface PeliculaCreacionDTO{
    titulo?:string;
    fechaLanzamiento?:Date;
    trailer?:string;
    poster?:File;
}