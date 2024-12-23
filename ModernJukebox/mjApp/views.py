from django.shortcuts import render
from .models import Song
from django.core.paginator import Paginator
import json

# Create your views here.
def index(request):
    paginator=Paginator(Song.objects.all(), 1)
    page_number=request.GET.get('page')
    page_obj=paginator.get_page(page_number)

    fun_facts = {
        song.id: song.fun_fact.split(',') if song.fun_fact else []
        for song in page_obj
    }

    context={
        'page_obj':page_obj,
        'fun_facts': fun_facts,
        }
    return render(request, 'index.html', context)