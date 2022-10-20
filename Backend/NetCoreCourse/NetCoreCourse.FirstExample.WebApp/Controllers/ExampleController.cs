using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using NetCoreCourse.FirstExample.WebApp.Configuration;

namespace NetCoreCourse.FirstExample.WebApp.Controllers
{
    
    [Route("api/[controller]")] //Este decorador permite que el Middleware UseRouting pueda encontrar este endpoint.
    //Mira! Estamos heredando de ControllerBase
    public class ExampleController : ControllerBase
    {

        private readonly CustomConfigurationOptions configuration;

        public ExampleController(IOptions<CustomConfigurationOptions> options)
        {
            configuration = options?.Value ?? throw new ArgumentNullException("CustomConfigurationOptions was not properly set.");
        }

        [HttpGet]
        public IActionResult Hey()
        {
            return Ok("Hola Dev!.");
        }

        [HttpGet("another")]
        public IActionResult AnotherHey()
        {
            return Ok("Hey Este es otra accion de tu controlador.");
        }
        
        [HttpGet("newsection")]
        public IActionResult NewSection()
        {
            return Ok($"{configuration.StringValue}");
        }
    }
}