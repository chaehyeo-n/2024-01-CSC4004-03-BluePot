from django.urls import path, include
from .views import *

urlpatterns = [
    path('mypage/getProfile', get_profile, name='get_profile'),
    path('mypage/modifyProfile', modify_profile,name='modify_profile'),
    path('mypage/createMovieHistory', create_movieHistory, name = 'create_movieHistory'),
    path('mypage/getMovieHistory', get_movieHistory, name = 'get_movieHistoryList'),
    path('mypage/updateMovieHistory', update_movieHistory, name = 'update_movieHistoryList'),
    path('mypage/removeMovieHistory', remove_movieHistory, name='remove_movieHistory')
]