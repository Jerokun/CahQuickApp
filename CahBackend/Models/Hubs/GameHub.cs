using CahBackend.Models.Enums;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models.Hubs
{
    public class GameHub : Hub
    {
        public List<Deck.WhiteCard> WhiteCards { get; set; }
        public List<Deck.BlackCard> BlackCards { get; set; }
        public List<Deck.Cards> HistoryCards { get; set; }
        public GameStatesEnum CurrentGameState { get; set; }
    }
}
