//i didnt make this ratelimiter myself btw, i used some code from a discord webhook proxy for roblox
class Ratelimiter {
    inQueue:any[];
    proccessing:boolean;
    requests:any[];

    constructor() {
        this.inQueue = [];
        this.proccessing = false
        this.requests = [];
        
    }

}