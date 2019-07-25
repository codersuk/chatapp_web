from django.db import models

# Create your models here.
class Channel(models.Model):
	name = models.CharField(max_length=200)
	description = models.CharField(max_length=200)
	groupid = models.ForeignKey('ChatGroup')
	create_at = models.DateField(auto_now_add=True)
	update_at = models.DateField(auto_now=True)