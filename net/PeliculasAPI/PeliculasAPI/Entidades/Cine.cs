//using NetTopologySuite.Geometries;
using System.ComponentModel.DataAnnotations;
using NetTopologySuite.Geometries;
//using System.Drawing;

namespace PeliculasAPI.Entidades
{
    public class Cine : IId
    {
        public int Id { get; set; }
        [Required]
        [StringLength(75)]
        public required string Nombre { get; set; }
        public required Point Ubicacion { get; set; }
        //1 Point -> using NetTopologySuite.Geometries;
        //Microsoft.EntityFrameworkCore.SqlServer.NetTopology
    }
}
