using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;

namespace CahBackend.Models.Hubs
{
    public class GameHub : Hub
    {
        public List<Deck.WhiteCard> WhiteCards { get; set; }
        public List<Deck.BlackCard> BlackCards { get; set; }
        public List<Deck.HistoryCards> HistoryCards { get; set; }
        public Enums.GameStatesEnum CurrentGameState { get; set; }
    }
}
