import winston, { format, info } from 'winston';
//componentes para crear el formato personaalizado
const { combine, timestamp, printf,uncolorize,json,colorize } = format;
import appRoot from 'app-root-path';
//creando el perfil de color para el log

const colors={
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'green',
};
//agregando el perfil a winston
winston.addColors(colors);

// formato de consola
const myFormat = combine(
  colorize({ all: true}),
  timestamp(),
  printf((info) => ${info.timestamp} ${info.level}: ${info.message})
);
//formato para la salida 
const myfileFormat = combine(uncolorize(), timestamp(), json());
//crear objetos de configuracion 
const options = {
  infoFile: {
    level: 'info',
    filename: '${appRoot}/server/logs/infos.log',
    handleExceptions: true,
    maxsiza: 5242880, // 5MB
    maxFiles: 5,
    format: myfileFormat,
  },
  warnFile: {
    level: 'warn',
    filename: '${appRoot}/server/warns/infos.log',
    handleExceptions: true,
    maxsiza: 5242880, //5MB
    maxFiles: 5,
    format: myfileFormat,
  },
  errorFile: {
    level: 'error',
    filename: '${appRoot}/server/warns/infos.log',
    handleExceptions: true,
    maxsiza: 5242880, //5MB
    maxFiles: 5,
    format: myfileFormat,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: myFormat,
  },
};
//crendo la instancia del logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.infoFile),
    new winston.transports.File(options.warnFile),
    new winston.transports.File(options.errorFile),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, //No finalizar en excepciones ejoradas
});

//manejo de un strem de entrada
logger.stream = {
  write(message){
    logger.info(message);
  },
};

export default logger;
