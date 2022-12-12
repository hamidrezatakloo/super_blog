from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin



class UserManager(BaseUserManager):
    def create_user(self,email,first_name,last_name,password=None):
        if email is None:
            raise ValueError('No email Provided')

        email = self.normalize_email(email)
        user = self.model(email= email,first_name=first_name,last_name=last_name)
        user.set_password(password)
        user.save()
        return user

class UserAccount(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    phone_number = models.CharField(max_length=16,blank=True)
    about = models.CharField(max_length=200,blank=True)
    date_of_birth = models.DateField(blank=True,null=True)
    avatar = models.ImageField(upload_to='profile-pics',blank=True,null=True)

    @property
    def full_name(self):
        return "%s %s" %(self.first_name,self.last_name)

    objects=UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name']

# Create your models here.
