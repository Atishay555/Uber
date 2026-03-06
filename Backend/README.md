# Users API — Register Endpoint

## POST /users/register

Description
- Registers a new user and returns an auth token and user object.

Request
- Method: `POST`
- URL: `/users/register`
- Content-Type: `application/json`

Body (JSON)

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}

Field details
- `fullname.firstname` (string) — required, minimum 3 characters.
- `fullname.lastname` (string) — optional, minimum 3 characters when provided.
- `email` (string) — required, must be a valid email address.
- `password` (string) — required, minimum 6 characters.

Responses
- `201 Created` — registration successful.
  - Body: `{ "token": "<jwt>", "user": { ... } }`
  - Note: The returned `user` does not include the password field (it's excluded by the model).

- `400 Bad Request` — validation failed. Example body:

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    { "msg": "Firstname should be atleast 3 letter long", "param": "fullname.firstname", "location": "body" }
  ]
}
```

- `500 Internal Server Error` — unexpected server error.

Examples

- Curl

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john.doe@example.com","password":"securepassword"}'
```

Notes
- The endpoint expects `fullname` as an object containing `firstname` (required) and `lastname` (optional).
- On success the server responds with a JWT token and the created `user` object (password is omitted).
