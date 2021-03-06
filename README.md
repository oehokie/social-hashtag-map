# social-hashtag-map
Subscribe to twitter/instagram hashtags, verify users, put them on a map

## Deployment

### Requirements

```
Docker and Docker composed installed
git installed
```

### Deploy

```
git clone https://github.com/oehokie/social-hashtag-map.git
cd social-hashtag-map
sudo chmod +x run_web.sh
sudo chmod +x run_celery.sh
docker-compose build
docker-compose up
```

Save your db.sqlite3 file located in social-hashtag-map/social-hashtag-map and you can copy it to new builds.  After the git clone part you'd copy it into the folder

Then go to localhost:8000 (or your computer's IP address:8000)


## Based on

 - [Djangular](https://github.com/TrackMaven/Djangular.git)
 
## API Keys

### Twitter

Go here: [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new)

Sign up for an app, get the keys (client id and secret)

### Instagram

Go here: [https://instagram.com/developer/clients/register/](https://instagram.com/developer/clients/register/)

Register, clone [python-instagram](https://github.com/Instagram/python-instagram)

Run `python get_access_token.py`, follow the directions, copy the access_token.  You'll need the access_token and client_secret

## Notes

Ended up moving instagram to the bottom... didn't realize their api doesn't let you search for multiple tags at once, so I have to figure out how I want to do that...

Edit: delaying cron-like celery checking for now... would be annoying for development

For some reason the controller wouldn't resolve tweets when in the stateProvider, so I bypassed it.  Will go back and fix later

## Checklist
 
 - [x] Add checklist to readme, remove old stuff
 - [x] Change requirements (Django 1.7.1, add celery, add oauth2, add python-instagram)
 - [x] pip install -r requirements.txt
 - [x] npm install
 - [x] setup models (api keys, tweet model, instagram model, tag model, team models (team, van, user))
 - [x] Install Redis (for celery) `brew install redis` & `redis-server`
 - [x] Integrate celery
 - [x] Update readme with instructions for getting API keys
 - [x] Add twitter task into celery
 - [X] Process twitter results
 - [x] Check if tweets are from known people
 - [x] Store tweets
 - [x] Setup endpoint to retrieve tweets (all)
 - [x] Setup endpoint to retrieve tweets (unverified, verified, combined, has location)
 - [x] Calculate Stats
 - [x] Setup endpoint to retrieve stats
 - [x] Move to front end...
 - [x] List Tweets (raw)
 - [x] List Stats (raw)
 - [x] General Layout
 - [x] Add a map
 - [x] Highlight verified (team member) tweets
 - [x] “Style” tweets
 - [x] “Style” pics
 - [x] “Style” Stats
 - [x] Process out locations, put them on a map (mapbox?)
 - [x] Style map
 - [x] Add instagram task into celery
 - [x] Process instagram results
 - [x] Check if instas are from known people
 - [x] Store instas
 - [x] Setup endpoint to retrieve instas (separate, verified only, separate + verified)
 - [x] Setup endpoint to retrieve combined tweets and instas
 - [x] List Pics (raw)
 - [x] Have celery auto-check every... minute?
 - [x] Containerize for Docker
 - [x] Change color / icon of exchange points
 - [x] Limit tweet height to X and make scroll div
 - [x] Setup polling on front end
 - [x] Paginate tweets / responses (limit to 10 each?)
 - [ ] Deploy!

 ### Nice to haves

 - [ ] Add a hashtag filter
 - [x] Highlight most recent tweets with different color, shrink the others/smaller marker
 - [ ] Zoom map around 4 van locations?
 - [ ] Add Van Statistics
 - [ ] Track distance progress somehow? (loading bar?), how to report?
 - [x] Store only recent XX posts
 - [ ] Setup page to view tweets
 - [ ] Setup page to view instagram pics

 
 ## Status pic
 
 ![Status1](https://raw.githubusercontent.com/oehokie/social-hashtag-map/master/pics/status2.png)
