
from django.http import HttpResponse, JsonResponse


# Create your views here.
def index(request):
    return JsonResponse({
        "a": "b"
    })


def discord_me(request):
    return JsonResponse({
        "success": False,
        
    })