import validators 

email='jjk361282@gmail.'

try: 
    print(validators.email(email))
except ValidationError:
    print(False)