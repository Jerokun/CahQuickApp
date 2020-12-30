using System;
using System.Collections.Generic;
using System.Text;

namespace GameLogic.Models
{
    public class Lobby
    {
        public Guid Id { get; set; }
        public IEnumerable<Player> Players { get; set; }
        public IEnumerable<string> PackNames { get; set; }
        public bool IsPrivate { get; set; }

        public Lobby(IEnumerable<Player> players, IEnumerable<string> packNames, bool isPrivate)
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
