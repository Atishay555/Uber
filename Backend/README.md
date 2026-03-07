# BACKEND API — DOCUMENTATION

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
    {
      "msg": "Firstname should be atleast 3 letter long",
      "param": "fullname.firstname",
      "location": "body"
    }
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

## POST /users/login

Description

- Authenticates a user and returns an auth token and the user object.

Request

- Method: `POST`
- URL: `/users/login`
- Content-Type: `application/json`

Body (JSON)

{
"email": "john.doe@example.com",
"password": "securepassword"
}

Field details

- `email` (string) — required, must be a valid email address.
- `password` (string) — required, minimum 6 characters.

Responses

- `200 OK` — login successful.
  - Body: `{ "token": "<jwt>", "user": { ... } }`

- `400 Bad Request` — validation failed. Example body:

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    {
      "msg": "password must 6 character long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

- `401 Unauthorized` — invalid credentials. Example body:

```json
{ "message": "Invalid email or password" }
```

- `500 Internal Server Error` — unexpected server error.

Examples

- Curl

```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john.doe@example.com","password":"securepassword"}'
```

Notes

- Successful responses include a JWT token; the returned `user` object does not include the password field.

## GET /users/profile

Description

- Returns the authenticated user's profile information.

Request

- Method: `GET`
- URL: `/users/profile`
- Headers: `Authorization: Bearer <token>` (required)

Responses

- `200 OK` — request successful.
  - Body: `{ "user": { ... } }` (user object does not include the password field)

- `401 Unauthorized` — missing or invalid token. Example body:

```json
{ "message": "Authentication required" }
```

- `500 Internal Server Error` — unexpected server error.

Examples

- Curl

```bash
curl -H "Authorization: Bearer <token>" http://localhost:3000/users/profile
```

Notes

- This endpoint requires a valid JWT sent in the `Authorization` header using the `Bearer` scheme.

## POST /captains/register

Description

- Registers a new captain (driver) and returns an auth token and captain object.

Request

- Method: `POST`
- URL: `/captains/register`
- Content-Type: `application/json`

Body (JSON)

{
"fullname": {
"firstname": "Jane",
"lastname": "Smith"
},
"email": "jane.smith@example.com",
"password": "securepassword",
"vehicle": {
"plate": "ABC123",
"color": "red",
"capacity": 4,
"vehicleType": "car"
}
}

Field details

- `fullname.firstname` (string) — required, minimum 3 characters.
- `fullname.lastname` (string) — optional, minimum 3 characters when provided.
- `email` (string) — required, must be a valid email address.
- `password` (string) — required, minimum 6 characters.
- `vehicle.plate` (string) — required, minimum 3 characters.
- `vehicle.color` (string) — required, minimum 3 characters.
- `vehicle.capacity` (number) — required, minimum 1.
- `vehicle.vehicleType` (string) — required, one of `car`, `auto`, `bike`.

Responses

- `201 Created` — registration successful.
  - Body: `{ "token": "<jwt>", "captain": { ... } }`
  - Note: The returned `captain` object does not include the password field.

- `400 Bad Request` — validation failed. Example body:

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    {
      "msg": "vehicle.vehicleType must be one of car,auto,bike",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

- `500 Internal Server Error` — unexpected server error.

Examples

- Curl

```bash
curl -X POST http://localhost:3000/captains/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"Jane","lastname":"Smith"},"email":"jane.smith@example.com","password":"securepassword","vehicle":{"plate":"ABC123","color":"red","capacity":4,"vehicleType":"car"}}'
```

Notes

- The endpoint expects `vehicle` object containing plate, color, capacity and vehicleType.
- On success the server responds with a JWT token and the created `captain` object (password is omitted).

## POST /captains/login

Description

- Authenticates a captain and returns an auth token and the captain object.

Request

- Method: `POST`
- URL: `/captains/login`
- Content-Type: `application/json`

Body (JSON)

{
"email": "jane.smith@example.com",
"password": "securepassword"
}

Field details

- `email` (string) — required, must be a valid email address.
- `password` (string) — required, minimum 6 characters.

Responses

- `200 OK` — login successful.
  - Body: `{ "token": "<jwt>", "captain": { ... } }`

- `400 Bad Request` — validation failed. Example body:

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    {
      "msg": "password should atleast 6 character long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

- `401 Unauthorized` — invalid credentials. Example body:

```json
{ "message": "Invalid Email or Password" }
```

- `500 Internal Server Error` — unexpected server error.

Examples

- Curl

```bash
curl -X POST http://localhost:3000/captains/login \
  -H "Content-Type: application/json" \
  -d '{"email":"jane.smith@example.com","password":"securepassword"}'
```

Notes

- Successful responses include a JWT token; the returned `captain` object does not include the password field.

## GET /captains/profile

Description

- Returns the authenticated captain's profile information.

Request

- Method: `GET`
- URL: `/captains/profile`
- Headers: `Authorization: Bearer <token>` (required)

Responses

- `200 OK` — request successful.
  - Body: `{ ... }` (captain object does not include the password field)

- `401 Unauthorized` — missing or invalid token. Example body:

```json
{ "message": "Unauthorized" }
```

- `500 Internal Server Error` — unexpected server error.

Examples

- Curl

```bash
curl -H "Authorization: Bearer <token>" http://localhost:3000/captains/profile
```

Notes

- This endpoint requires a valid JWT sent in the `Authorization` header using the `Bearer` scheme.

## GET /captains/logout

Description

- Logs the captain out by invalidating the current session/token on the server and returns a confirmation message.

Request

- Method: `GET`
- URL: `/captains/logout`
- Headers: `Authorization: Bearer <token>` (required)

Responses

- `200 OK` — logout successful. Example body:

```json
{ "message": "logout" }
```

- `401 Unauthorized` — missing or invalid token.

- `500 Internal Server Error` — unexpected server error.

Examples

- Curl

```bash
curl -X GET -H "Authorization: Bearer <token>" http://localhost:3000/captains/logout
```

Notes

- The token is blacklisted on the server; the client should delete its stored token after a successful logout.

## GET /users/logout

Description

- Logs the user out by invalidating the current session/token on the server (implementation-specific) and returns a confirmation message.

Request

- Method: `GET`
- URL: `/users/logout`
- Headers: `Authorization: Bearer <token>` (required)

Responses

- `200 OK` — logout successful. Example body:

```json
{ "message": "Logged out successfully" }
```

- `401 Unauthorized` — missing or invalid token.

- `500 Internal Server Error` — unexpected server error.

Examples

- Curl

```bash
curl -X GET -H "Authorization: Bearer <token>" http://localhost:3000/users/logout
```

Notes

- Exact logout behavior depends on server implementation (e.g., token blacklist, session removal). The client should delete its stored token after a successful logout.
