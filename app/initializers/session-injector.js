export function initialize(container, application) {
  application.inject('route', 'userSession', 'service:user-session');
  application.inject('component', 'userSession', 'service:user-session');
  application.inject('controller', 'userSession', 'service:user-session');
  application.inject('model', 'userSession', 'service:user-session');
}

export default {
  name: 'session-injector',
  initialize: initialize
};
