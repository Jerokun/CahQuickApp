using CahBackend.Models.Deck;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models.Deck
{
    public class GameDeck
    {
        public BlackCard[] BlackCards { get; set; }
        public WhiteCard[] WhiteCards { get; set; }
    }
}
