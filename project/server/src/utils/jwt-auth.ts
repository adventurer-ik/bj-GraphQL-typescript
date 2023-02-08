// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import User from '../entities/User';

export const DEFAULT_JWT_SECRET_KEY = 'secret-key';

export interface JwtVerifiedUser {
  userId: User['id'];
}

/** 액세스 토큰 발급 */
export const createAccessToken = (user: User): string => {
  const userData: JwtVerifiedUser = { userId: user.id };
  // 액세스 토큰 발급
  const accessToken = jwt.sign(userData, process.env.JWT_SECRET_KEY || 'secret-key', {
    expiresIn: '30m',
  });
  return accessToken;
};
