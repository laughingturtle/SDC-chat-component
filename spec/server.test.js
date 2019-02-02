import axios from 'axios';

describe('Get request tests', () => {
  test('Request to /users with a valid id should return the user\'s information from MYSQL', () => {
    return axios.get('http://127.0.0.1:3028/users', {
      params: {
        id: 9
      }
    })
      .then(userObj => {
        expect(userObj.data.username).toMatch('chiquita_bananna');
        expect(userObj.data.twitch_sub).not.toBeNull();
        expect(userObj.data.mod_status).not.toBeNull();
        expect(userObj.status).toEqual(200);
      });
  });
});

