module.exports = {
  "title": "Way To Mars",
  "description": "我会写一些前后端开发相关的东西，希望对大家有所帮助",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    vssueConfig: {
      platform: 'github',
      owner: 'zjl233',
      repo: 'zjl233.github.io',
      clientId: 'b73d3416ca7a1513c9fd',
      clientSecret: 'bdd36031a3a36d1d4344d2d6f6276a7a68e2497e',
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/zjl233",
            "icon": "reco-github"
          },
          {
            "text": "Twitter",
            "link": "https://twitter.com/zjl223",
            "icon": "reco-twitter"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/head.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "zjl233",
    "record": "null",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  }
}