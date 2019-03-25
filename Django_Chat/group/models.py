from django.db import models

# Create your models here.
class ChatGroup(models.Model):
	name = models.CharField(max_length = 100)
	description = models.CharField(max_length=200)
	created_at = models.DateField(auto_now_add=True)
	update_at = models.DateField(auto_now=True)
