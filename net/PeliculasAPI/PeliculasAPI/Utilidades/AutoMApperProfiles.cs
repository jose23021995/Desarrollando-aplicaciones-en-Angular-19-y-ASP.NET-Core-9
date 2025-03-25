using AutoMapper;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Utilidades
{
    public class AutoMApperProfiles:Profile
    {
        public AutoMApperProfiles()
        {
            ConfigurarMapeoDeGeneros();
        }
        private void ConfigurarMapeoDeGeneros()
        {
            CreateMap<GeneroCreacionDTO,Genero>();
            CreateMap<Genero, GeneroDTO>();
        }
    }
}
