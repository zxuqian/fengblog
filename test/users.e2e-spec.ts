import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('PostController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // beforeEach(async () => {
  //   request(app.getHttpServer).post("/auth").send({username: ""})
  // })

  it('/user (POST) create a user', () => {
    const user = {username: "user1", password: "123456", mobilePhone: "18616661666"};
    return request(app.getHttpServer())
      .post('/users')
      .send(user)
      .expect(201)
      .then(res => {
        expect(res.body.mobilePhone).toEqual(user.mobilePhone)
      });
  });
});
