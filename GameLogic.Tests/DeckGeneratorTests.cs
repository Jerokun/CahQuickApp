using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using GameLogic.Decks;

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

            //Act
            Pack deck = DeckGenerator.GetDeck(null);

            //Assert
            Assert.NotNull(deck);
        }
    }
}
