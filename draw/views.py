from django.shortcuts import render
from django.utils.safestring import mark_safe
import json

def index(request):
    return render(request, 'draw/index.html', {})

def task1a(request):
    return render(request, 'draw/t1a.html', {})

def task1b(request):
    return render(request, 'draw/t1b.html', {})

def task1c(request):
    return render(request, 'draw/t1c.html', {})  
  
def room(request, room_name):
    return render(request, 'draw/room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })