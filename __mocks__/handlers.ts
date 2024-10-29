import {http, HttpResponse} from 'msw';

export const handlers = [
  // Intercept POST request to https://reqres.in/api/login
  http.post('https://reqres.in/api/login', async ({request}) => {
    const payload = await request.json();

    // Check if the provided email and password match
    if (
      payload?.email === 'eve.holt@reqres.in' &&
      payload?.password === 'cityslicka'
    ) {
      // Respond with a JSON object including a token
      return HttpResponse.json({
        token: 'QpwL5tke4Pnpja7X4',
      });
    }

    // If the credentials don't match, return a 400 status with an error message
    return HttpResponse.error(400, {
      error: 'user not found',
    });
  }),
];
