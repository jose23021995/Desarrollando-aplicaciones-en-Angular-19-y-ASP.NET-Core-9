using Microsoft.EntityFrameworkCore;
using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Genero> Generos { get; set; }
        //2 se crea el contexto de bd
        public DbSet<Actor> Actores { get; set; }
        public DbSet<Cine> Cines { get; set; }
        //3 se configura cine como una entidad
        //En terminal para instalar!
        // Add-Migration TablaCines -> Enter
        // Los cambios se adjuntaran a la carpeta Migraciones
        //En terminal para instalar!
        // Update-Database
        // Verenmos reflejado los cambios en SQL server
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PeliculaGenero>().HasKey(e => new { e.GeneroId, e.PeliculaId });
            modelBuilder.Entity<PeliculaCine>().HasKey(e => new { e.CineId, e.PeliculaId });
            modelBuilder.Entity<PeliculaActor>().HasKey(e => new { e.ActorId, e.PeliculaId });
        }
        public DbSet<Pelicula> Peliculas { get; set; }
        public DbSet<PeliculaGenero> PeliculasGeneros { get; set; }
        public DbSet<PeliculaCine> PeliculasCines { get; set; }
        public DbSet<PeliculaActor> PeliculasActores { get; set; }

    }
}
