var fs = require('fs');

var dataSource = 'server/models/employee.json';
var employees = JSON.parse(fs.readFileSync(dataSource, 'utf8'));

exports.index = function(req, res) {
  var payload = req.query;
  var response = {
    data: employees.data,
    pagination: {
      count: employees.data.length
    }
  }
  return res.json(200, response);
};

exports.show = function(req, res) {
  var id = parseInt(req.params.id);
  for (var i = 0; i < employees.data.length; i++) {
    var employee = employees.data[i];
    if (employee.employeeId === id) {
      return res.json(200, employee);
    }
  }
  return res.json(404, 'Employee not found');
};

exports.add = function(req, res) {
  employees.lastId += 1;
  req.body.id = employees.lastId;
  employees.data.push(req.body);
  fs.writeFile(dataSource, JSON.stringify(employees), function(err) {
    if (err) {
      return res.json(500, 'Employee could not be added');
    }
    return res.json(200, 'Employee added succesfully');
  });
}

exports.remove = function(req, res) {
  var id = req.params.id;
  for (var i = 0; i < employees.data.length; i++) {
    var employee = employees.data[i];
    if (employee.employeeId === id) {
      employees.splice(i, 1);
      fs.writeFile(dataSource, JSON.stringify(employees), function(err) {
        if (err) {
          return res.json(500, 'Employee could not be removed');
        }
        return res.json(200, "Employee removed succesfully");
      });
    }
  }
  return res.json(404, 'Employee not found');
}

exports.update = function(req, res) {
  var id = req.params.id;
  var payload = req.body;
  for (var i = 0; i < employees.data.length; i++) {
    var employee = employees.data[i];
    if (employee.employeeId === id) {
      employees.data[i] = payload;
      fs.writeFile(dataSource, JSON.stringify(employees), function(err) {
        if (err) {
          return res.json(500, 'Employee could not be update');
        }
        return res.json(200, 'Employee updated succesfully');
      });
    }
  }
  return res.json(404, 'Employee not found');
}
