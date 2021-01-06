using GameLogic.Models.Game;
using System;
using System.Collections.Generic;
using System.Text;

namespace GameLogic.Models.Lobby
{
    public class Lobby
    {
        public Guid Id { get; set; }
        public List<Player> Players { get; set; }
        public IEnumerable<string> PackNames { get; set; }
        public bool IsPrivate { get; set; }

        public Lobby(List<Player> players, IEnumerable<string> packNames, bool isPrivate)
        {
            Id = Guid.NewGuid();
            Players = players;
            PackNames = packNames;
            IsPrivate = isPrivate;
        }

        public IEnumerable<Player> AddPlayer(IEnumerable<Player> players, Player player)
        {
            throw new NotImplementedException("");
        }

        public IEnumerable<Player> RemovePlayer(IEnumerable<Player> players, Player player)
        {
            throw new NotImplementedException("");
        }
    }
}
