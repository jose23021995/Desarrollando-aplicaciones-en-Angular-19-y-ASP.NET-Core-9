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

        private readonly IRepositorio repositorio;

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
            this.repositorio = repositorio;
            this.transient1 = transient1;
            this.transient2 = transient2;
            this.scoped1 = scoped1;
            this.scoped2 = scoped2;
            this.singleton = singleton;
            this.OutputCacheStore = outputCacheStore;
            this.Configuration = configuration;
        }

        [HttpGet("ejemplo-proveedor-configuracion")]
        public string GetEjemploProveedorConfiguracion()
        {
            return Configuration.GetValue<string>("CadenaDeConexion")!;
        }
        
        [HttpGet("Servicios-ti-mpos-de-vida")]
        public IActionResult GetServicioTiempoDeVida()
        {
            return Ok(new 
            { 
                Transients= new { transient1= transient1.ObtenerId,transient2=transient2.ObtenerId},
                Scopeds = new { scoped1 = scoped1.ObtenerId, scoped2 = scoped2.ObtenerId },
                Singleton= singleton.ObtenerId

            });
        }
        

        [HttpGet]
        [HttpGet("listado")]
        [HttpGet("/listado-generos")]
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
