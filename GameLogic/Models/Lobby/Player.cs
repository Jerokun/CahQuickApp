using GameLogic.Models.Cards;
using System;
using System.Collections.Generic;
using System.Text;

namespace GameLogic.Models.Lobby
{
    public class Player : User
    {
        public Boolean IsHost { get; set; }
        public int Score { get; set; }
        public Boolean IsDone { get; set; }
        public Boolean IsLeader { get; set; }
        public IEnumerable<BlackCard> HistoryBlackCards { get; set; }
        public IEnumerable<WhiteCard> HistoryWhiteCards { get; set; }
        public IEnumerable<BlackCard> BlackCards { get; set; }
        public IEnumerable<WhiteCard> WhiteCards { get; set; }
    }
}
