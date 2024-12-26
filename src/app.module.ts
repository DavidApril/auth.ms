import { AuthModule } from './auth/auth.module';
import { envs } from './config';
import { Module } from '@nestjs/common';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { SeedModule } from './seed/seed.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'authentication-database',
      port: 5432,
      database: 'authdb',
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    SeedModule,
    RoleModule,
    PermissionModule,
  ],
})
export class AppModule {}
