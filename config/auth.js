// expose our config directly to our application using module.exports
module.exports = {
  'facebookAuth': {
    'clientID': '1675914896001421',
    'clientSecret': '7fe0217711792f908161a1efb4711842',
    'callbackURL': 'http://localhost:8080/auth/facebook/callback'
  },
  //https://dev.twitter.com/
  'twitterAuth': {
    'consumerKey': 'CJWOXklHh2iJLdX8OeXBatd7G',
    'consumerSecret': 'ZdoOupziT1PIJykk6iPLMM3ud8yBlgg3Wxp7GVMU4UAMvHKqU3',
    'callbackURL': 'http://localhost:8080/auth/twitter/callback'
  },
  //console.developer.google.com or https://console.cloud.google.com
  'googleAuth': {
    'clientID': '87668141240-tiqv5uie7i0oe8nq2tlrr10qu6jkd1pa.apps.googleusercontent.com',
    'clientSecret': 'mLtzT34fWm9-RTRYjqAIigbe',
    'callbackURL': 'http://localhost:8080/auth/google/callback'
  },
  'linkedinAuth': {
    'clientID': '77adr0m431er8w',
    'clientSecret': 'ic53H5TRrZO0GIx9',
    'callbackURL': 'http://localhost:8080/auth/linkedin/callback',
    'scope': ['r_basicprofile', 'r_emailaddress']
  }
};
