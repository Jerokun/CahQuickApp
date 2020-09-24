using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models.Users
{
    public class Player
    {
        public Guid ID { get; set; }
        public string PlayerName { get; set; }
        public string Score { get; set; }

        public bool isRoomLeader { get; set; }
        public bool isTsar { get; set; }
        public bool isDone { get; set; }
    }
}
