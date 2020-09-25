using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CahBackend.Models.Users
{
    public class User : IdentityUser
    {
        public Guid UserId { get; set; }
        public Player Player { get; set; }
    }
}
