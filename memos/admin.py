from django.contrib import admin
from .models import Gallery
# Register your models here.
@admin.register(Gallery)
class GalleryModelAdmin(admin.ModelAdmin):
  list_display=['id','name','image','date']