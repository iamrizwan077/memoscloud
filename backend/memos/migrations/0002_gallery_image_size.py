# Generated by Django 4.1 on 2022-10-02 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('memos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='image_size',
            field=models.FloatField(default=200),
            preserve_default=False,
        ),
    ]