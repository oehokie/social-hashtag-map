(function() {
  var controllers;

  controllers = angular.module('pollApp.controllers', []);

  controllers.controller('tweetListController', function($scope, $state, $log, $timeout, Tweets, TeamStats, MemberStats, HashtagStats) {
    Tweets.fetch();
    TeamStats.fetch();
    MemberStats.fetch();
    HashtagStats.fetch();
    $scope.tweets = Tweets.data().all;
    $scope.teamstats = TeamStats.data().all;
    $scope.memberstats = MemberStats.data().all;
    $scope.hashtagstats = HashtagStats.data().all;
    $scope.mapMovedCallback = function(bounds) {
      console.log('You repositioned the map to:');
      console.log(bounds);
    };
    return $scope.mapZoomedCallback = function(bounds) {
      console.log('You zoomed the map to:');
      console.log(bounds.getCenter().toString());
    };
  });

}).call(this);
