const { MongoClient } = require('mongodb');

const musicDB = [{
    id: 0,
    name: "Shakedown",
    author_name: "Clarx",
    img: "shakedown.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "electronic",
    musicName: "Clarx - Shakedown [NCS Release].mp3",
    attribution: {
      song: "Clarx - Shakedown [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "http://ncs.io/Shakedown",
      stream: "http://youtu.be/qJT0mc3q6Lg",
    },
  },
  {
    id: 1,
    name: "Games Worldbeat",
    author_name: "Bernardo R.",
    img: "notAvailable.jpg",
    lang: null,
    timesPlayed: 0,
    type: "instrumental",
    musicName: "mixkit-games-worldbeat-466.mp3",
    attribution: {
      song: "Games Worldbeat",
      musicBy: "mixkit",
      download: null,
      stream: null,
    },
  },
  {
    id: 2,
    name: "OverMyHead",
    author_name: " ROY KNOX",
    img: "over-my-head-1602154826-mOiKzOJDe6.jpg",
    lang: "ENGLISH",
    type: "electronic",
    timesPlayed: 0,
    musicName: "ROY KNOX -  Over My Head (Feat. Mike Robert) [NCS Release].mp3",
    attribution: {
      song: "ROY KNOX - Over My Head (Feat. Mike Robert) [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "http://ncs.io/OverMyHead",
      stream: null,
    },
  },
  {
    id: 3,
    name: "Want You (feat. Sara Skinner)",
    author_name: "Subtact, Sara Skinner",
    img: "want-you-feat-sara-skinner-1586956276-s4lOrfrHQj.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "electronic",
    musicName: "Subtact - Want You (feat. Sara Skinner) [NCS Release].mp3",
    attribution: {
      song: "Subtact - Want You (feat. Sara Skinner) [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "http://ncs.io/WantYou",
      stream: "http://youtu.be/Pww31vN_1QY",
    },
  },
  {
    id: 4,
    name: "Apocalypse",
    author_name: "Midranger",
    img: "apocalypse-1600776027-tsCmgK4gEU.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "electronic",
    musicName: "Midranger - Apocalypse [NCS Release].mp3",
    attribution: {
      song: "Midranger - Apocalypse [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "http://ncs.io/Apocalypse",
      stream: "http://youtu.be/Whw1sWDpAvE",
    },
  },
  {
    id: 5,
    name: "Alive",
    author_name: "Neoni, N3WPORT",
    img: "alive.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "electronic",
    musicName: "N3WPORT - Alive (feat. Neoni) [NCS Release].mp3",
    attribution: {
      song: "N3WPORT - Alive (feat. Neoni) [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "http://ncs.io/NAlive",
      stream: "http://youtu.be/vJAcXd_UtWQ",
    },
  },
  {
    id: 6,
    name: "Impact Moderato",
    author_name: "Kevin MacLeod",
    img: "notAvailable.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "instrumental",
    musicName: "impact.mp3",
    attribution: {
      song: "Impact Moderato",
      musicBy: "Kevin MacLeod",
      download: null,
      stream: null,
    },
  },
  {
    id: 7,
    name: "Impact Moderato 2",
    author_name: "Kevin MacLeod",
    img: "notAvailable.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "instrumental",
    musicName: "impact2.mp3",
    attribution: {
      song: "Impact Moderato",
      musicBy: "Kevin MacLeod",
      download: null,
      stream: null,
    },
  },
  {
    id: 8,
    name: "Ignite",
    author_name: "Tom wilson, Heuse",
    img: "ignite-1600419626-nHn4WXY79q.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "electronic",
    musicName: "Heuse & Tom Wilson - Ignite [NCS Release].mp3",
    attribution: {
      song: "Heuse & Tom Wilson - Ignite [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "http://ncs.io/Ignite",
      stream: "http://youtu.be/zbqgv0mMfwk",
    },
  },
  {
    id: 9,
    name: "Baby Sweet",
    author_name: "Tom wilson, Heuse",
    img: "Babysweet.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "electronic",
    musicName: "intouch - Baby Sweet [NCS Release].mp3",
    attribution: {
      Song: "intouch - Baby Sweet [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "https://ncs.io/babysweet",
      stream: "http://ncs.lnk.to/babysweetAT/youtube",
    },
  },
  {
    id: 10,
    name: "Devil",
    author_name: "Diamond Eyes",
    img: "Devil.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "instrumental",
    musicName: "Diamond Eyes – Devil [NCS Release].mp3",
    attribution: {
      Song: "Diamond Eyes – Devil [NCS Release]",
      musicBy: "NoCopyrightSounds",
      download: "http://ncs.io/de-devil",
      stream: "http://ncs.lnk.to/de-devilAT/youtube",
    },
  },
  {
    id: 11,
    name: "Ranjithame",
    author_name: "Anurag Kulkarni , M M Manasi",
    img: "Ranjithame.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "electronic",
    musicName: "Ranjithame.mp3",
    attribution: {
      Song: "Ranjithame",
      musicBy: "Thaman S",
      download: "http://ncs.io/ranjithame",
      stream: "https://www.youtube.com/watch?v=0HF2ApR1hpI",
    },
  },
  {
    id: 12,
    name: "Naa Roja Nuvve (Khusi)",
    author_name: "Hesham Abdul Wahab",
    img: "kushi.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "romantic",
    musicName: "Na Roja Nuvve.mp4",
    attribution: {
      Song: "Naa Roja Nuvve",
      musicBy: "Hesham Abdul Wahab",
      download: "http://ncs.io/khusi",
      stream: "https://youtu.be/0n7AWxYCj9I?si=rKzrZP884rBb8P7v",
    },
  },
  {
    id: 13,
    name: "Nijame Ne Chebutunna",
    author_name: "Sid Sriram",
    img: "Nijame Ne Chebutunna.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "romantic",
    musicName: "Nijame Ne Chebutunna.mp3",
    attribution: {
      Song: "Nijame Ne Chebutunna",
      musicBy: "Shekar Chandra",
      download: "http://ncs.io/khusi",
      stream: "https://youtu.be/0n7AWxYCj9I?si=rKzrZP884rBb8P7v",
    },
  },
  {
    id: 14,
    name: "O Rendu Prema Meghaalila",
    author_name: "Vijay Bulganin, Sreerama Chandra",
    img: "O Rendu Prema Meghaalila.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "romantic",
    musicName: "O Rendu Prema Meghaalila.mp3",
    attribution: {
      Song: "O Rendu Prema Meghaalila",
      musicBy: "Vijay Bulganin",
      download: "http://ncs.io/khusi",
      stream: "https://youtu.be/0n7AWxYCj9I?si=rKzrZP884rBb8P7v",
    },
  },
  {
    id: 15,
    name: "Cock of the Walk – Part 1",
    author_name:
      "Alex Beckett, Becci Gemmell, Dominic Stephens, James Kermack, Matthew Bartlett, Mike Shepherd",
    img: "cock partone.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "entertainment",
    musicName: "COTW-Ep1.mp3",
    attribution: {
      Song: "Cock of the Walk – Part 1",
      musicBy: "Tony Stephens",
      download: "http://ncs.io/khusi",
      stream: "https://youtu.be/0n7AWxYCj9I?si=rKzrZP884rBb8P7v",
    },
  },
  {
    id: 16,
    name: "Cock of the Walk – Part 2",
    author_name:
      "Alex Beckett, Becci Gemmell, Dominic Stephens, James Kermack, Matthew Bartlett, Mike Shepherd",
    img: "cock parttwo.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "entertainment",
    musicName: "COTW-Ep2.mp3",
    attribution: {
      Song: "Cock of the Walk – Part 2",
      musicBy: "Tony Stephens",
      download: "http://ncs.io/khusi",
      stream: "https://youtu.be/0n7AWxYCj9I?si=rKzrZP884rBb8P7v",
    },
  },
  {
    id: 17,
    name: "Cock of the Walk – Part 3",
    author_name:
      "Alex Beckett, Becci Gemmell, Dominic Stephens, James Kermack, Matthew Bartlett, Mike Shepherd",
    img: "cock partthree.png",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "entertainment",
    musicName: "COTW-Ep3.mp3",
    attribution: {
      Song: "Cock of the Walk – Part 3",
      musicBy: "Tony Stephens",
      download: "http://ncs.io/khusi",
      stream: "https://youtu.be/0n7AWxYCj9I?si=rKzrZP884rBb8P7v",
    },
  },
  {
    id: 19,
    name: "Cock of the Walk – Part 4",
    author_name:
      "Alex Beckett, Becci Gemmell, Dominic Stephens, James Kermack, Matthew Bartlett, Mike Shepherd",
    img: "cock partfour.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "entertainment",
    musicName: "COTW-Ep4.mp3",
    attribution: {
      Song: "Cock of the Walk – Part 4",
      musicBy: "Tony Stephens",
      download: "http://ncs.io/khusi",
      stream: "https://youtu.be/0n7AWxYCj9I?si=rKzrZP884rBb8P7v",
    },
  },
  {
    id: 20,
    name: "Science and the Sea",
    author_name: "A Williwaw.",
    img: "science.png",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "educational",
    musicName: "science.mp3",
    attribution: {
      Song: "Cock of the Walk – Part 4",
      musicBy: " Williwaw.",
      download: "http://ncs.io/khusi",
      stream: "https://youtu.be/0n7AWxYCj9I?si=rKzrZP884rBb8P7v",
    },
  },
  {
    id: 21,
    name: "Vana Vana Vallappa ",
    author_name: "Stories Podcast",
    img: "vana.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "children",
    musicName: "vana.mp3",
  },
  {
    id: 22,
    name: "Always Invite Goblins",
    author_name: "Stories Podcast",
    img: "stories.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "children",
    musicName: "Goblin Party Crashers.mp3",
  },
  {
    id: 23,
    name: "Reward Of Honesty",
    author_name: "Tamil Moral Stories",
    img: "reward.jpg",
    lang: "TAMIL",
    timesPlayed: 0,
    type: "children",
    musicName: "Reward Of Honesty.mp3",
  },
  {
    id: 24,
    name: "King of the Frogs",
    author_name: "Stories Podcast",
    img: "stories.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "children",
    musicName: "KingOfFrogs.mp3",
  },
  {
    id: 25,
    name: "Rabbit and Tortoise Story",
    author_name: "Panchatantra Kathalu",
    img: "rabbit.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "children",
    musicName: "Rabbit and Tortoise Story.mp3",
  },
  {
    id: 26,
    name: "Phoenix Feathers",
    author_name: "Stories Podcast",
    img: "stories.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "children",
    musicName: "PhoenixFinal.mp3",
  },
  {
    id: 27,
    name: "The Mouse Tower",
    author_name: "Stories Podcast",
    img: "stories.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "children",
    musicName: "MouseTower.mp3",
  },
  {
    id: 28,
    name: "మాయా బంగారు మెట్లు అడవి రాజు సింహం తెలుగు కథ",
    author_name: " Telugu Kathalu",
    img: "lion.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "children",
    musicName: "lion.mp3",
  },
  {
    id: 29,
    name: "The Belly Of The Beast",
    author_name: "Stories Podcast",
    img: "stories.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "children",
    musicName: "BellyoftheBeast.mp3",
  },
  {
    id: 30,
    name: "బంగారు గొడ్డలి ",
    author_name: "Panchatantra Kathalu",
    img: "bangarugoddali.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "children",
    musicName: "bangarugoddali.mp3",
  },
  {
    id: 31,
    name: "The Mouse Tower",
    author_name: "Stories Podcast",
    img: "stories.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "children",
    musicName: "science.mp3",
  },
  {
    id: 32,
    name: "Golden Axe",
    author_name: "Tamil Moral Stories",
    img: "goldenaxe.jpg",
    lang: "TAMIL",
    timesPlayed: 0,
    type: "children",
    musicName: "goldenaxe.mp3",
  },
  {
    id: 33,
    name: "How to Enhance Performance & Learning by Applying a Growth Mindset",
    author_name: "Huberman Lab",
    img: "growth.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "educational",
    musicName:
      "How to Enhance Performance & Learning by Applying a Growth Mindset _ Huberman Lab Podcast.mp3",
  },
  {
    id: 34,
    name: "Are you following your dreams",
    author_name: "BBC English",
    img: "areyou.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "educational",
    musicName: "Are you following your dreams.mp3",
  },
  {
    id: 35,
    name: "MAHABHARAT",
    author_name: "Vyasa",
    img: "maha.png",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "educational",
    musicName: "Mahabharat.mp3",
  },
  {
    id: 36,
    name: "How A 23 Year Old Introvert Built A $31 Billion Business!",
    author_name: "Spotify Founder",
    img: "spotify.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "business",
    musicName: "Spotify Founder.mp3",
  },
  {
    id: 37,
    name: "How to Sell Anything to Anyone",
    author_name: "Jordan Peterson",
    img: "jordan.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "business",
    musicName: "Jordan Peterson Reveals How to Sell Anything to Anyone.mp3",
  },
  {
    id: 38,
    name: "Become a Master of Finance",
    author_name: "Professor Mihir Desai",
    img: "Professor Mihir Desai.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "business",
    musicName:
      "Become a Master of Finance with Harvard Professor Mihir Desai.mp3",
  },
  {
    id: 39,
    name: "Sundar Pichai, CEO of Google and Alphabet",
    author_name: "Sundar Pichai, CEO of Google and Alphabet ",
    img: "sundar.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "business",
    musicName: "Sundar Pichai.mp3",
  },
  {
    id: 40,
    name: "Ramayan",
    author_name: "Valmiki",
    img: "ramayan.jpg",
    lang: "TELUGU",
    timesPlayed: 0,
    type: "educational",
    musicName: "Mahabharat.mp3",
  },
  {
    id: 41,
    name: "Grand Theft Auto",
    author_name: "",
    img: "gta.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "games",
    musicName: "gta.mp3",
  },
  {
    id: 42,
    name: "Game Scoop!",
    author_name: "",
    img: "gamesscoop.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "games",
    musicName: "gta.mp3",
  },
  {
    id: 43,
    name: "PUCL: A Pokemon Podcast",
    author_name: "",
    img: "pucl.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "games",
    musicName: "gta.mp3",
  },
  {
    id: 44,
    name: "Jimquisition",
    author_name: "",
    img: "jim.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "games",
    musicName: "gta.mp3",
  },
  {
    id: 45,
    name: "Is a vegan diet better for your health?",
    author_name: "BBC World Service, CrowdScience podcast",
    img: "vegan.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "lifestylehealth",
    musicName: "Is a vegan diet better for your health.mp3",
  },
  {
    id: 46,
    name: "HEALTHY HABITS: 10 daily habits that changed my life",
    author_name: "Science Backed",
    img: "health.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "lifestylehealth",
    musicName: "HEALTHY HABITS.mp3",
  },
  {
    id: 47,
    name: "Should elections be state funded?",
    author_name: "THE HINDU",
    img: "Elec.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "newspolitics",
    musicName: "elec.mp3",
  },
  {
    id: 48,
    name: "How safe is our personal health data with the Indian government?",
    author_name: "In Focus podcast THE HINDU",
    img: "safe.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "newspolitics",
    musicName: "safe.mp3",
  },
  {
    id: 49,
    name:"How are governments approaching AI regulation?",
    author_name: " In Focus podcast THE HINDU",
    img: "ai.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "newspolitics",
    musicName: "ai.mp3",
  },
  {
    id: 50,
    name: "Trump's Trials: Why lawyers say 'never write anything down'",
    author_name: "THE HINDU",
    img: "trump.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "newspolitics",
    musicName: "trump.mp3",
  },
  {
    id: 51,
    name: "The Athletic NBA Show",
    author_name: "Zach Harper",
    img: "nba.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "sportsrecreation",
    musicName: "trump.mp3",
  },
  {
    id: 52,
    name: "Talkin’ Baseball (MLB)",
    author_name: "SEATGEEK",
    img: "baseball.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "sportsrecreation",
    musicName: "trump.mp3",
  },
  {
    id: 53,
    name: "1000 Jumpers",
    author_name: "Dapper J and Bobby G",
    img: "100jump.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "sportsrecreation",
    musicName: "trump.mp3",
  },
  {
    id: 54,
    name: "Football Weekly",
    author_name: "Max Rushden",
    img: "Football Weekly.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "sportsrecreation",
    musicName: "trump.mp3",
  },
  {
    id: 55,
    name: "THE ASSASSINS OF YOUTH",
    author_name: "Dan Zupansky",
    img: "true.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "truecrime",
    musicName: "43509147.mp3",
  },

  {
    id: 56,
    name: "Crime Beat",
    author_name: "Michael Connelly",
    img: "crime.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "truecrime",
    musicName: "43509147.mp3",
  },

  {
    id: 57,
    name: "Stories Of True Crime",
    author_name: "Sunil Phillips",
    img: "truecrime.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "truecrime",
    musicName: "43509147.mp3",
  },

  {
    id: 58,
    name: "The Teacher's Pet",
    author_name: "Hedley Thomas",
    img: "teacher.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "truecrime",
    musicName: "43509147.mp3",
  },
  {
    id: 59,
    name: "Vaa Vaathi",
    author_name: " Dhanush",
    img: "Vaa Vaathi.jpg",
    lang: "TAMIL",
    timesPlayed: 0,
    type: "romantic",
    musicName: "Vaa Vaathi .mp3",
  },

];

// Connection URI. Update this with your MongoDB Atlas connection string.
const uri = 'mongodb+srv://sriram:sriram@cluster0.zlzti3b.mongodb.net/Music';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = 'Music';
const collectionName = 'musicCollection';

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    const result = await collection.insertMany(musicDB);
    console.log(`${result.insertedCount} documents inserted into the collection`);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);

  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

connectToMongoDB();
