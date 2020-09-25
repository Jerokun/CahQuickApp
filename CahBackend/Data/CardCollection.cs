﻿// <auto-generated />
//
// To parse this JSON data, add NuGet 'Newtonsoft.Json' then do:
//
//    using CardCollection;
//
//    var cardCollection = CardCollection.FromJson(jsonString);

namespace CahBackend.Data
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;
    using System;
    using System.Globalization;

    public partial class CardCollection
    {
        [JsonProperty("blackCards")]
        public BlackCard[] BlackCards { get; set; }

        [JsonProperty("whiteCards")]
        public string[] WhiteCards { get; set; }

        [JsonProperty("Base")]
        public Base Base { get; set; }

        [JsonProperty("CAHe1")]
        public Base CaHe1 { get; set; }

        /// <summary>
        /// Gets or sets the CaHe2.
        /// </summary>
        [JsonProperty("CAHe2")]
        public Base CaHe2 { get; set; }

        /// <summary>
        /// Gets or sets the CaHe3.
        /// </summary>
        [JsonProperty("CAHe3")]
        public Base CaHe3 { get; set; }

        /// <summary>
        /// Gets or sets the CaHe4.
        /// </summary>
        [JsonProperty("CAHe4")]
        public Base CaHe4 { get; set; }

        /// <summary>
        /// Gets or sets the CaHe5.
        /// </summary>
        [JsonProperty("CAHe5")]
        public Base CaHe5 { get; set; }

        /// <summary>
        /// Gets or sets the CaHe6.
        /// </summary>
        [JsonProperty("CAHe6")]
        public Base CaHe6 { get; set; }

        /// <summary>
        /// Gets or sets the Greenbox.
        /// </summary>
        [JsonProperty("greenbox")]
        public Base Greenbox { get; set; }

        /// <summary>
        /// Gets or sets the The90S.
        /// </summary>
        [JsonProperty("The90s")]
        public Base The90S { get; set; }

        /// <summary>
        /// Gets or sets the Box.
        /// </summary>
        [JsonProperty("Box")]
        public Base Box { get; set; }

        /// <summary>
        /// Gets or sets the Fantasy.
        /// </summary>
        [JsonProperty("fantasy")]
        public Base Fantasy { get; set; }

        /// <summary>
        /// Gets or sets the Food.
        /// </summary>
        [JsonProperty("food")]
        public Base Food { get; set; }

        /// <summary>
        /// Gets or sets the Science.
        /// </summary>
        [JsonProperty("science")]
        public Base Science { get; set; }

        /// <summary>
        /// Gets or sets the Www.
        /// </summary>
        [JsonProperty("www")]
        public Base Www { get; set; }

        /// <summary>
        /// Gets or sets the Hillary.
        /// </summary>
        [JsonProperty("hillary")]
        public Base Hillary { get; set; }

        /// <summary>
        /// Gets or sets the Trumpvote.
        /// </summary>
        [JsonProperty("trumpvote")]
        public Base Trumpvote { get; set; }

        /// <summary>
        /// Gets or sets the Trumpbag.
        /// </summary>
        [JsonProperty("trumpbag")]
        public Base Trumpbag { get; set; }

        /// <summary>
        /// Gets or sets the Xmas2012.
        /// </summary>
        [JsonProperty("xmas2012")]
        public Base Xmas2012 { get; set; }

        /// <summary>
        /// Gets or sets the Xmas2013.
        /// </summary>
        [JsonProperty("xmas2013")]
        public Base Xmas2013 { get; set; }

        /// <summary>
        /// Gets or sets the Paxe2013.
        /// </summary>
        [JsonProperty("PAXE2013")]
        public Base Paxe2013 { get; set; }

        /// <summary>
        /// Gets or sets the Paxp2013.
        /// </summary>
        [JsonProperty("PAXP2013")]
        public Base Paxp2013 { get; set; }

        /// <summary>
        /// Gets or sets the Paxe2014.
        /// </summary>
        [JsonProperty("PAXE2014")]
        public Base Paxe2014 { get; set; }

        /// <summary>
        /// Gets or sets the Paxep2014.
        /// </summary>
        [JsonProperty("PAXEP2014")]
        public Base Paxep2014 { get; set; }

        /// <summary>
        /// Gets or sets the Paxpp2014.
        /// </summary>
        [JsonProperty("PAXPP2014")]
        public Base Paxpp2014 { get; set; }

        /// <summary>
        /// Gets or sets the Pax2015.
        /// </summary>
        [JsonProperty("PAX2015")]
        public Base Pax2015 { get; set; }

        /// <summary>
        /// Gets or sets the Hocah.
        /// </summary>
        [JsonProperty("HOCAH")]
        public Base Hocah { get; set; }

        /// <summary>
        /// Gets or sets the Reject.
        /// </summary>
        [JsonProperty("reject")]
        public Base Reject { get; set; }

        /// <summary>
        /// Gets or sets the Reject2.
        /// </summary>
        [JsonProperty("reject2")]
        public Base Reject2 { get; set; }

        /// <summary>
        /// Gets or sets the Canadian.
        /// </summary>
        [JsonProperty("Canadian")]
        public Base Canadian { get; set; }

        /// <summary>
        /// Gets or sets the Misprint.
        /// </summary>
        [JsonProperty("misprint")]
        public Base Misprint { get; set; }

        /// <summary>
        /// Gets or sets the Order.
        /// </summary>
        [JsonProperty("order")]
        public string[] Order { get; set; }
    }

    /// <summary>
    /// Defines the <see cref="Base" />.
    /// </summary>
    public partial class Base
    {
        /// <summary>
        /// Gets or sets the Name.
        /// </summary>
        [JsonProperty("name")]
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the Black.
        /// </summary>
        [JsonProperty("black")]
        public int[] Black { get; set; }

        /// <summary>
        /// Gets or sets the White.
        /// </summary>
        [JsonProperty("white")]
        public int[] White { get; set; }

        /// <summary>
        /// Gets or sets the Icon.
        /// </summary>
        [JsonProperty("icon", NullValueHandling = NullValueHandling.Ignore)]
        public Icon? Icon { get; set; }
    }

    /// <summary>
    /// Defines the <see cref="BlackCard" />.
    /// </summary>
    public partial class BlackCard
    {
        /// <summary>
        /// Gets or sets the Text.
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// Gets or sets the Pick.
        /// </summary>
        [JsonProperty("pick")]
        public int Pick { get; set; }
    }

    /// <summary>
    /// Defines the <see cref="Icon" />.
    /// </summary>
    public partial struct Icon
    {
        /// <summary>
        /// Defines the Integer.
        /// </summary>
        public int? Integer;

        /// <summary>
        /// Defines the String.
        /// </summary>
        public string String;


        public static implicit operator Icon(int Integer) => new Icon { Integer = Integer };
        public static implicit operator Icon(string String) => new Icon { String = String };
    }

    /// <summary>
    /// Defines the <see cref="CardCollection" />.
    /// </summary>
    public partial class CardCollection
    {
        /// <summary>
        /// The FromJson.
        /// </summary>
        /// <param name="json">The json<see cref="string"/>.</param>
        /// <returns>The <see cref="CardCollection"/>.</returns>
        public static CardCollection FromJson(string json) => JsonConvert.DeserializeObject<CardCollection>(json, Converter.Settings);
    }

    /// <summary>
    /// Defines the <see cref="Serialize" />.
    /// </summary>
    public static class Serialize
    {
        /// <summary>
        /// The ToJson.
        /// </summary>
        /// <param name="self">The self<see cref="CardCollection"/>.</param>
        /// <returns>The <see cref="string"/>.</returns>
        public static string ToJson(this CardCollection self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }

    /// <summary>
    /// Defines the <see cref="Converter" />.
    /// </summary>
    internal static class Converter
    {
        /// <summary>
        /// Defines the Settings.
        /// </summary>
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters =
            {
                IconConverter.Singleton,
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }

    /// <summary>
    /// Defines the <see cref="IconConverter" />.
    /// </summary>
    internal class IconConverter : JsonConverter
    {
        /// <summary>
        /// The CanConvert.
        /// </summary>
        /// <param name="t">The t<see cref="Type"/>.</param>
        /// <returns>The <see cref="bool"/>.</returns>
        public override bool CanConvert(Type t) => t == typeof(Icon) || t == typeof(Icon?);

        /// <summary>
        /// The ReadJson.
        /// </summary>
        /// <param name="reader">The reader<see cref="JsonReader"/>.</param>
        /// <param name="t">The t<see cref="Type"/>.</param>
        /// <param name="existingValue">The existingValue<see cref="object"/>.</param>
        /// <param name="serializer">The serializer<see cref="JsonSerializer"/>.</param>
        /// <returns>The <see cref="object"/>.</returns>
        public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
        {
            switch (reader.TokenType)
            {
                case JsonToken.Integer:
                    var integerValue = serializer.Deserialize<int>(reader);
                    return new Icon { Integer = integerValue };
                case JsonToken.String:
                case JsonToken.Date:
                    var stringValue = serializer.Deserialize<string>(reader);
                    return new Icon { String = stringValue };
            }
            throw new Exception("Cannot unmarshal type Icon");
        }

        /// <summary>
        /// The WriteJson.
        /// </summary>
        /// <param name="writer">The writer<see cref="JsonWriter"/>.</param>
        /// <param name="untypedValue">The untypedValue<see cref="object"/>.</param>
        /// <param name="serializer">The serializer<see cref="JsonSerializer"/>.</param>
        public override void WriteJson(JsonWriter writer, object untypedValue, JsonSerializer serializer)
        {
            var value = (Icon)untypedValue;
            if (value.Integer != null)
            {
                serializer.Serialize(writer, value.Integer.Value);
                return;
            }
            if (value.String != null)
            {
                serializer.Serialize(writer, value.String);
                return;
            }
            throw new Exception("Cannot marshal type Icon");
        }

        /// <summary>
        /// Defines the Singleton.
        /// </summary>
        public static readonly IconConverter Singleton = new IconConverter();
    }
}
