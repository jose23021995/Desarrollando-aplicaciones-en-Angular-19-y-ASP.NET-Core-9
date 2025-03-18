using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasAPI.Entidades;
namespace PeliculasAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController: ControllerBase
    {
        private readonly ServicioTransient transient1;
        private readonly ServicioTransient transient2;
        private readonly ServicioScoped scoped1;
        private readonly ServicioScoped scoped2;
        public ServicioSingleton singleton { get; }
        public IOutputCacheStore OutputCacheStore { get; }
        public IConfiguration Configuration { get; }
        private const string cacheTag = "generos";

        public GenerosController(IRepositorio repositorio, 
            ServicioTransient transient1,
            ServicioTransient transient2,
            ServicioScoped scoped1,
            ServicioScoped scoped2,
            ServicioSingleton singleton,
            IOutputCacheStore outputCacheStore,
            IConfiguration configuration)
        {
            this.OutputCacheStore = outputCacheStore;
        }
        
        [HttpGet]
        [OutputCache(Tags = [cacheTag])]
        
        public List<Genero> Get()
        {
            //var repositorio = new ReposotorioEnMemoria();
            var generos = repositorio.ObtenerTodosLosGeneros();
            return generos;
        }

        [HttpGet("{id:int}")] // api/generosd/?
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<Genero>> Get(int id)
        {
            //var repositorio = new ReposotorioEnMemoria();
            var genero = await repositorio.ObtenerPorId(id);
            if (genero is null)
            {
                return NotFound();
            }
            return genero;

        }
        [HttpGet("{nombre}")] // api/generosd/?
        public async Task<Genero?> Get(string nombre)
        {
            var repositorio =  new ReposotorioEnMemoria();
            var genero = await repositorio.ObtenerPorId(1);
            return genero;

        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Genero genero)
        {
            //var repositorio = new ReposotorioEnMemoria();
            var yaExisteUnGeneroConDichoNombre = repositorio.Existe(genero.Nombre);
            if (yaExisteUnGeneroConDichoNombre)
            {
                return BadRequest($"ya existe un genero con el nombre {genero.Nombre}");
            }
            repositorio.Crear(genero);
            await OutputCacheStore.EvictByTagAsync(cacheTag, default);
            return Ok();
        }

        [HttpPut]
        public void Put()
        {


        }

        [HttpDelete]
        public void Delete()
        {


        }
    }
}
