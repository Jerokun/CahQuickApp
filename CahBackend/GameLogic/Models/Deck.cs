using CahBackend.Models.Deck;
using Microsoft.Extensions.ObjectPool;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.GameLogic.Models
{


    public class Deck
    {
        public List<CahBackend.Models.Deck.WhiteCard> WhiteCards { get; set; }
        public List<BlackCard> BlackCards { get; set; }

        public void SetupDeck()
        {
            
        }

        public List<WhiteCard> GetWhiteCards()
        {
            return WhiteCards;
        }

        public List<BlackCard> GetBlackCards()
        {
            return BlackCards;
        }


    }
}
