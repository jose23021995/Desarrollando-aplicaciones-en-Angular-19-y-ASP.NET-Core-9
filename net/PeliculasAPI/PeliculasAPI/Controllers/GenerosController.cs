using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
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

        public GenerosController(
            IOutputCacheStore outputCacheStore)
        {
            this.OutputCacheStore = outputCacheStore;
        }

        [HttpGet]
        [OutputCache(Tags = [cacheTag])]
        
        public List<Genero> Get()
        {
            return new List<Genero>() {
                new Genero { Id=1,Nombre="Comedia"},
                new Genero{ Id = 2,Nombre = "porno"},
                new Genero{ Id = 3,Nombre = "cachondes"},
                new Genero{ Id = 3,Nombre = "sexo"},
            };
        }

        [HttpGet("{id:int}")] // api/generosd/?
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<Genero>> Get(int id)
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
        public async Task<IActionResult> Post([FromBody] Genero genero)
        {
            throw new NotImplementedException();

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
