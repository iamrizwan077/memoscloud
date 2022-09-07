from django.db import models



# Create your models here.
class Gallery(models.Model):
    name = models.CharField(max_length=555)
    image = models.CharField(max_length=555)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)
