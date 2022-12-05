from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from post_api import urls as postsUrls
urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('posts/', include(postsUrls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)