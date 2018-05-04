class youtube{
    videoTitle:string;
    views:number;
    likes:number;
    dislikes:number;
    shares:number;
    subscribe:number;
   
    constructor(videoTitle1:string, views1:number, likes1:number,dislikes1:number, shares1:number, subscribe1:number){
            this.videoTitle = videoTitle1;
            this.views = views1;
            this.likes = likes1;
            this.dislikes = dislikes1;
            this.shares = shares1;
            this.subscribe = subscribe1;
    }

    getVideoTitle = ()=>{
        return "video title=" + this.videoTitle;
    }

    getViews =()=>{
        return "\nviews=" + this.views;
    }

    getLikes=()=>{
        return "\nlikes=" + this.likes;
    }

    getDislikes=()=>{
        return "\ndislikes=" + this.dislikes
    }

    getShares=()=>{
        return "\nshares=" + this.shares;
    }

    getSubscribe=()=>{
        return "subscribe=" + this.subscribe;
    }

}

let yt = new youtube('avangers:infinity war',184651353,3200000,75000,1000,7000000);
console.log(yt.getVideoTitle());
console.log(yt.getViews());
console.log(yt.getLikes());
console.log(yt.getDislikes());
console.log(yt.getShares());
console.log(yt.getSubscribe());

class youtubeComments extends youtube{
    comments:string[];
    constructor(videoTitle1?:string, views1?:number, likes1?:number,dislikes1?:number, shares1?:number, subscribe1?:number, relatedVideos1?:string, comments1?:string[]){
       super(videoTitle1,views1,likes1,dislikes1,shares1,subscribe1);
       this.comments = [];
    }

  
    getComments = (...cmt:string[])=>{
        let allComments = cmt;
        this.comments = this.comments.concat(allComments);
        return this.comments;
    }
}

let ytc = new youtubeComments();
console.log("Youtube comments: " + ytc.getComments('\nnice video','awesome trailer','\nI watched this 20 times and Im gonna watch it another 20 times.','\nWho thinks this is by far the best trailer Marvel put down?','\nThis movie is my CRYSTAL','\ncrazy trailer'));


class youtubeRelatedVideos extends youtube{
    relatedVideos:string[];
    constructor(videoTitle1?:string, views1?:number, likes1?:number,dislikes1?:number, shares1?:number, subscribe1?:number, relatedVideos1?:string[]){
       super(videoTitle1,views1,likes1,dislikes1,shares1,subscribe1);
       this.relatedVideos = [];
    }

  
    getRelatedVideos = (...rv:string[])=>{
        let allRelatedVideos = rv;
        this.relatedVideos = this.relatedVideos.concat(allRelatedVideos);
        return this.relatedVideos;
    }
}

let ytrv = new youtubeRelatedVideos();
console.log("Youtube relatewd videos list: " + ytrv.getRelatedVideos('\nAVENGERS INFINITY WAR Official Trailer #2 (2018) Marvel Superhero Movie HD',
'\nWhat You Need To Know Before You See Infinity War','\nThe Ending Of Avengers Infinity War Explained',
'\nSmall Details You Missed In Avengers: Infinity War','\nAvengers Infinity War BEHIND THE SCENES & All Trailers'));