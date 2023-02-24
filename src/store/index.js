import {createStore} from "redux";
import addTicketReducer from "./reducer";

const store = createStore(addTicketReducer);

export default store;