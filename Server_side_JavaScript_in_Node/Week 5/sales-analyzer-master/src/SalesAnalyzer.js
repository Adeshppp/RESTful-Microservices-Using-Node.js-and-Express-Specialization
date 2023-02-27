

const fs = require('fs');
const readline = require('readline');
const { Writable } = require('stream');


// This method will read the file content line by line and return the array of records
const readFileContents = (fileName, cb) => {
  const fileContents = [];
  const readStream = fs.createReadStream(fileName);

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  let isFirstRow = true; // Flag to ignore first row

  rl.on('line', (line) => {
    if (isFirstRow) { // Check if first row
      isFirstRow = false;
      return;
    }
    const data = line.split(',');
    const record = {
      date: data[0],
      customer_id: data[1],
      product_category: data[2],
      payment_method: data[3],
      value: data[4],
      time_on_site: data[5],
      clicks_in_site: data[6],
    };
    fileContents.push(record);
  });

  rl.on('close', () => {
    cb(null, fileContents);
  });

  readStream.on('error', (err) => {
    cb(err, null);
  });
};


// This method will filter out the records where payment_method is 'credit'
const filterData = (fileContents, cb) => {
  const filteredData = fileContents.filter((record) => {
    return record.payment_method === 'credit';
  });

  cb(null, filteredData);
};

// This method will write the filtered data to a new file called output.txt
const writeFilteredDataToFile = (filteredData, cb) => {
  const writeStream = fs.createWriteStream('output.txt');

  const writable = new Writable({
    write(chunk, encoding, next) {
      writeStream.write(chunk);
      next();
    },
  });

  writeStream.on('error', (err) => {
    cb(err, null);
  });

  writable.on('finish', () => {
    cb(null, 'Successfully wrote filtered data to output.txt file..!');
  });

  writable.write(JSON.stringify(filteredData));
  writable.end();
};

module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile,
};
