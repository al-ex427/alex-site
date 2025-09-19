from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("oauth2/", include("oauth2.urls"))
]
