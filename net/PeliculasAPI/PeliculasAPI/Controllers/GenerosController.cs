using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;
using PeliculasAPI.Utilidades;
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
        public async Task<List<GeneroDTO>> Get([FromQuery] PaginacionDTO paginacion)
        {
            var queryable = context.Genero;
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            return await queryable
                .OrderBy(g=>g.Nombre) //ordenar por letra 
                .Paginar(paginacion)
                .ProjectTo<GeneroDTO>(mapper.ConfigurationProvider).ToListAsync();

        }

        [HttpGet("{id:int}", Name = "ObtenetGeneroPorId")] // api/generosd/?
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<GeneroDTO>> Get(int id)
        {
            var genero = await context.Genero
                .ProjectTo<GeneroDTO>(mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(g => g.Id == id);
            if (genero is null)
            {
                return NotFound();
            }
            return genero;
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

        [HttpPost("{id:int}")]
        public async Task<IActionResult> Post([FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
            var genero = mapper.Map<Genero>(generoCreacionDTO);
            context.Add(genero);
            await context.SaveChangesAsync();
            await OutputCacheStore.EvictByTagAsync(cacheTag,default);
            return CreatedAtRoute("ObtenetGeneroPorId", new {id=genero.Id},genero);
        }

        [HttpPut]
        public async Task<IActionResult> Put(int id, [FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
            var generoExiste = await context.Genero.AnyAsync(g=> g.Id==id);
            if (!generoExiste)
            {
                return NotFound();
            }
            var genero = mapper.Map<Genero>(generoCreacionDTO);
            genero.Id = id;
            context.Update(genero);
            await context.SaveChangesAsync();
            await OutputCacheStore.EvictByTagAsync(cacheTag, default);
            return NoContent();
        }

        [HttpDelete]
        public void Delete()
        {
            throw new NotImplementedException();
        }
    }
}
