using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CahBackend.Data.Storage;
using CahBackend.Models.Hubs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace CahBackend.Controllers
{
    [Authorize]
    [AllowAnonymous]
    [ApiController]
    [Route("gamehub")]
    public class GameHubController : ControllerBase
    {
        private IHubContext<GameHub> _hub;
        public GameHubController(IHubContext<GameHub> hub)
        {
            _hub = hub;
        }
        public IActionResult Get()
        {
            var timerManager = new GameLogic.TimerManager(() => _hub.Clients.All.SendAsync("transferchartdata", DataManager.GetWhiteCards()));
            return Ok(new { Message = "Request Completed" });
        }
    }
}
