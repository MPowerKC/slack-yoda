'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var processEvent = function processEvent(req, res) {
  var payload = JSON.parse(req.body.payload);
  //console.log(JSON.stringify(payload, null, 2));

  res.status(200).json({
    response_type: 'ephemeral',
    replace_original: false,
    text: 'I :heart: that one too.'
  });
};

exports.processEvent = processEvent;

/*  --- SAMPLE SLACK EVENT PAYLOAD ---
{
  "type": "interactive_message",
  "actions": [
    {
      "name": "like",
      "type": "button",
      "value": "like|resource|1"
    }
  ],
  "callback_id": "resource-like",
  "team": {
    "id": "T8SM8CS9X",
    "domain": "kc-googlescholar"
  },
  "channel": {
    "id": "C8U3R2214",
    "name": "demo"
  },
  "user": {
    "id": "U8TBFRSJZ",
    "name": "mpowerkc"
  },
  "action_ts": "1516090144.094544",
  "message_ts": "1516090010.000183",
  "attachment_id": "1",
  "token": "wFQ75QDy9KLkjWXwgbxdZUNY",
  "is_app_unfurl": false,
  "response_url": "https://hooks.slack.com/actions/T8SM8CS9X/300439600343/uWe6RlFx1xBATyYeyGf55Zcv",
  "trigger_id": "300439600375.298722434337.9dac79a73947ad06a858ae85ce6968a8"
}
*/