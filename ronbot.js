module.exports = function (req, res, next) {
  
  var ronisms = [
    'For your convenience, your request has been denied.',
    'Don\'t spill your candy in the lobby.',
    'Quit chasing tennis balls.',
    'For your convenience, the ice machine is located in the basement.',
    'Just f***ing sell!',
    'Do you think this kind of desperation is attractive?',
    'If you were at a bar, and someone came up to you acting this desperate, would you sleep with them?',
    'Don\'t dump your cookies on the table the moment you walk in.'
  ]

  var userName = req.body.user_name;
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