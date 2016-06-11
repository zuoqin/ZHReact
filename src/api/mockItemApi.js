import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    Title: "Friday Humor: FBI Ends Muslim-American Surveillance After 15-Year Study Of &quot;Beautiful Culture&quot;",
    Reference: "L25ld3MvMjAxNi0wNi0xMC9mcmlkYXktaHVtb3ItZmJpLWVuZHMtbXVzbGltLWFtZXJpY2FuLXN1cnZlaWxsYW5jZS1hZnRlci0xNS15ZWFyLXN0dWR5LWJlYXV0aWZ1bC1jdWw=",
    Published: "<span><span title=\"Jun 10, 2016 6:05 PM\">Jun 10, 2016 6:05 PM</span></span>",
    Introduction: "<p><strong><em>“Thanks to advances in video surveillance, we’ve been able  to look inside Muslims’ homes and view some breathtaking calligraphy  prints and handwoven tapestries.” </em></strong>Saying they <strong>thoroughly enjoyed studying “such a lovely people and such a lovely faith,” </strong>Comey  explained that agents would often remove a Muslim citizen from their  community and keep them detained for days, weeks, or even months on end  to learn everything they could from them about Islam.</p>",
    Body: ""
  },
  {
    Title: "Friday Humor: FBI Ends Muslim-American Surveillance After 15-Year Study Of &quot;Beautiful Culture&quot;",
    Reference: "L25ld3MvMjAxNi0wNi0xMC9mcmlkYXktaHVtb3ItZmJpLWVuZHMtbXVzbGltLWFtZXJpY2FuLXN1cnZlaWxsYW5jZS1hZnRlci0xNS15ZWFyLXN0dWR5LWJlYXV0aWZ1bC1jdWw=",
    Published: "<span><span title=\"Jun 10, 2016 6:05 PM\">Jun 10, 2016 6:05 PM</span></span>",
    Introduction: "<p><strong><em>“Thanks to advances in video surveillance, we’ve been able  to look inside Muslims’ homes and view some breathtaking calligraphy  prints and handwoven tapestries.” </em></strong>Saying they <strong>thoroughly enjoyed studying “such a lovely people and such a lovely faith,” </strong>Comey  explained that agents would often remove a Muslim citizen from their  community and keep them detained for days, weeks, or even months on end  to learn everything they could from them about Islam.</p>",
    Body: ""
  },
  {
    Title: "Friday Humor: FBI Ends Muslim-American Surveillance After 15-Year Study Of &quot;Beautiful Culture&quot;",
    Reference: "L25ld3MvMjAxNi0wNi0xMC9mcmlkYXktaHVtb3ItZmJpLWVuZHMtbXVzbGltLWFtZXJpY2FuLXN1cnZlaWxsYW5jZS1hZnRlci0xNS15ZWFyLXN0dWR5LWJlYXV0aWZ1bC1jdWw=",
    Published: "<span><span title=\"Jun 10, 2016 6:05 PM\">Jun 10, 2016 6:05 PM</span></span>",
    Introduction: "<p><strong><em>“Thanks to advances in video surveillance, we’ve been able  to look inside Muslims’ homes and view some breathtaking calligraphy  prints and handwoven tapestries.” </em></strong>Saying they <strong>thoroughly enjoyed studying “such a lovely people and such a lovely faith,” </strong>Comey  explained that agents would often remove a Muslim citizen from their  community and keep them detained for days, weeks, or even months on end  to learn everything they could from them about Islam.</p>",
    Body: ""
  },
  {
    Title: "Friday Humor: FBI Ends Muslim-American Surveillance After 15-Year Study Of &quot;Beautiful Culture&quot;",
    Reference: "L25ld3MvMjAxNi0wNi0xMC9mcmlkYXktaHVtb3ItZmJpLWVuZHMtbXVzbGltLWFtZXJpY2FuLXN1cnZlaWxsYW5jZS1hZnRlci0xNS15ZWFyLXN0dWR5LWJlYXV0aWZ1bC1jdWw=",
    Published: "<span><span title=\"Jun 10, 2016 6:05 PM\">Jun 10, 2016 6:05 PM</span></span>",
    Introduction: "<p><strong><em>“Thanks to advances in video surveillance, we’ve been able  to look inside Muslims’ homes and view some breathtaking calligraphy  prints and handwoven tapestries.” </em></strong>Saying they <strong>thoroughly enjoyed studying “such a lovely people and such a lovely faith,” </strong>Comey  explained that agents would often remove a Muslim citizen from their  community and keep them detained for days, weeks, or even months on end  to learn everything they could from them about Islam.</p>",
    Body: ""
  },
  {
    Title: "Friday Humor: FBI Ends Muslim-American Surveillance After 15-Year Study Of &quot;Beautiful Culture&quot;",
    Reference: "L25ld3MvMjAxNi0wNi0xMC9mcmlkYXktaHVtb3ItZmJpLWVuZHMtbXVzbGltLWFtZXJpY2FuLXN1cnZlaWxsYW5jZS1hZnRlci0xNS15ZWFyLXN0dWR5LWJlYXV0aWZ1bC1jdWw=",
    Published: "<span><span title=\"Jun 10, 2016 6:05 PM\">Jun 10, 2016 6:05 PM</span></span>",
    Introduction: "<p><strong><em>“Thanks to advances in video surveillance, we’ve been able  to look inside Muslims’ homes and view some breathtaking calligraphy  prints and handwoven tapestries.” </em></strong>Saying they <strong>thoroughly enjoyed studying “such a lovely people and such a lovely faith,” </strong>Comey  explained that agents would often remove a Muslim citizen from their  community and keep them detained for days, weeks, or even months on end  to learn everything they could from them about Islam.</p>",
    Body: ""
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (item) => {
  return replaceAll(item.title, ' ', '-');
};

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemTitleLength = 1;
        if (item.title.length < minItemTitleLength) {
          reject(`Title must be at least ${minItemTitleLength} characters.`);
        }

        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id == item.id);
          items.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new items in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId(item);
          item.reference = `http://www.zerohedge.com/items/${item.id}`;
          items.push(item);
        }

        resolve(Object.assign({}, item));
      }, delay);
    });
  }

  static deleteItem(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          item.courseId == courseId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemApi;
