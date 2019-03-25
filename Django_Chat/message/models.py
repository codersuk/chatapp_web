from django.db import models

# Create your models here.
class Message(models.Model):
	message = models.TextField()
	message_type = models.CharField(max_length=100, default='txt')
	channelid = models.ForeignKey('Channel')
	userid = models.ForeignKey('User')
	created_at = models.DateField(auto_now_add=True)
	updated_at = models.DateField(auto_now=True)