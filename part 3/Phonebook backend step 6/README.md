# Validity checking/ Dupe checking
Implement error handling for creating new entries. The request is not allowed to succeed, if:
 - The name or number is missing
 - The name already exists in the phonebook

Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error, e.g.:

{ error: 'name must be unique' }
