from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
user = get_user_model()

class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = user
        fields = ['id','email','name','password']                 
