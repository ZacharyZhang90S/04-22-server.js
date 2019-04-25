fs.readFile('/etc/passwd404 (err, data) => {
    if (err) throw err;
    console.log(data);
  });
