using CahBackend.Models.Deck;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models
{
    public class Game
    {
        public ApplicationUser[] Users { get; set; }
        public Cards GameDeck { get;set; }
    }
}
