from django.contrib import admin
from django.urls import path

from . import views
urlpatterns = [
    path("", views.index),
    path("discord/@me", views.discord_me)
]
