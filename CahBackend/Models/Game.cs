using CahBackend.Models.Deck;
using CahBackend.Models.Enums;
using CahBackend.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models
{
    public class Game
    {
        public Player User { get; set; }
        public List<Player> Players { get; set; }
        public Cards Cards { get; set; }
        public GameStatesEnum GameState { get; set; }
    }
}
