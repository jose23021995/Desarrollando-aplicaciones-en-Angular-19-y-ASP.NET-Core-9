using System.ComponentModel.DataAnnotations;
using PeliculasAPI.Validaciones;

namespace PeliculasAPI.Entidades
{
    public class Genero:IId
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="el campo {0} es requerido")]
        [StringLength(50,ErrorMessage = "El campo {0} debe tener {1} caracteres o más")]
        [PrimeraLetraMayuscula]
        public required string Nombre { get; set; }


    }
}
