const conversation = {
  "1": {
    "text": "Hi! how are you feeling",
    "responses": [
      { "text": "I feel sad", "next": 'getNextSentence', value: 2 },
      { "text": "I am happy!", "next": 'getNextSentence', value: 3 }
    ]
  },
  "2": {
    "text": "Why are you sad",
    "responses": [
      { "text": "I don't know", "next": 'getCallToAction', value: 'lonely' }
    ]
  },
  "3": {
    "text": "Great, me too!",
    "responses": [
      { "text": "Find out more", "next": 'close' }
    ]
  }
}

export default conversation;
