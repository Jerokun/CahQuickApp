using CahBackend.Models.Deck;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models.Deck
{
    public class Cards
    {
        public List<BlackCard> BlackCards { get; set; }
        public List<WhiteCard> WhiteCards { get; set; }
        public HistoryCards HistoryCards { get; set; }
    }
}
