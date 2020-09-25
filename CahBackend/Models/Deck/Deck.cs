using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models.Deck
{
    public class Deck
    {
        public List<WhiteCard> WhiteCards { get; set; }
        public List<BlackCard> BlackCards { get; set; }
    }
}
