# Generated by Django 3.2.13 on 2022-07-20 05:17

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('memos', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='gallery',
            old_name='images',
            new_name='image',
        ),
        migrations.AddField(
            model_name='gallery',
            name='date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='gallery',
            name='name',
            field=models.CharField(default="", max_length=64),
            preserve_default=False,
        ),
    ]
