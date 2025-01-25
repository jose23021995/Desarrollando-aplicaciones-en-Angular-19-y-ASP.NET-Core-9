import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula():ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null=>{
        const valor= <string> control.value;
        if (!valor) return null;
        if (valor.length ===0) return null;
        const primerletra =valor[0];
        if (primerletra !== primerletra.toUpperCase()) {
            return {
                primeraLetraMayuscula:{
                    mensaje: "La primer letra debe ser mayuscula"
                }
            }
        }
        return null;
    }
}