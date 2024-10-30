from django.urls import path
from django.http import HttpResponse

def test_view(request):
    return HttpResponse("Hello, world!")

urlpatterns = [
    path('test/', test_view),
]