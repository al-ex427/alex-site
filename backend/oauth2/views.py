
from django.http import HttpRequest, JsonResponse
import os, requests

# Create your views here.

def discord_codeforoauth2(code: str):
    data = {
        "client_id": os.getenv("DISCORD_ID"),
        "client_secret": os.getenv("DISCORD_SECRET"),
        "grant_type": "authorization_code",
        "redirect_uri": "http://localhost:8000/oauth2/discord/login"
    }
    headers = {
        "Content-Type": "appliaction/x-www-form-urlencoded"
    }

    try:
        response = requests.post("https://discord.com/api/oauth2/token", data=data, headers=headers)
    except:
        return {"success": False, "message": "An unexpected error occured"}





def discord_me(request:HttpRequest):
    return JsonResponse({
        "success": False,
        
    })


def discord_auth(request:HttpRequest):
    return JsonResponse({
        "success": False,
        
    })