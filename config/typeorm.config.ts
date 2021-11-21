import { registerAs } from "@nestjs/config";

export default registerAs('database', () => {
    return {
        type: 'mysql',
        host: process.env.DB_HOST as any,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ['dist/src/**/entities/*.entity.{ts,js}'],
        synchronize: true,
        migrations: ['dist/src/migration/*.{ts,js}'],
        cli: {
            migrationsDir: 'src/migration'
        }
    }
})