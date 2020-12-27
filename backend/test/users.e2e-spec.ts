import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UserController (e2e)', () => {
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
describe('/user (POST)', () => {
  it('should create a user', () => {
    const user = {username: "user1", password: "123456", mobilePhone: "18616661666"};
    return request(app.getHttpServer())
      .post('/users')
      .set("Accept", 'application/json')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(201)
  });

})
  
  afterAll(async () => {
    await app.close();
  });
});
