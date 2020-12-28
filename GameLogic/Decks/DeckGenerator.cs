using System;
using GameLogic.Models;
using System.Collections.Generic;
using System.Text;
using GameLogic.DataConverter;
using System.Threading.Tasks;

namespace GameLogic.Decks
{
    public class DeckGenerator
    {
        public PackRepository _packRepo = new PackRepository();
        public Deck deck;

        public Deck GetDeck(string[] packnames)
        {
            Deck _result = new Deck();
            var collection = _packRepo.Collection;

            foreach (var name in packnames)
            {
                var pack = collection.TryGetValue(name, out Pack value);

                foreach (var bcard in value.BlackCards)
                {
                    _result.BlackCards.Add(bcard);
                }
                foreach (var wcard in value.WhiteCards)
                {
                    _result.WhiteCards.Add(wcard);
                }
            }

            return deck = _result;
        }
    }
}
