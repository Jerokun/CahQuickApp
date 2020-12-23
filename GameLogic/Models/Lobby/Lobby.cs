using System;
using System.Collections.Generic;
using System.Text;

namespace GameLogic.Models
{
    public class Lobby
    {
        public Guid Id { get; set; }
        public IEnumerable<Player> Players { get; set; }
    }
}
