using System;

namespace GameLogic.Models
{
    public abstract class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}