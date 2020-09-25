using CahBackend.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.GameLogic
{
    public class Game
    {
        new Dictionary<Guid, Player> Players;
        new Models.Deck Deck;
    }
}
