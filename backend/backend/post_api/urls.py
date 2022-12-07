from django.urls import path,include
from .views import CreatePostApiView,PostLists

urlpatterns = [
    path('new',CreatePostApiView.as_view()),
    path('list',PostLists.as_view())
    ]