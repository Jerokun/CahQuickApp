﻿using GameLogic.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace GameLogic.Interfaces
{
    interface IPackRepository<PackRepository>
    {
        public Dictionary<string, Pack> LoadCardCollection();
    }
}
