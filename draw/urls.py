# chat/urls.py
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^t1a$', views.task1a, name='task1a'),
    url(r'^t1b$', views.task1b, name='task1b'),
    url(r'^t1c$', views.task1c, name='task1c'),
    url(r'^(?P<room_name>[^/]+)/$', views.room, name='room'),
]

