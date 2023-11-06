
// authentication process :

// In authentication process server generates token and gives to user
// user will use this token to access the api on server
// initially user will login with its login and password that time server can generate one token and provide to user
// server can set its lifetime i.e. expiry
// when user get its token then this token can set in headers like authrisation and make request to access to authenticated part of api


// In this we have one controller called auth in which we have 2 functions called signup and login
// when user will signup post request will happen and user will created in API
// when user will log in a new token is created and given to user user will set it in autherisation header and make request to other api to accsess data
// for other authenticated API, request need to go through middleware and token validity is checked and and access is given to sensitive API


//There is standard library to do same process called passportJS