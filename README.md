# Reigndesign Challenge

small application to handle news gathered from Hacker Feed

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.
### Prerequisites
```
Node v8.11.2
bower v1.8.4
MongoDB shell version v4.0.2
```

### Installing

install node from https://nodejs.org/es/download/ for any OS 

Using Curl
```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

or homebrew

```
brew install node
```

to install mongodb
```
brew install mongodb
```

Set permissions for the data directory
```
sudo chmod 0755 /data/db && sudo chown $USER /data/db
```

And finally run mongo 
```
mongod
```
Clone and install dependencies 
```
https://github.com/cr4zyhead/reigndesign-challange-aibarra.git
cd reigndesign-challange-aibarra
npm install && bower install
```
Set up env variables
```
DB_URI="mongodb://localhost/hnfeeds"
API_URI_HN= "http://hn.algolia.com/api/v1/search_by_date?query=nodejs"
API_URI_APP="http://localhost:3000/api/feeds"
```

## Run
go to the root of the project and execute the following command
```
npm run start

```
## Running the tests

to run the test  execute the following command

```
 npm run test /test/**

```

### Coding style tests
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```
npm run stn
```

## Authors

* **Alexis Ibarra A** 

## License

This project is licensed under the MIT License 
