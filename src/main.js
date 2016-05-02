import $ from "script!jquery";
import EventStream from "./EventStream";

window.EventStream = EventStream;
window.eventStream = new EventStream();