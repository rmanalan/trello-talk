/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var WHITE_ICON = './images/tt-white.svg';

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return t.get('board', 'shared', 'trello.talk.participant.count', null).then(function(count){
      return {
        icon: WHITE_ICON,
        text: count ? `Trello Talk (${count})` : 'Trello Talk',
        callback: function(t){
          return t.boardBar({
            url: './board-bar.html',
            height: 175
          })
        }
      };
    });
  },
});
