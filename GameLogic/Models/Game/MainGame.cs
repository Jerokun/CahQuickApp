using GameLogic.Interfaces.Game;
using GameLogic.Models.Cards;
using GameLogic.Models.Lobby;
using System;
using System.Collections.Generic;
using System.Text;

namespace GameLogic.Models.Game
{
    class MainGame : IMainGame<MainGame>
    {
        public GameState GameState { get; set; }
        public Deck Deck { get; set; }
        public Lobby.Lobby Lobby { get; set; }

        public MainGame(Player player)
        {
            if (player is null)
            {
                throw new ArgumentNullException(nameof(player));
            }

            Lobby.Players.Add(player);
            Lobby.SetPartyLeader(player);
        }

        public void StartGame(IEnumerable<Player> players)
        {

        }

    }
}
