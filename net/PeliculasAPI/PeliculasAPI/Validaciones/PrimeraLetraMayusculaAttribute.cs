using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.Validaciones
{
    public class PrimeraLetraMayusculaAttribute:ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is null || string.IsNullOrWhiteSpace(value.ToString()))
            {
                return ValidationResult.Success;
            }
            var primeraLetra = value.ToString()![0].ToString();
            if (primeraLetra != primeraLetra.ToString())
            {
                return new ValidationResult("La primer letra debe ser mayuscula");
            }
            return ValidationResult.Success;
        }
    }
}
