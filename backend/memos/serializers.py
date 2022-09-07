from rest_framework import serializers
from .models import Gallery


class GallerySerializer(serializers.ModelSerializer):
#  name=serializers.CharField()
 # image=serializers.ImageField()
  #date=serializers.DateTimeField()
  
  class Meta:
    model=Gallery
    fields=['id','name','image','date']
    