using GameLogic.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        [HttpPost]
        public ActionResult<Lobby> CreateSessionPost([FromBody] Boolean IsPrivate, string UserName)
        {
            if (UserName != null)
            {
                return null;
            }

            return Unauthorized();
        }

        public ActionResult JoinSessionGet([FromBody] Object obj)
        {
/*            {
                return null;
            }
*/
            return Unauthorized();
        }
    }
}