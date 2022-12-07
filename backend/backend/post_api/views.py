from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status , permissions
from .serializers import PostSerializer

class CreatePostApiView(APIView):

    permission_classes = [permissions.IsAuthenticated]


    def post(self,request,*args,**kwargs):

        data = {
            "title":request.data.get("title"),
            "description":request.data.get("description"),
            "image":request.data.get("image"),
            "author":request.user.id
        }

        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



# Create your views here.
