/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

t.board('id').then(({ id }) => {
  // https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md
  var api = new JitsiMeetExternalAPI(
    'atlassian.video', // video hostname
    id, // unique room ID associated to the Trello board ID
    '100%', // width
    '100%',  //height
    document.getElementById('content'), // target DOM element
    null, // config overwrite
    { // UI config
      filmStripOnly: true,
      DEFAULT_BACKGROUND: 'transparent',
      SHOW_WATERMARK_FOR_GUESTS: false,
      SHOW_BRAND_WATERMARK: false,
      SHOW_POWERED_BY: false,
      SHOW_JITSI_WATERMARK: false
    } 
  );
  api.addEventListener('participantJoined',function(data) {
    t.set('board', 'shared','trello.talk.participant.count', Math.floor(Math.random()*100))
  });
  api.addEventListener('participantLeft',function(data) {
    t.set('board', 'shared','trello.talk.participant.count', 0)
  });
  t.sizeTo('#content')
});
