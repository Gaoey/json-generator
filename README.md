## redux-toolkit generator
### usage
```
npm run start -- redux-toolkit ./mock.json ./result // default is all CRUD, output file is ./result
```
### mock.json example
```
[
  {
    "url": "/bg_colors",
    "actionName": "BgColors",
    "options": "r" // for read action
  },
  {
    "url": "/groups?id=${arrID}",
    "actionName": "CategoryGroupList",
    "options": "rc" // for read and create action
  }
]
```

### options list
```
c = create
r = read
u = update
d = delete
a = readAll
```