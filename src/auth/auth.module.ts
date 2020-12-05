import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '30d'}
    })],
  providers: [AuthService, LocalStrategy, JwtStrategy, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
  exports: [AuthService]
})
export class AuthModule {}
