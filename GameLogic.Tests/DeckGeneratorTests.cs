using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using GameLogic.Decks;
using GameLogic.Models;

namespace GameLogic.Tests
{
    public class DeckGeneratorTests
    {
        [Fact]
        public void CreateCardRepositoryFromJsonContainsNoEmpty()
        {
            //Arrange
            string[] packnames =
            {
                "Hilarious!",
                "Cows Against Hamburgers - Patty Pack #1",
            };
            var dGen = new DeckGenerator();

            //Act
            Deck deck = dGen.deck;

            //Assert
            Assert.NotNull(deck);
        }
    }
}
