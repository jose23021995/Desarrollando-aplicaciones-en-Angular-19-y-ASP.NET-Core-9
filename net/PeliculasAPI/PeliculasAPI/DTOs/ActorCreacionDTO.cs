using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
//4 se genera el dto
namespace PeliculasAPI.DTOs
{
    public class ActorCreacionDTO
    {
        [Required]
        [StringLength(150)]
        public required string Nombre { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public IFormFile? Foto { get; set; }
    }
}
