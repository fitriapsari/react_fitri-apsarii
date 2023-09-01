// function getHello() {
//   console.log("Hello world");
// }
//
// getHello();
//

// function getCarProp(){
// const{tires, gears} =
// }

const tweets_new = [
  {
    author_id: 2244994945,
    username: "@programmerlog",
    created_at: "2020-02-14T19:00:55.000Z",
    id: 1228393702244134912,
    edit_history_tweet_ids: "1228393702244134912",
    text: "What did the developer write in their Valentine’s card?\n  \nwhile(true) {\n    I = Love(You);  \n}",
  },
  {
    author_id: 2244994945,
    username: "@txtdarimantan",
    created_at: "2020-02-14T19:00:55.000Z",
    id: 1228393702244134912,
    edit_history_tweet_ids: "1228393702244134912",
    text: "testt",
  },
  {
    author_id: 2244994945,
    username: "@txtdariyunif",
    created_at: "2020-02-14T19:00:55.000Z",
    id: 1228393702244134912,
    edit_history_tweet_ids: "1228393702244134912",
    text: "misi boloo",
  },
];

// gabungin data
function joinTweets(arr1, arr2) {
  const arr3 = arr1.concat(arr2);

  return arr3;
}

// add data baruu
function addTweet(arr1, new_ob) {
  const arr3 = arr1.push(new_ob);
  console.log(new_ob);
  return arr3;
}

console.log(joinTweets(tweets, tweets_new));
// 2. bikin callback funtion untuk return hasil looping
const callbackItem = (item, index) => {
  return item.username;
};

function getUsername() {
  // 1. bikin variable dulu dan assign array dengan map methode nya
  const username = tweets.map[callbackItem];

  // 3. panggil variable mappingnya
  return getUsername;
}
console.log(getUsername());

//step by step looping array with .map
// 1. bikin variable dulu dan assign array dengan map methode nya
// 2. bikin callback funtion untuk return hasil looping
// 3. panggil variable mappingnya

// bikin nama function
// setup nilai pertama dan nilai kedua
// jumlahkan kedua nilai
// munculkan hasilnya
// panggil functionya

function additional(nilai1, nilai2) {
  const hasil = nilai1 + nilai2;
  return hasil;
}
console.log(additional(1, 2));
