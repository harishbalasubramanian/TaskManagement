import {createBrowserHistory} from 'history';
export default createBrowserHistory({forceRefresh: true});
// Just creates the history for us to reference later and helps with things like auth persistence