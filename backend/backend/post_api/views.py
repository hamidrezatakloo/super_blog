from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status , permissions
from .serializers import PostSerializer,PostListSerializer
from .models import Post
from .paginations import CustomPagination
from rest_framework.generics import ListAPIView

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

class PostLists(ListAPIView):
    permission_classes = [permissions.AllowAny]
    pagination_class = CustomPagination
    queryset = Post.objects.all()
    serializer_class = PostListSerializer


# Create your views here.
