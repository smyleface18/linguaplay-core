linguaplay-core
│
├ src
│
│ ├ types
│ │ ├ common
│ │ │ ├ id.type.ts
│ │ │ ├ timestamp.type.ts
│ │ │ └ pagination.type.ts
│ │ │
│ │ ├ user
│ │ │ ├ user.type.ts
│ │ │ ├ user-role.enum.ts
│ │ │ └ user-profile.type.ts
│ │ │
│ │ ├ game
│ │ │ ├ match.type.ts
│ │ │ ├ match-status.enum.ts
│ │ │ └ player.type.ts
│ │ │
│ │ └ index.ts
│
│ ├ api
│ │ ├ contracts
│ │ │ ├ auth
│ │ │ │ ├ login.contract.ts
│ │ │ │ └ register.contract.ts
│ │ │ │
│ │ │ ├ match
│ │ │ │ ├ create-match.contract.ts
│ │ │ │ ├ join-match.contract.ts
│ │ │ │ └ match-response.contract.ts
│ │ │ │
│ │ │ └ user
│ │ │ ├ get-user.contract.ts
│ │ │ └ update-user.contract.ts
│ │ │
│ │ └ index.ts
│
│ ├ events
│ │ ├ game
│ │ │ ├ match-created.event.ts
│ │ │ ├ match-joined.event.ts
│ │ │ └ match-finished.event.ts
│ │ │
│ │ └ index.ts
│
│ ├ zoom
│ │ ├ zoom-meeting.type.ts
│ │ ├ zoom-token.type.ts
│ │ └ zoom-webhook.type.ts
│
│ ├ constants
│ │ ├ api-routes.constant.ts
│ │ └ roles.constant.ts
│
│ └ index.ts
│
├ package.json
├ tsconfig.json
└ README.md
