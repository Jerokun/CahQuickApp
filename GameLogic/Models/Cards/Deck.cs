﻿using System;
using System.Collections.Generic;
using System.Text;

namespace GameLogic.Models.Cards
{
    public class Deck
    {
        public IEnumerable<BlackCard> BlackCards { get; set; }
        public IEnumerable<WhiteCard> WhiteCards { get; set; }
    }
}
