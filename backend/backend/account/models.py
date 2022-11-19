from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin



class UserManager(BaseUserManager):
    def create_user(self,email,name,password=None):
        if email is None:
            raise ValueError('No email Provided')

        email = self.normalize_email(email)
        user = self.model(email= email,name=name)
        user.set_password(password)
        user.save()
        return user

class UserAccount(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=150)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects=UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

# Create your models here.
