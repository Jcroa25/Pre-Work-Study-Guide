var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
<<<<<<< HEAD
var randomTopic = topics [Math.floor(Math.random() * topics.length)];
=======
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
>>>>>>> f9506e76e27ef54a154c86ee129838f754af25e0

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
<<<<<<< HEAD
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }
console.log ('Here are the topics we learned through Prework:');
listTopics();
console.log ('Which topic should we study first?');
=======
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
>>>>>>> f9506e76e27ef54a154c86ee129838f754af25e0
selectTopic();