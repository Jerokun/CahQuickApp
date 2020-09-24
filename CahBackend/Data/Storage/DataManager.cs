using CahBackend.Models.Deck;
using System;
using System.Collections.Generic;

namespace CahBackend.Data.Storage
{
    public static class DataManager
    {
        public static List<WhiteCard> GetWhiteCards()
        {
            return new List<WhiteCard>()
        {
            new WhiteCard { Text = "one" },
            new WhiteCard { Text = "two" },
        };
        }

        public static List<BlackCard> GetBlackCards()
        {
            return new List<BlackCard>()
        {
            new BlackCard { Pick = 1, Text = "one" },
            new BlackCard { Pick = 1, Text = "two" },
        };
        }
    }
}
