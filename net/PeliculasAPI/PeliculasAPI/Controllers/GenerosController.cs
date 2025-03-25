using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;
using static System.Runtime.InteropServices.JavaScript.JSType;
namespace PeliculasAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController: ControllerBase
    {
        
        public IOutputCacheStore OutputCacheStore { get; }
        public IConfiguration Configuration { get; }
        private const string cacheTag = "generos";
        private readonly AplicationDbContext context;
        private readonly IMapper mapper;

        public GenerosController(IOutputCacheStore outputCacheStore, AplicationDbContext context,IMapper mapper)
        {
            this.OutputCacheStore = outputCacheStore;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        [OutputCache(Tags = [cacheTag])]
        public async Task<List<GeneroDTO>> Get()
        {
            var generos = await context.Genero.ToListAsync();
            var generosDTOs = mapper.Map<List<GeneroDTO>>(generos);
            return generosDTOs;

        }

        [HttpGet("{id:int}", Name = "ObtenetGeneroPorId")] // api/generosd/?
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<GeneroDTO>> Get(int id)
        {
            throw new NotImplementedException();

        }
        
        [HttpGet("{nombre}")] // api/generosd/?
        public async Task<Genero?> Get(string nombre)
        {
            /*
            var repositorio =  new ReposotorioEnMemoria();
            var genero = await repositorio.ObtenerPorId(1);
            return genero;
            */
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
            var genero = mapper.Map<Genero>(generoCreacionDTO);
            context.Add(genero);
            await context.SaveChangesAsync();
            return CreatedAtRoute("ObtenetGeneroPorId", new {id=genero.Id},genero);
        }

        [HttpPut]
        public void Put()
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public void Delete()
        {
            throw new NotImplementedException();
        }
    }
}
