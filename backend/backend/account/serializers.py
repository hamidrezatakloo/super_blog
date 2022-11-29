from djoser.serializers import UserCreateSerializer,UserSerializer
from django.contrib.auth import get_user_model
user = get_user_model()

class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = user
        fields = ['id','email','first_name','last_name','password']                 

class CustomUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = user
        fields = ['id','email','first_name','last_name','password','phone_number','about','date_of_birth','avatar'] 