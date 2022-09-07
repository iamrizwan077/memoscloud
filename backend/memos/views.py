from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Gallery
from .serializers import GallerySerializer
import json
from django.forms.models import model_to_dict


# Create your views here.
@api_view(['POST'])
def home(request):
    if request.method == "POST":
        #print(request.data)
        name = request.POST['name']
        print(name)
        #  name=name.strip('\"')
        image = request.POST['image']
        print(image)
        # data={'name'}
        #  image=image.strip('\"')
        #  print(name, type(name))
        #  print(image, type(image))
        gallery = GallerySerializer(data={"name": name, "image": image})
        #  print(request.data)
        print(gallery)
        # data = json.dumps(request.data)
        #   data={
        #    'name':name, 'image':image
        # }
        #gallery = Gallery(name=name, image=image)
        # if gallery.is_valid():
        #  print("save")

        print(gallery.is_valid())
        # print(gallery)
        if gallery.is_valid():
            gallery.save()

            return Response(gallery.data, status.HTTP_201_CREATED)
        return Response(gallery.errors)

        #print(gallery)
    # else:
    #    return Response(status.HTTP_400_BAD_REQUEST)

    # print(data)
    # print(type(data))

    # print(data.name)
    #context={'name':name,'image':image}
    #    serializer = GallerySerializer(data=request.data)
    # print(serializer)
    #print(request.data)
    #   if serializer.is_valid():
    #    print("saved")
    #   print(serializer.data)
    #   serializer.save()
    #  print(serializer)
    # return Response(status.HTTP_201_CREATED)

    # return Response(status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def gallery(request):
    if request.method == 'GET':
        all_data = Gallery.objects.all()
        gallery=GallerySerializer(all_data,many=True)

    #    serializer = GallerySerializer(data,
    #                                   context={'request': request},
    #                                  many=True)
    #   return Response(serializer.data)

    return Response(gallery.data)
