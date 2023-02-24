let events = {};
class EventEmitter {
  addListener = (type, event) => {
    if (!Array.isArray(events[type])) {
      events[type] = [];
    }
    events[type].push(event);
  };

  removeListener = (type, event) => {
    if (!Array.isArray(events[type])) {
      return;
    }
    events[type] = events[type].filter(e => e !== event);
  };

  emit(type, params) {
    if (!Array.isArray(events[type])) {
      return;
    }
    events[type].map(e => {
      e(params);
    });
  }
}

export default new EventEmitter();
