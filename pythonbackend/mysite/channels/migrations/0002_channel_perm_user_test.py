# Generated by Django 2.2 on 2019-04-14 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('channels', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='channel_perm_user',
            name='test',
            field=models.CharField(default=None, max_length=128),
        ),
    ]
