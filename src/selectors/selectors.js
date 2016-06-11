export function topicsFormattedForDropdown(topics) {
  return topics.map(topic => {
    return {
      value: topic.id,
      text: topic.firstName + ' ' + topic.lastName
    };
  });
}
