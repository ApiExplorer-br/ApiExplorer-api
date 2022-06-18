// chai.use(require('chai-as-promised'));

import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import sinon from 'sinon';

import { connection } from '../../../src/db/index.js';
import {
  getAllFrontModel,
  createFrontModel,
  getFrontByUrlModel,
  getFrontByIdModel,
  editFrontModel,
  deleteFrontModel,
} from '../../../src/models/frontModel.js';

const front = [
  {
    id: '01c946f1-1fb6-484d-b4a2-de176dc1a6c7',
    name: 'Trivia',
    url_repo: 'https://github.com/paolofullone/Trivia',
    technologies: '["JavaScript","CSS","HTML"]',
    category: '',
    description: 'descrição teste',
    url_deploy: 'https://trivia-pink-cerebro.vercel.app/',
    api_id: '76c569dc-18c1-4d6b-bfd7-cf12d9d3bbc9',
    user_id: '05bf4f5a-00da-4148-8c16-93d566c9664c',
    created_at: '2022-06-18T00:41:23.000Z',
    updated_at: '2022-06-18T00:41:23.000Z',
  },
];

describe('Testing the frontend model layer', () => {
  describe('getAllFrontModel', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([front], []);
    });
    afterEach(() => {
      connection.execute.restore();
    });
    it('should return all fronts', async () => {
      const [result] = await getAllFrontModel();
      expect(result).to.be.eql(front[0]);
      expect(result).to.include.all.keys(
        'id',
        'name',
        'url_repo',
        'technologies',
        'category',
        'description',
        'url_deploy',
        'api_id',
        'user_id',
        'created_at',
        'updated_at'
      );
    });
  });
  describe('createFrontModel', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([front], []);
    });
    afterEach(() => {
      connection.execute.restore();
    });
    it('should create a front', async () => {
      const [result] = await createFrontModel(
        '01c946f1-1fb6-484d-b4a2-de176dc1a6c7',
        'Trivia',
        'https://github.com/paolofullone/Trivia',
        '["JavaScript","CSS","HTML"]',
        '',
        'descrição teste',
        'https://trivia-pink-cerebro.vercel.app/',
        '76c569dc-18c1-4d6b-bfd7-cf12d9d3bbc9',
        '05bf4f5a-00da-4148-8c16-93d566c9664c'
      );
      expect(result).to.be.eql(front);
      expect(result[0]).to.include.all.keys(
        'id',
        'name',
        'url_repo',
        'technologies',
        'category',
        'description',
        'url_deploy',
        'api_id',
        'user_id',
        'created_at',
        'updated_at'
      );
    });
  });
});
