from django.db import models

def upload_path(instance, filename):
    return '/'.join(['images', str(instance.name)])

# Create your models here.
class Gallery(models.Model):
    name = models.CharField(max_length=555)
    image = models.ImageField(upload_to=upload_path)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)
