from django.db import models

# Create your models here.

class DiscordAccountModel(models.Model):
    account_id = models.BigIntegerField(unique=True, max_length=20, primary_key=True)
    oauth2_token = models.CharField()
    last_login = models.DateTimeField()