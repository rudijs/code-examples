var app = angular.module('plunker', ['rx']);

app.controller('MainCtrl', function($scope) {

  $scope.stopped = stopped;
  $scope.resumed = resumed;

  function stopped(){
    console.log('user wants to quit');
  }

  function resumed(){
    console.log('user wants to stay');
  }
});


app.directive('idleUser', ['rx', idleUser])

function idleUser(rx) {
  return {
    restrict: 'E',
    scope: {
      stopped: '&',
      resumed: '&'
    },
    controller: function($scope){
      var mergedStreams = rx.Observable.merge(
        rx.DOM.keydown(document),
        rx.DOM.click(document),
        rx.DOM.mousemove(document),
        rx.DOM.scroll(document),
        rx.DOM.touchstart(document)
      );

      var idleStream = mergedStreams
        .bufferWithTime(5000)
        .filter(function(arr){
          return arr.length===0;
        })
        .pausable();

      var subscriber = idleStream.subscribeOnNext(
        function () {
          idleStream.pause();
          if (!confirm("Idle timeout. Quit?")){
            idleStream.resume();
            $scope.resumed();
          } else {
            $scope.stopped();
          }
        },
        function (err) {
          console.log(err);
        });

      $scope.$on("$destroy", function() {
        subscriber.unsubscribe();
      });

      //start
      idleStream.resume();
    }
  };
}
