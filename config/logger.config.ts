import { format, transports } from 'winston';

export const loggerConfig = {
    transports: [
        new transports.Console(),
        new transports.File({
            level: 'info',
            dirname: 'logs',
            filename: 'combined.log',
        }),
        new transports.File({
            level: 'error',
            dirname: 'logs',
            filename: 'error.log',
        }),
    ],
    format: format.combine(
        format.label({
            label: `Label`
        }),
        format.timestamp({
           format: 'MM-DD-YYYY HH:mm:ss'
       }),
        format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    )
};
