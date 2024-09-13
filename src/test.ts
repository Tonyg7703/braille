import clc from "cli-color";
import path from "path";
export default class Log {
  static error(message: string) {
    console.log(clc.red(message));
  }

  static info(message: string) {
    console.log(clc.underline(message));
  }

  static warning(message: string) {
    console.log(clc.underline(message));
  }

  static success(message: string) {
    console.log(clc.green(message));
  }

  static table(data: any) {
    console.table(data);
  }

  static log(message: string) {
    console.log(message);
  }
}

const isProduction = process.env.NODE_ENV === "production";
const dirPath = path.join(__dirname);
console.log(dirPath);

// function suppressNodemonMessages() {
//   const originalStdoutWrite = process.stdout.write.bind(process.stdout);

//   (process as any).stdout.write = (
//     chunk: any,
//     encoding?: BufferEncoding,
//     callback?: (err?: Error) => void
//   ): boolean => {
//     // Ensure chunk is handled as a string
//     const message = typeof chunk === "string" ? chunk : chunk.toString("utf8");

//     // Check if it contains [nodemon] and skip printing those messages
//     if (message.includes("[nodemon]")) {
//       if (callback) callback(); // Ensure the callback is called if provided
//       return true; // Suppress the message
//     }

//     // For other messages, use the original stdout write
//     return originalStdoutWrite(chunk, encoding, callback);
//   };
// }
// //
