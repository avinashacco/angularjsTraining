var fs = require('fs');

var dataSource = 'server/models/query.json';
var queries = JSON.parse(fs.readFileSync(dataSource, 'utf8'));

exports.index = function(req, res) {
  var payload = req.query;
  var response = {
    data: queries.data,
    pagination: {
      count: queries.data.length
    }
  }
  return res.json(200, response);
};

exports.show = function(req, res) {
  var id = parseInt(req.params.id);
  for (var i = 0; i < queries.data.length; i++) {
    var query = queries.data[i];
    if (query.id === id) {
      return res.json(200, query);
    }
  }
  return res.json(404, 'Query not found');
};

exports.add = function(req, res) {
  queries.lastId += 1;
  req.body.id = queries.lastId;
  queries.data.push(req.body);
  fs.writeFile(dataSource, JSON.stringify(queries), function(err) {
    if (err) {
      return res.json(500, 'Query could not be added');
    }
    return res.json(200, 'Query added succesfully');
  });
}

exports.remove = function(req, res) {
  var id = parseInt(req.params.id);
  for (var i = 0; i < queries.data.length; i++) {
    var query = queries.data[i];
    if (query.employeeId === id) {
      queries.splice(i, 1);
      fs.writeFile(dataSource, JSON.stringify(queries), function(err) {
        if (err) {
          return res.json(500, 'Query could not be removed');
        }
        return res.json(200, "Query removed succesfully");
      });
    }
  }
}

exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var payload = req.body;
  for (var i = 0; i < queries.data.length; i++) {
    var query = queries.data[i];
    if (query.id === id) {
      queries.data[i] = payload;
      fs.writeFile(dataSource, JSON.stringify(queries), function(err) {
        if (err) {
          return res.json(500, 'Query could not be update');
        }
        return res.json(200, 'Query updated succesfully');
      });
    }
  }
}
