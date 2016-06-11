import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const topics = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class TopicApi {
  static getAllTopics() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], topics));
      }, delay);
    });
  }

  static saveTopic(topic) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTopicNameLength = 3;
        if (topic.firstName.length < minTopicNameLength) {
          reject(`First Name must be at least ${minTopicNameLength} characters.`);
        }

        if (topic.lastName.length < minTopicNameLength) {
          reject(`Last Name must be at least ${minTopicNameLength} characters.`);
        }

        if (topic.id) {
          const existingTopicIndex = topics.findIndex(a => a.id == topic.id);
          topics.splice(existingTopicIndex, 1, topic);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new topics in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          topic.id = generateId(topic);
          topics.push(topic);
        }

        resolve(Object.assign({}, topic));
      }, delay);
    });
  }

  static deleteTopic(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTopicToDelete = topics.findIndex(author => {
          author.authorId == authorId;
        });
        topics.splice(indexOfTopicToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TopicApi;
