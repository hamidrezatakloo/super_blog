from djoser.serializers import UserCreateSerializer,UserSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
user = get_user_model()

class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = user
        fields = ['id','email','first_name','last_name','password']                 

class CustomUserSerializer(UserSerializer):
    avatar = serializers.ImageField(required=False)
    date_of_birth = serializers.DateField(required=False)
    class Meta(UserSerializer.Meta):
        model = user
        fields = ['id','email','first_name','last_name','password','phone_number','about','date_of_birth','avatar'] 