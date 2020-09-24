using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models.Deck
{
    public class HistoryCards
    {
        public Dictionary<int, BlackCard> BlackCards;
        public Dictionary<int, WhiteCard> WhiteCards;
    }
}
