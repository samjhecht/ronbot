module.exports = function (req, res, next) {
  
  var userName = req.body.user_name;

  var ronisms = [
      'For your convenience, your request has been denied.',
      'Don\'t spill your candy in the lobby.',
      'Quit chasing tennis balls.',
      'For your convenience, the ice machine is located in the basement.',
      'Just f***ing sell!',
      'Do you think this kind of desperation is attractive?',
      'Stop selling after the close!',
      'Have you updated your forecast in Salesforce?',
      'I\'ll buy take Jager shots if you close a deal!',
      'Oh you big wuss.',
      'What\'s the probability that they\'ll close this month?'
    ]


  var botPayload = {
    text : ronisms[Math.floor(Math.random() * ronisms.length)]
  };
 
  // avoid infinite loop
  if (userName !== 'ronbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}