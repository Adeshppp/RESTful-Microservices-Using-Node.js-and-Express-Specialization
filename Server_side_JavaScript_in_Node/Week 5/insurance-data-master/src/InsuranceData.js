// //import all the modules require
// const fs=require("fs");
// const readline= require("readline");
// const { Writable } = require("stream");
// //Use try and catch to handle the error where ever required
// //return the callback with appropriate data where ever require in all the methods

// //More userdefined methods can be written if required to write the logical stuff

// //This method will take two parameters first the fileName
// //and second a callback 
// //read file data line by line using readLine
// //create array and push all data inside the array


// const readFileContentsLineByLine = (fileName, cb) => {
 

  
//   let fileContents = [];

//   const rl = readline.createInterface({
//     input: fs.createReadStream(fileName),
//     output: process.stdout,
//     terminal: false
//   });
//   let isFirstLine= true;

//   rl.on('line',(line)=>{
//     if(isFirstLine){
//       isFirstLine = false;
//       return
//     }
//     const data=line.split(',');
//     const record = {
//       age: data[0],
//       sex:data[1],
//       bmi:data[2],
//       children:data[3],
//       smoker:data[4],
//       region:data[5],
//       charges:data[6]
//     }
//     fileContents.push(record);
//   });

//   rl.on('close',()=>cb(null,fileContents));

//   ReadStream.on('error',err=>cb(err,null));

// }

// //This method will take two parameters first the filecontent
// //and second the callback 
// //use map to filter the data 
// //Filter all the records for female candidates given region as southwest.

// const filterFemaleCandidates = (fileContents, cb) => {
//   let filteredData = fileContents.filter(line=>(line[1]==="female" && line[5]==="southwest"))
//   cb(null,filteredData);
//   //use lodash.compact() method if required
  
  
// }

// //This method will write filtered data in the output file
// const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
 
//     //use writeFile method to write the filteredData
//     const writeStream = fs.createWriteStream(outputFileName);
//     const writable = new Writable({
//       write(chunk, encoding, next) {
//         writeStream.write(chunk);
//         next();
//       },
//     });
  
//     writeStream.on('error', (err) => {
//       cb(err, null);
//     });
  
//     writable.on('finish', () => {
//       cb(null, 'Successfully wrote filtered data to outputFileName file..!');
//     });
  
//     writable.write(JSON.stringify(filteredData));
//     writable.end();

  
// }


// //This method will read the file content using Streams
// //create array and push all the data from file to it


// const readFileContentsUsingStream = (fileName, cb) => {
//   let fileContents = [];

//   fs.createReadStream(fileName)
//     .on("error", (err) => {
//       console.log("Error while reading contents of file using streams, ERROR::", err);
//       cb("Encountered error while reading file contents using streams..!");
//     })
//     .on("data",chunk=>fileContents.push(chunk))
//     .on("end",()=>cb(null,fileContents))
   
// }

// //This method will filetDatewithNoChildren it will take two parameters
// //first the fileContent and second the callback
// //use map if required to filter the data

// const filterDataWithNoChildren = (fileContents, cb) => {
//   let filteredData = fileContents.filter(line=>(line[3]===0))
//   cd(null,filteredData);
// //use lodash.compact() if required 


  
// }




// module.exports = {
//   readFileContentsLineByLine,
//   filterFemaleCandidates,
//   readFileContentsUsingStream,
//  }

//===============================================

// const fs = require("fs");
// const readline = require("readline");

// const readFileContentsLineByLine = (fileName, cb) => {
//   let fileContents = [];
//   const rl = readline.createInterface({
//     input: fs.createReadStream(fileName),
//     output: process.stdout,
//     terminal: false,
//   });

//   rl.on("line", (line) => {
//     fileContents.push(line);
//   });

//   rl.on("close", () => {
//     cb(null, fileContents);
//   });

//   rl.on("error", (err) => {
//     cb(err, null);
//   });
// };

// const filterFemaleCandidates = (fileContents, cb) => {
//   let filteredData = fileContents.filter((line) => {
//     const columns = line.split(",");
//     return columns[1].trim() === "female" && columns[5].trim() === "southwest";
//   });
//   cb(null, filteredData);
// };

// const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
//   const fileStream = fs.createWriteStream(outputFileName);
//   fileStream.on("error", (err) => {
//     cb(err);
//   });
//   filteredData.forEach((line) => {
//     fileStream.write(line + "\n");
//   });
//   fileStream.on("finish", () => {
//     cb(null);
//   });
//   fileStream.end();
// };

// const readFileContentsUsingStream = (fileName, cb) => {
//   let fileContents = [];

//   fs.createReadStream(fileName)
//     .on("error", (err) => {
//       console.log("Error while reading contents of file using streams, ERROR::", err);
//       cb("Encountered error while reading file contents using streams..!");
//     })
//     .pipe(
//       readline.createInterface({
//         input: fs.createReadStream(fileName),
//         output: process.stdout,
//         terminal: false,
//       })
//     )
//     .on("line", (line) => {
//       fileContents.push(line);
//     })
//     .on("close", () => {
//       cb(null, fileContents);
//     });
// };

// // const filterDataWithNoChildren = (fileContents, cb) => {
// //   let filteredData = fileContents.filter((line) => {
// //     const columns = line.split(",");
// //     return columns[3].trim() === "0";
// //   });
// //   cb(null, filteredData);
// // };
// const filterDataWithNoChildren = (fileContents, cb) => {
//   const lines = fileContents.split('\n').slice(1); // ignore first line
//   let filteredData = lines.filter((line) => {
//     const columns = line.split(",");
//     return columns[3].trim() === "0";
//   });
//   cb(null, filteredData);
// };


// module.exports = {
//   readFileContentsLineByLine,
//   filterFemaleCandidates,
//   readFileContentsUsingStream,
//   filterDataWithNoChildren,
//   writeFilteredDataToFile,
// };

//===============================================

const fs = require('fs');
const readline = require('readline');

/**
 * This method reads the file content line by line using readline module
 * @param {string} fileName - name of the input file
 * @param {function} cb - callback function that will return the file data as an array
 */
const readFileContentsLineByLine = (fileName, cb) => {
  let fileContents = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    fileContents.push(line);
  });

  rl.on('close', () => {
    cb(null, fileContents);
  });

  rl.on('error', (err) => {
    cb(err);
  });
}

/**
 * This method filters all the records for female candidates given region as southwest
 * @param {array} fileContents - input file data as an array
 * @param {function} cb - callback function that will return the filtered data as an array
 */
const filterFemaleCandidates = (fileContents, cb) => {
  const filteredData = fileContents.filter(line => {
    const columns = line.split(',');
    return (columns[1] === 'female' && columns[5] === 'southwest');
  });

  cb(null, filteredData);
}

/**
 * This method writes the filtered data to the output file
 * @param {string} outputFileName - name of the output file
 * @param {array} filteredData - filtered data to be written to the output file
 * @param {function} cb - callback function to indicate the completion of the operation
 */
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
  fs.writeFile(outputFileName, filteredData.join('\n'), (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
}

/**
 * This method reads the file content using Streams
 * @param {string} fileName - name of the input file
 * @param {function} cb - callback function that will return the file data as an array
 */
const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];

  fs.createReadStream(fileName)
    .on("error", (err) => {
      cb(err);
    })
    .on("data", (chunk) => {
      fileContents.push(chunk);
    })
    .on("end", () => {
      cb(null, fileContents);
    });
}

/**
 * This method filters all the records with no children
 * @param {array} fileContents - input file data as an array
 * @param {function} cb - callback function that will return the filtered data as an array
 */
const filterDataWithNoChildren = (fileContents, cb) => {
  const filteredData = fileContents.filter(line => {
    const columns = line.split(',');
    return (columns[3] === '0');
  });

  cb(null, filteredData);
}

module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  writeFilteredDataToFile,
  readFileContentsUsingStream,
  filterDataWithNoChildren
}


