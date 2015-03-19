var fs = require('fs');

var dataSource = 'server/models/employee.json';
var employees = JSON.parse(fs.readFileSync(dataSource, 'utf8'));

exports.index = function(req, res) {
  var payload = req.query;
  var response = {
    data: employees,
    pagination: {
      count: employees.length
    }
  }
  return res.json(200, response);
};

exports.show = function(req, res) {
  var id = req.params.id;
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    if (employee.employeeId === id) {
      return res.json(200, employee);
    }
  }
  return res.json(404, 'Employee not found');
};

exports.add = function(req, res) {
  console.log(req.body)
  employees.push(req.body);
  fs.writeFile(dataSource, JSON.stringify(employees), function(err) {
    if (err) {
      return res.json(500, 'Employee could not be added');
    }
    return res.json(200, 'Employee added succesfully');
  });
}

exports.update = function(req, res) {
  var id = req.params.id;
  var payload = req.body;
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    if (employee.employeeId === id) {
      employees[i] = payload;
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
