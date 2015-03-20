exports.get = function(req, res) {
  var isSuccess = req.params.status === 'success';
  if (isSuccess) {
    return res.json({
      'status': 'success',
      'message': 'Welcome to Angular JS Training'
    });
  } else {
    return res.send(500, 'GET Executed with error');
  }
};

exports.post = function(req, res) {
  var isSuccess = req.params.status === 'success';
  var data = req.body;
  if (isSuccess) {
    return res.json({
      'status': 'success',
      'message': 'POST Request recieved',
      'data': data
    });
  } else {
    return res.send(500, 'POST Executed with error');
  }
};

exports.delete = function(req, res) {
  var isSuccess = req.params.status === 'success';
  if (isSuccess) {
    return res.json({
      'status': 'success',
      'message': 'DELETE Request recieved'
    });
  } else {
    return res.send(500, 'DELETE Executed with error');
  }
}

exports.put = function(req, res) {
  var data = req.body;
  var isSuccess = req.params.status === 'success';
  if (isSuccess) {
    return res.json({
      'status': 'success',
      'message': 'PUT Request recieved',
      'data': data
    });
  } else {
    return res.send(500, 'PUT Executed with error');
  }
}
