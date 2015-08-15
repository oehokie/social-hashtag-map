controllers = angular.module('pollApp.controllers', [])

controllers.controller('tweetListController', ($scope, $state, $log, Tweets, TeamStats, MemberStats, HashtagStats) ->
    Tweets.fetch()
    TeamStats.fetch()
    MemberStats.fetch()
    HashtagStats.fetch()

    $scope.tweets = Tweets.data().all
    $scope.teamstats = TeamStats.data().all
    $scope.memberstats = MemberStats.data().all
    $scope.hashtagstats = HashtagStats.data().all
)