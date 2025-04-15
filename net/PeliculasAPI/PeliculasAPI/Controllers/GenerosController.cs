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
    public class GenerosController : CustomBaseController
    {

        public IOutputCacheStore OutputCacheStore;
        private readonly ApplicationDbContext context;

        //public IConfiguration Configuration { get; }
        private readonly IMapper mapper;
        private const string cacheTag = "generos";


        public GenerosController(IOutputCacheStore outputCacheStore, ApplicationDbContext context, 
            IMapper mapper):base(context, mapper, outputCacheStore, cacheTag)
        {
            this.OutputCacheStore = outputCacheStore;
            this.context = context;
            this.mapper = mapper;
        }

        

        [HttpGet]
        [OutputCache(Tags = [cacheTag])]
        public async Task<List<GeneroDTO>> Get([FromQuery] PaginacionDTO paginacion)
        {
            /*
            var queryable = context.Generos;
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            return await queryable
                .OrderBy(g => g.Nombre) //ordenar por letra 
                .Paginar(paginacion)
                .ProjectTo<GeneroDTO>(mapper.ConfigurationProvider).ToListAsync();
            */
            return await Get<Genero, GeneroDTO>(paginacion, ordenarPor: g => g.Nombre);

        }
        /*
        [HttpGet("{id:int}", Name = "ObtenerGeneroPorId")] // api/generosd/?
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<GeneroDTO>> Get(int id)
        {
            
            //var genero = await context.Generos
                //.ProjectTo<GeneroDTO>(mapper.ConfigurationProvider)
              //  .FirstOrDefaultAsync(g => g.Id == id);
            //if (genero is null)
            //{
              //  return NotFound();
            //}
            //return genero;
            
            return await Get<Genero,GeneroDTO>(id);
        }
        */
        [HttpGet("{id:int}", Name = "ObtenerGeneroPorId")] // api/generos/500
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<GeneroDTO>> Get(int id)
        {
            return await Get<Genero, GeneroDTO>(id);
        }


        [HttpGet("{nombre}")] // api/generosd/?
        [OutputCache(Tags = [cacheTag])]
        public async Task<Genero?> Get(string nombre)
        {
            /*
            var repositorio =  new ReposotorioEnMemoria();
            var genero = await repositorio.ObtenerPorId(1);
            return genero;
            */
            throw new NotImplementedException();
        }



        [HttpPut("{id:int}")]
        [OutputCache(Tags = [cacheTag])]
        public async Task<IActionResult> Put(int id, [FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
            /*
            var generoExiste = await context.Generos.AnyAsync(g => g.Id == id);
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
            */
            return await Put<GeneroCreacionDTO, Genero>(id, generoCreacionDTO);
        }

        //metodo POST
        /*
        [HttpPost]
        [OutputCache(Tags = [cacheTag])]
        public async Task<IActionResult> Post([FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
            
            //var genero = mapper.Map<Genero>(generoCreacionDTO);
            //context.Add(genero);
            //await context.SaveChangesAsync();
            //await OutputCacheStore.EvictByTagAsync(cacheTag, default);
            //return CreatedAtRoute("ObtenetGeneroPorId", new { id = genero.Id }, genero);
            
            return await Post<GeneroCreacionDTO, Genero, GeneroDTO>(generoCreacionDTO, "ObtenerGeneroPorId");

        }
        */
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
              return await Post<GeneroCreacionDTO, Genero, GeneroDTO>(generoCreacionDTO, "ObtenerGeneroPorId");

        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            /*
            var registrosBorrados = await context.Generos.Where(g => g.Id == id).ExecuteDeleteAsync();
            if (registrosBorrados==0)
            {
                return NotFound();
            }
            await OutputCacheStore.EvictByTagAsync(cacheTag,default);
            return NoContent();
            */
            return await Delete<Genero>(id);

        }
        [HttpGet("todos")] // api/generos/todos
        [OutputCache(Tags = [cacheTag])]
        public async Task<List<GeneroDTO>> Get()
        {
            return await Get<Genero, GeneroDTO>(ordenarPor: g => g.Nombre);
        }

    }
}
