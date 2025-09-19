
from django.http import HttpResponse, JsonResponse
from django import get_version
import git



# Create your views here.
def index(request):
    
    repoRemoteCommit = git.cmd.Git().ls_remote("https://github.com/al-ex427/alex-site.git")
    return JsonResponse({
        "commit": "N/A",
        "latest_commit": repoRemoteCommit.split("\t")[0][:7],
    })
