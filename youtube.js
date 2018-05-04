var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youtube = /** @class */ (function () {
    function youtube(videoTitle1, views1, likes1, dislikes1, shares1, subscribe1) {
        var _this = this;
        this.getVideoTitle = function () {
            return "video title=" + _this.videoTitle;
        };
        this.getViews = function () {
            return "\nviews=" + _this.views;
        };
        this.getLikes = function () {
            return "\nlikes=" + _this.likes;
        };
        this.getDislikes = function () {
            return "\ndislikes=" + _this.dislikes;
        };
        this.getShares = function () {
            return "\nshares=" + _this.shares;
        };
        this.getSubscribe = function () {
            return "subscribe=" + _this.subscribe;
        };
        this.videoTitle = videoTitle1;
        this.views = views1;
        this.likes = likes1;
        this.dislikes = dislikes1;
        this.shares = shares1;
        this.subscribe = subscribe1;
    }
    return youtube;
}());
var yt = new youtube('avangers:infinity war', 184651353, 3200000, 75000, 1000, 7000000);
console.log(yt.getVideoTitle());
console.log(yt.getViews());
console.log(yt.getLikes());
console.log(yt.getDislikes());
console.log(yt.getShares());
console.log(yt.getSubscribe());
var youtubeComments = /** @class */ (function (_super) {
    __extends(youtubeComments, _super);
    function youtubeComments(videoTitle1, views1, likes1, dislikes1, shares1, subscribe1, relatedVideos1, comments1) {
        var _this = _super.call(this, videoTitle1, views1, likes1, dislikes1, shares1, subscribe1) || this;
        _this.getComments = function () {
            var cmt = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                cmt[_i] = arguments[_i];
            }
            var allComments = cmt;
            _this.comments = _this.comments.concat(allComments);
            return _this.comments;
        };
        _this.comments = [];
        return _this;
    }
    return youtubeComments;
}(youtube));
var ytc = new youtubeComments();
console.log("Youtube comments: " + ytc.getComments('\nnice video', 'awesome trailer', '\nI watched this 20 times and Im gonna watch it another 20 times.', '\nWho thinks this is by far the best trailer Marvel put down?', '\nThis movie is my CRYSTAL', '\ncrazy trailer'));
var youtubeRelatedVideos = /** @class */ (function (_super) {
    __extends(youtubeRelatedVideos, _super);
    function youtubeRelatedVideos(videoTitle1, views1, likes1, dislikes1, shares1, subscribe1, relatedVideos1) {
        var _this = _super.call(this, videoTitle1, views1, likes1, dislikes1, shares1, subscribe1) || this;
        _this.getRelatedVideos = function () {
            var rv = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rv[_i] = arguments[_i];
            }
            var allRelatedVideos = rv;
            _this.relatedVideos = _this.relatedVideos.concat(allRelatedVideos);
            return _this.relatedVideos;
        };
        _this.relatedVideos = [];
        return _this;
    }
    return youtubeRelatedVideos;
}(youtube));
var ytrv = new youtubeRelatedVideos();
console.log("Youtube relatewd videos list: " + ytrv.getRelatedVideos('\nAVENGERS INFINITY WAR Official Trailer #2 (2018) Marvel Superhero Movie HD', '\nWhat You Need To Know Before You See Infinity War', '\nThe Ending Of Avengers Infinity War Explained', '\nSmall Details You Missed In Avengers: Infinity War', '\nAvengers Infinity War BEHIND THE SCENES & All Trailers'));
