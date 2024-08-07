# Lits of Some tests cases

1. Verify we can create an account with good input in mandatory fields

## First name (mandatory) A text field accepting alphabetical characters only (e.g., John)
2. Verify creation account with numerical characters in firstName and good inputs in remaning fields raise the correct error.
3. Verify creation account with special characters in firstName and good inputs in remaning fields raise the correct error.
6. Verify creation account with empty firstName raise the correct error.

## Last name (mandatory) A text field accepting alphabetical characters only (e.g., Smith).
7. Verify creation account with numerical characters in lastName and good inputs in remaning fields raise the correct error.
8. Verify creation account with special characters in lastName and good inputs in remaning fields raise the correct error.
9. Verify creation account with empty lastName and good inputs in remaning fields raise the correct error.


## Email (mandatory) An email field accepting valid email addresses
10. Verify creation account with invalid email and good inputs in remaning fields raise an error.



## Password and confirm password (mandatory). 
11. Verify creation account with non-matching between password and confirm password fields. 
12. Verify creation account with empty input in password field. 


## Phone number (optional): A text field accepting only numerical characters with a maximum length of 10 digits (e.g., 1234567890)
13. Verfify creation account with more than 10 characters in phoneNumber raise the an error.
14. Verfify creation account with alphabetical and special characters in phoneNumber raise the an error.

## LinkedIn URL (optional): A text field accepting a valid LinkedIn profile URL
15. Verfify creation account with invalid LinkedIn URL

## GitHub URL (optional): A text field accepting a valid GitHub profile URL
15. Verfify creation account with invalid github URL